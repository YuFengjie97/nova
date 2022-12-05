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
  getWireframe
} from './object3D'
const {cos, sin} = Math

const canvasDom = ref<HTMLElement>()
const canvasCon = ref<HTMLElement>()
let width = innerWidth
let height = innerHeight
let stats: Stats
let orbitControls: OrbitControls
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer

let viewCenter = {
  x: 120,
  y: 60
}
let viewDistance = 100

const object3D: Array<THREE.Group> = []
function addBuffer() {
  let box = getBox()
  object3D.push(box)

  let circle = getCircle()
  object3D.push(circle)

  let cone = getCone()
  object3D.push(cone)

  let cylinder = getCylinder()
  object3D.push(cylinder)

  let dodecahedron = getDodecahedron()
  object3D.push(dodecahedron)

  let edges = getEdges()
  object3D.push(edges)

  let extrude = getExtrude()
  object3D.push(extrude)

  let icosahedron = getIcosahedron()
  object3D.push(icosahedron)

  let lathe = getLathe()
  object3D.push(lathe)

  let octahedron = getOctahedron()
  object3D.push(octahedron)

  let plane = getPlane()
  object3D.push(plane)

  let polyhedron = getPolyhedron()
  object3D.push(polyhedron)

  let ring = getRing()
  object3D.push(ring)

  let shape = getShape()
  object3D.push(shape)

  let sphere = getSphere()
  object3D.push(sphere)

  let tetrahedron = getTetrahedron()
  object3D.push(tetrahedron)

  let torus = getTorus()
  object3D.push(torus)

  let torusKnot = getTorusKnot()
  object3D.push(torusKnot)

  let tube = getTube()
  object3D.push(tube)

  let wireframe = getWireframe()
  object3D.push(wireframe)

  object3D.forEach((o, i) => {
    
    let x = (i % 6) * 40
    let y = Math.floor(i / 6) * 40
    o.position.set(x, y, 0)
    scene.add(o)
    // console.log(o.position);

  })

}

let light1: THREE.PointLight // 垂直方向绕基准点旋转的点光源
let light2: THREE.PointLight // 水品方向绕基准点旋转的点光源
let r = 200
function addLight(){
  light1 = new THREE.PointLight( 0xffffff, 2, 300 );
  light1.position.set( viewCenter.x, viewCenter.y, viewDistance );
  light2 = new THREE.PointLight( 0xffffff, 2, 300 );
  light2.position.set( viewCenter.x, viewCenter.y, viewDistance );
  scene.add( light1 );
  scene.add( light2 );
}
function updateLight(){
  let angle = Date.now()*0.005
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
  let time = Date.now() * 0.001
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
    antialias: true
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
  addBuffer()
  addLight()
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
