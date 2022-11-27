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

// 自定义部分
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
function initCube(){
  cube = new Cube()
}
function updateCube(){
  cube.update()
}

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
function resizeRendererToDisplaySize(renderer: THREE.Renderer) {
  const canvas = renderer.domElement;
  const pixelRatio = window.devicePixelRatio;
  const width = canvas.clientWidth * pixelRatio | 0;
  const height = canvas.clientHeight * pixelRatio | 0;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

// three初始化
function initTHREE() {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({
    canvas: canvasDom.value
  })
  renderer.setSize(width, height)
  camera.position.z = 5
}
// 绘制
function animate() {
  requestAnimationFrame(animate)

  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
  }

  stats.update()

  // do something
  updateCube()
  
  renderer.render(scene, camera)
}


onMounted(() => {
  initTHREE()
  showAxesHelper()
  initStats()
  initControl()
  initCube()
  animate()
})
</script>

<style lang="less" scoped>
.viewCon {
  margin: 0;
  padding: 0;
}
</style>
