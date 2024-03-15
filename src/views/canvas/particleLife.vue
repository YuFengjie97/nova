<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import chroma from 'chroma-js'

import { initStats } from '@/hooks/initStats'
import { initGUI } from '@/hooks/initGUI'

const { random, PI, min, abs, sqrt, floor } = Math

const con = ref<HTMLElement>()
const canvas = ref<HTMLCanvasElement>()
// const palette = chroma.scale(['#55efc4', '#81ecec', '#74b9ff', '#a29bfe', '#ffeaa7', '#fab1a0', '#ff7675', '#fd79a8'])
const palette = chroma.scale(['#fd79a8', '#81ecec', '#00cec9', '#d63031'])

const typeNum = 10
const particleNum = typeNum * 100
const particleRadius = 1.6
const AGrid: Array<Array<number>> = []
let distMin = 10 // 小于这个距离，所有力都会变成斥力
let distMax = 100 // 在disMin - distMax范围内受AGrid定义的力的影响
const frictionFactor = 0.98
let pullFactor = 100
let pushFactor = 50
let tail = 0.5

function initGrid() {
  for (let i = 0; i < typeNum; i++) {
    const arr = []
    for (let j = 0; j < typeNum; j++)
      arr.push(random() * 2 - 1)

    AGrid.push(arr)
  }
}
initGrid()

function resetGrid() {
  for (let i = 0; i < typeNum; i++) {
    for (let j = 0; j < typeNum; j++)
      AGrid[i][j] = floor((random() * 2) - 1)
  }
}

let animateId = 0
onMounted(() => {
  const { width, height } = con.value!.getBoundingClientRect()
  canvas.value!.width = width
  canvas.value!.height = height
  const ctx = canvas.value!.getContext('2d')!
  const { stats } = initStats(con.value!)

  const { gui } = initGUI(con.value!)
  const setting = {
    distMin,
    distMax,
    frictionFactor,
    pullFactor,
    pushFactor,
    tail,
    reset() {
      resetGrid()
      initParticles()
    },
  }
  const folder = gui.addFolder('setting')
  folder.open()
  folder.add(setting, 'distMin', 0, 20, 1).onChange((val) => {
    distMin = val
  })
  folder.add(setting, 'pushFactor', 1, 200, 1).onChange((val) => {
    pushFactor = val
  })
  folder.add(setting, 'distMax', 20, floor(min(width, height)), 1).onChange((val) => {
    distMax = val
  })
  folder.add(setting, 'pullFactor', 1, 200, 1).onChange((val) => {
    pullFactor = val
  })
  folder.add(setting, 'tail', 0, 1, 0.1).onFinishChange((val) => {
    tail = val
    ctx.fillStyle = `rgba(0,0,0,${1 - tail})`
  })
  folder.add(setting, 'reset')

  class Particle {
    x = 0
    y = 0
    vx = 0
    vy = 0
    type = 0
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
      // if (this.x < 0) {
      //   this.x = width + this.x
      //   return true
      // }
      // if (this.x > width) {
      //   this.x = this.x - width
      //   return true
      // }
      // if (this.y < 0) {
      //   this.y = height + this.y
      //   return true
      // }
      // if (this.y > height) {
      //   this.y = this.y - height
      //   return true
      // }

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
        return (dist / distMin - 1) * pullFactor

      // 在distMin~distMax接受F与距离的影响
      if (dist < distMax)
        return pushFactor * a * (dist - distMin) / (distMax - distMin)
      // return a * (1 - abs(2 * dist - 1 - distMin) / (1 - distMin))

      return 0
    }

    updateForce(p: Particle) {
      const a = AGrid[this.type][p.type]

      const dx = p.x - this.x
      const dy = p.y - this.y
      const dist = sqrt(dx ** 2 + dy ** 2)

      const f = this.accletorForce(dist, a) * 0.001
      this.vx += dx / dist * f
      this.vy += dy / dist * f
    }

    update() {
      if (this.edge())
        return
      this.vx *= frictionFactor
      this.vy *= frictionFactor
      this.x += this.vx
      this.y += this.vy
    }

    draw() {
      ctx.drawImage(this.canvasoff, this.x, this.y)
    }
  }

  setInterval(() => {
    updateParticles()
  }, 100)

  const particles: Array<Particle> = []
  function initParticles() {
    particles.length = 0
    for (let i = 0; i < typeNum; i++) {
      for (let j = 0; j < particleNum / typeNum; j++)
        particles.push(new Particle(random() * width, random() * height, i))
        // particles.push(new Particle(random() * randomSize - randomSize / 2 + cx, random() * randomSize - randomSize / 2 + cy, i))
    }
  }
  initParticles()
  function resetPariclesPos() {
    const cx = width / 2
    const cy = height / 2
    particles.forEach((p) => {
      p.x = random() * distMax + cx - distMax / 2
      p.y = random() * distMax + cy - distMax / 2
    })
  }

  function updateParticles() {
    for (let i = 0; i < particles.length; i++) {
      const p1 = particles[i]
      for (let j = 0; j < particles.length; j++) {
        if (i === j)
          continue
        const p2 = particles[j]
        p1.updateForce(p2)
        p2.updateForce(p1)
      }
    }
  }

  ctx.fillStyle = `rgba(0,0,0,${1 - tail})`
  function animate() {
    stats.update()
    ctx.fillRect(0, 0, width, height)
    particles.forEach((p) => {
      p.update()
      p.draw()
    })
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
