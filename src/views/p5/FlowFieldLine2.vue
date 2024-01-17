<script lang="ts" setup>
import p5 from 'p5'
import Card from '@/components/Card.vue'
import P5Con from '@/components/P5Con.vue'
import { FlowField, ParticleFlow, noise } from '@/utils/index'

const { random, floor, ceil, cos, sin, PI } = Math

let width: number
let height: number
const flowFieldSize = 40
let rows: number
let cols: number
let flowFieldTotal: number
const flowFields: Array<FlowField> = []
const flowFieldBaseAngle = PI * 8
const particles: Array<ParticleFlow> = []
const particleTotal = 500
const xInc = 0.1
const yInc = 0.1
const zInc = 0.0003
let zoff = 0

const multiColor = true

function initFlowFields() {
  for (let x = 0; x < width; x += flowFieldSize) {
    for (let y = 0; y < height; y += flowFieldSize)
      flowFields.push(new FlowField({ x, y }, flowFieldSize))
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
      const angle = noise(xoff, yoff, zoff) * flowFieldBaseAngle
      const vec = p5.Vector.fromAngle(angle)
      const index = x + y * cols
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
        color: 'rgba(0, 0, 0, 0.25)',
      }),
    )
    i++
  }
}

function updateParticles() {
  let i = 0
  while (i < particleTotal) {
    const { x, y } = particles[i].pos
    const xNum = floor(x / flowFieldSize)
    const yNum = floor(y / flowFieldSize)
    const index = yNum * cols + xNum
    if (index >= 0 && index < flowFieldTotal)
      particles[i].applyForce(flowFields[index].vec)

    particles[i].update()
    particles[i].draw(multiColor)
    i++
  }
}

function setup($p: p5) {
  width = $p.width
  height = $p.height
  rows = floor(width / flowFieldSize)
  cols = floor(height / flowFieldSize)
  flowFieldTotal = rows * cols
  $p.background('rgba(0,0,0,0.5)')
  $p.colorMode($p.HSB, 255)
  initFlowFields()
  initParticles($p)
}
function draw($p: p5) {
  updateFlowFields()
  updateParticles()
}
</script>

<template>
  <div class="flowFieldLine2 w-full h-full">
    <Card class="card">
      <P5Con :setup="setup" :draw="draw" />
    </Card>
  </div>
</template>
