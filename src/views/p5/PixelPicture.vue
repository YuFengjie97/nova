<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import p5 from 'p5'
import { useGUI } from '@/hooks/useGUI'
import Loading from '@/components/Loading.vue'
import P5 from '@/components/P5.vue'
import defaultImg from '@/assets/img/test.jpg'

const { min } = Math

const isLoading = ref(false)

let p: p5
let imgUrl = defaultImg
let canvasWidth: number
let canvasHeight: number
const options = {
  sampleNum: 20, // 图片宽高的最小值被分成的份数
  isCircle: false,
  importImg() {
    file.value?.click()
  },
  downloadImg() {
    p.saveCanvas()
  },
}
const pixelArr: Array<Pixel> = []

const file = ref<HTMLInputElement>()
function handleImgChange() {
  if (file.value) {
    const img = file.value.files![0]
    const url = URL.createObjectURL(img)
    imgUrl = url
    initPixelArr(imgUrl)
  }
}

const con = ref<HTMLElement>()
onMounted(() => {
// gui
  const { gui: panel } = useGUI(con.value!)
  panel.add(options, 'sampleNum', 10, 100, 1).name('sampleNum').onFinishChange((val) => {
    initPixelArr(imgUrl)
  })
  panel.add(options, 'isCircle').name('ShowCircle')
  panel.add(options, 'importImg').name('LoadLocalImg').listen()
  panel.add(options, 'downloadImg').name('DownLoad').listen()
})

class Pixel {
  pos: p5.Vector
  tarPos: p5.Vector
  vel: p5.Vector = new p5.Vector(0, 0)
  color: Array<number>
  size: number
  constructor(tarPos: p5.Vector, color: Array<number>, size: number) {
    this.tarPos = tarPos
    this.pos = new p5.Vector(p.random(0, canvasWidth), p.random(0, canvasHeight))
    this.color = color
    this.size = size
  }

  show() {
    p.noStroke()
    p.fill(this.color)
    if (options.isCircle)
      p.circle(this.pos.x, this.pos.y, this.size)

    else
      p.rect(this.pos.x, this.pos.y, this.size, this.size)
  }

  update() {
    const dist = p5.Vector.dist(this.pos, this.tarPos)
    const v = p5.Vector.sub(this.tarPos, this.pos)
    const velRatio = p.map(dist, 0, 50, 0.08, 0.3, true)
    v.mult(velRatio)
    this.vel.set(v)
    this.pos.add(this.vel)
  }
}

// 根据图片宽高和画布宽高比例，获取缩放后的画布宽高（限制在屏幕内）
function setCanvasSize(imgW: number, imgH: number) {
  let w = 600
  let h = 600
  const ratio = imgW / imgH
  if (ratio > 1)
    h = w / ratio
  else
    w = h * ratio

  canvasWidth = w
  canvasHeight = h
  p.createCanvas(canvasWidth, canvasHeight)
}

// 根据图片像素数据初始化粒子
function initPixelArr(imgUrl: string) {
  isLoading.value = true

  p.loadImage(imgUrl, (img) => {
    setCanvasSize(img.width, img.height)
    const sampleSize = min(img.width, img.height) / options.sampleNum
    const size = min(canvasWidth, canvasHeight) / options.sampleNum
    pixelArr.length = 0
    img.loadPixels()
    for (let y = 0; y < img.height; y += sampleSize) {
      for (let x = 0; x < img.width; x += sampleSize) {
        const color = img.get(x, y)

        const cx = (x / img.width) * canvasWidth
        const cy = (y / img.height) * canvasHeight

        pixelArr.push(new Pixel(new p5.Vector(cx, cy), color, size))
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

<template>
  <div ref="con" class="viewCon">
    <input
      ref="file"
      type="file"
      accept="image/png, image/jpeg, image/jpg"
      style="display: none"
      @change="handleImgChange"
    >
    <P5 :sketch="sketch" />
    <Loading :is-loading="isLoading" />
  </div>
</template>

<style lang="less" scoped>
.viewCon {
  display: grid;
  place-items: center;
}
</style>
