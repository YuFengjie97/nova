<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import chroma from 'chroma-js'
import { createNoise2D } from 'simplex-noise'
import { initAudioAnalyser } from '@/utils/audio2'
import mp3 from '@/assets/audio/audio-sugarCrush.mp3'
import { initStats } from '@/hooks/initStats'
import { lerp } from '@/utils'

const noise = createNoise2D()

const { min, max, PI, sin, cos, atan, random, abs, sqrt, floor } = Math
const con = ref<HTMLElement>()
const canvas = ref<HTMLCanvasElement>()
let ctx: CanvasRenderingContext2D
const canvasSize = 800
const fftSize = 32
const sampleInterval = 10
const colors = ['#d63031', '#81ecec', '#fdcb6e']
// const colors = ['red', 'green', 'yellow']
const palette = chroma.scale(colors)
const yRange = 100

const dataFreq = new Uint8Array(fftSize / 2)
const dataDomain = new Float32Array(fftSize)
let analyser: AnalyserNode
const { audio, getAnalyser } = initAudioAnalyser(mp3, fftSize)
const isPlaying = ref(false)
function handleAudio() {
  if (audio.paused) {
    audio.play()
    isPlaying.value = true
    analyser = getAnalyser().analyser
  }
  else {
    audio.pause()
    isPlaying.value = false
  }
}

type CurveType = 'f' | 'd' | 'fd'

class Point {
  x = 0
  y = 0
  xt = 0
  yt = 0
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
    this.xt = x
    this.yt = y
  }

  updateYT(yt: number) {
    this.yt = yt
  }

  update() {
    this.x += (this.xt - this.x) * 0.1
    this.y += (this.yt - this.y) * 0.1
  }
}

class Curve {
  points: Array<Point> = []
  yBase = 0
  type: CurveType = 'f'

  constructor(yBase: number, type: CurveType) {
    const length = type === 'd' ? fftSize : fftSize / 2
    this.points = Array.from({ length }).map((item, i) => {
      return new Point(i * (canvasSize / length), yBase)
    })
    this.type = type
    this.yBase = yBase
  }

  update() {
    this.points.forEach(p => p.update())
  }

  updateT() {
    this.points.forEach((p, i) => {
      if (this.type === 'f') {
        const t = -dataFreq[i] / 255 * yRange + this.yBase
        p.updateYT(t)
      }
      if (this.type === 'd') {
        const t = dataDomain[i] * yRange + this.yBase
        p.updateYT(t)
      }
      if (this.type === 'fd') {
        const vf = -dataFreq[i] / 255
        const vd = dataDomain[i]
        const v = vf * vd
        const t = v * yRange + this.yBase
        p.updateYT(t)
      }
    })
  }

  draw() {
    ctx.beginPath()
    for (let i = 0; i < this.points.length - 1; i++) {
      const cur = this.points[i]
      const nex = this.points[i + 1]
      const cen = { x: (cur.x + nex.x) / 2, y: (cur.y + nex.y) / 2 }
      if (i === 0)
        ctx.moveTo(cen.x, cen.y)
      else
        ctx.quadraticCurveTo(cur.x, cur.y, cen.x, cen.y)
    }
    ctx.stroke()

    // for (let i = 0; i < this.points.length; i++) {
    //   const p = this.points[i]
    //   if (i === 0)
    //     ctx.moveTo(p.x, p.y)
    //   else
    //     ctx.lineTo(p.x, p.y)
    // }
    // ctx.stroke()
  }
}

const curve1 = new Curve(300, 'f')
const curve2 = new Curve(500, 'd')
const curve3 = new Curve(700, 'fd')

onMounted(() => {
  const { stats } = initStats(con.value!)
  const { width, height } = con.value!.getBoundingClientRect()!
  const s = min(width, height)
  canvas.value!.width = canvasSize
  canvas.value!.height = canvasSize
  canvas.value!.style.cssText = `width:${s}px;height:${s}px`
  ctx = canvas.value!.getContext('2d')!
  ctx.strokeStyle = '#fff'

  function animate() {
    stats.update()
    ctx.clearRect(0, 0, canvasSize, canvasSize)
    curve1.update()
    curve2.update()
    curve3.update()
    curve1.draw()
    curve2.draw()
    curve3.draw()
    // console.log(dataFreq.reduce((acc, cur) => {
    //   acc.max = max(acc.max, cur)
    //   acc.min = min(acc.min, cur)
    //   return acc
    // }, { min: 0, max: 0 }))

    requestAnimationFrame(animate)
  }
  animate()

  setInterval(() => {
    analyser && analyser.getFloatTimeDomainData(dataDomain)
    analyser && analyser.getByteFrequencyData(dataFreq)
    curve1.updateT()
    curve2.updateT()
    curve3.updateT()
  }, sampleInterval)
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
    width: 100%;
    height: 100%;
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
