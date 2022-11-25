<template>
  <div class="viewCon">
    <input
      @change="handleImgChange"
      ref="file"
      type="file"
      accept="image/png, image/jpeg, image/jpg"
      style="display: none"
    />
    <P5 :sketch="sketch" />
    <Loading :is-loading="isLoading"/>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Loading from '@/components/Loading.vue'
import P5 from '@/components/P5.vue'
import p5 from 'p5'
import defaultImg from '@/assets/img/test.jpg'
import * as dat from 'dat.gui'

const isLoading = ref(false)

let p: p5
let imgUrl = defaultImg
let canvasWidth: number
let canvasHeight: number
let options = {
  pixelSize: 20, // 像素风尺寸
  isCircle: false,
  importImg: function () {
    file.value?.click()
  },
  downloadImg: function(){
    p.saveCanvas()
  }
}
let pixelSize = options.pixelSize
let pixelTotal = options.pixelSize ** 2
let pixelArr: Array<Pixel> = []


const file = ref<HTMLInputElement>()
function handleImgChange() {
  if (file.value) {
    let img = file.value.files![0]
    let url = URL.createObjectURL(img)
    imgUrl = url
    initPixelArr(imgUrl)
  }
}


// gui
const panel = new dat.GUI({ width: 300 })
panel.add(options, 'pixelSize', 4, 30, 1).name('PixelSize').onFinishChange(function (val) {
  pixelSize = val
  pixelTotal = val ** 2
  initPixelArr(imgUrl)
  p.redraw()
})
panel.add(options, 'isCircle').name('ShowCircle')
panel.add(options, 'importImg').name('LoadLocalImg').listen()
panel.add(options, 'downloadImg').name('DownLoad').listen()


class Pixel {
  pos: p5.Vector
  tarPos: p5.Vector
  vel: p5.Vector = new p5.Vector(0, 0)
  color: Array<number>
  constructor(tarPos: p5.Vector, color: Array<number>) {
    this.tarPos = tarPos
    this.pos = new p5.Vector(p.random(0, canvasWidth), p.random(0, canvasHeight))
    this.color = color
  }
  show() {
    p.noStroke()
    p.fill(this.color)
    if(options.isCircle){
      p.circle(this.pos.x, this.pos.y, pixelSize)
    } else{
      p.rect(this.pos.x, this.pos.y, pixelSize, pixelSize)
    }
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

// 根据图片宽高和画布宽高比例，获取缩放后的画布宽高（限制在屏幕内）
function setCanvasSize(imgW: number, imgH: number) {
  let w = 600
  let h = 600
  let ratio = imgW / imgH
  if (ratio > 1) {
    h = w / ratio
  } else {
    w = h * ratio
  }
  canvasWidth = w
  canvasHeight = h
  p.createCanvas(canvasWidth, canvasHeight)
}

function initPixelArr(imgUrl: string) {
  isLoading.value = true
  
  p.loadImage(imgUrl, (img) => {
    setCanvasSize(img.width, img.height)
    pixelArr.length = 0
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
        let cx = (x / img.width) * canvasWidth
        let cy = (y / img.height) * canvasHeight

        // p.fill(colorAvg)
        // p.rect(cx,cy,pixelSize,pixelSize)

        pixelArr.push(new Pixel(new p5.Vector(cx, cy), colorAvg))
      }
    }
    isLoading.value = false
  })
}

function sketch(_p: p5) {
  p = _p
  p.setup = function () {
    initPixelArr(defaultImg)
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
