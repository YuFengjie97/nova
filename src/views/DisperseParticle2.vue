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
let width = 800
let height = 800
let d = 20
let gap = 5
let color = '#fd79a8'
let rows = floor(height / (d + gap))
let cols = floor(width / (d + gap))
let total = rows * cols
let mv = new p5.Vector(width / 2, width / 2) // 鼠标坐标向量
let ps: Array<Particle> = []

class Particle {
  defaultPos: p5.Vector
  pos: p5.Vector
  a: p5.Vector = new p5.Vector(0, 0)
  v: p5.Vector = new p5.Vector(0, 0)
  constructor(defaultPos: p5.Vector) {
    this.defaultPos = defaultPos
    this.pos = defaultPos.copy()
  }
  draw() {
    p.fill(color)
    p.circle(this.pos.x, this.pos.y, d)
  }
  mouseDistract() {
    let range = width // 在这个半径范围内会收到斥力
    let maxForce = 5
    let mpV = p5.Vector.sub(this.pos, mv) // 鼠标指向该粒子的方向向量
    let dis = mpV.mag() // 鼠标与粒子的距离
    if (0 < dis && dis < range) {
      mpV.normalize() // 可以理解为被格式化为1单位(长度)的向量
      mpV.mult((range / Math.pow(dis, 2)) * 40) // 根据粒子距离鼠标位置的远近为不同距离添加不同大小的斥力

      mpV.limit(maxForce)
      this.a.add(mpV)
    }
  }
  returnDefault() {
    let range = 60
    let maxForce = 7
    let dpV = p5.Vector.sub(this.defaultPos, this.pos)
    let dis = dpV.mag()
    dpV.normalize()
    // 在这个范围之内，以距离默认位置比例的最大力拉向默认位置
    let ratio = p.map(dis, 0, range, 0, maxForce, true)
    dpV.mult(ratio)
    let steer = p5.Vector.sub(dpV, this.v)
    steer.limit(maxForce)
    this.a.add(steer)
  }
  update() {
    this.mouseDistract()
    this.returnDefault()
    this.v.add(this.a)
    this.v.limit(0.8)
    this.pos.add(this.v)
    this.a.mult(0)
  }
}

function initParticles() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      ps.push(new Particle(new p5.Vector(x * (d + gap), y * (d + gap))))
    }
  }
}

function updateParticles() {
  for (let i = 0; i < total; i++) {
    ps[i].update()
    ps[i].draw()
  }
}

function sketch(_p: p5) {
  function canvasResize() {
    let size = p.min(p.windowWidth, p.windowHeight)
    renderer.style(`width: ${size}px; height: ${size}px`)
  }

  p = _p
  let renderer: p5.Renderer
  p.setup = function () {
    renderer = p.createCanvas(width, height)
    canvasResize()
    initParticles()
    p.noStroke()
    // p.frameRate(1)
  }
  p.draw = function () {
    p.background('#2d3436')
    updateParticles()
  }
  p.mouseMoved = function () {
    mv.set(p.mouseX, p.mouseY)
  }
  p.windowResized = function () {
    canvasResize()
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
