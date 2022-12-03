<template>
  <div class="viewCon">
    <div class="canvasCon" ref="canvasCon">
      <canvas class="canvas" ref="canvasDom" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { GUI } from 'dat.gui'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
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

// 后处理
let bloomComposer: EffectComposer
let finalComposer: EffectComposer
let bloomPass: UnrealBloomPass
let renderPass: RenderPass

let pointLight: THREE.PointLight

onMounted(() => {
  initTHREE()
  initGlowRender()
  initControl()
  initMesh()
  initLight()
  showAxesHelper()
  initStats()
  render()
})

let sun: Planet
let mercury: Planet
let venus: Planet
let earth: Planet
let moon: Planet
let mars: Planet
let jupiter: Planet
let saturnG: Planet
let uranus: Planet
let neptune: Planet
let planets: Array<Planet>

let r = 20 // 行星半径，水星为基准
let sunR = 10 * r //太阳半径
let R = 20 // 一个基准值

const helper: Array<THREE.AxesHelper | THREE.PointLightHelper> = []
let options = {
  vBase: 0.001,
  showHelper: false,

  lightVisible: true,
  lightColor: 0xe74c3c,
  intensity:5,
  distance:2000,
  decay:0.5,

  exposure: 1,
  bloomStrength: 1.5,
  bloomThreshold: 0,
  bloomRadius: 0,
}

function initPanle() {
  let panel = new GUI({ width: 300 })
  panel.add(options, 'showHelper').onChange((val) => {
    helper.forEach((h) => (h.visible = val))
  })
  panel.add(options, 'vBase', 0, 0.03, 0.001)

  const folderLight = panel.addFolder('light')
  folderLight.open()
  folderLight.add(options,'lightVisible').onChange(val=>{
    pointLight.visible = val
  })
  folderLight.addColor(options, 'lightColor').onChange(val=>{
    pointLight.color.setHex(val)
  })
  folderLight.add(options, 'intensity',0,7,0.1).onChange(val=>{
    pointLight.intensity = val
  })
  folderLight.add(options, 'distance',0,4000,1).onChange(val=>{
    pointLight.distance = val
  })
  folderLight.add(options, 'decay',0,10,0.1).onChange(val=>{
    pointLight.decay = val
  })

  const folderGlow = panel.addFolder('glow')
  folderGlow.open()
  folderGlow.add(options, 'exposure', 0, 10, 0.1).onChange(val=>{
    renderer.toneMappingExposure = Math.pow(val, 4.0)
  })
  folderGlow.add(options, 'bloomStrength', 0, 10, 0.1).onChange(val=>{
    bloomPass.threshold = val
  })
  folderGlow.add(options, 'bloomThreshold', 0, 10, 0.1).onChange(val=>{
    bloomPass.strength = val
  })
  folderGlow.add(options, 'bloomRadius', 0, 10, 0.1).onChange(val=>{
    bloomPass.radius = val
  })

  
}
initPanle()

class Planet {
  isGlow: boolean
  group: THREE.Group
  targetPlanet?: Planet

  planetMesh: THREE.Mesh<THREE.ShapeGeometry, THREE.MeshBasicMaterial>
  oribitCurve?: THREE.EllipseCurve
  oribitMesh?: THREE.Line

  oribitR?: number
  t: number = 0
  vRatio: number

  constructor(
    isGlow: boolean = false,
    planetRadius: number,
    planetColor: THREE.ColorRepresentation,
    oribitR: number,
    vRatio: number,
    targetPlanet?: Planet
  ) {
    this.isGlow = isGlow
    this.targetPlanet = targetPlanet
    this.group = new THREE.Group()

    let planetGeo = new THREE.SphereGeometry(planetRadius, 128, 128)
    let planetMat = new THREE.MeshLambertMaterial({ color: planetColor })
    this.planetMesh = new THREE.Mesh(planetGeo, planetMat)
    this.planetMesh.layers.enable(0)
    this.group.add(this.planetMesh)
    this.t = random()
    this.vRatio = vRatio

    if (targetPlanet) {
      this.oribitR = oribitR
      const { x, y } = targetPlanet?.planetMesh.position
      targetPlanet.group.add(this.group)

      // prettier-ignore
      this.oribitCurve = new THREE.EllipseCurve(x, y, oribitR, oribitR, 0, 2 * Math.PI, true, 0)
      // prettier-ignore
      let oribitGeo = new THREE.BufferGeometry().setFromPoints(this.oribitCurve.getPoints(300))
      let oribitMat = new THREE.LineBasicMaterial({ color: planetColor })
      this.oribitMesh = new THREE.Line(oribitGeo, oribitMat)
      this.oribitMesh.layers.enable(0)

      this.oribitMesh.rotation.x = PI / 2
      this.group.add(this.oribitMesh)
    }
  }

  planetMoveByCurve() {
    if (this.t >= 1) this.t = 0

    if (this.targetPlanet) {
      let { x, y, z } = this.targetPlanet.planetMesh.position
      this.group.position.set(x, y, z)
      // this.oribitCurve = new THREE.EllipseCurve(x, y, this.oribitR!, this.oribitR!, 0, 2 * Math.PI, true, 0)
      this.t += this.vRatio * options.vBase
      const { x: ox, y: oy } = this.oribitCurve!.getPoint(this.t)
      this.planetMesh.position.set(ox, 0, oy)
    }
  }
}


function initGlowRender() {
  renderPass = new RenderPass(scene, camera)
  bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5,
    0.4,
    0.85
  )
  bloomPass.threshold = options.bloomThreshold
  bloomPass.strength = options.bloomStrength
  bloomPass.radius = options.bloomRadius

  bloomComposer = new EffectComposer(renderer)
  bloomComposer.addPass(renderPass)
  bloomComposer.addPass(bloomPass)
}

function renderGlowAndScene(){
  camera.layers.set(1)
  bloomComposer.render()
  camera.layers.set(0)
}

function initMesh() {
  sun = new Planet(true,sunR, 0xe74c3c, 0, 0)
  scene.add(sun.group)
  mercury = new Planet(false,0.5 * r, 0x1abc9c, sunR + 2 * R, 4.1, sun)
  venus = new Planet(false,r, 0xf39c12, sunR + 6 * R, 1.6, sun)
  earth = new Planet(false,r, 0x3498db, sunR + 12 * R, 1, sun)
  mars = new Planet(false,0.8 * r, 0xc0392b, sunR + 16 * R, 0.5, sun)
  jupiter = new Planet(false,0.3 * r, 0x27ae60, sunR + 20 * R, 0.08, sun)
  saturnG = new Planet(false,5 * r, 0x95a5a6, sunR + 30 * R, 0.03, sun)
  uranus = new Planet(false,4 * r, 0x8e44ad, sunR + 50 * R, 0.01, sun)
  neptune = new Planet(false,3 * r, 0x3498db, sunR + 60 * R, 0.006, sun)

  moon = new Planet(false,0.2 * r, 0xecf0f1, 1.4 * r, 2, earth)

  // prettier-ignore
  planets = [ mercury, venus, earth, mars, jupiter, saturnG, uranus, neptune, moon]
}

// 动画更新
function animate() {
  planets.forEach((p) => {
    p.planetMoveByCurve()
  })
}

// 帧率
function initStats() {
  stats = Stats()
  canvasCon.value!.append(stats.dom)
}
// 控制
function initControl() {
  orbitControls = new OrbitControls(camera, renderer.domElement)
  orbitControls.target = new THREE.Vector3(0, 0, 0)
  orbitControls.object.position.set(300, 400, 800)
  orbitControls.update()
}
// 坐标轴
function showAxesHelper() {
  let axes = new THREE.AxesHelper(1600)
  axes.visible = options.showHelper
  helper.push(axes)
  scene.add(axes)
} // 自适应
function onWindowResize() {
  width = window.innerWidth
  height = window.innerHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}
// three初始化
function initTHREE() {
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)

  camera = new THREE.PerspectiveCamera(75, width / height, 1, 40000)
  renderer = new THREE.WebGLRenderer({
    canvas: canvasDom.value,
    antialias: true
  })
  renderer.setSize(width, height)
  // renderer.setPixelRatio(window.devicePixelRatio) // render的像素比设置为设备屏幕的像素比，不推荐
  window.addEventListener('resize', onWindowResize)
}
// 光源
function initLight() {
  const light = new THREE.AmbientLight(0x404040) // soft white light
  scene.add(light)

  pointLight = new THREE.PointLight(0xe74c3c, 5, 2000, 0.5)
  let { x, y, z } = sun.planetMesh.position
  pointLight.position.set(x, y, z)
  scene.add(pointLight)

  const pointLightHelper = new THREE.PointLightHelper(pointLight, 1600)
  pointLightHelper.visible = options.showHelper
  helper.push(pointLightHelper)
  scene.add(pointLightHelper)
}
// 绘制
function render() {
  requestAnimationFrame(render)
  stats.update()
  animate()

  renderGlowAndScene()
  renderer.render(scene, camera)
  bloomComposer.render()

}
</script>

<style lang="less" scoped>
.viewCon {
  margin: 0;
  padding: 0;
}
</style>
