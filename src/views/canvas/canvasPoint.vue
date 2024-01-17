<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { createNoise3D } from 'simplex-noise'
import pic from '@/assets/img/disco_kim.jpg'
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
  function loadImg(): Promise<number> {
    return new Promise((resolve) => {
      const img = new Image()
      img.src = pic
      img.onload = () => {
        const hw = img.height / img.width
        const h = Math.floor(w * hw)

        canvas.value!.width = w
        canvas.value!.height = h
        canvas2.value!.width = w
        canvas2.value!.height = h

        ctx.drawImage(img, 0, 0, w, h)
        resolve(h)
      }
    })
  }
  const h = await loadImg()

  const imgData = ctx.getImageData(0, 0, w, h).data

  const sampletep = 6 // 取样跨度

  const rList: Array<{ x: number, y: number }> = []
  for (let y = 0; y < h; y += sampletep) {
    for (let x = 0; x < w; x += sampletep) {
      const i = (y * w + x) * 4
      const r = imgData[i] / 255
      const g = imgData[i + 1] / 255
      const b = imgData[i + 2] / 255

      const gray = 0.299 * r + 0.578 * g + 0.114 * b

      if (gray > 0.4)
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
  <div ref="con" class="w-full bg-#000 flex items-center">
    <canvas ref="canvas" class="block w-50%" />
    <canvas ref="canvas2" class="block w-50%" />
  </div>
</template>
