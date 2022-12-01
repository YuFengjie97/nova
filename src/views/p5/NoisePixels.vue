<template>
  <div class="viewCon">
    <P5 :sketch="sketch" />
  </div>
</template>

<script lang="ts" setup>
import P5 from '@/components/P5.vue'
import p5 from 'p5'

let p: p5
let width = 600
let height = 600
let pixelsTotal = width * height * 4
let xInc = 0.0001
let yInc = 0.001
let xoff = 0

function sketch(_p: p5) {
  p = _p
  p.setup = function () {
    p.createCanvas(width, height)
    p.pixelDensity(1)
  }
  p.draw = function () {
    p.background(51)
    p.loadPixels()

    for (let x = 0; x < width; x++) {
      let yoff = 0
      for (let y = 0; y < height; y++) {
        let i = 4 * y * width + 4 * x
        let r = p.map(p.noise(xoff, yoff), 0, 1, 0, 255)
        let g = p.map(x, 0, width, 0, 255)
        let b = p.map(y, height, 0, 0, 255)
        p.pixels[i] = r
        p.pixels[i + 1] = g
        p.pixels[i + 2] = b
        p.pixels[i + 3] = 255
        yoff += yInc
      }
      xoff += xInc
    }
    p.updatePixels()
  }
}
</script>

<style lang="less" scoped>
.viewCon {
  display: grid;
  place-items: center;
}
</style>
