<template>
  <div class="viewCon">
    <div class="canvasCon">
      <P5 :sketch="sketch" />
      <img class="gameover" v-show="isGameOver" :src="gameover" />
      <div class="score">Score: {{ score }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import P5 from '@/components/P5.vue'
import p5 from 'p5'
import gameover from '@/assets/img/gameover.png'

const { floor } = Math

const isGameOver = ref(false)
const score = ref(0)

let p: p5
let width = 800
let height = 800

let bird: Bird
let pipes: Array<Pipe> = []
let pipeSpeed = 2
let pipeNum = 6 // 同时间下画布中的管道数目
let g = new p5.Vector(0, 0.2)

class Pipe {
  top: number
  bottom: number
  w: number
  x: number
  c: string = '#0984e3'
  cross = false // 小鸟是否越过这个管道
  constructor(x: number) {
    this.top = floor(p.random(60, height / 2))
    this.bottom = floor(p.random(60, height / 2))
    this.w = floor(p.random(30, 70))
    this.x = x
  }
  show() {
    p.stroke(0)
    p.fill(this.c)
    //prettier-ignore
    p.rect(this.x, 0, this.w, this.top,0,0, this.w/2, this.w/2)
    //prettier-ignore
    p.rect(this.x, width - this.bottom, this.w, this.bottom, this.w/2, this.w/2,0,0)
  }
  update() {
    this.outCanvas()
    this.x -= pipeSpeed
  }
  outCanvas() {
    if (this.x < -50) {
      this.x = width
      this.w = floor(p.random(30, 70))
      this.c = '#0984e3'
      this.cross = false
    }
  }
  birdHit(bird: Bird) {
    let {
      pos: { x, y }
    } = bird
    if (x >= this.x && x <= this.x + this.w) {
      if (y <= this.top || y >= height - this.bottom) {
        this.c = '#d63031'
        isGameOver.value = true
      }
    }
  }
  birdCross(bird: Bird) {
    if (this.cross) return
    let {
      pos: { x, y }
    } = bird
    if (x > this.x + this.w) {
      this.cross = true
      score.value++
    }
  }
}

class Bird {
  pos = new p5.Vector(40, height / 2)
  vel = new p5.Vector(0, 1)
  d = 20
  show() {
    p.fill('#fdcb6e')
    p.circle(this.pos.x, this.pos.y, this.d)
  }
  up() {
    this.vel.set(0, -4)
  }
  update() {
    if (this.pos.y + this.d / 2 > height) {
      // 越界，速度归零
      this.vel.mult(0)
      this.pos.set(this.pos.x, height - this.d / 2)
    } else {
      // 正常跳跃
      this.vel.add(g)
    }
    if (this.pos.y < this.d / 2) {
      this.pos.y = this.d / 2
    }
    this.pos.add(this.vel)
  }
}

function initPipe() {
  for (let i = 0; i < pipeNum; i++) {
    pipes.push(new Pipe(width + i * (width / pipeNum)))
  }
}

function updatePipe() {
  for (let i = 0; i < pipes.length; i++) {
    pipes[i].birdHit(bird)
    pipes[i].birdCross(bird)
    pipes[i].update()
    pipes[i].show()
  }
}

function sketch(_p: p5) {
  p = _p
  p.setup = function () {
    p.createCanvas(width, height)
    bird = new Bird()
    initPipe()
  }
  p.draw = function () {
    if (!isGameOver.value) {
      p.background(50)
      bird.update()
      bird.show()
      updatePipe()
    }
  }
  p.keyPressed = function () {
    if (p.keyCode === 32) {
      bird.up()
    }
  }
}
</script>

<style lang="less" scoped>
.viewCon {
  display: grid;
  place-items: center;
  .canvasCon {
    width: fit-content;
    height: fit-content;
    position: relative;
  }
  .gameover {
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .score {
    position: absolute;
    top: 10px;
    left: 10px;
    font-weight: 800;
    font-size: 24px;
    color: #fff;
    font-family: 'Patrick Hand';
  }
}
</style>
