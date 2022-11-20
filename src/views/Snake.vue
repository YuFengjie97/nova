<template>
  <div class="viewCon">
    <P5 :sketch="sketch" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import P5 from '@/components/P5.vue'
import p5 from 'p5'

type Direction = 'up' | 'down' | 'left' | 'right'

let p: p5
let width = 800
let height = 800
let scl = 24
let velBase = 1
let velFast = 6
let score = 0
let gameover = false

let colors = ['#870058', '#a4303f', '#f2d0a4', '#ffeccc', '#c8d6af']
function getRandomColor() {
  let i = p.floor(p.random(0, colors.length))
  return colors[i]
}

function sketch(_p: p5) {
  p = _p

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

      this.tails.forEach((item) => item.draw())
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
        this.pos.x < 0 ||
        this.pos.x > width ||
        this.pos.y < 0 ||
        this.pos.y > height
      ) {
        gameover = true
      }
    }

    update(d?: Direction) {
      this.edge()

      if (d) {
        this.direction = d
      } else {
        d = this.direction
      }
      let v = p.keyIsDown(p.SHIFT) ? velFast : velBase

      if (d === 'left') {
        this.vel.set(-v, 0)
      } else if (d === 'right') {
        this.vel.set(v, 0)
      } else if (d === 'up') {
        this.vel.set(0, -v)
      } else if (d === 'down') {
        this.vel.set(0, v)
      }
      this.pos.add(this.vel)

      for (let i = 0; i < this.tails.length; i++) {
        let lastPos = i === 0 ? this.pos : this.tails[i - 1].pos // 上个节点的位置
        let curPos = this.tails[i].pos // 当前节点位置
        let dv = curPos.copy().sub(lastPos).mult(scl)
        dv.limit(scl)
        this.tails[i].update(lastPos.copy().add(dv))
      }
    }

    addTail(c: string) {
      let { tails, direction } = this
      let {
        pos: { x, y }
      } = tails.length === 0 ? this : tails[tails.length - 1]
      let tail = new Tail(new p5.Vector(x, y), c)

      if (direction === 'up') {
        tail.pos.set(x, y)
      } else if (direction === 'down') {
        tail.pos.set(x, y)
      } else if (direction === 'left') {
        tail.pos.set(x, y)
      } else if (direction === 'right') {
        tail.pos.set(x, y)
      }
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
        p.floor(p.random(100, height - 100))
      )
      this.c = getRandomColor()
    }

    draw() {
      p.fill(this.c)
      p.circle(this.pos.x, this.pos.y, scl)
    }

    update(snake: Snake) {
      // 被吃
      let overLap = this.pos.dist(snake.pos) < scl
      if (overLap) {
        score++
        snake.addTail(this.c)

        this.pos.set(
          p.floor(p.random(100, width - 100)),
          p.floor(p.random(100, height - 100))
        )
        this.c = getRandomColor()
      }
    }
  }
  let snake = new Snake()
  let food = new Food()

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
    let str = `
    SHIFT to speed up,
    ArrowKey to control direction
    `
    p.text(str, width / 2, 20)
  }

  function doneInfo(){
    p.fill('#fff')
    p.textWrap(p.WORD)
    p.textAlign(p.CENTER)
    p.textSize(20)
    let str = `
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
    } else{
      doneInfo()
    }
  }
  p.keyPressed = function () {
    if (p.keyCode === p.LEFT_ARROW) {
      snake.update('left')
    } else if (p.keyCode === p.RIGHT_ARROW) {
      snake.update('right')
    } else if (p.keyCode === p.UP_ARROW) {
      snake.update('up')
    } else if (p.keyCode === p.DOWN_ARROW) {
      snake.update('down')
    }
  }
  p.windowResized = function () {}
}
</script>

<style lang="less" scoped>
.viewCon {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
