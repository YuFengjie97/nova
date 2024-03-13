<script lang="ts" setup>
import { ref } from 'vue'
import p5 from 'p5'
import AudioController from '@/components/AudioController.vue'
import P5Con from '@/components/P5Con.vue'
import audio from '@/assets/audio/audio-sugarCrush.mp3'
import type { AudioAnalyser } from '@/utils'

import { initBezier, newBezier } from '@/utils/p5bezier'

let aa: AudioAnalyser
function getAudioAnalyser(val: AudioAnalyser) {
  aa = val
}
let width: number
let height: number
const fftSize = ref(128)
const dataMax = 250
const rectTotal = fftSize.value / 2
const rects: Array<Rect> = []
let rectWidth: number
const rectMinHeight = 2
const maxRatio = 0.6 // 绘制的rect高度最大占据画布高度比例
const gap = 60

class Rect {
  $p: p5
  pos: p5.Vector
  h: number = 0
  rectHeight = 0
  constructor($p: p5, pos: p5.Vector) {
    this.$p = $p
    this.pos = pos
  }

  draw(val: number, index: number) {
    const {
      $p,
      pos: { x, y },
      rectHeight: y1,
    } = this
    $p.fill(this.h, 255, 127)
    $p.push()
    $p.rectMode($p.CENTER)
    $p.noStroke()
    $p.translate(0, height / 2)
    const borderRadius = rectWidth * 0.2
    $p.rect(
      x,
      y,
      rectWidth,
      this.rectHeight + rectMinHeight,
      borderRadius,
      borderRadius,
      borderRadius,
      borderRadius,
    )
    $p.pop()
  }

  update(val: number) {
    this.updateH(val)
    this.updateHeight(val)
  }

  updateH(val: number) {
    this.h = this.$p.map(val, 0, dataMax, 0, 255)
  }

  updateHeight(val: number) {
    this.rectHeight = this.$p.map(val, 0, dataMax, 0, height * maxRatio)
  }
}

function initRects($p: p5) {
  for (let i = 0; i < rectTotal; i++)
    rects.push(new Rect($p, new p5.Vector(i * rectWidth, 0)))
}

function updateRects($p: p5) {
  for (let i = 0; i < rectTotal; i++) {
    const val = aa.getAudioData()[i]
    rects[i].update(val)
    rects[i].draw(val, i)
  }
}

function drawLine($p: p5) {
  $p.push()
  $p.translate(0, height / 2)
  $p.noFill()
  $p.stroke('#fff')
  $p.strokeWeight(2)

  const pointList1: Array<Point> = []
  const pointList2: Array<Point> = []
  aa.getAudioData().forEach((item, i) => {
    const x = i * rectWidth
    const y = $p.map(item, 0, dataMax, 0, height / 2) * maxRatio + gap
    pointList1.push([x, -y] as Point)
    pointList2.push([x, y] as Point)
  })
  newBezier(pointList1)
  newBezier(pointList2)
  $p.pop()
}

function setup($p: p5, canvas?: p5.Renderer) {
  width = $p.width
  height = $p.height
  rectWidth = width / rectTotal
  $p.frameRate(30)
  $p.colorMode($p.HSB)
  $p.noStroke()
  initRects($p)
  if (canvas)
    initBezier(canvas)
}
function draw($p: p5) {
  $p.background('rgba(0, 0, 0, 0.08)')
  // $p.background('#2d3436')
  if (aa) {
    updateRects($p)
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
