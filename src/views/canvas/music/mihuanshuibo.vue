<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { createNoise2D } from 'simplex-noise'
import mp3 from '@/assets/audio/audio-sugarCrush.mp3'

// import mp3 from '@/assets/audio/audio-shadowSun.mp3'
import { initAudioAnalyser } from '@/utils/audio2'
import { initStats } from '@/hooks/initStats'

const noise = createNoise2D()

const { min, max, PI, sin, cos, atan, random, abs, sqrt, floor } = Math
const TP = PI * 2

const isPlaying = ref(false)
const handlePlay = ref(() => { })
const handlePause = ref(() => { })

function handleAudio() {
  isPlaying.value ? handlePause.value() : handlePlay.value()
}

const con = ref<HTMLElement>()
const canvas = ref<HTMLCanvasElement>()

const size = 800
const radius = size * 0.2
const fftSize = 32
const peakNum = 2
const peakLen = floor(fftSize / peakNum)
const amp = size * 0.2
const interval = 100

onMounted(() => {
  const { width, height } = con.value!.getBoundingClientRect()
  const { stats } = initStats(con.value!)
  const s = `${min(width, height)}px`
  canvas.value!.style.width = s
  canvas.value!.style.height = s
  canvas.value!.width = size
  canvas.value!.height = size
  const ctx = canvas.value!.getContext('2d')!
  ctx.strokeStyle = '#fff'
  ctx.lineWidth = 2
  ctx.translate(size / 2, size / 2)

  const { audio, getAnalyser } = initAudioAnalyser(mp3, fftSize)
  let isInited = false
  let analyser: AnalyserNode
  const dataArray: Float32Array = new Float32Array(fftSize)

  class Point {
    i = 0
    angle = 0
    xBase = 0
    yBase = 0
    x = 0
    y = 0
    dx = 0
    dy = 0
    constructor(i: number, x: number, y: number) {
      this.i = i
      this.angle = i / fftSize * TP
      this.x = x
      this.y = y
      this.xBase = x
      this.yBase = y
    }

    updateD() {
      const dataVal = dataArray[this.i]
      const t = performance.now() / 1000
      // const noiseVal = noise(this.i % peakLen / peakLen * 0.1, t * 0.001) * 0.5 + 1
      const l = dataVal * (this.i % peakLen === 0 ? amp * 1.4 : amp)
      // const l = dataVal * amp
      const dx = cos(this.angle) * l
      const dy = sin(this.angle) * l
      this.dx = dx
      this.dy = dy
    }

    update() {
      const x = this.xBase + this.dx
      const y = this.yBase + this.dy
      this.x += (x - this.x) * 0.1
      this.y += (y - this.y) * 0.1
    }
  }
  class Shape {
    points: Array<Point>
    gradientDist = size / 2
    constructor(points: Array<Point>) {
      this.points = points
    }

    updateD() {
      this.points.forEach(p => p.updateD())
    }

    update() {
      this.points.forEach((p, i) => {
        if (i === 10)
          this.gradientDist = sqrt(p.x ** 2 + p.y ** 2)
        p.update()
      })
    }

    drawShape() {
      let cx1 = 0
      let cy1 = 0
      for (let i = 0; i < this.points.length; i++) {
        const cur = this.points[i]
        const nex = i === this.points.length - 1 ? this.points[0] : this.points[i + 1]
        const cx = (cur.x + nex.x) / 2
        const cy = (cur.y + nex.y) / 2
        if (i === 0) {
          ctx.beginPath()
          ctx.moveTo(cx, cy)
          cx1 = cx
          cy1 = cy
        }
        else {
          ctx.quadraticCurveTo(cur.x, cur.y, cx, cy)
        }
      }

      ctx.quadraticCurveTo(this.points[0].x, this.points[0].y, cx1, cy1)
      // ctx.stroke()
      // ctx.fillStyle = '#fd79a8'
      const color = ctx.createRadialGradient(0, 0, 0, 0, 0, this.gradientDist)
      color.addColorStop(0, '#fd79a8')
      color.addColorStop(0.5, '#81ecec')
      color.addColorStop(1, '#ff7675')
      ctx.fillStyle = color
      ctx.fill()
    }

    draw() {
      this.drawShape()
    }
  }
  const shape = new Shape(Array.from({ length: fftSize }).map((item, i) => {
    const angle = i / fftSize * TP
    const length = radius
    const x = cos(angle) * length
    const y = sin(angle) * length
    return new Point(i, x, y)
  }))

  function animate() {
    stats.update()
    ctx.clearRect(-size / 2, -size / 2, size, size)
    shape.update()
    shape.draw()
    requestAnimationFrame(animate)
  }
  animate()

  handlePlay.value = () => {
    if (!audio.paused)
      return

    audio.play()
    isPlaying.value = true

    if (isInited)
      return

    analyser = getAnalyser().analyser
    isInited = true

    setInterval(() => {
      analyser.getFloatTimeDomainData(dataArray)
      // analyser.getFloatFrequencyData(dataArray)
      shape.updateD()
    }, interval)
  }

  handlePause.value = () => {
    audio.pause()
    isPlaying.value = false
  }
})
</script>

<template>
  <div ref="con" class="con w-full h-full bg-#000">
    <div class="bt" @click="handleAudio">
      {{ isPlaying ? 'pause' : 'play' }}
    </div>

    <canvas ref="canvas" class="canvas" width="400" height="400" />
  </div>
</template>

<style lang='less' scoped>
.con {
  position: relative;

  .canvas {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .bt {
    width: 100px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    z-index: 100;
    cursor: pointer;
  }
}
</style>
