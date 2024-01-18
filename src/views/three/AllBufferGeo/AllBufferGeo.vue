<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {
  getBox,
  getCircle,
  getCone,
  getCylinder,
  getDodecahedron,
  getEdges,
  getExtrude,
  getIcosahedron,
  getLathe,
  getOctahedron,
  getPlane,
  getPolyhedron,
  getRing,
  getShape,
  getSphere,
  getTetrahedron,
  getTorus,
  getTorusKnot,
  getTube,
  getWireframe,
} from './object3D'

const { cos, sin } = Math

const canvasDom = ref<HTMLElement>()
const canvasCon = ref<HTMLElement>()
const width = innerWidth
const height = innerHeight
let stats: Stats
let orbitControls: OrbitControls
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer

const viewCenter = {
  x: 120,
  y: 60,
}
const viewDistance = 100

const object3D: Array<THREE.Group> = []
function addBuffer() {
  const box = getBox()
  object3D.push(box)

  const circle = getCircle()
  object3D.push(circle)

  const cone = getCone()
  object3D.push(cone)

  const cylinder = getCylinder()
  object3D.push(cylinder)

  const dodecahedron = getDodecahedron()
  object3D.push(dodecahedron)

  const edges = getEdges()
  object3D.push(edges)

  const extrude = getExtrude()
  object3D.push(extrude)

  const icosahedron = getIcosahedron()
  object3D.push(icosahedron)

  const lathe = getLathe()
  object3D.push(lathe)

  const octahedron = getOctahedron()
  object3D.push(octahedron)

  const plane = getPlane()
  object3D.push(plane)

  const polyhedron = getPolyhedron()
  object3D.push(polyhedron)

  const ring = getRing()
  object3D.push(ring)

  const shape = getShape()
  object3D.push(shape)

  const sphere = getSphere()
  object3D.push(sphere)

  const tetrahedron = getTetrahedron()
  object3D.push(tetrahedron)

  const torus = getTorus()
  object3D.push(torus)

  const torusKnot = getTorusKnot()
  object3D.push(torusKnot)

  const tube = getTube()
  object3D.push(tube)

  const wireframe = getWireframe()
  object3D.push(wireframe)

  object3D.forEach((o, i) => {
    const x = (i % 6) * 40
    const y = Math.floor(i / 6) * 40
    o.position.set(x, y, 0)
    scene.add(o)
    // console.log(o.position);
  })
}

let light1: THREE.PointLight // 垂直方向绕基准点旋转的点光源
let light2: THREE.PointLight // 水品方向绕基准点旋转的点光源
const r = 200
function addLight() {
  light1 = new THREE.PointLight(0xFFFFFF, 2, 300)
  light1.position.set(viewCenter.x, viewCenter.y, viewDistance)
  light2 = new THREE.PointLight(0xFFFFFF, 2, 300)
  light2.position.set(viewCenter.x, viewCenter.y, viewDistance)
  scene.add(light1)
  scene.add(light2)
}
function updateLight() {
  const angle = Date.now() * 0.005
  const y = sin(angle) * r
  const z1 = cos(angle) * r
  light1.position.y = y
  light1.position.z = z1

  const x = sin(angle) * r
  const z2 = cos(angle) * r
  light2.position.x = x
  light2.position.z = z2
}
function updateBuffer() {
  const time = Date.now() * 0.001
  object3D.forEach((o) => {
    o.rotation.y = time
    o.rotation.x = time
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
  orbitControls.target = new THREE.Vector3(viewCenter.x, viewCenter.y, 0)
  // camera.position.set(120, 60, 100)
  // orbitControls.update() // 更新camera要更新control
  orbitControls.object.position.set(viewCenter.x, viewCenter.y, viewDistance) // 通过control控件更新相机位置，不需要调用update方法
}
// 坐标轴
function showAxesHelper() {
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
  scene.background = new THREE.Color(0x444444)

  camera = new THREE.PerspectiveCamera(75, width / height, 1, 4000)
  // const helper = new THREE.CameraHelper( camera );
  // scene.add( helper );
  renderer = new THREE.WebGLRenderer({
    canvas: canvasDom.value,
    antialias: true,
  })
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio) // render的像素比设置为设备屏幕的像素比
  renderer.setSize(window.innerWidth, window.innerHeight) // 画布自适应
  camera.updateProjectionMatrix()
  window.addEventListener('resize', onWindowResize)
}
// 动画相关
function animate() {
  updateBuffer()
  updateLight()
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

onMounted(() => {
  initTHREE()
  initControl()
  addBuffer()
  addLight()
  showAxesHelper()
  initStats()
  render()
})
</script>

<template>
  <div class="viewCon">
    <div ref="canvasCon" class="con">
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
