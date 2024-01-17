<script lang="ts" setup>
import { ref } from 'vue'
import p5 from 'p5'
import P5 from '@/components/P5.vue'

type Direction = 'up' | 'down' | 'left' | 'right'

let p: p5
const scl = 24
const velBase = 1
const velFast = 6
let score = 0
let gameover = false

const colors = ['#870058', '#a4303f', '#f2d0a4', '#ffeccc', '#c8d6af']
function getRandomColor() {
  const i = p.floor(p.random(0, colors.length))
  return colors[i]
}

const con = ref<HTMLElement>()

function sketch(_p: p5) {
  p = _p
  const { width, height } = con.value!.getBoundingClientRect()

  class Snake {
    pos: p5.Vector
    vel: p5.Vector
    direction: Direction
    tails: Array<Tail> = []
    constructor() {
      this.pos = new p5.Vector(width / 2, height / 2)
      this.vel = new p5.Vector(velBase, 0)
      this.direction = 'right'
    }

    draw() {
      p.noStroke()
      p.fill('#0984e3')
      p.circle(this.pos.x, this.pos.y, scl)

      this.tails.forEach(item => item.draw())
    }

    edge() {
      // if (this.pos.x < 0) {
      //   this.pos.set(width, this.pos.y)
      // }
      // if (this.pos.x > width) {
      //   this.pos.set(0, this.pos.y)
      // }
      // if (this.pos.y < 0) {
      //   this.pos.set(this.pos.x, height)
      // }
      // if (this.pos.y > height) {
      //   this.pos.set(this.pos.x, 0)
      // }
      if (
        this.pos.x < 0
          || this.pos.x > width
          || this.pos.y < 0
          || this.pos.y > height
      )
        gameover = true
    }

    update(d?: Direction) {
      this.edge()

      if (d)
        this.direction = d
      else
        d = this.direction

      const v = p.keyIsDown(p.SHIFT) ? velFast : velBase

      if (d === 'left')
        this.vel.set(-v, 0)
      else if (d === 'right')
        this.vel.set(v, 0)
      else if (d === 'up')
        this.vel.set(0, -v)
      else if (d === 'down')
        this.vel.set(0, v)

      this.pos.add(this.vel)

      for (let i = 0; i < this.tails.length; i++) {
        const lastPos = i === 0 ? this.pos : this.tails[i - 1].pos // 上个节点的位置
        const curPos = this.tails[i].pos // 当前节点位置
        const dv = curPos.copy().sub(lastPos).mult(scl)
        dv.limit(scl)
        this.tails[i].update(lastPos.copy().add(dv))
      }
    }

    addTail(c: string) {
      const { tails, direction } = this
      const {
        pos: { x, y },
      } = tails.length === 0 ? this : tails[tails.length - 1]
      const tail = new Tail(new p5.Vector(x, y), c)

      if (direction === 'up')
        tail.pos.set(x, y)
      else if (direction === 'down')
        tail.pos.set(x, y)
      else if (direction === 'left')
        tail.pos.set(x, y)
      else if (direction === 'right')
        tail.pos.set(x, y)

      tails.push(tail)
    }
  }
  class Tail {
    pos: p5.Vector
    prePos: p5.Vector
    c: string
    constructor(pos: p5.Vector, c: string) {
      this.pos = pos
      this.prePos = pos.copy()
      this.c = c
    }

    draw() {
      p.fill(this.c)
      p.circle(this.pos.x, this.pos.y, scl)
    }

    update(pos: p5.Vector) {
      this.prePos.set(this.pos)
      this.pos.set(pos.x, pos.y)
    }
  }
  class Food {
    pos: p5.Vector
    c: string
    constructor() {
      this.pos = new p5.Vector(
        p.floor(p.random(100, width - 100)),
        p.floor(p.random(100, height - 100)),
      )
      this.c = getRandomColor()
    }

    draw() {
      p.fill(this.c)
      p.circle(this.pos.x, this.pos.y, scl)
    }

    update(snake: Snake) {
      // 被吃
      const overLap = this.pos.dist(snake.pos) < scl
      if (overLap) {
        score++
        snake.addTail(this.c)

        this.pos.set(
          p.floor(p.random(100, width - 100)),
          p.floor(p.random(100, height - 100)),
        )
        this.c = getRandomColor()
      }
    }
  }
  const snake = new Snake()
  const food = new Food()

  function updateScore() {
    p.noStroke()
    p.fill('#fff')
    p.textAlign(p.LEFT, p.TOP)
    p.textSize(24)
    p.text(`SCORE: ${score}`, 10, 10)
  }
  function info() {
    p.fill('#fff')
    p.textWrap(p.WORD)
    p.textAlign(p.CENTER)
    p.textSize(20)
    // const str = `
    // SHIFT to speed up,
    // ArrowKey to control direction
    // `
    const str = `键盘方向键控制方向，
    shift加速`
    p.text(str, width / 2, 20)
  }

  function doneInfo() {
    p.fill('#fff')
    p.textWrap(p.WORD)
    p.textAlign(p.CENTER)
    p.textSize(20)
    const str = `
    GAME OVER
    Your Score: ${score}
    `
    p.text(str, width / 2, height / 2 - 20)
  }

  p.setup = function () {
    p.createCanvas(width, height)
    p.rectMode(p.CENTER)
  }

  p.draw = function () {
    p.background('#2d3436')
    updateScore()
    info()
    if (!gameover) {
      snake.update()
      snake.draw()

      food.update(snake)
      food.draw()
    }
    else {
      doneInfo()
    }
  }
  p.keyPressed = function () {
    if (p.keyCode === p.LEFT_ARROW)
      snake.update('left')
    else if (p.keyCode === p.RIGHT_ARROW)
      snake.update('right')
    else if (p.keyCode === p.UP_ARROW)
      snake.update('up')
    else if (p.keyCode === p.DOWN_ARROW)
      snake.update('down')
  }
  p.windowResized = function () {}
}
</script>

<template>
  <div ref="con" class="w-full h-full">
    <P5 class="w-full" :sketch="sketch" />
  </div>
</template>
