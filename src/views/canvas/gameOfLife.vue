<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { initStats } from '@/hooks/initStats'

const { floor, random, abs } = Math
const con = ref<HTMLElement>()
const canvas = ref<HTMLCanvasElement>()
let animateId = 0

onMounted(async () => {
  const { width, height } = con.value!.getBoundingClientRect()
  canvas.value!.width = width
  canvas.value!.height = height
  const ctx = canvas.value!.getContext('2d')!

  const { stats } = initStats(con.value!)
  const size = 20
  const rows = floor(height / size)
  const cols = floor(width / size)

  const dirs = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]]

  const cellMap: {
    [k in string]: Cell
  } = {}

  function drawGrid() {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')!
    ctx.lineWidth = 0.5
    ctx.strokeStyle = '#000'
    for (let x = 0; x < cols; x += 1) {
      ctx.beginPath()
      ctx.moveTo(x * size, 0)
      ctx.lineTo(x * size, height)
      ctx.stroke()
    }
    for (let y = 0; y < rows; y += 1) {
      ctx.beginPath()
      ctx.moveTo(0, y * size)
      ctx.lineTo(width, y * size)
      ctx.stroke()
    }
    return canvas
  }
  const gridCanvas = drawGrid()

  class Cell {
    x: number
    y: number
    isAlive: boolean
    neighborNum: number = 0
    constructor(x: number, y: number, isAlive: boolean) {
      this.x = x
      this.y = y
      this.isAlive = isAlive
    }

    updateNeighborNum() {
      this.neighborNum = 0
      dirs.forEach(([dx, dy]) => {
        const nx = this.x + dx
        const ny = this.y + dy
        if (nx < 0 || nx >= cols || ny < 0 || ny >= rows)
          return
        if (cellMap[`${nx},${ny}`].isAlive)
          this.neighborNum += 1
      })
    }

    update() {
      this.updateNeighborNum()
      if (this.isAlive && this.neighborNum < 2)
        this.isAlive = false
      if (this.isAlive && this.neighborNum >= 2 && this.neighborNum <= 3)
        this.isAlive = true
      if (this.isAlive && this.neighborNum > 3)
        this.isAlive = false
      if (!this.isAlive && this.neighborNum === 3)
        this.isAlive = true
    }

    draw() {
      if (this.isAlive)
        ctx.fillStyle = '#000'
      else
        ctx.fillStyle = '#fff'
      ctx.fillRect(this.x * size, this.y * size, size, size)
    }
  }

  function initCell() {
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        const cell = new Cell(x, y, false)
        cellMap[`${x},${y}`] = cell

        // const isCenter = abs(x - cols / 2) < cols / 4 && abs(y - rows / 2) < rows / 4
        // const isAlive = random() < 0.05 && isCenter
        cell.isAlive = false
      }
    }
  }
  initCell()

  let isMouseDown = false
  canvas.value?.addEventListener('mousedown', () => isMouseDown = true)
  canvas.value?.addEventListener('mouseup', () => isMouseDown = false)
  canvas.value?.addEventListener('click', (e) => {
    const { clientX, clientY } = e
    const x = floor(clientX / size)
    const y = floor(clientY / size)
    cellMap[`${x},${y}`].isAlive = !cellMap[`${x},${y}`].isAlive
  })

  let isUpdate = false
  document.addEventListener('keyup', (event) => {
    if (event.code === 'Space')
      isUpdate = !isUpdate
  })

  const fps = 60
  const spf = 1000 / fps
  let lastTime = 0
  function animate(timestamp: number) {
    ctx.clearRect(0, 0, width, height)
    ctx.drawImage(gridCanvas, 0, 0, width, height)
    // const timestamp = performance.now()
    if (timestamp - lastTime > spf) {
      stats.update()
      for (const k in cellMap) {
        isUpdate && cellMap[k].update()
        cellMap[k].draw()
      }
      lastTime = timestamp
    }
    animateId = requestAnimationFrame(animate)
  }
  requestAnimationFrame(animate)
})
onUnmounted(() => {
  cancelAnimationFrame(animateId)
})
</script>

<template>
  <div ref="con" class="w-full h-full">
    <canvas ref="canvas" class="block w-full h-full" />
  </div>
</template>

<style lang='less' scoped>
.view-con{}
</style>
