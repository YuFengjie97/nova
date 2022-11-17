<template>
  <div class="viewCon">
    <P5Con
      :setup="setup"
      :draw="draw"
      :mouse-pressed="mousePressed"
      :mouse-released="mouseReleased"
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
let s = 400 //七巧板尺寸
let mouseX: number
let mouseY: number
let pressX: number
let pressY: number
let choseId: number | null = null
let angleInc: number = 0.5

let shapes: {
  [id: string]: Shape
} = {}

// prettier-ignore
let tangram:Array<{
  id: number,
  c: string,
  center: Point,
  ps: Array<Point>
}> = [
  // 以七巧板正中心为原点确认的坐标
  {id: 1, c: '#cd9670', center: [0, 0], ps: [ [-s/2, -s/2], [-s/2,  s/2], [0,       0], [-s/2, -s/2] ]},
  {id: 2, c: '#f4444a', center: [0, 0], ps: [ [-s/2,  s/2], [s/2 ,  s/2], [0,       0], [-s/2,  s/2] ]},
  {id: 3, c: '#fd796d', center: [0, 0], ps: [ [-s/2, -s/2], [0   , -s/2], [-s/4, -s/4], [-s/2, -s/2] ]},
  {id: 4, c: '#e7d02d', center: [0, 0], ps: [ [0   , -s/2], [-s/4, -s/4], [0,       0], [s/4 , -s/4], [0  , -s/2] ]},
  {id: 5, c: '#f9b02d', center: [0, 0], ps: [ [s/4 , -s/4], [s/4 ,  s/4], [0,       0], [s/4 , -s/4] ]},
  {id: 6, c: '#acc94a', center: [0, 0], ps: [ [s/4 , -s/4], [s/2 ,  0  ], [s/2,   s/2], [s/4 ,  s/4], [s/4, -s/4] ]},
  {id: 7, c: '#59afcb', center: [0, 0], ps: [ [0   , -s/2], [s/2 , -s/2], [s/2,     0], [0   , -s/2] ]},
]

class Shape {
  id: number
  center: p5.Vector
  points: Array<p5.Vector>
  color: string
  prePos: p5.Vector | null = null
  curPos: p5.Vector = p.createVector(0, 0)
  angle: number = 0
  constructor(id: number, color: string, points: Array<p5.Vector>) {
    this.id = id
    this.color = color
    this.points = points
    this.center = centroid(points)
    let {x,y} = this.center
    console.log(x,y);
    
  }
  draw() {
    const { color, points, center, angle } = this
    p.fill(color)
    p.stroke('#000')
    p.strokeJoin(p.ROUND)
    p.strokeWeight(4)
    p.beginShape()
    for (let i = 0, len = points.length; i < len; i++) {
      p.vertex(points[i].x, points[i].y)
    }
    p.endShape()
  }
  // 当选中拖拽时更新顶点坐标
  updatePoints() {
    this.center = centroid(this.points)
    if (p.mouseIsPressed && choseId === this.id) {
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
    let { center, points } = this
    this.angle += isClockWise ? angleInc : -angleInc

    // 计算所有顶点绕该shape中心旋转后的值(这样会有精度丢失的问题)
    let a = p.radians(isClockWise ? angleInc : -angleInc)
    for (let i = 0, len = points.length; i < len; i++) {
      rotateByPoint(points[i], center, a)
    }
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
      // 对选中的shape进行旋转控制
      if (choseId === shapes[i].id) {
        if (p.keyIsDown(p.LEFT_ARROW) || (p.keyIsPressed && p.key === 'a')) {
          shapes[choseId].updateAngle(false)
        } else if (
          p.keyIsDown(p.RIGHT_ARROW) ||
          (p.keyIsPressed && p.key === 'd')
        ) {
          shapes[choseId].updateAngle(true)
        }
      }
      shapes[i].updatePoints()
      shapes[i].draw()
    }
  }
}

function updateMouse() {
  mouseX = p.mouseX - width / 2
  mouseY = p.mouseY - height / 2
}

function info() {
  let str =
    'Left mouse press to chose shape, holed on to drag, holed on and use <--/a -->/d to rotate'
  p.fill('#000')
  p.noStroke()
  p.textSize(24)
  p.textWrap(p.WORD)
  p.textAlign(p.CENTER)
  p.text(str, -200, -340, 400)
}

function setup($p: p5) {
  width = $p.width
  height = $p.height
  p = $p
  initShapes()
}
function draw() {
  p.background('#8e44ad')
  p.translate(width / 2, height / 2)
  info()

  updateMouse()
  updateShapes()
}
// 鼠标在shape上摁下时，选中shape，同步全局选中shape的id
function mousePressed() {
  pressX = p.mouseX - width / 2
  pressY = p.mouseY - height / 2

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
</script>
