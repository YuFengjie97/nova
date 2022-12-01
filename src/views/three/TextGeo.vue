<template>
  <div class="viewCon">
    <div class="canvasCon" ref="canvasCon">
      <canvas
        class="canvas"
        ref="canvasDom"
        @pointerdown="pointerDown"
        @pointermove="pointerMove"
        @pointerup="pointerUp"
      />
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
import { GUI } from 'dat.gui'
const { PI, random, floor } = Math

const canvasDom = ref<HTMLElement>()
const canvasCon = ref<HTMLElement>()
let width = window.innerWidth
let height = window.innerHeight
let stats: Stats
let orbitControls: OrbitControls
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer

let halfWindowWidth: number
let str = 'Hello three.js!'
let font: any
let textGroup: THREE.Group
let textGroupRatation: number = 0
let pointerDownX = 0
let textGeo: TextGeometry
let textMat: Array<THREE.MeshPhongMaterial>
let textMesh: THREE.Mesh
let isMirror = true
let mirrorTextMesh: THREE.Mesh
let plane: THREE.Mesh
let planeDis = 40 // plane距离上方文字的距离
let pointLight: THREE.PointLight

function keyDown(e: KeyboardEvent) {
  let char = e.key
  console.log(char)

  if (char === 'Backspace') {
    str = str.slice(0, -1)
  } else {
    str += char
  }
  refreshText()
}

// 对点光源设置随机颜色
function setRandomHex() {
  let h = random() * 100
  let s = 1
  let l = 0.5
  pointLight.color.setHSL(h, s, l)
}

let options = {
  changeColor: function () {
    setRandomHex()
  },
  fontSize: 50,
  height: 6,
  curveSegments: 1,
  bevelEnabled: true,
  bevelThickness: 4,
  bevelSize: 3.2,
  bevelSegments: 1
}
function initGUI() {
  const panel = new GUI({ width: 300 })
  panel.add(options, 'changeColor').name('randomColor').listen()
  panel.add(options, 'fontSize', 20, 100, 1).onFinishChange((val) => {
    planeDis = val * 0.8
    refreshText()
  })
  panel.add(options, 'height', 1, 30,1).onFinishChange(refreshText)
  panel.add(options, 'curveSegments', 1, 10,1).onFinishChange(refreshText)
  panel.add(options, 'bevelEnabled').onChange(refreshText)
  panel.add(options, 'bevelThickness', 1, 10,1).onFinishChange(refreshText)
  panel.add(options, 'bevelSize', 0.1, 5, 0.1).onFinishChange(refreshText)
  panel.add(options, 'bevelSegments', 1, 10,1).onFinishChange(refreshText)

}

function refreshText() {
  // 更新文本mesh，实质是删除掉原有的mesh，再重新创建
  // 感觉很费性能，没找到怎么动态修改
  textGroup.remove(textMesh)
  textGroup.remove(mirrorTextMesh)
  initTextMesh()
}

let isPointerDown = false
function pointerDown(e: PointerEvent) {
  isPointerDown = true
  pointerDownX = e.clientX
}
function pointerMove(e: PointerEvent) {
  if (isPointerDown) {
    textGroupRatation =
      ((e.clientX - pointerDownX) / halfWindowWidth) * PI * 0.04
  }
}
function pointerUp() {
  isPointerDown = false
  textGroupRatation = 0
}
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
function initTextMesh() {
  textGroup = new THREE.Group() // 将文字与倒影文字放在一个group中，好控制一同旋转
  scene.add(textGroup)

  textGeo = new TextGeometry(str, {
    font: font,
    size: options.fontSize,
    height: options.height,
    curveSegments: options.curveSegments,
    bevelEnabled: options.bevelEnabled,
    bevelThickness: options.bevelThickness,
    bevelSize: options.bevelSize,
    bevelSegments: options.bevelSegments
  })
  textMat = [
    new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }), // front
    new THREE.MeshPhongMaterial({ color: 0xffffff }) // side
  ]
  textMesh = new THREE.Mesh(textGeo, textMat)
  textGroup.add(textMesh)

  textGeo.computeBoundingBox()
  const centerOffset =
    -0.5 * (textGeo.boundingBox?.max.x! - textGeo.boundingBox?.min.x!)
  const yOffset = textGeo.boundingBox?.min.y! + planeDis
  textMesh.position.set(centerOffset, yOffset, 0)

  if (isMirror) {
    mirrorTextMesh = new THREE.Mesh(textGeo, textMat)
    mirrorTextMesh.position.set(centerOffset, -yOffset, 0)
    mirrorTextMesh.rotation.x = -PI
    textGroup.add(mirrorTextMesh)
  }
}
function addPlane() {
  plane = new THREE.Mesh(
    new THREE.PlaneGeometry(10000, 10000),
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      opacity: 0.5,
      transparent: true
    })
  )
  plane.position.y = 0
  plane.rotation.x = -PI / 2
  scene.add(plane)
}
// 帧率
function initStats() {
  stats = Stats()
  canvasCon.value!.append(stats.dom)
}
// 控制
function initControl() {
  orbitControls = new OrbitControls(camera, renderer.domElement)
  orbitControls.target = new THREE.Vector3(0, 0, 0)
  orbitControls.object.position.set(0, 0, 400)
}
// 坐标轴
function showAxesHelper() {
  scene.add(new THREE.AxesHelper(1000))
}
// 自适应
function onWindowResize() {
  width = window.innerWidth
  height = window.innerHeight
  halfWindowWidth = width / 2
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

// three初始化
function initTHREE() {
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x000000)
  scene.fog = new THREE.Fog(0x000000, 250, 1400)

  camera = new THREE.PerspectiveCamera(75, width / height, 1, 4000)
  camera.position.set(0, 100, 300)
  camera.lookAt(new THREE.Vector3(0, 50, 0))
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
  dirLight.position.set(0, -100, 1).normalize()
  scene.add(dirLight)
  pointLight = new THREE.PointLight(0x6c5ce7, 1.5)
  pointLight.position.set(0, -100, 90)
  scene.add(pointLight)
}

function animate() {
  // doSomething
  textGroup.rotation.y = textGroup.rotation.y + textGroupRatation
  // textGroup.
}

// 绘制
function render() {
  requestAnimationFrame(render)
  stats.update()
  animate()
  renderer.render(scene, camera)
}

onMounted(async () => {
  document.addEventListener('keydown', keyDown)

  halfWindowWidth = window.innerWidth / 2
  initTHREE()
  initGUI()
  // initControl()
  initLight()
  showAxesHelper()
  initStats()

  font = await loadFont()
  initTextMesh()
  addPlane()

  render()
})
</script>

<style lang="less" scoped>
.viewCon {
  margin: 0;
  padding: 0;
}
</style>
