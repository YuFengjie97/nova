<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import Delaunator from 'delaunator'
import { gsap } from 'gsap'
import pic from '@/assets/img/disco_communism.jpg'

const { random, sqrt } = Math

const pointsNum = 30
const clips = ref<string[]>([])
const picCon = ref<HTMLElement>()
const img = ref<HTMLImageElement>()
const imgs = ref<HTMLImageElement[]>([])
const randomStates: Array<{ x: number, y: number, z: number, rx: number, ry: number, rz: number }> = []

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

  getTriangles()
  setTimeout(() => {
    initRandomStates()
    animate()
  }, 1000)

  function getTriangles() {
    const coords = []

    const xn = sqrt(pointsNum)
    const yn = pointsNum / xn
    const xStep = width / xn
    const yStep = height / yn
    for (let x = 0; x < width; x += xStep) {
      for (let y = 0; y < height; y += yStep) {
        const coord = [random() * xStep + x, random() * yStep + y]
        coords.push(coord)
      }
    }

    const delaunay = Delaunator.from(coords)
    const triangleInds = delaunay.triangles

    const res = []
    for (let i = 0; i < triangleInds.length; i += 3) {
      const p1 = coords[triangleInds[i]]
      const p2 = coords[triangleInds[i + 1]]
      const p3 = coords[triangleInds[i + 2]]
      const triangle = [p1, p2, p3]

      const clip = `clip-path: polygon(${p1[0]}px ${p1[1]}px,${p2[0]}px ${p2[1]}px,${p3[0]}px ${p3[1]}px)`
      clips.value.push(clip)
      res.push(triangle)
    }
  }

  function initRandomStates() {
    const { width, height } = picCon.value!.getBoundingClientRect()
    imgs.value.forEach(() => {
      randomStates.push({ x: random() * width - width / 2, y: random() * height - height / 2, z: random() * 800 - 400, rx: random() * 40, ry: random() * 40, rz: random() * 40 })
    })
  }

  function animate() {
    imgs.value.forEach((item, i) => {
      // gsap.fromTo(item, { xPercent: -50, yPercent: -50 }, { x: randomPos[i].x, y: randomPos[i].y, duration: 3, repeat: -1, yoyo: true })
      const { x, y, z, rx, ry, rz } = randomStates[i]
      const tl = gsap.timeline({
        repeat: -1,
      })
      tl.to(item, { x, y, z, rotateX: rx, rotateY: ry, rotateZ: rz, duration: 4, ease: 'elastic.out' })
      tl.to(item, { x, y, z, rotateX: rx, rotateY: ry, rotateZ: rz, duration: 0.5 }, '>')
      tl.to(item, { x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0, duration: 4, ease: 'elastic.out' }, '>')
      tl.to(item, { x: 0, y: 0, z: 0, rotateX: 0, rotateY: 0, rotateZ: 0, duration: 1.5 }, '>')
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
