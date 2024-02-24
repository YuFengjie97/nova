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
const yRange = 30 // 屏幕彩虹左侧中点指向鼠标位置的向量“左右”(垂直方向的向量)取点范围，用来控制贝塞尔曲线是弯曲程度
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

  class Star {
    size = 10
    type: number = 0 // 0123对应4种状态
    pos: Vector2
    isLive = true
    lastTime = 0 // 上次更新type时间秒
    interval = 0.1 // 更新type间隔秒
    constructor() {
      this.pos = new Vector2(random() * width + width, random() * height)
      this.type = floor(random() * 4)
    }

    update(t: number) {
      if (t - this.lastTime > this.interval) {
        this.type = (this.type + 1) % 4
        this.lastTime = t
      }
      this.pos.x -= 10
      if (this.pos.x < -10)
        this.isLive = false
    }

    draw() {
      const p = this.pos
      const s = this.size
      ctx.fillStyle = '#fff'
      // 一个点
      if (this.type === 0)
        ctx.fillRect(this.pos.x, this.pos.y, this.size, this.size)

      // 十字
      if (this.type === 1) {
        ctx.fillRect(p.x, p.y, s, s)
        ctx.fillRect(p.x - s, p.y, s, s)
        ctx.fillRect(p.x + s, p.y, s, s)
        ctx.fillRect(p.x, p.y - s, s, s)
        ctx.fillRect(p.x, p.y + s, s, s)
      }
      // 长十字
      if (this.type === 2) {
        ctx.fillRect(p.x, p.y, s, s)
        ctx.fillRect(p.x - s, p.y, s, s)
        ctx.fillRect(p.x - 2 * s, p.y, s, s)
        ctx.fillRect(p.x + s, p.y, s, s)
        ctx.fillRect(p.x + 2 * s, p.y, s, s)
        ctx.fillRect(p.x, p.y - s, s, s)
        ctx.fillRect(p.x, p.y - 2 * s, s, s)
        ctx.fillRect(p.x, p.y + s, s, s)
        ctx.fillRect(p.x, p.y + 2 * s, s, s)
      }
      // 圆
      if (this.type === 3) {
        ctx.fillRect(p.x - 1.5 * s, p.y - 1.5 * s, s, s)
        ctx.fillRect(p.x + 1.5 * s, p.y + 1.5 * s, s, s)
        ctx.fillRect(p.x + 1.5 * s, p.y - 1.5 * s, s, s)
        ctx.fillRect(p.x - 1.5 * s, p.y + 1.5 * s, s, s)

        ctx.fillRect(p.x - 2 * s, p.y, s, s)
        ctx.fillRect(p.x + 2 * s, p.y, s, s)
        ctx.fillRect(p.x, p.y - 2 * s, s, s)
        ctx.fillRect(p.x, p.y + 2 * s, s, s)
      }
    }
  }

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

  const starNum = 10
  const stars: Array<Star> = []
  for (let i = 0; i < starNum; i++)
    stars.push(new Star())

  function animate() {
    const t = performance.now() / 1000 // 秒

    ctx.fillStyle = '#74b9ff'
    ctx.fillRect(0, 0, width, height)
    ctx.lineWidth = curveWidth

    rainbow.update(t)
    rainbow.draw()

    let i = 0
    while (i < starNum) {
      const s = stars[i]
      s.update(t)
      if (!s.isLive) {
        stars.splice(i, 1)
        stars.push(new Star())
      }
      else {
        s.draw()
        i++
      }
    }

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
