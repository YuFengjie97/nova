<template>
  <div class="viewCon">
    <P5 :sketch="sketch" />
  </div>
</template>

<script lang="ts" setup>
import P5 from '@/components/P5.vue'
import p5 from 'p5'
import jpg from '@/assets/img/test.jpg'

const { max, min } = Math

let p: p5
let width = 600
let height = 600
let img: p5.Image
let pixelSize = 20 // 像素风尺寸
let pixelTotal = pixelSize ** 2
let pixelArr: Array<Pixel> = []

// 根据图片宽高和画布宽高比例，获取缩放后的画布宽高（限制在屏幕内）
function setCanvasSize(imgW: number, imgH: number) {
  let ratio = imgW / imgH
  if (ratio > 1) {
    height = width / ratio
  } else {
    width = height * ratio
  }
}

class Pixel {
  pos: p5.Vector
  tarPos: p5.Vector
  vel: p5.Vector = new p5.Vector(0,0)
  color: Array<number>
  constructor(tarPos: p5.Vector, color: Array<number>) {
    this.tarPos = tarPos
    this.pos = new p5.Vector(p.random(0, width), p.random(0, height))
    this.color = color
  }
  show() {
    p.noStroke()
    p.fill(this.color)
    p.rect(this.pos.x, this.pos.y, pixelSize, pixelSize, pixelSize/2)
  }
  update() {
    let dist = p5.Vector.dist(this.pos, this.tarPos)
    let v = p5.Vector.sub(this.tarPos, this.pos)
    let velRatio = p.map(dist, 0, 50, 0.08, 0.3, true)
    v.mult(velRatio)
    this.vel.set(v)
    this.pos.add(this.vel)
  }
}

function sketch(_p: p5) {
  p = _p

  p.preload = function () {
    img = p.loadImage(jpg)
  }

  p.setup = function () {
    setCanvasSize(img.width, img.height)
    p.createCanvas(width, height)
    p.background(50)

    img.loadPixels()
    for (let y = 0; y < img.height; y += pixelSize) {
      for (let x = 0; x < img.width; x += pixelSize) {
        let colorSum = [0, 0, 0, 0]
        for (let j = y; j < y + pixelSize; j++) {
          for (let i = x; i < x + pixelSize; i++) {
            let c = img.get(i, j)
            colorSum[0] += c[0]
            colorSum[1] += c[1]
            colorSum[2] += c[2]
            colorSum[3] += c[3]
          }
        }
        let colorAvg = [
          colorSum[0] / pixelTotal,
          colorSum[1] / pixelTotal,
          colorSum[2] / pixelTotal,
          colorSum[3] / pixelTotal
        ]
        let cx = (x / img.width) * width
        let cy = (y / img.height) * height

        // p.fill(colorAvg)
        // p.rect(cx,cy,pixelSize,pixelSize)

        pixelArr.push(new Pixel(new p5.Vector(cx, cy), colorAvg))
      }
    }
  }
  p.draw = function () {
    p.background(51)
    for (let i = pixelArr.length - 1; i >= 0; i--) {
      pixelArr[i].update()
      pixelArr[i].show()
    }
  }
}
</script>

<style lang="less" scoped>
.viewCon {
  display: grid;
  place-items: center;
}
</style>
