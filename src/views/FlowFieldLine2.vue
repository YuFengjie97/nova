<template>
  <div class="flowFieldLine2 h-full flex justify-center items-center">
    <Card class="card" bgColor="#00cec9">
      <P5Con :sketch="sketch" />
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Card from '@/components/Card.vue'
import P5Con from '@/components/P5Con.vue'
import p5 from 'p5'
import { FlowField, noise, Particle } from '@/utils/index'

const { random, floor, ceil, cos, sin, PI } = Math

let width = 800
let height = 600
let flowFieldSize = 40
let rows = height / flowFieldSize
let cols = height / flowFieldSize
let flowFieldTotal = rows * cols
let flowFields: Array<FlowField> = []
let flowFieldBaseAngle = 360
let particles: Array<Particle> = []
let particleTotal = 10
let xInc = 0.3
let yInc = 0.3
let zInc = 0.0008
let zoff = 0

function initFlowFields() {
  for (let x = 0; x < width; x += flowFieldSize) {
    for (let y = 0; y < height; y += flowFieldSize) {
      flowFields.push(new FlowField({ x, y }, flowFieldSize))
    }
  }
}

function updateFlowFields() {
  let xoff = 0
  for (let y = 0; y < rows; y++) {
    xoff += xInc
    zoff += zInc
    let yoff = 0
    for (let x = 0; x < cols; x++) {
      yoff += yInc
      let angle = noise(xoff, yoff, zoff) * flowFieldBaseAngle
      let vec = new p5.Vector(
        cos(angle) * flowFieldSize,
        sin(angle) * flowFieldSize
      )
      let index = x + y * cols
      flowFields[index].update(vec)
    }
  }
}

function initParticles($p: p5) {
  let i = 0
  while (i < particleTotal) {
    particles.push(
      new Particle({
        $p,
        rangeWidth: width,
        rangeHeight: height,
        position: new p5.Vector(random() * width, random() * height),
        r: 2
      })
    )
    i++
  }
}

function updateParticles() {
  let i = 0
  while (i < particleTotal) {
    let { x, y } = particles[i].pos
    let xNum = floor(x / flowFieldSize)
    let yNum = floor(y / flowFieldSize)
    let index = yNum * cols + xNum
    if (index >= 0 && index < flowFieldTotal) {
      particles[i].applyForce(flowFields[index].vec)
    }
    particles[i].update()
    particles[i].draw()
    i++
  }
}

function sketch($p: p5) {
  $p.setup = function () {
    $p.createCanvas(width, height)
    $p.background('#34495e')
    initFlowFields()
    initParticles($p)
  }
  $p.draw = function () {
    updateFlowFields()
    updateParticles()
  }
}
</script>

<style lang="less" scoped>
.flowFieldLine2 {
  .card {
    width: 800px;
    height: 600px;
    padding: 0;
  }
  .con {
    width: 100%;
    height: 100%;
  }
}
</style>
