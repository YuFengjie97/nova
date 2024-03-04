<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import chroma from 'chroma-js'
import { initStats } from '@/hooks/initStats'

const { random, PI, floor, min, abs, max, sqrt, sin, cos, atan } = Math

const con = ref<HTMLElement>()
const canvas = ref<HTMLCanvasElement>()
const animateId = 0
onMounted(() => {
  const { width, height } = con.value!.getBoundingClientRect()
  canvas.value!.width = width
  canvas.value!.height = height
  const ctx = canvas.value!.getContext('2d')!
  const { stats } = initStats(con.value!)

  class Particle {
    x: number
    y: number
    vx: number = 0
    vy: number = 0
    color: string
    constructor(x: number, y: number) {
      this.x = x
      this.y = y
      this.vx = random() * 100
      this.vy = random() * 100
      this.color = `rgb(${floor(random() * 255)},${floor(random() * 255)},${floor(random() * 255)})`
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
        this.x = random() * width
        this.y = random() * height
      }
    }

    update() {
      this.x += this.vx
      this.y += this.vy
      this.edge()
    }

    draw() {
      ctx.beginPath()
      ctx.fillStyle = this.color
      ctx.arc(this.x, this.y, 4, 0, Math.PI * 2)
      ctx.fill()
    }
  }
  const particles: Array<Particle> = []
  for (let i = 0; i < 8000; i++)
    particles.push(new Particle(random() * width, random() * height))

  function animate() {
    stats.update()
    ctx.clearRect(0, 0, width, height)
    particles.forEach((p) => {
      p.update()
      p.draw()
    })
    requestAnimationFrame(animate)
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
