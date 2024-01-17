<script lang="ts" setup>
import p5 from 'p5'
import Card from '@/components/Card.vue'
import P5Con from '@/components/P5Con.vue'

const { random } = Math

let width: number
let height: number
let originPos: p5.Vector
const fillColor = '#d63031'
const r = 0.5
const borderWidth = 2
const velBase = 1
const up = [0, 0.1]
const right = [0.1, 0.5]
const left = [0.5, 0.9]
const down = [0.9, 1]
const deathChance = 0

const circles: Array<Circle> = []
const circleTotal = 100
const interval = 500 // 每隔这个时间更新方向

const colors = [
  '#00b894',
  '#00cec9',
  '#0984e3',
  '#6c5ce7',
  '#b2bec3',
  '#ffeaa7',
  '#fab1a0',
  '#ff7675',
  '#fd79a8',
  '#636e72',
]

function setup($p: p5) {
  width = $p.width
  height = $p.height
  initCircles($p)
}
function draw($p: p5) {
  updateCircles()
}

function initCircles($p: p5) {
  for (let i = 0; i < circleTotal; i++)
    circles.push(new Circle($p, new p5.Vector(width / 2, height / 2)))
}

function updateCircles() {
  for (let i = 0; i < circles.length; i++) {
    circles[i].update()
    circles[i].draw()
  }
}

class Circle {
  $p: p5
  pos: p5.Vector
  velBase: number = 1
  vel: p5.Vector = new p5.Vector(0, -this.velBase)
  pre: number
  color: string = '#00b894'

  constructor($p: p5, pos: p5.Vector, velBase?: number) {
    this.$p = $p
    this.pos = pos
    if (velBase)
      this.velBase = velBase

    this.vel = new p5.Vector(0, this.velBase)
    this.pre = new Date().getTime()
  }

  draw() {
    const {
      $p,
      pos: { x, y },
    } = this
    $p.stroke(this.color)
    $p.fill(fillColor)
    $p.strokeWeight(borderWidth)
    $p.circle(x, y, r * 2)
  }

  update() {
    const isEdge = this.edge()
    if (!isEdge) {
      this.pos.add(this.vel)
      this.updateDirection()
    }
  }

  updateDirection() {
    const now = new Date().getTime()
    if (now - this.pre > interval - random() * 10) {
      this.pre = now

      this.color = this.$p.random(colors)
      if (circles.length < circleTotal)
        circles.push(new Circle(this.$p, this.pos))
      const chance = random()

      if (chance > down[0] && chance < down[1])
        this.vel.set([0, -velBase])

      if (chance > right[0] && chance < right[1])
        this.vel.set([velBase, 0])

      if (chance > left[0] && chance < left[1])
        this.vel.set([-velBase, 0])

      if (chance > up[0] && chance < up[1])
        this.vel.set([0, velBase])
    }
  }

  edge() {
    const chance = random()
    if (chance < deathChance) {
      this.vel.set(0, 0)
      return true
    }
    const {
      pos: { x, y },
    } = this
    if (x < 0 || x > width || y < 0 || y > height) {
      this.vel.set(0, 0)
      return true
    }
    return false
  }
}
</script>

<template>
  <div class="gradientLine viewCon">
    <Card class="card">
      <P5Con :setup="setup" :draw="draw" />
    </Card>
  </div>
</template>
