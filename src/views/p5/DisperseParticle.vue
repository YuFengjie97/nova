<template>
  <div class="viewCon">
    <P5 :sketch="sketch" />
  </div>
</template>

<script lang="ts" setup>
import p5 from 'p5'
import P5 from '@/components/P5.vue'

let p: p5
let canvasWidth = 800
let canvasHeight = 800
let width = 600
let height = 600
let dBase = 20
let rows = height / dBase
let cols = width / dBase
let total = rows * cols
let range = 100
// 鼠标坐标向量
let mv = new p5.Vector(canvasWidth / 2 - range, canvasHeight / 2 - range)
let ps: Array<Particle> = []

class Particle {
  pos: p5.Vector
  d: number
  c: number = 125
  constructor(pos: p5.Vector) {
    this.pos = pos
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
    let dis = p5.Vector.dist(mv, this.pos)
    let ratio = p.map(dis, 0, range, 0, 100)
    this.c = ratio
    this.d = (ratio < 50 ? 50 : ratio) / 100 * dBase
  }
}

function initParticles() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let par = new Particle(new p5.Vector(x * dBase + dBase / 2, y * dBase + dBase / 2))
      ps.push(par)
      par.draw()
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
    updateParticles()
  }
  p.mouseMoved = function () {
    mv.set(p.mouseX - range, p.mouseY - range)
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
