<script lang="ts" setup>
// https://threejs.org/examples/?q=bufferg#webgl_buffergeometry_drawrange
import { onMounted, onUnmounted, ref } from 'vue'

// import * as THREE from 'three'
import type {
  Material,
} from 'three'
import {
  AdditiveBlending,
  AxesHelper,
  BoxGeometry,
  BoxHelper,
  BufferAttribute,
  BufferGeometry,
  DynamicDrawUsage,
  Group,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  Vector3,
  WebGLRenderer,
} from 'three'
import type { Mat } from 'threePatch'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GUI } from 'dat.gui'

const { random, sqrt } = Math

interface ParticlesDataItem {
  vel: Vector3
  numConnection: number
}

const canvasDom = ref<HTMLElement>()
const canvasCon = ref<HTMLElement>()
let stats: Stats
let orbitControls: OrbitControls
let scene: Scene
let camera: PerspectiveCamera
let renderer: WebGLRenderer

let group: Group
let box: BoxHelper
const size: number = 500 // boxSize

let particleNum = 500
const particlesMax = 1000
const particlesVertex = new Float32Array(particlesMax * 3) // 点云顶点集合
const lineVertex = new Float32Array(particlesMax ** 2 * 3) // 线的顶点集合，线与点云不能共用一个数据源,因为线是双向线（两个点有两条线，因为两层for循环），
const lineColors = new Float32Array(particlesMax ** 2 * 3) // 每段线的颜色
const particlesData: Array<ParticlesDataItem> = []
let particlesGeo: BufferGeometry
let particlesMesh: Points
let minDistance = 100 // 如果两个粒子的距离在这个范围内就绘制线段
let maxConnection = 20 // 一个粒子最大连接数
let lineMesh: LineSegments

const option = {
  showDots: true,
  showLines: true,
  particleNum: 500,
  minDistance: 100,
  maxConnection: 20,
}

function initGUI() {
  const panel = new GUI({ width: 300 })
  panel.add(option, 'showDots').onChange((val) => {
    particlesMesh.visible = val
  })
  panel.add(option, 'showLines').onChange((val) => {
    lineMesh.visible = val
  })
  panel.add(option, 'particleNum', 0, particlesMax, 1).onChange((val) => {
    particleNum = val
  })
  panel.add(option, 'minDistance', 0, 300, 1).onChange((val) => {
    minDistance = val
  })
  panel.add(option, 'maxConnection', 0, 30, 1).onChange((val) => {
    maxConnection = val
  })
}

function initBox() {
  group = new Group()
  scene.add(group)

  const boxGeo = new BoxGeometry(size, size, size)
  box = new BoxHelper(new Mesh(boxGeo))
  // 不清楚是不是type/three的bug，box.material上找不到这三个属性
  ;(box.material as Mat).color.setRGB(255, 0, 0)
  // ;(box.material as Mat).color.setHex(0x101010) // 这个颜色跟例子的颜色设置也有出入，太淡了
  ;(box.material as Material).blending = AdditiveBlending
  ;(box.material as Material).transparent = true
  group.add(box)
}

// 初始化点云顶点坐标数据，和粒子的速度和连接数
function initParticles() {
  for (let i = 0; i < particlesMax; i++) {
    const x = random() * size - size / 2
    const y = random() * size - size / 2
    const z = random() * size - size / 2
    particlesVertex[i * 3] = x
    particlesVertex[i * 3 + 1] = y
    particlesVertex[i * 3 + 2] = z

    // 粒子随机速度，初始化连接数
    particlesData.push({
      vel: new Vector3(random() * 2 - 1, random() * 2 - 1, random() * 2 - 1),
      numConnection: 0,
    })
  }
}

function initParticlesMesh() {
  particlesGeo = new BufferGeometry()
  particlesGeo.setDrawRange(0, particleNum)
  particlesGeo.setAttribute(
    'position',
    new BufferAttribute(particlesVertex, 3).setUsage(DynamicDrawUsage),
  )
  // 所有粒子共用一个材质
  const particlesMaterial = new PointsMaterial({
    color: 0xFFFFFF,
    size: 3,
    blending: AdditiveBlending,
    transparent: true,
    sizeAttenuation: false,
  })
  particlesMesh = new Points(particlesGeo, particlesMaterial)
  group.add(particlesMesh)
}

function initLineMesh() {
  const lineMat = new LineBasicMaterial({
    vertexColors: true,
    blending: AdditiveBlending,
    transparent: true,
  })
  const lineGeo = new BufferGeometry()
  lineGeo.setAttribute(
    'position',
    new BufferAttribute(lineVertex, 3).setUsage(DynamicDrawUsage),
  )
  lineGeo.setAttribute(
    'color',
    new BufferAttribute(lineColors, 3).setUsage(DynamicDrawUsage),
  )
  lineMesh = new LineSegments(lineGeo, lineMat)

  group.add(lineMesh)
}

function updatePartices() {
  let colorIndex = 0
  let vertexIndex = 0
  let numConnected = 0
  // 在循环判断前，重置每个粒子的链接数
  for (let i = 0; i < particleNum; i++)
    particlesData[i].numConnection = 0

  for (let i = 0; i < particleNum; i++) {
    const par = particlesData[i]
    // 边界判断
    if (
      particlesVertex[i * 3] < -size / 2
      || particlesVertex[i * 3] > size / 2
    )
      par.vel.x = -par.vel.x

    if (
      particlesVertex[i * 3 + 1] < -size / 2
      || particlesVertex[i * 3 + 1] > size / 2
    )
      par.vel.y = -par.vel.y

    if (
      particlesVertex[i * 3 + 2] < -size / 2
      || particlesVertex[i * 3 + 2] > size / 2
    )
      par.vel.z = -par.vel.z

    // 粒子位置更新
    particlesVertex[i * 3] += par.vel.x
    particlesVertex[i * 3 + 1] += par.vel.y
    particlesVertex[i * 3 + 2] += par.vel.z

    if (par.numConnection >= maxConnection)
      continue

    for (let j = 0; j < particleNum; j++) {
      // 根据两点的距离大小获取颜色
      const dx = particlesVertex[i * 3] - particlesVertex[j * 3]
      const dy = particlesVertex[i * 3 + 1] - particlesVertex[j * 3 + 1]
      const dz = particlesVertex[i * 3 + 2] - particlesVertex[j * 3 + 2]
      const dist = sqrt(dx ** 2 + dy ** 2 + dz ** 2)

      // 小于最小距离才进行计算和绘制
      if (dist < minDistance) {
        const parB = particlesData[j]
        if (parB.numConnection >= maxConnection)
          continue
        par.numConnection++
        parB.numConnection++
        // 线段第一个顶点
        lineVertex[vertexIndex++] = particlesVertex[i * 3]
        lineVertex[vertexIndex++] = particlesVertex[i * 3 + 1]
        lineVertex[vertexIndex++] = particlesVertex[i * 3 + 2]

        // 线段第二个顶点
        lineVertex[vertexIndex++] = particlesVertex[j * 3]
        lineVertex[vertexIndex++] = particlesVertex[j * 3 + 1]
        lineVertex[vertexIndex++] = particlesVertex[j * 3 + 2]
        const alpha = 1 - dist / minDistance // 奇怪，rgb这三个色最大值是1？

        // rgb取同样的值，灰色
        // 第一条线
        lineColors[colorIndex++] = alpha
        lineColors[colorIndex++] = alpha
        lineColors[colorIndex++] = alpha

        // 第二条线
        lineColors[colorIndex++] = alpha
        lineColors[colorIndex++] = alpha
        lineColors[colorIndex++] = alpha
        numConnected++
      }
    }
  }
  lineMesh.geometry.setDrawRange(0, numConnected * 2)
  lineMesh.geometry.attributes.position.needsUpdate = true
  lineMesh.geometry.attributes.color.needsUpdate = true
  particlesMesh.geometry.attributes.position.needsUpdate = true
}

// 帧率
function initStats() {
  stats = Stats()
  canvasCon.value!.append(stats.dom)
}
// 控制
function initControl() {
  orbitControls = new OrbitControls(camera, renderer.domElement)
  orbitControls.minDistance = 1000
  orbitControls.maxDistance = 3000
}
// 坐标轴
function showAxesHelper() {
  scene.add(new AxesHelper(1000))
}
// 自适应
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

// three初始化
function initTHREE() {
  scene = new Scene()
  camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    4000,
  )
  camera.position.z = 1000
  renderer = new WebGLRenderer({
    canvas: canvasDom.value,
    antialias: true,
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  window.addEventListener('resize', onWindowResize)
}

let animateId = 0
// 绘制
function render() {
  const time = Date.now() * 0.0001

  animateId = requestAnimationFrame(render)
  stats.update()
  // do something
  updatePartices()
  group.rotation.y = time

  renderer.render(scene, camera)
}
onUnmounted(() => {
  cancelAnimationFrame(animateId)
})

onMounted(() => {
  initGUI()
  initTHREE()
  showAxesHelper()
  initStats()
  initControl()

  initBox()
  initParticles()
  initParticlesMesh()
  initLineMesh()

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
