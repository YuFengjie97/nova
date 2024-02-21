<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { initGUI } from '@/hooks/initGUI'

const { floor, random, PI } = Math
const canvas = ref<HTMLCanvasElement>()
const con = ref<HTMLElement>()
const settings = {
  size: 10,
  leave: 2,
  wireMaxLen: 20,
}

onMounted(() => {
  const gui = initGUI(con.value!)

  const { width, height } = canvas.value!.getBoundingClientRect()
  canvas.value!.width = width
  canvas.value!.height = height
  const ctx = canvas.value!.getContext('2d')!
  ctx.fillStyle = '#10ac84'
  ctx.strokeStyle = '#ff9f43'
  ctx.lineWidth = settings.size / 4
  ctx.fillRect(0, 0, width, height)

  const rows = floor(height / settings.size)
  const cols = floor(width / settings.size)
  const wireNum = floor(rows * cols / (settings.wireMaxLen + settings.leave))
  const cells: Cell[] = []
  const cellsMap: { [k: string]: Cell } = {} // {'x,y': Cell}
  const wires: Wire[] = []
  // 方向是顺时针旋转定义的，反正只要连续的方向就行，为了给cell依次指定方向
  const dirs = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]]
  const tryMax = dirs.length

  class Cell {
    x = 0
    y = 0
    available = true
    dirInd = floor(random() * dirs.length) // 该节点会往哪个方向延申
    constructor(x: number, y: number) {
      this.x = x
      this.y = y
    }
  }

  class Wire {
    cells: Cell[] = []
    constructor(start: Cell) {
      start.available = false
      this.cells.push(start)
    }

    validNoCrossOver(c1: Cell, dirInd: number) {
      // 水平垂直肯定不会交叉
      if ([0, 2, 4, 6].includes(dirInd))
        return true
      // 1-tr,3-br,5-bl,7-tl这四个方向会触发交叉重叠判断
      if (dirInd === 1) {
        // 在一些边界中，c3和c4根本不存在，所以不会交叉
        const c3 = cellsMap[`${c1.x},${c1.y - 1}`]?.available ?? true
        const c4 = cellsMap[`${c1.x + 1},${c1.y}`]?.available ?? true
        if (c3 && c4)
          return true
      }
      if (dirInd === 3) {
        const c3 = cellsMap[`${c1.x + 1},${c1.y}`]?.available ?? true
        const c4 = cellsMap[`${c1.x},${c1.y + 1}`]?.available ?? true
        if (c3 && c4)
          return true
      }
      if (dirInd === 5) {
        const c3 = cellsMap[`${c1.x - 1},${c1.y}`]?.available ?? true
        const c4 = cellsMap[`${c1.x},${c1.y + 1}`]?.available ?? true
        if (c3 && c4)
          return true
      }
      if (dirInd === 7) {
        const c3 = cellsMap[`${c1.x - 1},${c1.y}`]?.available ?? true
        const c4 = cellsMap[`${c1.x},${c1.y - 1}`]?.available ?? true
        if (c3 && c4)
          return true
      }
      return false
    }

    generate() {
      let hasSpace = true
      while (this.cells.length < settings.wireMaxLen && hasSpace) {
        hasSpace = true

        let dirInc = 0
        let tryNum = 0
        while (tryNum < tryMax) {
          const last = this.cells[this.cells.length - 1]
          const dirInd = (last.dirInd + dirInc) % 8

          const dir = dirs[dirInd]
          const x = last.x + dir[0]
          const y = last.y + dir[1]
          const index = y * cols + x
          // 方向越界
          if (x < 0 || x >= cols || y < 0 || y >= rows || index < 0 || index >= cells.length) {
            dirInc += 1
            tryNum += 1
            continue
          }
          const next = cells[index]
          // 节点占用
          if (!next.available) {
            dirInc += 1
            tryNum += 1
            continue
          }
          // 线路交叉判断
          if (!this.validNoCrossOver(last, dirInd)) {
            dirInc += 1
            tryNum += 1
            continue
          }

          // ok
          next.available = false
          next.dirInd = dirInd
          this.cells.push(next)
          dirInc = 0
          tryNum = 0
          break
        }
        // 所有方向都试过，不成立
        if (tryNum === tryMax) {
          hasSpace = false
          dirInc = 0
          tryNum = 0
        }
      }
    }

    update() {}
    draw() {
      ctx.beginPath()
      const start = this.cells[0]
      const end = this.cells[this.cells.length - 1]
      const s = settings.size
      ctx.moveTo(start.x * s + s / 2, start.y * s + s / 2)
      for (let i = 1; i < this.cells.length; i++)
        ctx.lineTo(this.cells[i].x * s + s / 2, this.cells[i].y * s + s / 2)
      ctx.stroke()
      ctx.fillStyle = '#fff'
      ctx.beginPath()
      ctx.arc(start.x * s + s / 2, start.y * s + s / 2, settings.size / 4, 0, PI * 2)
      ctx.fill()
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(end.x * s + s / 2, end.y * s + s / 2, settings.size / 4, 0, PI * 2)
      ctx.fill()
      ctx.stroke()
    }
  }

  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < cols; x += 1) {
      const cell = new Cell(x, y)
      cells.push(cell)
      cellsMap[`${x},${y}`] = cell
    }
  }

  while (wires.length < wireNum) {
    const cell = cells[floor(random() * cells.length)]
    if (!cell.available)
      continue

    const wire = new Wire(cell)
    wires.push(wire)
    wire.generate()

    wire.draw()
  }
})
</script>

<template>
  <div ref="con" class="w-full h-full">
    <canvas ref="canvas" class="block w-full h-full" />
  </div>
</template>
