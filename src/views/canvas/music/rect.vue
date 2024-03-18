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
const rectSize = 20
const rows = canvasSize / rectSize
const cols = canvasSize / rectSize
const fftSize = 32
const sampleInterval = 100
const colors = ['#d63031', '#81ecec', '#fdcb6e']
// const colors = ['red', 'green', 'yellow']
const palette = chroma.scale(colors)

const dataArray = new Float32Array(fftSize)
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
class Rect {
  color = 0.1
  colort = 0.2
  x = 0
  y = 0
  musicVal = 0
  w = 1
  h = 1
  wt = 1
  ht = 1
  constructor(x: number, y: number, color: number) {
    this.x = x
    this.y = y
    this.color = color
    this.colort = color
  }

  getData(i: number) {
    return dataArray[i] * 0.5 + 0.5
  }

  updateTarget() {
    const c = rows / 2
    const xd = this.getData(floor((abs(this.x - c) / c) * fftSize))
    const yd = this.getData(floor((abs(this.y - c) / c) * fftSize))
    const d = ((noise(this.x / rows + xd, this.y / rows + yd) * 0.5 + 0.5))

    this.wt = d
    this.ht = d
    this.colort = d
  }

  update() {
    this.w = lerp(this.w, this.wt, 0.1)
    this.h = lerp(this.h, this.ht, 0.1)
    this.color = lerp(this.color, this.colort, 0.1)
  }

  draw() {
    ctx.beginPath()
    ctx.fillStyle = palette(this.color).css()
    const w = this.w * rectSize
    const h = this.h * rectSize
    const x = this.x * rectSize + ((1 - this.w) / 2) * rectSize
    const y = this.y * rectSize + ((1 - this.h) / 2) * rectSize
    ctx.fillRect(x, y, w, h)
  }
}

const rects: Array<Rect> = []

onMounted(() => {
  const { stats } = initStats(con.value!)
  const { width, height } = con.value!.getBoundingClientRect()!
  const s = min(width, height)
  canvas.value!.width = canvasSize
  canvas.value!.height = canvasSize
  canvas.value!.style.cssText = `width:${s}px;height:${s}px`
  ctx = canvas.value!.getContext('2d')!

  function init() {
    for (let x = 0; x < cols; x += 1) {
      for (let y = 0; y < rows; y += 1) {
        const d = (x + y) / (rows * 2)
        const rect = new Rect(x, y, d)
        rects.push(rect)
      }
    }
  }
  init()

  function animate() {
    ctx.clearRect(0, 0, canvasSize, canvasSize)
    stats.update()
    rects.forEach((r) => {
      r.update()
      r.draw()
    })
    requestAnimationFrame(animate)
  }
  animate()

  setInterval(() => {
    if (!isPlaying.value)
      return
    analyser.getFloatTimeDomainData(dataArray)
    rects.forEach(r => r.updateTarget())
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
