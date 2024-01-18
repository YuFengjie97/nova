<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { Vector } from 'p5'
import { createNoise3D } from 'simplex-noise'
import { useGUI } from '@/hooks/useGUI'
import { useStats } from '@/hooks/useStats'

import { map } from '@/utils'

const noise3D = createNoise3D()

const con = ref<HTMLElement>()
const canvas = ref<HTMLCanvasElement>()
let hueBase = 300
let hueRange = 360
let lineWidth = 10
let cellSize = 30
let lineLen = lineWidth * 10
let width = 0
let height = 0
let ctx: CanvasRenderingContext2D
let rows = 0
let cols = 0
let xInc = 0.001
let yInc = 0.001
let zInc = 0.004
let isGlow = false

const ui = {
  hueBase,
  hueRange,
  lineWidth,
  cellSize,
  lineLen,
  xInc,
  yInc,
  zInc,
  isGlow,
}

let animateId = 0
onUnmounted(() => {
  cancelAnimationFrame(animateId)
})
onMounted(() => {
  function init() {
    const { width: w, height: h } = con.value!.getBoundingClientRect()
    width = w
    height = h

    canvas.value!.width = w
    canvas.value!.height = h
    ctx = canvas.value!.getContext('2d')!
    rows = Math.ceil(h / cellSize)
    cols = Math.ceil(w / cellSize)

    ctx.lineCap = 'round'
    ctx.lineWidth = lineWidth
  }
  init()

  const cells: Cell[] = []

  function windowResize() {
    let timer: null | NodeJS.Timeout = null
    return () => {
      if (timer)
        clearTimeout(timer)

      timer = setTimeout(() => {
        init()
        cells.length = 0
        initCells()
      }, 700)
    }
  }
  window.addEventListener('resize', windowResize())

  function initUi() {
    const { gui: panel } = useGUI(con.value!)
    panel.add(ui, 'hueBase', 1, 360, 1).onChange(val => hueBase = val)
    panel.add(ui, 'hueRange', 1, 360, 1).onChange(val => hueRange = val)
    panel.add(ui, 'isGlow').name('isGlow(laggy)').onChange(val => isGlow = val)

    panel.add(ui, 'cellSize', 10, 60, 1).name('cellSize(careful)').onChange((val) => {
      cellSize = val
      cells.length = 0
      rows = Math.ceil(height / cellSize)
      cols = Math.ceil(width / cellSize)
      initCells()
    })
    panel.add(ui, 'lineWidth', 1, 20, 1).onChange((val) => {
      lineWidth = val
      ctx.lineWidth = lineWidth
    })
    panel.add(ui, 'lineLen', 1, 200, 1).onChange(val => lineLen = val)
    panel.add(ui, 'xInc', 0.001, 0.01, 0.001).onChange(val => xInc = val)
    panel.add(ui, 'yInc', 0.001, 0.01, 0.001).onChange(val => yInc = val)
    panel.add(ui, 'zInc', 0.001, 0.01, 0.001).onChange(val => zInc = val)
  }
  initUi()

  class Cell {
    end = new Vector(0, 0)
    pos: Vector
    hue = 0
    xOff = 0
    yOff = 0
    zOff = 0
    constructor(pos: Vector) {
      this.pos = pos
      this.xOff = map(pos.x, 0, width, 0, 1)
      this.yOff = map(pos.y, 0, width, 0, 1)
      this.zOff = map(Math.sqrt(this.xOff + this.yOff), 0, 2, 0, 1)
    }

    draw() {
      ctx.beginPath()
      ctx.moveTo(this.pos.x, this.pos.y)
      ctx.lineTo(this.end.x, this.end.y)
      const { hsl, grad } = this.getColor()
      ctx.strokeStyle = grad
      if (isGlow) {
        ctx.shadowColor = hsl
        ctx.shadowBlur = lineWidth / 2
      }
      else {
        ctx.shadowBlur = 0
      }
      ctx.stroke()
    }

    getColor() {
      this.hue = Math.floor(map(this.getNoiseXYZ(), -1, 1, hueBase - hueRange, hueBase + hueRange))

      const grad = ctx.createLinearGradient(this.pos.x, this.pos.y, this.end.x, this.end.y)
      grad.addColorStop(0, `hsla(${this.hue}, 100%, 50%, 0)`)
      grad.addColorStop(1, `hsla(${this.hue}, 100%, 50%, 1)`)
      return {
        hsl: `hsla(${this.hue}, 100%, 50%, 1)`,
        grad,
      }
    }

    getNoiseXYZ() {
      return noise3D(this.xOff, this.yOff, this.zOff)
    }

    update() {
      const n = this.getNoiseXYZ()
      const a = map(n, -1, 1, 0, Math.PI * 4)
      const len = map(n, -1, 1, 0.1, lineLen)

      this.end = this.pos.copy().add(Vector.fromAngle(a, len))
      this.xOff += xInc
      this.yOff += yInc
      this.zOff += zInc
    }
  }

  function initCells() {
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++)
        cells.push(new Cell(new Vector(i * cellSize, j * cellSize)))
    }
  }

  const { stats } = useStats(con.value!)

  function animate() {
    stats.update()

    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = 'rgba(0,0,0,1)'
    ctx.fillRect(0, 0, width, height)
    cells.forEach((c) => {
      c.update()
      c.draw()
    })
    animateId = requestAnimationFrame(animate)
  }

  initCells()
  animate()
})
</script>

<template>
  <div ref="con" class="h-100vh w-full">
    <canvas ref="canvas" class="h-full w-full block" />
  </div>
</template>
