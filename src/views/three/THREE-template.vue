<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { GUI } from 'dat.gui'
import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import { Mat } from 'threePatch'

// 后期处理相关
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

onMounted(() => {
  initGUI()
  initTHREE()
  render()
})

const params = {}
function initGUI() {
  const panel = new GUI()
}

function animate() {
  // doSomething
}
// three初始化
function initTHREE() {
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x444444)
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({
    canvas: canvasDom.value,
    antialias: true,
  })
  renderer.setSize(width, height)
  // renderer.setPixelRatio(window.devicePixelRatio) // 不推荐
  window.addEventListener('resize', onWindowResize)

  // 坐标轴
  scene.add(new THREE.AxesHelper(1000))

  // 环境光
  scene.add(new THREE.AmbientLight(0x404040))

  // 帧率状态
  stats = Stats()
  canvasCon.value!.append(stats.dom)

  // 轨道控制器
  orbitControls = new OrbitControls(camera, renderer.domElement)
  orbitControls.target = new THREE.Vector3(120, 60, 0)
  orbitControls.object.position.set(120, 60, 100)
  orbitControls.update()
}

let animateId = 0
// 绘制
function render() {
  animateId = requestAnimationFrame(render)
  stats.update()
  animate()
  renderer.render(scene, camera)
}
onUnmounted(() => {
  cancelAnimationFrame(animateId)
})
// 自适应
function onWindowResize() {
  width = window.innerWidth
  height = window.innerHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}
</script>

<template>
  <div class="viewCon">
    <div ref="canvasCon" class="canvasCon">
      <canvas ref="canvasDom" class="canvas" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.viewCon {
  margin: 0;
  padding: 0;
}
</style>
