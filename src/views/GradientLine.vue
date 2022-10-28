<template>
  <div class="gradientLine viewCon">
    <Card class="card">
      <P5Con :setup="setup" :draw="draw"></P5Con>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Card from '@/components/Card.vue'
import P5Con from '@/components/P5Con.vue'
import p5 from 'p5'

import { ParticleGradientLine, getRandomColor } from '@/utils/index'

const { random, floor } = Math

let particles: Array<ParticleGradientLine> = []
let particlesTotal = 30
let width: number
let height: number
let velBase = 2 // 最开始的随机速度基准值
let lineRange = 200 // 在这个范围内，才会绘制线条
let lineWidth = 2

function initParticles($p: p5) {
  let i = 0
  while (i < particlesTotal) {
    particles.push(
      new ParticleGradientLine(
        {
          $p,
          r: 1,
          rangeWidth: width,
          rangeHeight: height,
          position: new p5.Vector(random() * width, random() * height),
          color: getRandomColor(),
        },
        new p5.Vector(
          $p.random(-velBase, velBase),
          $p.random(-velBase, velBase)
        )
      )
    )
    i++
  }
}

function updateParticles($p: p5) {
  for (let i = 0; i < particlesTotal; i++) {
    let parI = particles[i]
    parI.update()
    parI.draw(false)

    for (let j = 0; j < particlesTotal; j++) {
      let parJ = particles[j]
      if (j === i) continue
      let v1 = parI.pos
      let v2 = parJ.pos
      let distance = v1.copy().sub(v2).mag()

      if (distance < lineRange) {
        let { x: x1, y: y1 } = parI.pos
        let { x: x2, y: y2 } = parJ.pos
        let r = $p.red(parI.color)
        let g = $p.green(parI.color)
        let b = $p.blue(parI.color)
        const alpha = floor($p.map(distance, 0, lineRange, 255, 0))
        $p.stroke(r, g, b, alpha)
        $p.strokeWeight(lineWidth)
        $p.line(x1, y1, x2, y2)
      }
    }
  }
}

function mouseLine($p: p5) {
  let { mouseX, mouseY } = $p
  let mouseVec = new p5.Vector(mouseX, mouseY)
  for (let i = 0; i < particlesTotal; i++) {
    let parI = particles[i]
    let distance = mouseVec.copy().sub(parI.pos).mag()
    if (distance < lineRange) {
      let { x: x1, y: y1 } = mouseVec
      let { x: x2, y: y2 } = parI.pos
      let r = $p.red(parI.color)
      let g = $p.green(parI.color)
      let b = $p.blue(parI.color)
      const alpha = floor($p.map(distance, 0, lineRange, 255, 0))
      $p.stroke(r, g, b, alpha)
      $p.strokeWeight(lineWidth)
      $p.line(x1, y1, x2, y2)
    }
  }
}

  function setup ($p: p5) {
    width = $p.width
    height = $p.height
    $p.background('#2d3436')
    initParticles($p)
  }
  function draw ($p: p5) {
    $p.background('#2d3436')
    updateParticles($p)
    mouseLine($p)
  }
</script>

