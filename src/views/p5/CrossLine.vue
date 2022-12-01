<template>
  <div class="viewCon">
    <P5 :sketch="sketch" />
  </div>
</template>

<script lang="ts" setup>
import P5 from '@/components/P5.vue'
import p5 from 'p5'

const { floor } = Math

type Direction = 'horizontal' | 'vertical'

let p: p5
let size = 600
let blockSize = 40
let nums = floor(size / blockSize)
let velBase = 3
// prettier-ignore
let rainbow = ['#ff2020','#ffa202','#fff000','#2ffd32','#342def','#7221fd','#9820fc']

function sketch(_p: p5) {
  p = _p

  let hBars: Array<Bar> = []
  let vBars: Array<Bar> = []

  function initBars() {
    for (let i = 0; i < nums; i++) {
      hBars.push(
        new Bar(
          new p5.Vector(-size - blockSize * i, blockSize * i),
          'horizontal',
          rainbow[(i + 1) % 7]
        )
      )
      vBars.push(
        new Bar(
          new p5.Vector(blockSize * i, -size - blockSize * i),
          'vertical',
          rainbow[(i + 2) % 7]
        )
      )
    }
  }

  function updateBars() {
    for (let i = 0; i < nums; i++) {
      hBars[i].update()
      vBars[i].update()

      for (let j = 0; j < nums; j++) {
        if (!hBars[i].isStop && !vBars[i].isStop) {
          hBars[i].blocks[j].update()
          vBars[i].blocks[j].update()
        }
        if (hBars[i].blocks[j].zIndex === vBars[j].blocks[i].zIndex) {
          hBars[i].blocks[j].draw()
          vBars[j].blocks[i].draw()
        } else {
          vBars[j].blocks[i].draw()
          hBars[i].blocks[j].draw()
        }
      }
    }
  }
  class Block {
    pos: p5.Vector
    vel: p5.Vector
    c: string
    zIndex: number
    dir: Direction
    constructor(
      pos: p5.Vector,
      vel: p5.Vector,
      c: string,
      zIndex: number,
      dir: Direction
    ) {
      this.pos = pos
      this.vel = vel
      this.c = c
      this.zIndex = zIndex
      this.dir = dir
    }
    update() {
      this.pos.add(this.vel)
    }
    draw() {
      p.noStroke()
      p.fill(this.c)
      p.rect(this.pos.x, this.pos.y, blockSize, blockSize)
      // p.textSize(24)
      // p.text(this.zIndex, this.pos.x, this.pos.y)
    }
  }

  class Bar {
    pos: p5.Vector
    dir: Direction
    vel: p5.Vector
    c: string
    blocks: Array<Block> = []
    isStop: boolean = false

    constructor(pos: p5.Vector, dir: Direction, c: string) {
      this.pos = pos
      this.dir = dir
      this.c = c

      if (this.dir === 'horizontal') {
        this.vel = new p5.Vector(velBase, 0)
        for (let i = 0; i < nums; i++) {
          this.blocks.push(
            new Block(
              new p5.Vector(this.pos.x + i * blockSize, this.pos.y),
              this.vel,
              c,
              i % 2,
              dir
            )
          )
        }
      } else {
        this.vel = new p5.Vector(0, velBase)
        for (let i = 0; i < nums; i++) {
          this.blocks.push(
            new Block(
              new p5.Vector(this.pos.x, this.pos.y + i * blockSize),
              this.vel,
              c,
              i % 2,
              dir
            )
          )
        }
      }
    }
    update() {
      if (this.dir === 'horizontal') {
        if (this.pos.x < 0) {
          this.pos.add(this.vel)
        } else {
          this.isStop = true
        }
      } else {
        if (this.pos.y < 0) {
          this.pos.add(this.vel)
        } else {
          this.isStop = true
        }
      }
      return this.isStop
    }
  }
  p.setup = function () {
    p.createCanvas(size, size)
    initBars()
  }
  p.draw = function () {
    p.background('#2d3436')
    updateBars()
  }
}
</script>

<style lang="less" scoped>
.viewCon {
  display: grid;
  place-items: center;
}
</style>
