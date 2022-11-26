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
let width = 800
let height = 600
let stats: Stats
let orbitControls: OrbitControls
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer

let cube: Cube

class Cube {
  mesh: THREE.Mesh
  constructor() {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    this.mesh = new THREE.Mesh(geometry, material)
    scene.add(this.mesh)
  }
  update() {
    this.mesh.rotation.x += 0.01
    this.mesh.rotation.y += 0.01
  }
}

function initStats(){
  stats = Stats()
  canvasCon.value?.append(stats.dom)
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

function animate() {
  requestAnimationFrame(animate)
  stats.update()
  updateCube()
  renderer.render(scene, camera)
}

function initCube(){
  cube = new Cube()
}
function updateCube(){
  cube.update()
}

onMounted(() => {
  initTHREE()
  initStats()
  initControl()
  initCube()
  animate()
})
</script>

<style lang="less" scoped>
.viewCon {
  display: grid;
  place-items: center;
}
</style>
