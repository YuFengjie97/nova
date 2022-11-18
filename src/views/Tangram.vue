<template>
  <div class="viewCon">
    <P5Con
      :setup="setup"
      :draw="draw"
      :mouse-pressed="mousePressed"
      :mouse-released="mouseReleased"
      :key-pressed="keyPressed"
    />
  </div>
</template>

<script lang="ts" setup>
import P5Con from '@/components/P5Con.vue'
import { pointInPolygon, centroid, rotateByPoint } from '@/utils'
import p5 from 'p5'

const { PI } = Math

let p: p5
let width: number
let height: number
let translateX: number
let translateY: number
let s = 400 //七巧板尺寸
let mouseX: number
let mouseY: number
let pressX: number
let pressY: number
let choseId: number | null = null
let angleInc: number = PI / 180

let shapes: {
  [id: string]: Shape
} = {}

// prettier-ignore
// let tangram:Array<{
//   id: number,
//   c: string,
//   center: Point,
//   ps: Array<Point>
// }> = [
//   // 以七巧板正中心为原点确认的坐标
//   {id: 1, c: '#cd9670', center: [0, 0], ps: [ [-s/2, -s/2], [-s/2,  s/2], [0,       0], [-s/2, -s/2] ]},
//   {id: 2, c: '#f4444a', center: [0, 0], ps: [ [-s/2,  s/2], [s/2 ,  s/2], [0,       0], [-s/2,  s/2] ]},
//   {id: 3, c: '#fd796d', center: [0, 0], ps: [ [-s/2, -s/2], [0   , -s/2], [-s/4, -s/4], [-s/2, -s/2] ]},
//   {id: 4, c: '#e7d02d', center: [0, 0], ps: [ [0   , -s/2], [-s/4, -s/4], [0,       0], [s/4 , -s/4], [0  , -s/2] ]},
//   {id: 5, c: '#f9b02d', center: [0, 0], ps: [ [s/4 , -s/4], [s/4 ,  s/4], [0,       0], [s/4 , -s/4] ]},
//   {id: 6, c: '#acc94a', center: [0, 0], ps: [ [s/4 , -s/4], [s/2 ,  0  ], [s/2,   s/2], [s/4 ,  s/4], [s/4, -s/4] ]},
//   {id: 7, c: '#59afcb', center: [0, 0], ps: [ [0   , -s/2], [s/2 , -s/2], [s/2,     0], [0   , -s/2] ]},
// ]
// prettier-ignore
let tangram:Array<{
  id: number,
  c: string,
  center: Point,
  ps: Array<Point>
}> = [
  // 以画布原点为基准
  {id: 1, c: '#cd9670', center: [0, 0], ps: [ [0, 0], [0,  s], [s/2,s/2], [0,0] ]},
  {id: 2, c: '#f4444a', center: [0, 0], ps: [ [0, s], [s , s], [s/2,s/2], [0,s] ]},
  {id: 3, c: '#fd796d', center: [0, 0], ps: [ [0, 0], [s/2,0], [s/4,s/4], [0,0] ]},
  {id: 4, c: '#e7d02d', center: [0, 0], ps: [ [s/2, 0], [s/4, s/4], [s/2, s/2], [s*3/4, s/4], [s/2,0] ]},
  {id: 5, c: '#f9b02d', center: [0, 0], ps: [ [s*3/4, s/4], [s*3/4, s*3/4], [s/2, s/2], [s*3/4, s/4] ]},
  {id: 6, c: '#acc94a', center: [0, 0], ps: [ [s*3/4, s/4], [s, s/2], [s, s], [s*3/4, s*3/4], [s*3/4, s/4] ]},
  {id: 7, c: '#59afcb', center: [0, 0], ps: [ [s/2, 0], [s, 0], [s, s/2 ], [s/2, 0] ]},
]

class Shape {
  id: number
  center: p5.Vector
  points: Array<p5.Vector>
  color: string
  prePos: p5.Vector | null = null
  curPos: p5.Vector = p.createVector(0, 0)
  angle: number = 0 // PI进制
  constructor(id: number, color: string, points: Array<p5.Vector>) {
    this.id = id
    this.color = color
    // 实际画布坐标计算
    this.points = points.map((item) => {
      item.set(item.x + translateX, item.y + translateY)
      return item
    })
    this.center = centroid(points)
    let { x, y } = this.center
    console.log(this.id, x, y)
  }
  draw() {
    const { color, points, center, angle } = this
    let { x: cx, y: cy } = center
    p.push()
    p.translate(center.x, center.y)
    p.rotate(angle)
    p.fill(color)
    p.stroke('#000')
    p.strokeJoin(p.ROUND)
    p.strokeWeight(4)
    p.beginShape()
    for (let i = 0, len = points.length; i < len; i++) {
      p.vertex(points[i].x - cx, points[i].y - cy)
    }
    p.endShape()
    p.pop()
  }
  // 当选中拖拽时更新顶点坐标
  updatePoints() {
    this.center = centroid(this.points)
    if (choseId === this.id) {
      if (!this.prePos) {
        this.prePos = p.createVector(pressX, pressY)
      }
      this.curPos.set(mouseX, mouseY)
      let subVec = this.curPos.copy().sub(this.prePos)
      for (let i = 0, len = this.points.length; i < len; i++) {
        this.points[i].add(subVec)
      }

      this.prePos.set(mouseX, mouseY)
    } else {
      this.prePos = null
    }
  }
  // 顶点绕中心点旋转
  updateAngle(isClockWise: boolean) {
    this.angle += isClockWise ? angleInc : -angleInc
    console.log(this.angle)

    // 计算所有顶点绕该shape中心旋转后的值(这样会有精度丢失的问题)
    // let { center, points } = this
    // let a = p.radians(isClockWise ? angleInc : -angleInc)
    // for (let i = 0, len = points.length; i < len; i++) {
    //   rotateByPoint(points[i], center, a)
    // }
  }
}

function initShapes() {
  for (let i = 0, len = tangram.length; i < len; i++) {
    let { id, c, ps } = tangram[i]
    shapes[id] = new Shape(
      id,
      c,
      ps.map((item) => p.createVector(...item))
    )
  }
}

function updateShapes() {
  for (let i in shapes) {
    if (shapes.hasOwnProperty(i)) {
      // 对选中的shape进行连续旋转控制
      if (choseId === shapes[i].id) {
        if (p.keyIsPressed && p.key === 'a') {
          shapes[choseId].updateAngle(false)
        } else if (p.keyIsPressed && p.key === 'd') {
          shapes[choseId].updateAngle(true)
        }
      }
      shapes[i].updatePoints()
      shapes[i].draw()
    }
  }
}

function updateMouse() {
  mouseX = p.pmouseX
  mouseY = p.pmouseY
}

function info() {
  let str =
    `Left mouse press holed on to chose shape,
    move mouse to drag,
    pressed 'a / d' to rotate quickly,
    pressed once 'LEFT_ARROW / RIGHT_ARROW' to rotate by 1 deg`
  p.fill('#000')
  p.noStroke()
  p.textSize(20)
  p.textWrap(p.WORD)
  p.textAlign(p.CENTER)
  p.text(str, width/2 - 250, 50, 500)
}

function setup($p: p5) {
  width = $p.width
  height = $p.height
  translateX = width / 2 - s / 2
  translateY = height / 2 - s / 2
  p = $p
  initShapes()
}
function draw() {
  p.background('#8e44ad')
  // 测试用基准线
  // p.stroke('red')
  // p.strokeWeight(10)
  // p.line(0,0,1000,0)
  // p.stroke('blue')
  // p.line(0,0,0,1000)
  info()

  updateMouse()
  updateShapes()
}
// 鼠标在shape上摁下时，选中shape，同步全局选中shape的id
function mousePressed() {
  pressX = p.mouseX
  pressY = p.mouseY

  for (const i in shapes) {
    let index = String(8 - Number(i))
    if (shapes.hasOwnProperty(index)) {
      let isIn = pointInPolygon(shapes[index].points, [pressX, pressY])
      if (isIn) {
        choseId = shapes[index].id
        break
      }
    }
  }
}
function mouseReleased() {
  choseId = null
}

function keyPressed() {
  if (choseId) {
    if (p.keyCode === p.LEFT_ARROW) {
      shapes[choseId].updateAngle(false)
    } else if (p.keyCode === p.RIGHT_ARROW) {
      shapes[choseId].updateAngle(true)
    }
  }
}
</script>
