<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const { floor, random } = Math
const con = ref<HTMLElement>()
const svgCon = ref<SVGElement>()
const settings = {
  size: 20, // 屏幕尺寸按着这个尺寸分割为cell
  wireMaxLen: 40, // 每条焊线的最大节点数，即长度
  stroke: '#81ecec', // 焊线和焊点的颜色
  bg: '#000', // pcb板的颜色
  pathBg: '#2d3436', // 动画path的背景色
  pathBloomLength: 10, // 动画path的小光点的长度
  bloomSpeed: 50, // 动画path的小光点的速度
  straightness: 2, // 线条直线度，数值越大，越趋向于直线
}
const bg = ref(settings.bg)

onMounted(() => {
  const { width, height } = con.value!.getBoundingClientRect()
  svgCon.value!.setAttribute('width', `${width}`)
  svgCon.value!.setAttribute('height', `${height}`)

  const rows = floor(height / settings.size)
  const cols = floor(width / settings.size)
  let availableNum = floor(rows * cols)
  const cells: Cell[] = []
  const cellsMap: { [k: string]: Cell } = {} // {'x,y': Cell}
  const wires: Wire[] = []
  // 方向是顺时针旋转定义的，反正只要连续的方向就行，为了给cell依次指定方向
  const dirs: Array<[number, number]> = [[0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1], [-1, 0], [-1, 1]]

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
      availableNum -= 1
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
      // 每个last节点尝试生成
      while (this.cells.length < settings.wireMaxLen) {
        const last = this.cells[this.cells.length - 1] // 当前线条的最后一个节点
        const tries = random() < 0.5 ? [0, 1, -1] : [0, -1, 1] // 线条生成的3个方向索引的增量选择集

        // 该节点尝试方向
        while (tries.length > 0) {
          // 对random()进行幂指处理，所得值会趋近于0,所以节点的生成方向增量趋近于0，越逼近于直线（straightness）
          let dirInd = last.dirInd + tries.splice(floor(random() ** settings.straightness * tries.length), 1)[0]
          dirInd = dirInd < 0 ? 8 + dirInd : dirInd % 8
          const dir = dirs[dirInd]

          const x = last.x + dir[0]
          const y = last.y + dir[1]
          const index = y * cols + x
          const next = index >= 0 && index < cells.length ? cells[index] : false
          /**
           * x < 0 || x >= cols || y < 0 || y >= rows 方向越界
           * !next 边界情况下，index数组越界
           * !next.available next被占用
           * 线路交叉
           */
          if (x < 0 || x >= cols || y < 0 || y >= rows || !next || !next.available || !this.validNoCrossOver(last, dirInd))
            continue

          // ok
          next.available = false
          next.dirInd = dirInd
          availableNum -= 1
          this.cells.push(next)
          break
        }
        // 当前节点所有方向都试过，找不着
        if (tries.length === 0)
          break
      }
    }

    draw() {
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      const circle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      const circle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle')

      let d = '' // path的d属性
      const s = settings.size
      const r = random() * (s / 6) + s / 12

      circle1.setAttribute('r', `${r}`)
      circle2.setAttribute('r', `${r}`)
      circle1.setAttribute('stroke', settings.stroke)
      circle2.setAttribute('stroke', settings.stroke)
      circle1.setAttribute('stroke-width', `${r / 4}`)
      circle2.setAttribute('stroke-width', `${r / 2}`)
      const isFill = random() > 0.5
      circle1.setAttribute('fill', isFill ? settings.stroke : settings.bg)
      circle2.setAttribute('fill', isFill ? settings.stroke : settings.bg)
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
      // 在@keyframes中使用calc对css自定义变量进行计算有问题，动画不生效，在js里手动计算吧
      path.style.cssText = `
      --len: ${length}; 
      --len-1:${-length};
      --len_add_bloomLen:${length + settings.pathBloomLength};
      --animate-time:${(length / settings.bloomSpeed).toFixed(1)}s
      `
      const isAnimated = random() > 0.5
      if (isAnimated) {
        const pathBg = path.cloneNode(false)
        path.setAttribute('stroke', settings.pathBg)
        svgCon.value?.append(pathBg)
      }
      path.classList.add(isAnimated ? 'animated-path-repeat' : 'animated-path-once')
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

  while (wires.length < availableNum) {
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
  <div ref="con" class="w-full h-full" :style="{ background: bg }">
    <svg ref="svgCon" class="block" xmlns="http://www.w3.org/2000/svg" version="1.1" />
  </div>
</template>

<!-- vue中动态添加类需要禁用scoped -->
<style lang="less">
@keyframes drawLine-once {
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes drawLine-repeat {
  0% {
    stroke-dashoffset: var(--len-1);
  }

  100% {
    stroke-dashoffset: var(--len_add_bloomLen);
  }
}

.animated-path-once {
  stroke-dasharray: var(--len), var(--len);
  stroke-dashoffset: var(--len);
  animation: drawLine-once 0.5s ease-in forwards;
}

.animated-path-repeat {
  stroke-dasharray: var(--len), 10;
  animation: drawLine-repeat var(--animate-time) linear infinite forwards;
}
</style>
