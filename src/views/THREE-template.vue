<template>
  <div class="viewCon">
    <div class="con" ref="canvasCon">
      <canvas class="canvas" ref="canvasDom" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const canvasDom = ref<HTMLElement>()
const canvasCon = ref<HTMLElement>()
let width = innerWidth
let height = innerHeight
let stats: Stats
let orbitControls: OrbitControls
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer


// 帧率
function initStats(){
  stats = Stats()
  canvasCon.value!.append(stats.dom)
}
// 控制
function initControl(){
  orbitControls = new OrbitControls( camera, renderer.domElement );
}
// 坐标轴
function showAxesHelper(){
  scene.add(new THREE.AxesHelper(1000))
}
// 自适应
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

// three初始化
function initTHREE() {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({
    canvas: canvasDom.value,
    antialias: true
  })
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio) // render的像素比设置为设备屏幕的像素比
  renderer.setSize(window.innerWidth, window.innerHeight) // 画布自适应
  camera.position.z = 5
  window.addEventListener('resize', onWindowResize)
}

// 绘制
function render() {
  requestAnimationFrame(render)
  stats.update()
  // do something
  renderer.render(scene, camera)
}


onMounted(() => {
  initTHREE()
  showAxesHelper()
  initStats()
  initControl()
  render()
})
</script>

<style lang="less" scoped>
.viewCon {
  margin: 0;
  padding: 0;
}
</style>
