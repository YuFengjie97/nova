<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import Delaunator from 'delaunator'
import { gsap } from 'gsap'
import { Vector2 } from 'three'
import { getTriangleCenter } from '@/utils'
import pic from '@/assets/img/disco_communism.jpg'

const { random, sqrt } = Math

const pointsNum = 30
const triangles: Array<{
  p1: Vector2
  p2: Vector2
  p3: Vector2
}> = []
const clips = ref<string[]>([])
const picCon = ref<HTMLElement>()
const img = ref<HTMLImageElement>()
const imgs = ref<HTMLImageElement[]>([])
const randomStates: Array<{ x: number, y: number, z: number, rx: number, ry: number }> = []

function getImgWH(): Promise<{ width: number, height: number }> {
  return new Promise((resolve) => {
    img.value!.onload = () => {
      const { width, height } = img.value!.getBoundingClientRect()

      resolve({ width, height })
    }
  })
}

onMounted(async () => {
  if (!picCon.value)
    return

  const { width, height } = await getImgWH()
  const o = new Vector2(width / 2, height / 2)

  getTriangles()
  setTimeout(() => {
    initGsap()
  }, 1000)

  function getTriangles() {
    // 根据容器尺寸生成一组分布比较平均的坐标
    const coords: Vector2[] = []
    const xn = sqrt(pointsNum)
    const yn = pointsNum / xn
    const xStep = width / xn
    const yStep = height / yn
    for (let x = 0; x < width; x += xStep) {
      for (let y = 0; y < height; y += yStep) {
        const coord = new Vector2(random() * xStep + x, random() * yStep + y)
        coords.push(coord)
      }
    }

    // 坐标-->三角
    const delaunay = Delaunator.from(coords.map(item => [item.x, item.y]))
    const triangleInds = delaunay.triangles

    for (let i = 0; i < triangleInds.length; i += 3) {
      const p1 = coords[triangleInds[i]]
      const p2 = coords[triangleInds[i + 1]]
      const p3 = coords[triangleInds[i + 2]]
      triangles.push({ p1, p2, p3 })
      const clip = `clip-path: polygon(${p1.x}px ${p1.y}px,${p2.x}px ${p2.y}px,${p3.x}px ${p3.y}px)`
      clips.value.push(clip)

      // 根据三角形中心点与容器中心点初始化动画目标状态
      const t = getTriangleCenter(p1, p2, p3)
      const ot = t.sub(o)
      const d = ot.length() / new Vector2(width / 2, height / 2).length()

      const otxy = new Vector2().copy(ot.normalize()).multiply(new Vector2(0.3, 0.3))
      const x = otxy.x * width / 2
      const y = otxy.y * height / 2
      const z = d * 200
      const rx = otxy.x * 200
      const ry = otxy.y * 200
      randomStates.push({ x, y, z, rx, ry })
    }
  }

  function initGsap() {
    randomStates.forEach((item, i) => {
      // gsap.fromTo(item, { xPercent: -50, yPercent: -50 }, { x: randomPos[i].x, y: randomPos[i].y, duration: 3, repeat: -1, yoyo: true })
      const { x, y, z, rx, ry } = item

      const tl = gsap.timeline({
        repeat: -1,
      })
      const dom = imgs.value[i]
      const isR = random() > 0.8
      tl.to(dom, { x, y, z, rotateX: isR ? rx : 0, rotateY: isR ? ry : 0, duration: 4, ease: 'elastic.out' })
      tl.to(dom, { x, y, z, rotateX: isR ? rx : 0, rotateY: isR ? ry : 0, duration: 0.5 }, '>')
      tl.to(dom, { x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, duration: 4, ease: 'elastic.out' }, '>')
      tl.to(dom, { x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, duration: 1.5 }, '>')
    })
  }
})
</script>

<template>
  <div class="w-full h-full flex justify-center bg-#c23616 overflow-hidden">
    <div ref="picCon" class="pic-con relative h-full">
      <img ref="img" class="relative z--1 invisible block h-full" :src="pic">
      <img
        v-for="(item, i) in clips" ref="imgs" :key="i" :style="[item]"
        class="absolute top-0 left-0 block h-full" :src="pic"
      >
    </div>
  </div>
</template>

<style lang='less' scoped>
.pic-con {
  transform-style: preserve-3d;
  perspective: 800px;
  perspective-origin: center;
}
</style>
