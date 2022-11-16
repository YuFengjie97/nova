<template>
  <div class="viewCon">
    <P5Con :setup="setup" :draw="draw" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import P5Con from '@/components/P5Con.vue'
import p5 from 'p5'

const { random, PI } = Math

let p: p5
let width: number
let height: number
let bloods: {
  [id: string]: Blood
} = {}
let bloodTotal = 1
let color = 'red'

let velB = 1
let idCount = 0

class Blood {
  pos: p5.Vector
  vel: p5.Vector
  r: number
  bifCount = 2 //每个节点最大分差数目
  id: number
  constructor(pos: p5.Vector, vel: p5.Vector, r: number) {
    this.pos = pos
    this.vel = vel
    this.r = r
    this.id = idCount
    idCount++
  }
  draw() {
    const {
      pos: { x, y },
      r
    } = this
    p.fill(color)
    p.noStroke()
    p.circle(x, y, r)
  }
  update() {
    if (this.r < 0) return
    this.pos.add(this.vel)
    if (this.r > 0) {
      this.r -= 0.01
    } else{
      delete bloods[this.id]
    }

    // 分叉概率
    let isBif = random() < 0.01
    if (isBif && this.bifCount > 0) {
      this.bifCount--
      let vel = p5.Vector.fromAngle(p.map(random(), 0, 1, PI/180*75, PI/180*105) ,velB)
      let b =new Blood(this.pos.copy(), vel, this.r)
      bloods[b.id] = b
    }

    // 重置垂直方向概率
    // let isAlg = random() < 0.001
    // if(isAlg) {
    //   this.vel.set(this.pos.x, -velB)
    // }
  }
}

function initBlood() {
  for (let i = 0; i < bloodTotal; i++) {
    let b = new Blood(p.createVector(0, 0), p5.Vector.fromAngle(PI/2, velB), 10)
    bloods[b.id] = b
  }
}
function updateBlood() {
  for (let i in bloods) {
    if(bloods.hasOwnProperty(i)){
      bloods[i].update()
      bloods[i].draw()
    }
    
  }
}

function setup($p: p5) {
  p = $p
  width = p.width
  height = p.height

  initBlood()
}
function draw() {
  p.translate(width / 2, 0)
  updateBlood()
  // let vec = p5.Vector.fromAngle(p.radians(90),200)
  // vec.setHeading(p.radians(120))
  // p.stroke('red')
  // p.line(0,0,vec.x,vec.y)
}
</script>

<style lang="less" scoped>
</style>
