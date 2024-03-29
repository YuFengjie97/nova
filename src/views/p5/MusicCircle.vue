<script lang="ts" setup>
import p5 from 'p5'
import { ref } from 'vue'
import P5Con from '@/components/P5Con.vue'
import AudioController from '@/components/AudioController.vue'
import { initBezier, newBezier } from '@/utils/p5bezier'
import audio from '@/assets/audio/audio-sugarCrush.mp3'
import type { AudioAnalyser } from '@/utils'
import { getRandomIndex } from '@/utils'

const { PI, random, floor, min } = Math

let width: number
let height: number
const fftSize = ref(64)
const particleTotal = fftSize.value / 2
const particles: Array<Particle> = []
const points: Array<Point> = []
let aa: AudioAnalyser
const audioDataMax = 250
const audioDataMin = 100 // audioData元素有存在0，或比较小的值，都让他们取这个值
const radiusRatio = 0.9 // 粒子圆环半径与画布高度一半比
const lineColor = '#5f27cd'

// 这个类与上面配置数据又耦合，whocare，我也没想着复用，哈哈哈
class Particle {
  $p: p5
  angle: number
  basePos: p5.Vector
  pos: p5.Vector
  r: number = 2
  audioIndex: number = 0 // 关联粒子与音频数据数组索引
  h = 0
  count = 0
  constructor($p: p5, angle: number, audioIndex: number) {
    this.$p = $p
    this.angle = angle
    this.basePos = p5.Vector.fromAngle(
      angle,
      (min(width, height) / 2) * radiusRatio,
    )
    this.pos = this.basePos.copy()
    this.audioIndex = audioIndex
  }

  draw() {
    const {
      $p,
      pos: { x, y },
      h,
      count,
    } = this
    $p.noStroke()
    $p.fill((h + count) % 255, 255, 127)
    $p.circle(x, y, this.r * 2)
  }

  update(scale: number) {
    this.pos = this.basePos.copy().mult(scale)
    this.h = floor(scale * 255)
    this.count++
  }
}

function getAudioAnalyser(val: AudioAnalyser) {
  aa = val
}
function initParticles($p: p5) {
  const getIndex = getRandomIndex(particleTotal)
  for (let i = 0; i < particleTotal; i++) {
    particles.push(
      new Particle($p, ((PI * 2) / particleTotal) * i, getIndex() ?? 0),
    )
  }
}
function updateParticles() {
  const audioData = aa.getAudioData()
  points.length = 0

  particles.forEach((particle) => {
    const dataOrigin = audioData[particle.audioIndex]
    const data = dataOrigin < audioDataMin ? audioDataMin : dataOrigin
    particle.update(data / audioDataMax)
    particle.draw()

    // 记录曲线用的坐标
    if (dataOrigin > audioDataMin)
      points.push([particle.pos.x, particle.pos.y])
  })
}

function drawLine($p: p5) {
  $p.noFill()
  $p.stroke(lineColor)
  $p.strokeWeight(2)
  if (points.length >= 10)
    newBezier(points, 'CLOSE')
}

function setup($p: p5, canvas?: p5.Renderer) {
  width = $p.width
  height = $p.height
  $p.colorMode($p.HSB)
  initBezier(canvas)
  initParticles($p)
}
function draw($p: p5) {
  $p.translate(width / 2, height / 2)
  // $p.background('#2d3436')
  $p.background('rgba(0, 0, 0, 0.07)')

  if (aa) {
    updateParticles()
    drawLine($p)
  }
}
</script>

<template>
  <div class="w-full h-full">
    <AudioController
      class="absolute top-0 left-0 z-100"
      :audio-src="audio"
      :fft-size="fftSize"
      @init-audio-analyser="getAudioAnalyser"
    />
    <P5Con :setup="setup" :draw="draw" />
  </div>
</template>
