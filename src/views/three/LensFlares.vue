<template>
  <div class="viewCon">
    <div class="canvasCon" ref="canvasCon">
      <canvas class="canvas" ref="canvasDom" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { GUI } from 'dat.gui'
import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { FlyControls } from 'three/examples/jsm/controls/FlyControls'
import { FontLoader, Font } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'

import { Mat } from 'threePatch'
import {
  Lensflare,
  LensflareElement
} from 'three/examples/jsm/objects/Lensflare'

// 材质图片引入，格式为url
import textures0 from '@/assets/img/textures/lensflare/lensflare0.png?url'
import textures3 from '@/assets/img/textures/lensflare/lensflare3.png?url'
import fontJsonUrl from '@/assets/typeFace/helvetiker_regular.typeface.json?url'
import { PointLight } from 'three'

const { random, PI, floor, ceil, min, max, sin, cos } = Math

const canvasDom = ref<HTMLElement>()
const canvasCon = ref<HTMLElement>()
let width = window.innerWidth
let height = window.innerHeight
let stats: Stats
let flyControls: FlyControls
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer

let meshGroup: THREE.Group
let meshArr: Array<THREE.Mesh> = []
const range = 600
const meshNum = 200

let pointLight: THREE.PointLight
let lensflare: Lensflare
let font: Font

let cameraLight: PointLight

// 光源透镜配置
const lfParams = {
  // 点光源配置
  color: 0x0984e3,
  intensity: 1,
  distance: range,
  decay: 0.4
}

onMounted(async () => {
  font = await loadFont(fontJsonUrl)

  initGUI()
  initTHREE()
  initMeshs()
  initLensFlare()
  render()
})

function initGUI() {
  let panel = new GUI()
  const folder1 = panel.addFolder('lfParams')
  folder1.open()
  folder1.addColor(lfParams, 'color').onChange((val) => {
    pointLight.color.setHex(val)
  })
  folder1.add(lfParams, 'intensity', 0, 3, 0.1).onChange((val) => {
    pointLight.intensity = val
  })
  folder1.add(lfParams, 'distance', 0, range * 2, 1).onChange((val) => {
    pointLight.distance = val
  })
  folder1.add(lfParams, 'decay', 0, 10, 0.1).onChange((val) => {
    pointLight.decay = val
  })
}

const clock = new THREE.Clock()
function animate() {
  const delta = clock.getDelta()
  flyControls.update(delta)
}

function loadFont(fontJsonUrl: string): Promise<Font> {
  const loader = new FontLoader()
  return new Promise((resolve, reject) => {
    loader.load(
      fontJsonUrl,
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

// 根据材质与字符串内容初始化文字mesh
function createTextMesh(
  text: string,
  textMat: Array<THREE.Material>
): THREE.Mesh<TextGeometry, THREE.Material[]> {
  const textGeo = new TextGeometry(text, {
    font,
    size: 20,
    height: 1,
    curveSegments: 1,
    bevelEnabled: true,
    bevelThickness: 2,
    bevelSize: 2.4,
    bevelSegments: 3
  })
  const textMesh = new THREE.Mesh(textGeo, textMat)
  return textMesh
}

function initMeshs() {
  const str = `can't find a jod,None of this is going well,Demons get out of here`
  const textArr = str.split(',')

  meshGroup = new THREE.Group()
  scene.add(meshGroup)

  const textMat = [
    new THREE.MeshPhongMaterial({ color: 0xffffff, flatShading: true }), // front
    new THREE.MeshPhongMaterial({ color: 0xffffff }), // side
  ]

  for (let i = 0, textArrLen = textArr.length; i < meshNum; i++) {
    const textMesh = createTextMesh(textArr[i % textArrLen], textMat)
    meshArr.push(textMesh)

    textMesh.position.x = random() * 2 * range - range
    textMesh.position.y = random() * 2 * range - range
    textMesh.position.z = random() * 2 * range - range
    textMesh.rotation.x = random() * PI
    textMesh.rotation.y = random() * PI
    textMesh.rotation.z = random() * PI
    meshGroup.add(textMesh)
  }
}

function initLensFlare() {
  // 点光源，透镜耀斑本身是不会发光的，可以看作是点光源的一个附属品
  pointLight = new THREE.PointLight(
    lfParams.color,
    lfParams.intensity,
    lfParams.distance,
    lfParams.decay
  )
  // 透镜耀斑材质的加载与设置
  lensflare = new Lensflare()
  const textureLoader = new THREE.TextureLoader()
  const textureFlare0 = textureLoader.load(textures0)
  const textureFlare3 = textureLoader.load(textures3)
  // prettier-ignore
  lensflare.addElement(new LensflareElement(textureFlare0,700,0,new THREE.Color().setHex(lfParams.color)))
  lensflare.addElement(new LensflareElement(textureFlare3, 60, 0.6))
  lensflare.addElement(new LensflareElement(textureFlare3, 70, 0.7))
  lensflare.addElement(new LensflareElement(textureFlare3, 120, 0.9))
  lensflare.addElement(new LensflareElement(textureFlare3, 70, 1))
  pointLight.add(lensflare)
  scene.add(pointLight)
}

// three初始化
function initTHREE() {
  scene = new THREE.Scene()
  scene.background = new THREE.Color().setHSL(0.51, 0.4, 0.01)
  scene.fog = new THREE.Fog(scene.background, 1, range*2)
  camera = new THREE.PerspectiveCamera(75, width / height, 1, range*2)
  camera.position.set(range/2,range/2,range/2)
  camera.lookAt(0,0,0)
  renderer = new THREE.WebGLRenderer({
    canvas: canvasDom.value,
    antialias: true
  })
  renderer.setSize(width, height)
  // renderer.setPixelRatio(window.devicePixelRatio)
  window.addEventListener('resize', onWindowResize)

  // 坐标轴
  // scene.add(new THREE.AxesHelper(1000))

  // 帧率状态
  stats = Stats()
  canvasCon.value!.append(stats.dom)

  // 飞行控制器
  flyControls = new FlyControls(camera, renderer.domElement)
  flyControls.movementSpeed = 100
  flyControls.domElement = renderer.domElement
  flyControls.rollSpeed = Math.PI / 18
  flyControls.autoForward = false
  flyControls.dragToLook = false
}
// 绘制
function render() {
  requestAnimationFrame(render)
  stats.update()
  animate()
  renderer.render(scene, camera)
}
// 自适应
function onWindowResize() {
  width = window.innerWidth
  height = window.innerHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}
</script>

<style lang="less" scoped>
.viewCon {
  margin: 0;
  padding: 0;
}
</style>
