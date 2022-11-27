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

function initStats(){
  stats = Stats()
  canvasCon.value!.append(stats.dom)
}

function initControl(){
  orbitControls = new OrbitControls( camera, renderer.domElement );
}

function initTHREE() {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({
    canvas: canvasDom.value
  })
  renderer.setSize(width, height)
  camera.position.z = 5
}

function showAxesHelper(){
  scene.add(new THREE.AxesHelper(1000))
}

function onWindowResize(){
  width = innerWidth
  height = innerHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

function animate() {
  requestAnimationFrame(animate)
  stats.update()
  renderer.render(scene, camera)
}

onMounted(() => {
  initTHREE()
  showAxesHelper()
  initStats()
  initControl()
  animate()
  window.onresize = onWindowResize
})
</script>

<style lang="less" scoped>
.viewCon {
  padding: 0;
}
</style>
