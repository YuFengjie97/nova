<script lang="ts" setup>
/**
 * num个精灵
 * vertexes长度为num*3
 * 1个bufferGeo
 * 5个材质图片
 * 5个材质
 * 5个点云
 * 这里没有使用sprite来初始化精灵而是points，因为粒子数量太多
 *
 */
import { onMounted, onUnmounted, ref } from 'vue'
import { GUI } from 'dat.gui'
import * as THREE from 'three'
import type Stats from 'three/examples/jsm/libs/stats.module.js'
import type { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// 雪花材质图片
import s1 from '@/assets/img/textures/snow/snowflake1.png?url'
import s2 from '@/assets/img/textures/snow/snowflake2.png?url'
import s3 from '@/assets/img/textures/snow/snowflake3.png?url'
import s4 from '@/assets/img/textures/snow/snowflake4.png?url'
import s5 from '@/assets/img/textures/snow/snowflake5.png?url'

const { random } = Math

const canvasDom = ref<HTMLElement>()
const canvasCon = ref<HTMLElement>()
let width: number
let height: number
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer

const spritesNum = 10000
const bufferGeo = new THREE.BufferGeometry() // 5个点云共用的几何体
const materials: THREE.PointsMaterial[] = [] // 5个点云的材质
const vertexes = new Float32Array(spritesNum * 3) // 几何体的顶点信息，三元组初始化为粒子总数的3倍
const range = 1000 // 雪花生成空间范围的一半

// 材质加载
const textureLoader = new THREE.TextureLoader()
const t1 = textureLoader.load(s1)
const t2 = textureLoader.load(s2)
const t3 = textureLoader.load(s3)
const t4 = textureLoader.load(s4)
const t5 = textureLoader.load(s5)

type materialInfo = [[number, number, number], THREE.Texture, number]
// 材质的颜色，map，尺寸信息
const parameters: materialInfo[] = [
  [[1.0, 0.2, 0.5], t2, 20],
  [[0.95, 0.1, 0.5], t3, 15],
  [[0.9, 0.05, 0.5], t1, 10],
  [[0.85, 0, 0.5], t5, 8],
  [[0.8, 0, 0.5], t4, 5],
]

// 鼠标基准位置，以屏幕中心点为基准计算
let mouseX: number = 0
let mouseY: number = 0

onMounted(() => {
  // initGUI()

  initTHREE()
  // onWindowResize()
  initSprites()
  render()
})

function animate() {
  const time = Date.now() * 0.00005 // 以时间戳来配置点云参数

  camera.position.x += (mouseX - camera.position.x) * 0.05
  camera.position.y += (-mouseY - camera.position.y) * 0.05
  camera.lookAt(scene.position)

  for (let i = 0; i < scene.children.length; i++) {
    const obj = scene.children[i]
    /**
     * 通过遍历scene.children和判断对象类型来找到点云
     * 也可以在点云初始化时，用额外变量保存来直接设置
     */
    if (obj instanceof THREE.Points)
      obj.rotation.y = time * (i < 4 ? i + 1 : -(i + 1))
  }

  // 根据时间参数，更新电源材质color
  for (let i = 0; i < materials.length; i++) {
    const color = parameters[i][0]
    const h = ((360 * (color[0] + time)) % 360) / 360
    materials[i].color.setHSL(h, color[1], color[2])
  }
}
function updateMouse(e: PointerEvent) {
  // 只有是主指针时，才会更新鼠标坐标，主指针区别于移动端，多点触控
  if (!e.isPrimary)
    return
  mouseX = e.clientX - width / 2
  mouseY = e.clientY - height / 2
}
function initSprites() {
  // 顶点数组初始化
  for (let i = 0; i < spritesNum; i++) {
    vertexes[i * 3] = random() * (2 * range) - range
    vertexes[i * 3 + 1] = random() * (2 * range) - range
    vertexes[i * 3 + 2] = random() * (2 * range) - range
  }
  bufferGeo.setAttribute('position', new THREE.BufferAttribute(vertexes, 3))

  // 初始化材质信息与点云
  for (let i = 0; i < parameters.length; i++) {
    const color = parameters[i][0]
    const texture = parameters[i][1]
    const size = parameters[i][2]

    materials[i] = new THREE.PointsMaterial({
      color: new THREE.Color().setHSL(color[0], color[1], color[2]),
      size,
      map: texture,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
    })

    const spritesCloud = new THREE.Points(bufferGeo, materials[i])
    spritesCloud.rotation.set(random() * 6, random() * 6, random() * 6) // 给点云一个随机旋转角度，营造乱序氛围
    scene.add(spritesCloud)
  }
}
// three初始化
function initTHREE() {
  scene = new THREE.Scene()
  const { width: w, height: h } = canvasCon.value!.getBoundingClientRect()
  width = w
  height = h

  camera = new THREE.PerspectiveCamera(75, width / height, 1, 2000)
  camera.position.z = 1000
  renderer = new THREE.WebGLRenderer({
    canvas: canvasDom.value,
    antialias: true,
  })
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio)
  // window.addEventListener('resize', onWindowResize)
  // scene.add(new THREE.AxesHelper(1000))
  scene.add(new THREE.AmbientLight(0x404040))
  // stats = Stats()
  // canvasCon.value!.append(stats.dom)
  // orbitControls = new OrbitControls(camera, renderer.domElement)
  // orbitControls.object.position.set(10, 10, 10)
  // orbitControls.target = new THREE.Vector3(0, 0, 0)
  // orbitControls.update()
}
let animateId = 0
// 绘制
function render() {
  // stats.update()
  animate()
  renderer.render(scene, camera)
  animateId = requestAnimationFrame(render)
}
onUnmounted(() => {
  cancelAnimationFrame(animateId)
})
// 自适应
// function onWindowResize() {
//   const conInfo = canvasCon.value!.getBoundingClientRect()
//   width = conInfo.width
//   height = conInfo.height
//   camera.aspect = width / height
//   camera.updateProjectionMatrix()
//   renderer.setSize(width, height)
// }
</script>

<template>
  <div class="w-full h-full">
    <div ref="canvasCon" class="w-full h-full" @pointermove="updateMouse">
      <canvas ref="canvasDom" class="block w-full h-full" />
    </div>
  </div>
</template>
