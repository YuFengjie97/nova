<template>
  <div class="viewCon" @click="getInfo">
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
import {Mat} from 'threePatch'
const { random } = Math

const canvasDom = ref<HTMLElement>()
const canvasCon = ref<HTMLElement>()
let width = window.innerWidth
let height = window.innerHeight
let stats: Stats
let orbitControls: OrbitControls
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer

let str = `what do you mean...\n jump into the boat?\nGo! Go! Go!`
let textCoorArr: Float32Array
let particlesMesh: THREE.Points
let group: THREE.Group
let textCanvasInfo = {
  width: 0,
  height: 0
}

function getInfo() {
  console.log(orbitControls)
}

function getTextCoor() {
  // 创建canvas画布
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!
  canvas.style.border = '8px solid #000'
  canvas.width = canvas.height = 0
  const fontSize = 50
  const fontName = 'Verdana'

  // 解析字符串
  const strArr = str.split('\n')
  const maxLen = strArr.reduce((pre, cur) => {
    return cur.length > pre.length ? cur : pre
  }, '').length
  console.log(maxLen);
  
  const canvasWidth = maxLen * fontSize * 0.55
  const canvasHeigh = strArr.length * fontSize
  textCanvasInfo.width = canvas.width = canvasWidth
  textCanvasInfo.height = canvas.height = canvasHeigh

  // 在画布上绘制文字
  ctx.font = `${fontSize}px ${fontName}`
  ctx.fillStyle = 'red'
  for (let i = 0, len = strArr.length; i < len; i++) {
    ctx.fillText(strArr[i], 0, (i + 0.8) * (canvasHeigh / len))
  }

  // 收集画布像素数据
  const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeigh)
  textCoorArr = new Float32Array(canvasWidth * canvasHeigh * 3) // imageData.data存储的是像素数据所以需要除以4，乘以3是因为坐标x,y,z是三元数据

  // 对像素数据进行整理，得到粒子一维位置数据
  let samplingStep = 2
  let index = 0
  for (let y = 0; y < canvasHeigh; y += samplingStep) {
    for (let x = 0; x < canvasWidth; x += samplingStep) {
      // 只需要判断像素的R即可
      if (imageData.data[(x + y * canvasWidth) * 4] > 0) {
        textCoorArr[index++] = x
        textCoorArr[index++] = -y
        textCoorArr[index++] = random() * 10
      }
    }
  }
}

function initParticles() {
  group = new THREE.Group()
  scene.add(group)

  let boxGeo = new THREE.BoxGeometry(textCanvasInfo.width, textCanvasInfo.height, 20)
  const box = new THREE.BoxHelper(new THREE.Mesh(boxGeo))
  ;(box.material as Mat).color.setHex(0xe84393)
  group.add(box)

  let particlesGeo = new THREE.BufferGeometry()
  particlesGeo.setAttribute(
    'position',
    new THREE.BufferAttribute(textCoorArr, 3)
  )
  const particlesMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 3,
    blending: THREE.AdditiveBlending,
    transparent: true,
    sizeAttenuation: false
  })
  particlesMesh = new THREE.Points(particlesGeo, particlesMaterial)
  particlesMesh.position.x = -textCanvasInfo.width / 2
  particlesMesh.position.y = textCanvasInfo.height / 2
  orbitControls.object.position.set(0, 0, 400)
  orbitControls.target.set(0, 0, 0)

  group.add(particlesMesh)
}

// 帧率
function initStats() {
  stats = Stats()
  canvasCon.value!.append(stats.dom)
}
// 控制
function initControl() {
  orbitControls = new OrbitControls(camera, renderer.domElement)
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
  scene.background = new THREE.Color(0x444444)

  camera = new THREE.PerspectiveCamera(75, width / height, 1, 4000)
  renderer = new THREE.WebGLRenderer({
    canvas: canvasDom.value,
    antialias: true
  })
  renderer.setSize(width, height)
  window.addEventListener('resize', onWindowResize)
}

// 光源
function initLight() {
  const light = new THREE.AmbientLight(0x404040) // soft white light
  scene.add(light)
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

onMounted(() => {
  initTHREE()
  initControl()

  getTextCoor()
  initParticles()

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
