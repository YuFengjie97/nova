<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import chroma from 'chroma-js'
import { initAudioAnalyser } from '@/utils/audio2'
import mp3 from '@/assets/audio/audio-sugarCrush.mp3'
import { initStats } from '@/hooks/initStats'
import { lerp } from '@/utils'

const { min, max, PI, sin, cos, atan, random, abs, sqrt, floor } = Math
const con = ref<HTMLElement>()
const canvas = ref<HTMLCanvasElement>()
let ctx: CanvasRenderingContext2D
const canvasSize = 800
const rectSize = 40
const rows = canvasSize / rectSize
const cols = canvasSize / rectSize
const c = rows / 2
const fftSize = 32
const sampleInterval = 100
const colors = ['#55efc4', '#81ecec', '#a29bfe', '#fd79a8', '#ffeaa7', '#ff7675']
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
  i = 0
  x = 0
  y = 0
  musicVal = 0
  w = 1
  h = 1
  wt = 1
  ht = 1
  constructor(i: number, x: number, y: number, color: number) {
    this.i = i
    this.x = x
    this.y = y
    this.color = color
    this.colort = color
  }

  updateTarget() {
    const i = floor(sqrt((this.x - c) ** 2 + (this.y - c) ** 2) / c * fftSize)
    const n = dataArray[i] * 0.5 + 1
    this.colort = n
  }

  update() {
    this.w = lerp(this.w, this.wt, 0.1)
    this.h = lerp(this.h, this.ht, 0.1)
    this.color = lerp(this.color, this.colort, 0.1)
  }

  draw() {
    ctx.beginPath()
    ctx.fillStyle = palette(this.color).css()
    ctx.fillRect(this.x * rectSize, this.y * rectSize, this.w * rectSize, this.h * rectSize)
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
        const i = x + y * cols
        const rect = new Rect(i, x, y, d)
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
