<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { createNoise3D } from 'simplex-noise'
import pic from '@/assets/img/bg.png'
import { type Vec3, initPalette, map, vec3ToRgb } from '@/utils'

const con = ref<HTMLElement>()
const canvas = ref<HTMLCanvasElement>()
const canvas2 = ref<HTMLCanvasElement>()

const noise = createNoise3D()

const a: Vec3 = [0.500, 0.000, 0.500]
const b: Vec3 = [0.500, 0.000, 0.500]
const c: Vec3 = [0.500, 0.000, 0.500]
const d: Vec3 = [0.000, 0.000, 0.500]

const palette = initPalette(a, b, c, d)

onMounted(async () => {
  const { width } = con.value!.getBoundingClientRect()
  const ctx = canvas.value?.getContext('2d') as CanvasRenderingContext2D
  const ctx2 = canvas2.value?.getContext('2d') as CanvasRenderingContext2D
  const w = Math.floor(width / 2)

  canvas.value!.width = w
  canvas.value!.height = w
  canvas2.value!.width = w
  canvas2.value!.height = w

  function loadImg() {
    return new Promise((resolve) => {
    // pic正好时正方形，懒得自适配
      const img = new Image()
      img.src = pic
      img.onload = () => {
        ctx.drawImage(img, 0, 0, w, w)
        resolve(1)
      }
    })
  }
  await loadImg()

  const imgData = ctx.getImageData(0, 0, w, w).data

  const sampletep = 6 // 取样跨度

  const rList: Array<{ x: number, y: number }> = []
  for (let y = 0; y < w; y += sampletep) {
    for (let x = 0; x < w; x += sampletep) {
      const i = (y * w + x) * 4
      const r = imgData[i]
      // const g = imgData[i + 1]
      // const b = imgData[i + 2]

      if (r > 125)
        rList.push({ x, y })
    }
  }

  function draw() {
    const t = performance.now() / 1000

    ctx2.clearRect(0, 0, w, w)
    rList.forEach(({ x, y }) => {
      ctx2.fillStyle = vec3ToRgb(palette(noise(x * 0.005, y * 0.001, t)))
      ctx2.beginPath()
      ctx2.arc(x, y, 2, 0, Math.PI * 2)

      ctx2.fill()
    })
  }

  function animate() {
    draw()
    requestAnimationFrame(animate)
  }

  animate()
})
</script>

<template>
  <div ref="con" class="w-full h-full bg-#000 flex items-center">
    <canvas ref="canvas" class="block w-50%" />
    <canvas ref="canvas2" class="block w-50%" />
  </div>
</template>
