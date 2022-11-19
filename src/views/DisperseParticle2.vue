<template>
  <div class="viewCon">
    <P5 :sketch="sketch" />
  </div>
</template>

<script lang="ts" setup>
import p5 from 'p5'
import P5 from '@/components/P5.vue'

const { PI, floor, sin, cos } = Math

let p: p5
let canvasWidth = 800
let canvasHeight = 800
let width = 600
let height = 600
let dBase = 30
let gap = 2
let rows = floor(height / (dBase + gap) + 1)
let cols = floor(width / (dBase + gap) + 1)
let total = rows * cols
let mv = new p5.Vector(-5000, -5000) // 鼠标坐标向量
let mr = 10000 // 鼠标驱散半径的平方
let ps: Array<Particle> = []

class Particle {
  pos: p5.Vector
  prePos: p5.Vector
  v: p5.Vector = new p5.Vector(0, 0)
  d: number
  c: number = 125
  constructor(pos: p5.Vector) {
    this.pos = pos
    this.prePos = pos.copy()
    this.d = dBase
  }
  draw() {
    let {
      pos: { x, y },
      d,
      c
    } = this
    p.noStroke()
    p.colorMode(p.HSB, 100)
    p.fill(c, 50, 100)
    p.circle(x, y, d)
  }
  update() {
    let { pos, prePos, v } = this

    let spreadV = pos.copy().sub(mv)
    let distance = spreadV.magSq() // 注意distance未开根
    let ratio = p.map(distance, 0, mr, 100, 0, true) / 40000
    if (distance < mr) {
      v.add(spreadV.mult(ratio))
    } else {
      let restV = prePos.copy().sub(pos)
      let distance = restV.magSq()
      let ratio = p.map(distance, 0, mr, 0, 100, true) / 100
      v.set(restV.mult(ratio))
    }
    pos.add(v)
  }
}

function initParticles() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let par = new Particle(
        new p5.Vector(x * (gap + dBase), y * (gap + dBase))
      )
      ps.push(par)
    }
  }
}

function updateParticles() {
  for (let i = 0, len = ps.length; i < len; i++) {
    ps[i].update()
    ps[i].draw()
  }
}

function sketch(_p: p5) {
  p = _p
  let renderer: p5.Renderer
  p.setup = function () {
    renderer = p.createCanvas(canvasWidth, canvasHeight)
    initParticles()
  }
  p.draw = function () {
    p.translate(canvasWidth / 2 - width / 2, canvasHeight / 2 - height / 2)
    p.background('#2d3436')

    // 测试用基准线
    p.stroke('red')
    p.strokeWeight(10)
    p.line(0, 0, 1000, 0)
    p.stroke('blue')
    p.line(0, 0, 0, 1000)

    p.noFill()
    p.stroke(255)
    p.rect(0, 0, width, height)
    updateParticles()
  }
  p.mouseMoved = function () {
    mv.set(
      p.mouseX - (canvasWidth / 2 - width / 2),
      p.mouseY - (canvasHeight / 2 - height / 2)
    )
  }
  p.windowResized = function () {
    let size = p.min(p.windowWidth, p.windowHeight)
    renderer.style(`width: ${size}px; height: ${size}px`)
  }
}
</script>

<style lang="less" scoped>
.viewCon {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
