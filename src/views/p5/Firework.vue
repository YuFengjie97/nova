<script lang="ts" setup>
import p5 from 'p5'
import { ref } from 'vue'
import P5 from '@/components/P5.vue'

const { floor, PI, random } = Math

let p: p5
const fireworks: Array<Firework> = []
const g = new p5.Vector(0, 0.4)

class Firework {
  pos: p5.Vector
  tarPos: p5.Vector
  vel: p5.Vector
  h = p.random(255)
  d = 3
  dInc = 0.07
  fires: Array<Fire> = []
  isBoom = false
  isAlive = true
  constructor(tarPos?: p5.Vector) {
    this.pos = new p5.Vector(tarPos ? tarPos.x : p.mouseX, height)
    this.tarPos = new p5.Vector(
      tarPos ? tarPos.x : p.mouseX,
      tarPos ? tarPos.y : p.mouseY,
    )
    this.vel = new p5.Vector(0, floor(-p.random(2, 6)))
  }

  show() {
    p.fill(this.h, 255, 255)
    if (!this.isBoom)
      p.circle(this.pos.x, this.pos.y, this.d)
    for (let i = this.fires.length - 1; i >= 0; i--) {
      this.fires[i].update()
      this.fires[i].show()
      if (this.fires[i].isOver()) {
        this.fires.splice(i, 1)
        if (this.fires.length === 0)
          this.isAlive = false
      }
    }
  }

  boom() {
    const fireNum = floor(p.random(30, 50))
    for (let i = 0; i < fireNum; i++) {
      const fireVel = p5.Vector.fromAngle(
        p.random(2 * PI),
        p.floor(p.random(5, 8)),
      )
      this.fires.push(new Fire(this.pos.copy(), fireVel, this.d / 2, this.h))
    }
  }

  update() {
    // 如果没有到达指定位置，一直更新
    if (this.pos.y > this.tarPos.y) {
      this.pos.add(this.vel)
      this.d += this.dInc
    }
    else {
      if (!this.isBoom) {
        this.boom()
        this.isBoom = true
      }
    }
  }
}

class Fire {
  pos: p5.Vector
  vel: p5.Vector
  d: number
  dInc = 0.001
  h: number
  life = 255
  lifeInc = 4
  constructor(pos: p5.Vector, vel: p5.Vector, d: number, h: number) {
    this.pos = pos
    this.vel = vel
    this.d = d
    this.h = h
    this.lifeInc = p.floor(p.random(4, 13))
  }

  show() {
    p.fill(this.h, 255, this.life)
    p.circle(this.pos.x, this.pos.y, this.d)
  }

  update() {
    this.vel.add(g)
    this.vel.limit(4)
    this.pos.add(this.vel)
    this.d -= this.dInc
    this.life -= this.lifeInc
  }

  isOver() {
    return this.life <= 0 || this.d <= 0
  }
}

function updateFirework() {
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update()
    fireworks[i].show()
    if (!fireworks[i].isAlive)
      fireworks.splice(i, 1)
  }
}

const con = ref<HTMLElement>()
function sketch(_p: p5) {
  const { width, height } = con.value!.getBoundingClientRect()
  p = _p
  p.setup = function () {
    p.createCanvas(width, height)
    p.colorMode(p.HSB)
    p.noStroke()
  }
  p.draw = function () {
    // p.background(0)
    p.background('rgba(0,0,0,0.07)')
    updateFirework()
  }
  p.mousePressed = function () {
    fireworks.push(new Firework())
  }
  setInterval(() => {
    for (let i = 0; i < 3; i++) {
      fireworks.push(
        new Firework(new p5.Vector(p.random(width), p.random(height))),
      )
    }
  }, 1000)
}
</script>

<template>
  <div ref="con" class="w-full h-full">
    <P5 :sketch="sketch" />
  </div>
</template>
