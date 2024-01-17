<!-- https://threejs.org/examples/?q=glow#webgl_postprocessing_unreal_bloom_selective -->
<!-- 一个来自来自threejs官网的例子，发光后处理与不发光材质同时存在 -->
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { GUI } from 'dat.gui'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'

const { random, PI, floor, ceil, min, max } = Math

const canvasDom = ref<HTMLElement>()
const canvasCon = ref<HTMLElement>()
let width = window.innerWidth
let height = window.innerHeight
let orbitControls: OrbitControls
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let bloomPass: UnrealBloomPass
let bloomComposer: EffectComposer
let finalComposer: EffectComposer

// camera的layer的mask默认值是1
// normal的层级需要比glow小，也就是，camera>normal>glow，
// 当相机设置为1，就是camera>layer，normal层直接不渲染
// camera根据layer渲染规则是，渲染camera层和层数比camera层大的层数
const LAYER_GLOW = 1
const LAYER_NORMAL = 0

onMounted(() => {
  initGUI()
  initTHREE()
  initMesh()
  initPostProcessing()
  render()
})

const params = {
  exposure: 1,
  bloomStrength: 5,
  bloomThreshold: 0,
  bloomRadius: 0,
  scene: 'normalAndGlow',
}

const con = ref<HTMLElement>()
function initGUI() {
  const panel = new GUI({
    autoPlace: false,
  })
  con.value?.append(panel.domElement)
  panel.add(params, 'exposure', 0.1, 2).onChange((value) => {
    renderer.toneMappingExposure = value ** 4.0
    render()
  })
  panel.add(params, 'bloomThreshold', 0.0, 1.0).onChange((value) => {
    bloomPass.threshold = Number(value)
    render()
  })
  panel.add(params, 'bloomStrength', 0.0, 10.0).onChange((value) => {
    bloomPass.strength = Number(value)
    render()
  })
  panel.add(params, 'bloomRadius', 0.0, 1.0, 0.001).onChange((value) => {
    bloomPass.radius = Number(value)
    render()
  })
  // prettier-ignore
  panel.add(params, 'scene', ['normalAndGlow', 'onlyNnormal', 'onlyGlow']).onChange((val) => {
    params.scene = val
    render()
  })
}

function initMesh() {
  const geometry = new THREE.IcosahedronGeometry(1, 15)
  for (let i = 0; i < 50; i++) {
    const color = new THREE.Color()
    color.setHSL(Math.random(), 0.7, 0.3)
    // color.setHSL(i % 2 === 0 ? 1 : 0.5, 0.7, 0.3)
    const material = new THREE.MeshBasicMaterial({ color })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.x = Math.random() * 10 - 5
    mesh.position.y = Math.random() * 10 - 5
    mesh.position.z = Math.random() * 10 - 5
    mesh.scale.setScalar(Math.random() * Math.random() + 0.5)
    mesh.layers.enable(i % 2 === 0 ? LAYER_GLOW : LAYER_NORMAL)
    scene.add(mesh)
  }
}

function initPostProcessing() {
  const shaderVertex = `varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
  `
  const shaderFragment = `uniform sampler2D baseTexture;
  uniform sampler2D bloomTexture;
  varying vec2 vUv;
  void main() {
    gl_FragColor = ( texture2D( baseTexture, vUv ) + vec4( 1.0 ) * texture2D( bloomTexture, vUv ) );
  }
  `
  const renderPass = new RenderPass(scene, camera)
  bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5,
    0.4,
    0.85,
  )
  bloomPass.threshold = params.bloomThreshold
  bloomPass.strength = params.bloomStrength
  bloomPass.radius = params.bloomRadius

  bloomComposer = new EffectComposer(renderer)
  bloomComposer.addPass(renderPass)
  bloomComposer.addPass(bloomPass)

  const finalPass = new ShaderPass(
    new THREE.ShaderMaterial({
      uniforms: {
        baseTexture: { value: null },
        bloomTexture: { value: bloomComposer.renderTarget2.texture },
      },
      vertexShader: shaderVertex,
      fragmentShader: shaderFragment,
      defines: {},
    }),
    'baseTexture',
  )
  finalPass.needsSwap = true

  finalComposer = new EffectComposer(renderer)
  finalComposer.addPass(renderPass)
  finalComposer.addPass(finalPass)
}

// 按需绘制,只在gui参数改变后，或者camera改变后，才重新绘制
function render() {
  const { scene: s } = params
  // 不加后期效果，直接用renderer来渲染所有层
  if (s === 'onlyNnormal') {
    camera.layers.set(LAYER_NORMAL) // 将相机层设置为较小的那个层级，渲染所有层
    renderer.render(scene, camera)
  }
  // 加后期效果，但是只显示glow层
  else if (s === 'onlyGlow') {
    camera.layers.set(LAYER_GLOW)
    bloomComposer.renderToScreen = true
    bloomComposer.render()
    camera.layers.set(LAYER_NORMAL)
  }
  // 加后期效果，显示normal层和glow层
  else if (s === 'normalAndGlow') {
    bloomComposer.renderToScreen = false
    // prettier-ignore
    scene.traverse(makeNormalMeshDarken as (obj: THREE.Object3D<THREE.Event>) => void) // 断言传入，THREE.Mesh不是Objec3D，不知道为啥
    bloomComposer.render() // 暗处理之后，后期效果渲染
    // prettier-ignore
    scene.traverse(restoreMaterial as (obj: THREE.Object3D<THREE.Event>) => void) // 恢复暗处理Mesh的原本的材质
    finalComposer.render()
  }
}

const materialsMap: {
  [key: string]: THREE.Material | Array<THREE.Material>
} = {}
const darkMaterial = new THREE.MeshBasicMaterial({ color: 'black' })
const bloomLayer = new THREE.Layers()
bloomLayer.set(LAYER_GLOW)
// 将不是bloom的mesh暗处理，使得后期效果不会对其造成影响
function makeNormalMeshDarken(obj: THREE.Mesh) {
  if (obj.isMesh && bloomLayer.test(obj.layers) === false) {
    materialsMap[obj.uuid] = obj.material
    obj.material = darkMaterial
  }
}
// 将之前暗处理效果的mesh恢复原本材质
function restoreMaterial(obj: THREE.Mesh) {
  if (materialsMap[obj.uuid]) {
    obj.material = materialsMap[obj.uuid]
    delete materialsMap[obj.uuid]
  }
}

// three初始化
function initTHREE() {
  scene = new THREE.Scene()
  // scene.background = new THREE.Color(0x444444)
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({
    canvas: canvasDom.value,
    antialias: true,
  })
  renderer.setSize(width, height)
  // renderer.setPixelRatio(window.devicePixelRatio) // 不推荐
  window.addEventListener('resize', onWindowResize)

  // 坐标轴
  // scene.add(new THREE.AxesHelper(1000))

  // 环境光
  scene.add(new THREE.AmbientLight(0x404040))

  // 轨道控制器
  orbitControls = new OrbitControls(camera, renderer.domElement)
  orbitControls.target = new THREE.Vector3(0, 0, 0)
  orbitControls.object.position.set(10, 10, 10)
  orbitControls.update()
  orbitControls.addEventListener('change', render)
}
// 自适应
function onWindowResize() {
  width = window.innerWidth
  height = window.innerHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
  bloomComposer.setSize(width, height)
}
</script>

<template>
  <div ref="con" class="">
    <div ref="canvasCon" class="canvasCon">
      <canvas ref="canvasDom" class="canvas" />
    </div>
  </div>
</template>
