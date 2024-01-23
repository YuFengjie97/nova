<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import Delaunator from 'delaunator'
import { createNoise2D } from 'simplex-noise'
import { getTriangleCenter } from '@/utils/math'
import { type Vec3, initPalette, vec3ToRgb } from '@/utils/color'

const noise = createNoise2D()
const { random, sin } = Math
const canvas = ref<HTMLCanvasElement>()

const a: Vec3 = [1.000, 0.500, 0.500]
const b: Vec3 = [0.500, 0.500, 0.500]
const c: Vec3 = [0.750, 1.000, 0.667]
const d: Vec3 = [0.800, 1.000, 0.333]
const palette = initPalette(a, b, c, d)

onMounted(() => {
  if (!canvas.value)
    return

  const { width, height } = canvas.value.getBoundingClientRect()
  const ctx = canvas.value!.getContext('2d') as CanvasRenderingContext2D
  ctx.strokeStyle = 'transparent'
  canvas.value.width = width
  canvas.value.height = height
  const total = 300

  interface Point { x: number, y: number }
  const trianglePoints: Array<{
    p1: Point
    p2: Point
    p3: Point
  }> = []
  const triangleCenter: Array<Point> = []

  initTrianglePoints()
  function initTrianglePoints() {
    const coords = []
    for (let i = 0; i < total; i += 1) {
      const x = random() * width
      const y = random() * height
      coords.push(x, y)
    }
    const delaunay = new Delaunator(coords)
    const triangles = delaunay.triangles // triangles代表三角形顶点坐标在coords中的索引，三个一组

    for (let i = 0; i < triangles.length; i += 3) {
      const i1 = triangles[i]
      const i2 = triangles[i + 1]
      const i3 = triangles[i + 2]

      const p1 = { x: coords[i1 * 2], y: coords[i1 * 2 + 1] }
      const p2 = { x: coords[i2 * 2], y: coords[i2 * 2 + 1] }
      const p3 = { x: coords[i3 * 2], y: coords[i3 * 2 + 1] }

      const center = getTriangleCenter(p1, p2, p3)
      triangleCenter.push(center)
      trianglePoints.push({ p1, p2, p3 })
    }
  }

  function animate() {
    let t = performance.now() / 5000
    t = sin(t) + 1
    // ctx.fillStyle = 'rgba(0,0,0,0.2)'
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, width, height)

    trianglePoints.forEach(({ p1, p2, p3 }, i) => {
      ctx.beginPath()
      ctx.moveTo(p1.x, p1.y)
      ctx.lineTo(p2.x, p2.y)
      ctx.lineTo(p3.x, p3.y)
      ctx.lineTo(p1.x, p1.y)
      const color = vec3ToRgb(palette(noise(triangleCenter[i].x + t, triangleCenter[i].y + t)))
      ctx.strokeStyle = color
      ctx.fillStyle = color
      ctx.stroke()
      ctx.fill()
    })

    requestAnimationFrame(animate)
  }
  animate()
})
</script>

<template>
  <div class="w-full h-full">
    <canvas ref="canvas" class="block w-full h-full" />
  </div>
</template>
