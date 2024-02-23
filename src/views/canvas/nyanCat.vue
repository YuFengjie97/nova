<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Vector2 } from 'three'
import { createNoise2D } from 'simplex-noise'
import { initStats } from '@/hooks/initStats'
import { createImgCanvasIdle } from '@/utils/canvas'
import picCat from '@/assets/img/nyan-cat.png'

const noise = createNoise2D()
const { floor, random } = Math
const con = ref<HTMLElement>()
const canvas = ref<HTMLCanvasElement>()

const curveWidth = 20
const yRange = 20 // 屏幕左侧中点指向鼠标位置的向量“左右”(垂直方向的向量)取点范围
const xRange = 40 // 每隔多少距离取点

let animateId = 0
let timer: NodeJS.Timer
onMounted(async () => {
  const { width, height } = con.value!.getBoundingClientRect()
  canvas.value!.width = width
  canvas.value!.height = height
  const ctx = canvas.value!.getContext('2d')!

  const { stats } = initStats(con.value!)
  const mouse = new Vector2(width / 2, height / 2)
  canvas.value!.addEventListener('mousemove', (event: MouseEvent) => {
    const { clientX, clientY } = event
    mouse.x = clientX
    mouse.y = clientY
  })

  // nyancat pic尺寸
  const scale = 105 / 68
  const catCanvasH = curveWidth * 9 // 按理说应该是*6但是我的彩虹猫的图片尺寸有点小
  const catCanvasW = catCanvasH * scale

  class Curve {
    points: Array<Vector2> = []
    color: string = '#fff'
    constructor(color: string) {
      this.color = color
    }

    draw() {
      ctx.beginPath()
      ctx.moveTo(this.points[0].x, this.points[0].y)
      for (let i = 1; i < this.points.length - 1; i += 1) {
        const cur = this.points[i]
        const next = this.points[i + 1]
        const center = new Vector2().copy(cur).add(next).multiplyScalar(0.5)
        ctx.quadraticCurveTo(cur.x, cur.y, center.x, center.y)
      }
      const last = this.points[this.points.length - 1]
      ctx.lineTo(last.x, last.y)
      const start = this.points[0]
      const end = this.points[this.points.length - 1]
      const gradient = ctx.createLinearGradient(start.x, start.y, end.x, end.y)
      gradient.addColorStop(0, 'transparent')
      gradient.addColorStop(0.5, this.color)
      gradient.addColorStop(1, this.color)
      ctx.strokeStyle = gradient
      ctx.stroke()
    }
  }
  class Rainbow {
    points: Array<Vector2> = []
    curves: Array<Curve> = []
    noiseXRatio = 1
    colors = ['#e12523', '#dc8d30', '#deeb44', '#01eb3e', '#138ee9', '#7127ee']
    catCanvas: HTMLCanvasElement
    constructor(catCanvas: HTMLCanvasElement) {
      this.catCanvas = catCanvas
      for (let i = 0; i < this.colors.length; i += 1) {
        const curve = new Curve(this.colors[i])
        this.curves.push(curve)
      }
    }

    updateCurvePoints() {
      this.curves.forEach((c, ci, carr) => {
        c.points = this.points.map((p) => {
          return new Vector2(p.x, p.y + (ci - carr.length / 2) * curveWidth + curveWidth / 2)
        })
        const tail = new Vector2(mouse.x, mouse.y + (ci - carr.length / 2) * curveWidth + curveWidth / 2)
        c.points.push(tail)
      })
    }

    update(t: number) {
      this.points.length = 0
      const yStart = mouse.y - yRange
      for (let x = -xRange; x < mouse.x - catCanvasW / 2; x += xRange) {
        // const x = noise(x + t, 0)
        const y = yStart + noise(x * 0.01 + t * 2, 0) * yRange * 2
        this.points.push(new Vector2(x, y))
      }
      this.updateCurvePoints()
    }

    draw() {
      this.curves.forEach(c => c.draw())
      ctx.drawImage(this.catCanvas, mouse.x - catCanvasW / 2, mouse.y - catCanvasH / 2)
    }
  }

  const { canvas: catCanvas, timer: tim } = await createImgCanvasIdle({ w: catCanvasW, h: catCanvasH }, picCat, 6)

  const rainbow = new Rainbow(catCanvas)
  timer = tim

  function animate() {
    ctx.fillStyle = '#000'
    ctx.fillRect(0, 0, width, height)
    ctx.lineWidth = curveWidth

    const t = performance.now() / 1000
    rainbow.update(t)
    rainbow.draw()
    stats.update()
    animateId = requestAnimationFrame(animate)
  }

  animate()
})
onUnmounted(() => {
  cancelAnimationFrame(animateId)
  clearInterval(timer)
})
</script>

<template>
  <div ref="con" class="w-full h-full">
    <canvas ref="canvas" class="block w-full h-full" />
  </div>
</template>
