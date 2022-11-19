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
let r = 10
let gap = 4
let rows = height / (2 * r)
let cols = width / (2 * r)
let total = rows * cols
// 鼠标画布坐标
let mx: number
let my: number
let ps: Array<Particle> = []

class Particle {
  pos: p5.Vector
  r: number
  c: string
  constructor(pos: p5.Vector, r: number, c: string) {
    this.pos = pos
    this.r = r
    this.c = c
  }
  draw() {
    let {
      pos: { x, y },
      r,
      c
    } = this
    p.noStroke()
    p.fill(c)
    p.circle(x, y, r)
  }
  update() {}
}

function initParticles() {
  p.translate(canvasWidth / 2 - width / 2, canvasHeight / 2 - height / 2)
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let par = new Particle(
        new p5.Vector(x * (r + gap), y * (r + gap)),
        r,
        '#fff'
      )
      ps.push(par)
      par.draw()
    }
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
    p.background('#2d3436')
    initParticles()
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
