<template>
  <div class="maze flex justify-center items-center">
    <Card class="card">
      <P5Con :sketch="sketch" />
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/Card.vue'
import P5Con from '@/components/P5Con.vue'
import p5 from 'p5'
import { ref } from 'vue'
const { floor, ceil, random } = Math

const con = ref()

let width = 800
let height = 600
const cellSize = 20
const row = floor(width / cellSize) - 1
const col = floor(height / cellSize) - 1
let cells: Array<Array<Cell>> = []
const bgColor = '#2980b9'
const wallColor = '#fdcb6e'
const currentColor = '#d63031'
const pathColor = '#c0392b'

class Cell {
  $p: p5
  x: number
  y: number
  isWall: Array<boolean>
  visited: boolean

  constructor($p: p5, x: number, y: number) {
    this.$p = $p
    // 左上角坐标,不是画布坐标
    this.x = x
    this.y = y
    this.isWall = [true, true, true, true] // 上右下左
    this.visited = false
  }

  // 获取没有被访问的邻居,随机返回其中一个
  getNeighbor() {
    let ans = []
    let directs = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ]
    for (let i = 0; i < 4; i++) {
      let [dx, dy] = directs[i]
      let nx = this.x + dx
      let ny = this.y + dy
      if (nx < 0 || nx >= row) continue
      if (ny < 0 || ny >= col) continue
      if (!cells[nx][ny].visited) {
        ans.push(cells[nx][ny])
      }
    }
    if (ans.length > 0) {
      return ans[floor(random() * ans.length)]
    } else {
      return null
    }
  }
  highlight() {
    this.$p.fill(currentColor)
    this.$p.noStroke()
    this.$p.rect(this.x * cellSize, this.y * cellSize, cellSize, cellSize)
  }

  draw() {
    let canvasX = this.x * cellSize + 4
    let canvasY = this.y * cellSize + 4

    this.$p.stroke(wallColor)
    this.$p.strokeWeight(4)
    this.$p.strokeCap(this.$p.SQUARE)
    this.$p.strokeJoin(this.$p.MITER)
    if (this.isWall[0]) {
      this.$p.line(canvasX, canvasY, canvasX + cellSize, canvasY)
    }
    if (this.isWall[1]) {
      this.$p.line(
        canvasX + cellSize,
        canvasY,
        canvasX + cellSize,
        canvasY + cellSize
      )
    }
    if (this.isWall[2]) {
      this.$p.line(
        canvasX + cellSize,
        canvasY + cellSize,
        canvasX,
        canvasY + cellSize
      )
    }
    if (this.isWall[3]) {
      this.$p.line(canvasX, canvasY + cellSize, canvasX, canvasY)
    }
    if (this.visited) {
      this.$p.noStroke()
      this.$p.fill(pathColor)
      this.$p.rect(canvasX, canvasY, cellSize, cellSize)
    }
  }
}

function initCells($p: p5) {
  cells = []
  for (let i = 0; i < row; i++) {
    let rowArr = []
    for (let j = 0; j < col; j++) {
      const cell = new Cell($p, i, j)
      rowArr.push(cell)
    }
    cells.push(rowArr)
  }
}
function breakWall(curCell: Cell, neiCell: Cell) {
  let dx = neiCell.x - curCell.x
  let dy = neiCell.y - curCell.y
  if (dx > 0) {
    // 打破右边(相对当前节点来说)的墙
    curCell.isWall[1] = false
    neiCell.isWall[3] = false
  } else if (dx < 0) {
    //破左
    curCell.isWall[3] = false
    neiCell.isWall[1] = false
  }
  if (dy > 0) {
    //破下
    curCell.isWall[2] = false
    neiCell.isWall[0] = false
  } else if (dy < 0) {
    //破上
    curCell.isWall[0] = false
    neiCell.isWall[2] = false
  }
}

let stack: Array<Cell> = []
let current: Cell

function sketch($p: p5) {
  $p.setup = function () {
    $p.createCanvas(width, height)
    $p.background(bgColor)
    $p.frameRate(60)

    initCells($p)
    stack.push(cells[0][0])
  }

  $p.draw = function () {
    // 绘制背景,所有cell状态
    cells.forEach((row) => {
      row.forEach((cell) => {
        cell.draw()
      })
    })
    /**
     * dfs算法
     *  1.Choose the initial cell, mark it as visited and push it to the stack
        2.While the stack is not empty
          1.Pop a cell from the stack and make it a current cell
          2.If the current cell has any neighbours which have not been visited
            1.Push the current cell to the stack
            2.Choose one of the unvisited neighbours
            3.Remove the wall between the current cell and the chosen cell
            4.Mark the chosen cell as visited and push it to the stack
     */
    if (stack.length > 0) {
      current = stack.pop()!
      current.highlight()
      current.visited = true
      const next = current.getNeighbor()
      if (next) {
        stack.push(current)
        breakWall(current, next)
        next.visited = true
        stack.push(next)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.maze {
  height: 100%;
  .card {
    padding: 10px;
    width: 800px;
    height: 600px;
    background: #2980b9;
  }
}
</style>
