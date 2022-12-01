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
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import fontjson from '@/assets/typeFace/helvetiker_regular.typeface.json?url'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { TextGeometryParameters } from 'three/examples/jsm/geometries/TextGeometry'

const canvasDom = ref<HTMLElement>()
const canvasCon = ref<HTMLElement>()
let width = window.innerWidth
let height = window.innerHeight
let stats: Stats
let orbitControls: OrbitControls
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer

let str = 'Hello three.js!'
let font: any

function loadFont() {
  const loader = new FontLoader()
  return new Promise((resolve, reject) => {
    loader.load(
      fontjson,
      function (res) {
        resolve(res)
      },
      undefined,
      function (err) {
        reject(err)
      }
    )
  })
}
function setMaterialColor(material: THREE.MeshPhongMaterial) {
  const hue = Math.floor(Math.random() * 100) / 100 //随机获得一个色相
  const saturation = 1 //饱和度
  const luminance = 0.5 //亮度
  material.color.setHSL(hue, saturation, luminance)
}
function initTextMesh() {
  const textGeo = new TextGeometry(str, {
    font: font,
    size: 80,
    height: 5,
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 10,
    bevelSize: 8,
    bevelSegments: 5
  })
  const textMat = new THREE.MeshPhongMaterial({ side: THREE.DoubleSide })
  setMaterialColor(textMat)
  const textMesh = new THREE.Mesh(textGeo, textMat)
  scene.add(textMesh)
}
// 帧率
function initStats() {
  stats = Stats()
  canvasCon.value!.append(stats.dom)
}
// 控制
function initControl() {
  orbitControls = new OrbitControls(camera, renderer.domElement)
  orbitControls.target = new THREE.Vector3(120, 60, 0)
  orbitControls.object.position.set(120, 60, 400)
}
// 坐标轴
function showAxesHelper() {
  scene.add(new THREE.AxesHelper(1000))
}
// 自适应
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
  scene.fog = new THREE.Fog(0x000000, 250, 1400)

  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({
    canvas: canvasDom.value,
    antialias: true
  })
  renderer.setSize(width, height)
  window.addEventListener('resize', onWindowResize)
}

// 光源
function initLight() {
  const dirLight = new THREE.DirectionalLight(0xffffff, 0.125)
  dirLight.position.set(0, 0, 1).normalize()
  scene.add(dirLight)
  const pointLight = new THREE.PointLight(0xffffff, 1.5)
  pointLight.position.set(0, 100, 90)
  scene.add(pointLight)
}

function animate() {
  // doSomething
}

// 绘制
function render() {
  requestAnimationFrame(render)
  stats.update()
  animate()
  renderer.render(scene, camera)
}

onMounted(async () => {
  initTHREE()
  initControl()
  initLight()
  showAxesHelper()
  initStats()

  font = await loadFont()
  initTextMesh()

  render()
})
</script>

<style lang="less" scoped>
.viewCon {
  margin: 0;
  padding: 0;
}
</style>
