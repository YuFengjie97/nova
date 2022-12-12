<template>
  <div class="viewCon">
    <div class="canvasCon" ref="canvasCon">
      <canvas class="canvas" ref="canvasDom" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { GUI } from 'dat.gui'
import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Mat } from 'threePatch'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'

const { random, PI, floor, ceil, min, max, sin, cos } = Math

const canvasDom = ref<HTMLElement>()
const canvasCon = ref<HTMLElement>()
let width = window.innerWidth
let height = window.innerHeight
let stats: Stats
let orbitControls: OrbitControls
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let light: THREE.PointLight
let axesHelper: THREE.AxesHelper
// 后期处理
let bloomComposer: EffectComposer
let finalComposer: EffectComposer
let bloomPass: UnrealBloomPass
// 封装类
let atom: Atom
// 发光图层定义
const BLOOM_LAYER = 1
const bloomLayer = new THREE.Layers() //发光图层，用来判断mesh是否与该图层是同一图层
bloomLayer.set(BLOOM_LAYER)
const materials: {
  [key: string]: THREE.Material | Array<THREE.Material>
} = {} // 用来存放变暗材质的原本材质
const darkMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 })

const params = {
  showAxes: false,
  atomColor: 0x7745c9,
  bloomStrength: 5,
  bloomThreshold: 0,
  bloomRadius: 1,
  lightIntensity: 10,
  lightDistance: 90,
  lightDecay: 1,

  electronNum: 100,
  tInc: 0.001,
  electronColor: 0x0984e3,
  orbitColor: 0xfd79a8,
  showOrbit: false
}

onMounted(() => {
  initTHREE()
  initEffectComposer()
  initMesh()
  initLight()
  render()
})
function animate() {
  updateMesh()
}

function initGUI() {
  let panel = new GUI({width: 300})

  panel.add(params, 'showAxes').onChange(val=>{
    axesHelper.visible = val
  })

  const folderAtom = panel.addFolder('Atom')
  folderAtom.open()
  folderAtom.addColor(params, 'atomColor').onChange((val) => {
    ;(atom.mesh.material as Mat).color.setHex(val)
    light.color.setHex(val)
  })
  folderAtom.add(params, 'bloomStrength', 0, 10, 0.1).onChange((val) => {
    bloomPass.strength = val
  })
  folderAtom.add(params, 'bloomThreshold', 0, 5, 0.1).onChange((val) => {
    bloomPass.threshold = val
  })
  folderAtom.add(params, 'bloomRadius', 0, 5, 0.1).onChange((val) => {
    bloomPass.radius = val
  })

  folderAtom.add(params, 'lightIntensity',0,200,1).onChange(val=>{
    light.intensity = val
  })
  folderAtom.add(params, 'lightDistance',0,160,1).onChange(val=>{
    light.distance = val
  })
  folderAtom.add(params, 'lightDecay',0,2,0.01).onChange(val=>{
    light.decay = val
  })

  const folderElectron = panel.addFolder('Electron')
  folderElectron.open()
  folderElectron.add(params, 'electronNum', 1, 100, 1).onChange((val) => {
    atom.updateElectronNum(val)
  })
  folderElectron.add(params, 'tInc', 0, 0.02, 0.001).name('velocity')
  folderElectron.addColor(params, 'electronColor').onChange((val) => {
    atom.electrons.forEach((e) => {
      e.updateColor(val)
    })
  })
  folderElectron.add(params, 'showOrbit').onChange((val) => {
    atom.electrons.forEach((e) => {
      e.orbitMesh.visible = val
    })
  })
  folderElectron.addColor(params, 'orbitColor').onChange((val) => {
    atom.electrons.forEach((e) => {
      ;(e.orbitMesh.material as Mat).color.set(val)
    })
  })
}
initGUI()

function createPointLight(x: number, y: number, z: number) {
  const { lightIntensity, lightDistance, lightDecay } = params
  const light = new THREE.PointLight(
    params.atomColor,
    lightIntensity,
    lightDistance,
    lightDecay
  )
  light.position.set(x, y, z)
  scene.add(light)
  return light
}

function initLight() {
  light = createPointLight(0, 0, 0)
}

function initMesh() {
  atom = new Atom(params.electronNum)
}

function updateMesh() {
  atom.electrons.forEach((e) => {
    e.moveByCurve()
  })
}

function initEffectComposer() {
  // 初始化pass
  const renderPass = new RenderPass(scene, camera)
  const { bloomStrength, bloomRadius, bloomThreshold } = params
  // prettier-ignore
  bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight),bloomStrength,bloomRadius,bloomThreshold)

  // 初始化发光渲染
  bloomComposer = new EffectComposer(renderer)
  bloomComposer.renderToScreen = false
  bloomComposer.addPass(renderPass)
  bloomComposer.addPass(bloomPass)

  // 初始化最终渲染
  const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
  `
  const fragmentShader = `
  uniform sampler2D baseTexture;
  uniform sampler2D bloomTexture;
  varying vec2 vUv;
  void main() {
    gl_FragColor = ( texture2D( baseTexture, vUv ) + vec4( 1.0 ) * texture2D( bloomTexture, vUv ) );
  }
  `
  finalComposer = new EffectComposer(renderer)
  const shaderPass = new ShaderPass(
    new THREE.ShaderMaterial({
      uniforms: {
        baseTexture: { value: null },
        bloomTexture: { value: bloomComposer.renderTarget2.texture }
      },
      vertexShader,
      fragmentShader,
      defines: {}
    }),
    'baseTexture'
  )
  shaderPass.needsSwap = true
  finalComposer.addPass(renderPass)
  finalComposer.addPass(shaderPass)
}

function bloomRender() {
  scene.traverse(darkenNonBloomed2) // scene场景内所有mesh判断是否属于发光图层，如果不属于，设置为暗材质
  bloomComposer.render() // 发光效果处理
  scene.traverse(restoreMaterial) // 将原来的暗材质恢复为原来的材质
  finalComposer.render()
}
const darkenNonBloomed2 = (obj: any) => {
  const material = obj.material
  if (material && bloomLayer.test(obj.layers) === false) {
    materials[obj.uuid] = material
    obj.material = darkMaterial
  }
}
const restoreMaterial = (obj: any) => {
  if (materials[obj.uuid]) {
    obj.material = materials[obj.uuid]
    delete materials[obj.uuid]
  }
}

class Atom {
  r = 40
  curveR = 80
  mesh: THREE.Mesh //原子
  electrons: Array<Electron> = []
  constructor(electronNum: number) {
    const geo = new THREE.SphereGeometry(this.r, 128, 128)
    const mat = new THREE.MeshLambertMaterial({ color: params.atomColor })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.layers.enable(BLOOM_LAYER)
    this.mesh = mesh
    scene.add(mesh)

    for (let i = 0; i < electronNum; i++) {
      this.electrons.push(
        new Electron(((PI * 2) / electronNum) * i, this.curveR)
      )
    }
  }

  updateElectronNum(num: number) {
    let angle = (PI * 2) / num
    this.electrons.forEach((e, i) => {
      if (i < num) {
        e.updateOrbitRotation(angle * i)
        e.group.visible = true
      } else {
        e.group.visible = false
      }
    })
  }
}
class Electron {
  r = 2
  group = new THREE.Group() // 包含电子与轨道的mesh
  curveR: number //电子轨道半径
  orbitCurve: THREE.EllipseCurve
  orbitMesh: THREE.Line // 轨道
  mesh: THREE.Mesh // 电子
  t = random()
  v = new THREE.Vector3()
  constructor(rotation: number, curveR: number) {
    this.curveR = curveR
    scene.add(this.group)

    // 电子
    let geo = new THREE.SphereGeometry(this.r, 128, 128)
    let mat = new THREE.MeshLambertMaterial({ color: params.electronColor })
    this.mesh = new THREE.Mesh(geo, mat)
    this.group.add(this.mesh)

    // 电子轨道
    // prettier-ignore
    this.orbitCurve = new THREE.EllipseCurve(0, 0, curveR, curveR, 0, 2 * Math.PI, true, PI/3)
    let points = this.orbitCurve.getSpacedPoints(300)
    let orbitGeo = new THREE.BufferGeometry().setFromPoints(points)
    let orbitMat = new THREE.LineBasicMaterial({ color: params.orbitColor })
    this.orbitMesh = new THREE.Line(orbitGeo, orbitMat)
    this.orbitMesh.visible = params.showOrbit
    this.group.add(this.orbitMesh)
    this.group.rotation.x = rotation
    this.group.rotation.y = rotation
  }

  // 使用t参数，使电子绕轨道运动
  moveByCurve() {
    if (this.t >= 1) this.t = 0
    this.t += params.tInc

    let oPos = this.orbitCurve.getPointAt(this.t)
    // 电子位置更新
    this.mesh.position.x = oPos.x
    this.mesh.position.y = oPos.y
  }

  // 更新轨道偏转角度
  updateOrbitRotation(rotation: number) {
    this.group.rotation.x = rotation
    this.group.rotation.y = rotation
  }

  updateColor(color: THREE.ColorRepresentation) {
    ;(this.mesh.material as Mat).color.set(color)
  }
}

// three初始化
function initTHREE() {
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({
    canvas: canvasDom.value,
    antialias: true
  })
  renderer.setSize(width, height)
  // renderer.setPixelRatio(window.devicePixelRatio) // 不推荐
  window.addEventListener('resize', onWindowResize)

  // 坐标轴
  axesHelper = new THREE.AxesHelper(1000)
  axesHelper.visible = params.showAxes
  scene.add(axesHelper)

  // 环境光
  scene.add(new THREE.AmbientLight(0x404040))

  // 帧率状态
  stats = Stats()
  canvasCon.value!.append(stats.dom)

  // 轨道控制器
  orbitControls = new OrbitControls(camera, renderer.domElement)
  orbitControls.target = new THREE.Vector3(0, 0, 0)
  orbitControls.object.position.set(0, 0, 200)
  orbitControls.update()
}
// 绘制
function render() {
  requestAnimationFrame(render)
  stats.update()
  animate()
  bloomRender()
  // renderer.render(scene, camera)
}
// 自适应
function onWindowResize() {
  width = window.innerWidth
  height = window.innerHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}
</script>

<style lang="less" scoped>
.viewCon {
  margin: 0;
  padding: 0;
}
</style>
