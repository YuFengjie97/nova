<template>
  <div class="viewCon">
    <P5 :sketch="sketch" :show-fps="false" />
  </div>
</template>

<script lang="ts" setup>
import P5 from '@/components/P5.vue'
import p5 from 'p5'

let p: p5
let width = 600
let height = 600
let balls: Array<Ball> = []
let total = 10

class Ball {
  pos: p5.Vector
  range: number
  d = 0
  c = '#fff'
  constructor(x: number, y: number) {
    this.pos = new p5.Vector(p.floor(x),p.floor(y))
    this.range = p.floor(p.random(40, 100))
  }
  draw() {
    p.noStroke()
    p.fill(this.c)
    p.circle(this.pos.x, this.pos.y, this.d)
    this.light()
  }
  light() {
    let {
      pos: { x, y },
      d,
      range
    } = this
    let rangeX = [x - range, x + range]
    let rangeY = [y - range, y + range]
    for (let i = rangeX[0]; i <= rangeX[1]; i++) {
      for (let j = rangeY[0]; j <= rangeY[1]; j++) {
        let dis = p.dist(i, j, x, y)
        if (dis < d / 2 || dis > range) continue

        let gray = p.map(dis, 0, range, 255, 0)
        p.point(i,j)
        p.stroke(gray)
      }
    }
  }
}

function initBall(){
  for(let i=0;i<total;i++){
    let ball = new Ball(p.random(0, width),p.random(0,height))
    balls.push(ball)
    ball.draw()
  }
}

function sketch(_p: p5) {
  p = _p

  p.setup = function () {
    let renderer = p.createCanvas(width, height)
    p.background(0)
    initBall()
  }
}
</script>

<style lang="less" scoped>
.viewCon {
  display: grid;
  place-items: center;
}
</style>
