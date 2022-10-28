<template>
  <div class="flowFieldLine2 viewCon">
    <Card class="card">
      <P5Con :setup="setup" :draw="draw" />
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Card from '@/components/Card.vue'
import P5Con from '@/components/P5Con.vue'
import p5 from 'p5'
import { FlowField, noise, ParticleFlow } from '@/utils/index'

const { random, floor, ceil, cos, sin, PI } = Math

let width: number
let height: number
let flowFieldSize = 40
let rows: number
let cols: number
let flowFieldTotal: number
let flowFields: Array<FlowField> = []
let flowFieldBaseAngle = PI * 8
let particles: Array<ParticleFlow> = []
let particleTotal = 500
let xInc = 0.1
let yInc = 0.1
let zInc = 0.0003
let zoff = 0

let multiColor = true

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
      let vec = p5.Vector.fromAngle(angle)
      let index = x + y * cols
      flowFields[index].update(vec)
    }
  }
}

function initParticles($p: p5) {
  let i = 0
  while (i < particleTotal) {
    particles.push(
      new ParticleFlow({
        $p,
        rangeWidth: width,
        rangeHeight: height,
        position: new p5.Vector(random() * width, random() * height),
        r: 2,
        color: 'rgba(0, 0, 0, 0.25)'
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
    particles[i].draw(multiColor)
    i++
  }
}

  function setup ($p: p5) {
    width = $p.width
    height = $p.height
    rows = floor(width / flowFieldSize)
    cols = floor(height / flowFieldSize)
    flowFieldTotal = rows*cols
    $p.background('rgba(0,0,0,0.5)')
    $p.colorMode($p.HSB, 255)
    initFlowFields()
    initParticles($p)
  }
  function draw ($p: p5) {
    updateFlowFields()
    updateParticles()
  }
</script>