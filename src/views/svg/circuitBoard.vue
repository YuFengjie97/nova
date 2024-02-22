<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const { floor, random } = Math
const con = ref<HTMLElement>()
const svgCon = ref<SVGElement>()
const settings = {
  size: 6,
  leave: 10,
  wireMaxLen: 40,
  stroke: '#ff9f43',
  fill: '#10ac84',
}

onMounted(() => {
  const { width, height } = con.value!.getBoundingClientRect()
  svgCon.value!.setAttribute('width', `${width}`)
  svgCon.value!.setAttribute('height', `${height}`)

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

    draw() {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      const circle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      const circle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle')

      let d = ''
      const s = settings.size
      const r = random() * (s / 6) + s / 6

      circle1.setAttribute('r', `${r}`)
      circle2.setAttribute('r', `${r}`)
      circle1.setAttribute('stroke', `#fff`)
      circle2.setAttribute('stroke', `#fff`)
      circle1.setAttribute('fill', random() > 0.5 ? `#ff9f43` : '#10ac84')
      circle2.setAttribute('fill', random() > 0.5 ? `#ff9f43` : '#10ac84')
      for (let i = 0; i < this.cells.length; i += 1) {
        const cur = this.cells[i]
        if (i === 0) {
          d += `M ${cur.x * s + s / 2} ${cur.y * s + s / 2}`
          circle1.setAttribute('cx', `${cur.x * s + s / 2}`)
          circle1.setAttribute('cy', `${cur.y * s + s / 2}`)
        }

        if (i < this.cells.length)
          d += ` L ${cur.x * s + s / 2} ${cur.y * s + s / 2}`

        if (i === this.cells.length - 1) {
          circle2.setAttribute('cx', `${cur.x * s + s / 2}`)
          circle2.setAttribute('cy', `${cur.y * s + s / 2}`)
        }
      }

      path.setAttribute('d', d)
      path.setAttribute('fill', 'none')
      path.setAttribute('stroke', settings.stroke)
      path.setAttribute('stroke-width', `${r * 2}`)
      const length = path.getTotalLength()
      path.setAttribute('stroke-dasharray', `${length}, ${length}`)
      path.setAttribute('stroke-dashoffset', `${length}`)
      path.classList.add('animated-path')
      svgCon.value?.append(path)
      svgCon.value?.append(circle1)
      svgCon.value?.append(circle2)
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
  <div ref="con" class="w-full h-full bg-#10ac84">
    <svg ref="svgCon" class="block" xmlns="http://www.w3.org/2000/svg" version="1.1">
      <!-- <path class="animated-path" d="M 615 545 L 615 545 L 625 555 L 635 565 L 645 575 L 655 585 L 665 595 L 675 605 L 685 615 L 695 625 L 705 635 L 715 645 L 725 655 L 735 655 L 745 655 L 755 655 L 765 655 L 775 655 L 785 655 L 785 645 L 785 635" fill="none" stroke="#ff9f43" stroke-width="2.5" /> -->
    </svg>
  </div>
</template>

<!-- vue中动态添加类需要禁用scoped -->
<style lang="less">
@keyframes drawLine {
  100% {
    stroke-dashoffset: 0;
  }
}

.animated-path {
  animation: drawLine 1.5s linear forwards;
}
</style>
