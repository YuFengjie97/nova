<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import chroma from 'chroma-js'

import { initStats } from '@/hooks/initStats'

const { random, PI, min, abs, sqrt, floor, ceil, round } = Math
const palette = chroma.scale(['#ebedf0', '#27ae60'])
const snakeColor = '#8e44ad'

const cellSize = 40
const gap = 2
const radii = 10
const speed = 4
const tailMax = 5

const aliveLevelMax = 5

const con = ref<HTMLElement>()
const canvas = ref<HTMLCanvasElement>()

onMounted(() => {
  const { width, height } = con.value!.getBoundingClientRect()
  canvas.value!.width = width
  canvas.value!.height = height
  const ctx = canvas.value!.getContext('2d')!
  const { stats } = initStats(con.value!)
  const rows = floor(height / cellSize)
  const cols = floor(width / cellSize)

  class Cell {
    x = 0
    y = 0
    aliveLevel = 0
    constructor(x: number, y: number, aliveLevel: number) {
      this.x = x
      this.y = y
      this.aliveLevel = aliveLevel
    }

    draw() {
      // ctx.fillStyle = `rgba(0, 184, 148, ${this.aliveLevel / aliveLevelMax})`
      ctx.fillStyle = palette(this.aliveLevel / aliveLevelMax).css()
      const x = this.x * cellSize
      const y = this.y * cellSize
      ctx.beginPath()
      ctx.roundRect(x + gap, y + gap, cellSize - 2 * gap, cellSize - 2 * gap, radii)
      ctx.fill()
    }
  }

  const cells: {
    [k in string]: Cell
  } = {}
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const cell = new Cell(x, y, floor(random() * aliveLevelMax))
      cells[`${x},${y}`] = cell
    }
  }
  class Tail {
    // 0-tailMax，从头部到尾巴
    level = 0
    x = 0
    y = 0
    xInc = 0
    yInc = 0
    constructor(x: number, y: number, level: number) {
      this.x = x
      this.y = y
      this.level = level
    }

    updatateInc(xInc: number, yInc: number) {
      this.xInc = xInc
      this.yInc = yInc
    }

    update() {
      this.x += this.xInc * speed
      this.y += this.yInc * speed
    }

    draw() {
      ctx.fillStyle = snakeColor
      const factor = 0.4 + (tailMax - this.level) / tailMax * 0.4
      const w = cellSize * factor
      const h = cellSize * factor
      const x = this.x + (1 - factor) / 2 * cellSize
      const y = this.y + (1 - factor) / 2 * cellSize
      ctx.beginPath()
      ctx.roundRect(x, y, w, h, radii)
      ctx.fill()
    }
  }
  class Snake {
    // 在cellGrid的索引位置，整数
    xInd = floor(cols / 2)
    yInd = floor(rows / 2)
    // 画布位置
    x = this.xInd * cellSize
    y = this.yInd * cellSize
    // 最终目标索引位置
    xftInd = this.xInd - 2
    yftInd = this.yInd
    // 下个方向目标索引位置
    xdtInd = this.xInd - 1
    ydtInd = this.yInd
    // 下个方向的cell位置
    xdt = this.xdtInd * cellSize
    ydt = this.ydtInd * cellSize
    // 下个方向的增量
    xInc = -1
    yInc = 0
    done = false
    tails: Array<Tail> = []
    history: Array<{ xInc: number, yInc: number }> = [
      {
        xInc: this.xInc,
        yInc: this.yInc,
      },
    ] // 0~tailMax-1,头到尾巴

    constructor() {
      for (let i = 0; i < tailMax; i++) {
        const tail = new Tail(this.x, this.y, i)
        this.tails.push(tail)
      }
    }

    updateNextDir() {
      let xInc = this.xftInd - this.xInd
      let yInc = this.yftInd - this.yInd
      xInc = xInc > 0 ? 1 : xInc === 0 ? 0 : -1
      yInc = yInc > 0 ? 1 : yInc === 0 ? 0 : -1
      // 在方向是交叉方向时，改为随机选一个水平/垂直方向进行移动
      if (xInc !== 0 && yInc !== 0) {
        const XorY = random() < 0.5
        if (XorY)
          xInc = 0
        else
          yInc = 0
      }
      this.xInc = xInc
      this.yInc = yInc

      this.xdtInd = this.xInd + xInc
      this.ydtInd = this.yInd + yInc
      this.xdt = this.xdtInd * cellSize
      this.ydt = this.ydtInd * cellSize
    }

    // 随机从剩余存活cell中选择一个作为新的最终目标
    updateFinTar() {
      const aliveCells = Object.values(cells).filter(item => item.aliveLevel !== 0)
      if (aliveCells.length === 0) {
        this.done = true
        return
      }

      const cellFinTarget = aliveCells[floor(random() * aliveCells.length)]
      this.xftInd = cellFinTarget.x
      this.yftInd = cellFinTarget.y
    }

    eat() {
      // 抵达下个方向位置
      cells[`${this.xInd},${this.yInd}`].aliveLevel = 0

      // 抵达最终位置
      if (this.xftInd === this.xInd && this.yftInd === this.yInd) {
        this.updateFinTar()
        this.updateNextDir()
      }
      this.updateNextDir()
      this.updateHistory() // 更新history要在snake更新方向后
    }

    updateHistory() {
      if (this.history.length === tailMax + 1)
        this.history.pop()
      this.history.unshift({ xInc: this.xInc, yInc: this.yInc })

      this.tails.forEach((tail, i) => {
        if (i < this.history.length - 1) {
          const his = this.history[i + 1]
          tail.updatateInc(his.xInc, his.yInc)
        }
      })
    }

    update() {
      if (this.done)
        return

      this.x += this.xInc * speed
      this.y += this.yInc * speed
      // 根据画布位置，确定索引位置
      this.xInd = floor(this.x / cellSize)
      this.yInd = floor(this.y / cellSize)

      // 已经到达目标方向cell
      if (abs(this.xdt - this.x) < speed && abs(this.ydt - this.y) < speed)
        this.eat()

      this.tails.forEach((tail) => {
        tail.update()
      })

      // console.log(this.history.map(item => `${item.xInd},${item.yInd} --`).reduce((acc, cur) => acc + cur, ''))
    }

    draw() {
      ctx.fillStyle = snakeColor
      ctx.beginPath()
      ctx.roundRect(this.x + gap, this.y + gap, cellSize - 2 * gap, cellSize - 2 * gap, radii)
      ctx.fill()
      this.tails.forEach(tail => tail.draw())
    }
  }
  const snake = new Snake()

  function animate() {
    stats.update()
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, width, height)
    Object.values(cells).forEach(c => c.draw())
    snake.update()

    snake.draw()

    requestAnimationFrame(animate)
  }
  animate()
})
</script>

<template>
  <div ref="con" class="w-full h-full">
    <canvas ref="canvas" class="block w-full h-full" />
  </div>
</template>

<style>
.a{
  color: rgb(0, 184, 148);
}
</style>
