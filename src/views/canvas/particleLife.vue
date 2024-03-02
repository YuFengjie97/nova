<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import chroma from 'chroma-js'
import { Vector } from 'p5'
import { initStats } from '@/hooks/initStats'

const { random, PI, floor, min, max } = Math

const con = ref<HTMLElement>()
const canvas = ref<HTMLCanvasElement>()

const palette = chroma.scale(['#00b894', '#0984e3', '#6c5ce7', '#fdcb6e', '#e84393'])

const typeNum = 4
const particleNum = typeNum * 100
const particleRadius = 2
const distMin = 40
let distMax = 0
const maxSpeed = 0.1
const GGrid: Array<Array<number>> = [] // 引力常量,这里的G比较特殊，整数吸引，负数排斥

let animateId = 0
onMounted(() => {
  const { width, height } = con.value!.getBoundingClientRect()
  canvas.value!.width = width
  canvas.value!.height = height
  distMax = max(width, height) + 100
  const ctx = canvas.value!.getContext('2d')!
  const { stats } = initStats(con.value!)

  class Particle {
    pos: Vector
    vel: Vector
    type = 0
    canvasoff: HTMLCanvasElement
    constructor(pos: Vector, type: number) {
      this.pos = pos
      this.vel = new Vector(0, 0)
      this.type = type

      const can = document.createElement('canvas')
      can.width = particleRadius * 2
      can.height = particleRadius * 2
      const ctxOff = can.getContext('2d')!
      const color = palette(this.type / typeNum).css()
      ctxOff.beginPath()
      ctxOff.fillStyle = color
      ctxOff.arc(particleRadius, particleRadius, particleRadius, 0, 2 * PI)
      ctxOff.fill()
      ctxOff.closePath()
      this.canvasoff = can
    }

    edge() {
      if (this.pos.x < 0)
        this.pos.x = width + this.pos.x
      if (this.pos.x > width)
        this.pos.x = this.pos.x - width
      if (this.pos.y < 0)
        this.pos.y = height + this.pos.y
      if (this.pos.y > height)
        this.pos.y = height - this.pos.y
    }

    update(p: Particle, G: number) {
      this.edge()
      const dist = this.pos.dist(p.pos)

      if (dist < distMax) {
        const f = G * 100 / dist
        const dir = this.pos.copy().sub(p.pos).normalize()
        if (dist > distMin) {
          this.vel.add(dir.mult(f))
          this.vel.limit(maxSpeed)
          this.pos.add(this.vel)
        }
      }
    }

    draw() {
      ctx.drawImage(this.canvasoff, this.pos.x, this.pos.y)
    }
  }

  function initGrid() {
    for (let i = 0; i < typeNum; i++) {
      const arr = []
      for (let j = 0; j < typeNum; j++)
        arr.push(floor(random() * 20 - 10))
      GGrid.push(arr)
    }
  }
  initGrid()

  const particles: Array<Particle> = []
  function initParticles() {
    for (let i = 0; i < typeNum; i++) {
      for (let j = 0; j < particleNum / typeNum; j++)
        particles.push(new Particle(new Vector(random() * width, random() * height), i))
    }
  }
  initParticles()

  function updateParticles() {
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i]
      for (let j = 0; j < particles.length; j++) {
        if (i === j)
          continue
        const p2 = particles[j]

        const G = GGrid[p1.type][p2.type]
        p1.update(p2, G)
        p2.update(p1, G)
      }
    }
    particles.forEach(p => p.draw())
  }

  ctx.fillStyle = 'rgba(0,0,0,0.1)'
  function animate() {
    stats.update()
    ctx.fillRect(0, 0, width, height)
    updateParticles()
    animateId = requestAnimationFrame(animate)
  }
  animate()
})
onUnmounted(() => {
  cancelAnimationFrame(animateId)
})
</script>

<template>
  <div ref="con" class="w-full h-full">
    <canvas ref="canvas" class="block w-full h-full" />
  </div>
</template>
