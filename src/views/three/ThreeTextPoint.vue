<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Mat } from 'threePatch'

const { random, PI } = Math

let str = `Hello World`
const inputVal = ref('Hello World')
function handleInputChange() {
  str = inputVal.value
  parseString()
  reAddParticles()
  updateParticles()
}

const canvasDom = ref<HTMLElement>()
const canvasCon = ref<HTMLElement>()
let width = window.innerWidth
let height = window.innerHeight
let stats: Stats
let orbitControls: OrbitControls
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer

let parseString: Function
const fontSize = 20 // fontSize只会影响取样的样本数量，字体越大，在画布中占用的像素就越多，取样就越多
const fontName = 'Verdana'
const fontScaleFactor = 0.5 // 文字画布坐标到three坐标系，坐标缩放因数
let textureCoors: Array<Particle> = []
const coorMap: {
  [key: string]: Particle
} = {} // 坐标字符串与粒子的map

let textureCoorsFloatArr: Float32Array // 点云网格,调试的时候用的
let particlesMesh: THREE.Points // 点云网格,调试的时候用的

let particlesGeo: THREE.TorusGeometry
let particlesMat: THREE.MeshNormalMaterial
let particlesInstanceMesh: THREE.InstancedMesh
let dummy: THREE.Object3D

const stringBox = {
  width: 0, // 最右文字粒子的x
  height: 0, // 最下文字粒子的y
}

function getInfo() {
  console.log(orbitControls)
}

// 像素粒子对应的类
class Particle {
  x: number
  y: number
  z = 0
  rotationX: number = random() * 2 * PI
  rotationY: number = random() * 2 * PI
  rotationZ: number = random() * 2 * PI
  deltaRotation = 0.2 * (random() - 0.5)
  scale = 0
  deltaScale = 0.1
  toKeep = true
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  update() {
    this.rotationX += this.deltaRotation
    this.rotationY += this.deltaRotation
    this.rotationZ += this.deltaRotation
    if (this.scale < 1)
      this.scale += this.deltaScale
  }
}

/**
 * 获取字符串像素坐标，更新字符像素位置信息
 * 这个函数会创建一个canvas，但是不会放到html中，
 * 是需要用canvas绘制文字，然后读取文字像素坐标
 * 这是它的产物：
 * 1.stringBox的宽高，是文字总共的宽高，不是画布
 * 2.像素点对应的坐标数组textureCoors，格式是{x,y}，给instanceMesh用的
 * 3.像素掉对应的坐标数组，是一维的float32Array，给点云用的
 */
function getTextCanvasInfo() {
  // 创建canvas画布
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')!
  canvas.width = canvas.height = 0
  return function () {
    // 状态重置
    // textureCoors.length = 0 // 使用map判断粒子是否需要删除，不需要全部重置
    stringBox.width = 0
    stringBox.height = 0

    // 解析字符串
    const strArr = str.split('\n')

    const maxLen = strArr.reduce((pre, cur) => {
      return cur.length > pre.length ? cur : pre
    }, ' ').length

    // 在画布上绘制文字
    const canvasWidth = maxLen * fontSize
    const canvasHeigh = strArr.length * fontSize
    canvas.width = canvasWidth
    canvas.height = canvasHeigh
    ctx.font = `${fontSize}px ${fontName}`
    ctx.fillStyle = 'red'
    for (let i = 0, len = strArr.length; i < len; i++)
      ctx.fillText(strArr[i], 0, (i + 0.8) * (canvasHeigh / len))

    // 收集画布像素数据
    const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeigh)
    // const coorArr = [] // 点云mesh用

    // 对像素数据进行分析，得到粒子位置数据
    const samplingStep = 1
    const index = 0
    for (let y = 0; y < canvasHeigh; y += samplingStep) {
      for (let x = 0; x < canvasWidth; x += samplingStep) {
        const key = `x:${x}y:${y}`
        // 只需要判断像素的R即可
        if (imageData.data[(x + y * canvasWidth) * 4] > 0) {
          // 点云mesh用
          // coorArr[index++] = x * fontScaleFactor
          // coorArr[index++] = -y * fontScaleFactor
          // coorArr[index++] = random() * 10 * fontScaleFactor

          if (x > stringBox.width)
            stringBox.width = x

          if (y > stringBox.height)
            stringBox.height = y

          if (coorMap[key]) {
            // 之前有，现在也要有
            coorMap[key].toKeep = true
          }
          else {
            // 之前没有，现在要有
            const particle = new Particle(x * fontScaleFactor, -y * fontScaleFactor)
            textureCoors.push(particle) // 使用map过滤旧粒子，不需要再push
            coorMap[key] = particle
          }
        }
        else {
          if (coorMap[key]) {
            // 之前有，现在要没有
            coorMap[key].toKeep = false
            delete coorMap[key]
          }
        }
        textureCoors = textureCoors.filter(p => p.toKeep) // 数组过滤出现在需要显示的粒子

        // 两种遍历方法，coorMap的数据量和textureCoors相同，对象的遍历就是比数组filter慢，有明显卡顿
        // let arr = []
        // for(let k in coorMap){
        //   if(coorMap.hasOwnProperty(k)){
        //     if(coorMap[k].toKeep)arr.push(coorMap[k])
        //   }
        // }
        // textureCoors = arr
        // textureCoors = Object.values(coorMap).filter(p=>p.toKeep)
      }
    }

    // textureCoorsFloatArr = new Float32Array(coorArr) // 点云mesh用
  }
}

function initParticles() {
  // boxHelper
  // let boxGeo = new THREE.BoxGeometry(stringBox.width * fontScaleFactor, stringBox.height * fontScaleFactor, 10)
  // const box = new THREE.BoxHelper(new THREE.Mesh(boxGeo))
  // ;(box.material as Mat).color.setHex(0xe84393)
  // scene.add(box)

  // 点云的几何信息与材质
  // let particlesGeo = new THREE.BufferGeometry()
  // particlesGeo.setAttribute(
  //   'position',
  //   new THREE.BufferAttribute(textureCoorsFloatArr, 3)
  // )
  // const particlesMaterial = new THREE.PointsMaterial({
  //   color: 0xffffff,
  //   size: 3,
  //   blending: THREE.AdditiveBlending,
  //   transparent: true,
  //   sizeAttenuation: false
  // })
  // particlesMesh = new THREE.Points(particlesGeo, particlesMaterial)
  // particlesMesh.position.x = -stringBox.width / 2
  // particlesMesh.position.y = stringBox.height / 2
  // scene.add(particlesMesh)

  // instanceMesh
  particlesGeo = new THREE.TorusGeometry(0.35, 0.15, 16, 50)
  particlesMat = new THREE.MeshNormalMaterial({})
  particlesInstanceMesh = new THREE.InstancedMesh(
    particlesGeo,
    particlesMat,
    textureCoors.length,
  )
  particlesInstanceMesh.position.x = -0.5 * stringBox.width * fontScaleFactor
  particlesInstanceMesh.position.y = -1.5 * stringBox.height * fontScaleFactor
  scene.add(particlesInstanceMesh)

  dummy = new THREE.Object3D()
}

// str更改后，移除原先的instanceMesh，重新定义mesh
function reAddParticles() {
  scene.remove(particlesInstanceMesh)
  particlesInstanceMesh = new THREE.InstancedMesh(
    particlesGeo,
    particlesMat,
    textureCoors.length,
  )
  particlesInstanceMesh.position.x = -0.5 * stringBox.width * fontScaleFactor
  particlesInstanceMesh.position.y = -1.5 * stringBox.height * fontScaleFactor
  scene.add(particlesInstanceMesh)
}

// 使用dummy更新instanchMesh的matrix
function updateParticles() {
  let idx = 0
  textureCoors.forEach((p) => {
    dummy.rotation.set(p.rotationX, p.rotationY, p.rotationZ)
    dummy.scale.set(p.scale, p.scale, p.scale)
    dummy.position.set(p.x, stringBox.height + p.y, p.z)
    dummy.updateMatrix()
    particlesInstanceMesh.setMatrixAt(idx, dummy.matrix)
    idx++
    p.update()
  })
  particlesInstanceMesh.instanceMatrix.needsUpdate = true
}

// 帧率
function initStats() {
  stats = Stats()
  canvasCon.value!.append(stats.dom)
}
// 控制
function initControl() {
  orbitControls = new OrbitControls(camera, renderer.domElement)
  orbitControls.object.position.set(0, 0, 30)
  orbitControls.target.set(0, 0, 0)
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
    antialias: true,
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
  updateParticles()
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

  parseString = getTextCanvasInfo()
  parseString()

  initParticles()
  updateParticles()

  initLight()
  showAxesHelper()
  initStats()
  render()
})
</script>

<template>
  <div class="viewCon">
    <textarea
      v-model="inputVal"
      class="input"
      type="text"
      rows="5"
      cols="50"
      @keyup="handleInputChange"
    />
    <div ref="canvasCon" class="canvasCon">
      <canvas ref="canvasDom" class="canvas" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.viewCon {
  margin: 0;
  padding: 0;
  position: relative;
  .input {
    position: absolute;
    top: 48px;
    left: 0;
  }
}
</style>
