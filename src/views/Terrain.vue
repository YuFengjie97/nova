<template>
  <div class="viewCon">
    <P5Con :sketch="sketch"></P5Con>
  </div>
</template>

<script lang="ts" setup>
import P5Con from '@/components/P5.vue'
import p5 from 'p5'

let p: p5
let width = 1200
let height = 800
let canvasSize = 600
let scl = 20
let rows = height / scl 
let cols = width / scl
let flying = 0
let terrain: Array<Array<number>> = []

function initTerrain(){
  for (let y = 0; y < cols; y++) {
    terrain[y] = []
    for (let x = 0; x < rows; x++) {
      terrain[y][x] = p.map(p.random(), 0, 1, -10, 10)
    }
  }
}

function updateTerrain(){
  flying -= 0.1;
  let yoff = flying;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      terrain[x][y] = p.map(p.noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.2;
    }
    yoff += 0.2;
  }
}

function drawTerrain() {
  p.stroke(255)
  p.strokeWeight(1)
  p.noFill()

  for (let y = 0; y < rows-1; y++) {
    p.beginShape(p.TRIANGLE_STRIP)
    for (let x = 0; x < cols; x++) {
      p.vertex(x * scl, y * scl, terrain[x][y])
      p.vertex(x * scl, (y + 1) * scl, terrain[x][y+1])
    }
    p.endShape()
  }
}

function sketch(_p: p5) {
  p = _p
  let renderer: p5.Renderer
  p.setup = function () {
    
    renderer = p.createCanvas(canvasSize, canvasSize, p.WEBGL)
    // let size = p.min(p.displayWidth, p.displayHeight)
    let size = p.min(p.windowWidth, p.windowHeight)
    renderer.style(`width: ${size}px;height: ${size}px`)

    initTerrain()
  }
  p.draw = function () {
    p.frameRate(30)
    p.background(0)
    p.rotateX(p.PI / 3)
    p.translate(-width / 2, -height / 2)

    updateTerrain()
    drawTerrain()
  }
  p.windowResized = function(){
    let size = p.min(p.windowWidth, p.windowHeight)
    
    renderer.style(`width: ${size}px; height: ${size}px`)
  }
}
</script>

<style lang="less" scoped>
.viewCon {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
