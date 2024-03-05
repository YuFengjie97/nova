<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import chroma from 'chroma-js'

import { initStats } from '@/hooks/initStats'

const { random, PI, min, abs, sqrt } = Math

const con = ref<HTMLElement>()
const canvas = ref<HTMLCanvasElement>()
// const palette = chroma.scale(['#81ecec', '#d63031'])
const palette = chroma.scale(['#55efc4', '#81ecec', '#74b9ff', '#a29bfe', '#ffeaa7', '#fab1a0', '#ff7675', '#fd79a8'])

const typeNum = 8
const particleNum = typeNum * 100
const particleRadius = 2
const frictionFactor = 0.98
const AGrid: Array<Array<number>> = [] // 整数引力，负数斥力

let animateId = 0
onMounted(() => {
  const { width, height } = con.value!.getBoundingClientRect()
  canvas.value!.width = width
  canvas.value!.height = height
  const ctx = canvas.value!.getContext('2d')!
  const { stats } = initStats(con.value!)
  const cx = width / 2
  const cy = height / 2

  // 为了更好地表现粒子间作用，这些变量需要根据屏幕尺寸联动计算
  const size = min(width, height)
  const scale = 30
  const distMin = size / scale // 小于这个距离，所有力都会变成斥力
  const distMax = distMin * 5 // 在disMin - distMax范围内受AGrid定义的力的影响
  const forceFactor = 1 / (scale * 4)
  const randomSize = size / 4

  class Particle {
    x: number = 0
    y: number = 0
    vx: number = 0
    vy: number = 0
    type: number = 0
    canvasoff: HTMLCanvasElement
    constructor(x: number, y: number, type: number) {
      this.x = x
      this.y = y
      this.type = type

      const can = document.createElement('canvas')
      can.width = particleRadius * 2
      can.height = particleRadius * 2
      const ctxOff = can.getContext('2d')!
      const color = palette(type / typeNum).css()
      ctxOff.beginPath()
      ctxOff.fillStyle = color
      ctxOff.arc(particleRadius, particleRadius, particleRadius, 0, 2 * PI)
      ctxOff.fill()
      ctxOff.closePath()
      this.canvasoff = can
    }

    edge() {
      // if (this.x < 0)
      //   this.x = width + this.x
      // if (this.x > width)
      //   this.x = this.x - width
      // if (this.y < 0)
      //   this.y = height + this.y
      // if (this.y > height)
      //   this.y = this.y - height

      if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
        // this.x = random() * randomSize - randomSize / 2 + cx
        // this.y = random() * randomSize - randomSize / 2 + cy
        this.x = random() * width
        this.y = random() * height
        return true
      }
      return false
    }

    accletorForce(dist: number, a: number) {
    // 小于最小距离，都会变成斥力
      if (dist <= distMin)
        return (dist / distMin - 1) * 0.5

      // 在distMin~distMax接受F与距离的影响
      if (dist < distMax)
        return a * (dist - distMin) / (distMax - distMin)
      // return a * (1 - abs(2 * dist - 1 - distMin) / (1 - distMin))

      return 0
    }

    update(p: Particle) {
      if (this.edge())
        return
      const a = AGrid[this.type][p.type]

      // dx,dy的方向，即p-this或this-p决定了正负与吸引排斥的关系
      const dx = p.x - this.x
      const dy = p.y - this.y
      const dist = sqrt(dx ** 2 + dy ** 2)

      const f = this.accletorForce(dist, a) * forceFactor
      this.vx += dx / dist * f
      this.vy += dy / dist * f

      this.vx *= frictionFactor
      this.vy *= frictionFactor

      // const maxSpeed = 0.005
      // const dirx = this.vx > 0 ? 1 : -1
      // const diry = this.vy > 0 ? 1 : -1
      // this.vx = abs(this.vx) > maxSpeed ? (maxSpeed * dirx) : this.vx
      // this.vx = abs(this.vy) > maxSpeed ? (maxSpeed * diry) : this.vy

      this.x += this.vx
      this.y += this.vy
    }

    draw() {
      ctx.drawImage(this.canvasoff, this.x, this.y)
    }
  }

  function initGrid() {
    let off = -0
    for (let i = 0; i < typeNum; i++) {
      const arr = []
      for (let j = 0; j < typeNum; j++) {
        off += 0.1
        off = off > 1 ? -1 : off
        arr.push(off)
      }
      AGrid.push(arr)
    }
  }
  initGrid()

  function resetGrid() {
    for (let i = 0; i < typeNum; i++) {
      for (let j = 0; j < typeNum; j++) {
        // AGrid[i][j] = floor((random() * 20) - 10) * 0.1
        let val = AGrid[i][j]
        val += 0.1
        AGrid[i][j] = val > 1 ? -1 : val
      }
    }
  }
  setInterval(() => resetGrid(), 3000)

  const particles: Array<Particle> = []
  function initParticles() {
    for (let i = 0; i < typeNum; i++) {
      for (let j = 0; j < particleNum / typeNum; j++)
        particles.push(new Particle(random() * randomSize - randomSize / 2 + cx, random() * randomSize - randomSize / 2 + cy, i))
        // particles.push(new Particle(random() * width, random() * height, i))
    }
  }
  initParticles()

  function updateParticles() {
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i]
      for (let j = i + 1; j < particles.length; j++) {
        if (i === j)
          continue
        const p2 = particles[j]
        p1.update(p2)
        p2.update(p1)
      }
    }

    particles.forEach(p => p.draw())
  }

  ctx.fillStyle = 'rgba(0,0,0,1)'
  function animate() {
    stats.update()
    ctx.fillRect(0, 0, width, height)
    updateParticles()
    animateId = requestAnimationFrame(animate)
  }
  animate()
  // setInterval(() => {
  //   particles.forEach(p => console.log(p.x, p.vx))
  // }, 1000)
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
