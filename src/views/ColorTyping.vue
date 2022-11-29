<!-- A Example I very loved from https://tympanus.net/codrops/2022/11/08/3d-typing-effects-with-three-js/ -->
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
  orbitControls.target = new THREE.Vector3(120, 60, 0)

  camera.position.set(120, 60, 100)
  orbitControls.update() // 更新camera要更新control
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
  scene.background = new THREE.Color( 0x444444 );

  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({
    canvas: canvasDom.value,
    antialias: true
  })
  renderer.setSize(width, height)
  // renderer.setPixelRatio(window.devicePixelRatio) // render的像素比设置为设备屏幕的像素比，不推荐
  renderer.setSize(window.innerWidth, window.innerHeight) // 画布自适应
  orbitControls.update() 
  window.addEventListener('resize', onWindowResize)
}

// 光源
function initLight() {
  const light = new THREE.AmbientLight( 0x404040 ); // soft white light
  scene.add( light );
}

function animate(){
  // doSomething
}

// 绘制
function render() {
  requestAnimationFrame(render)
  stats.update()
  animate()
  renderer.render(scene, camera)
}


onMounted(() => {
  initTHREE()
  initControl()

  initLight()
  showAxesHelper()
  initStats()
  render()
})
</script>

<style lang="less" scoped>
.viewCon {
  margin: 0;
  padding: 0;
}
</style>
