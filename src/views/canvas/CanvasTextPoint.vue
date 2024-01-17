<script lang="ts" setup>
import { createNoise3D } from 'simplex-noise'
import { onMounted, ref } from 'vue'
import { map } from '@/utils/math'

const { PI } = Math

const noise = createNoise3D()

interface Point { x: number, y: number }

let ctx: CanvasRenderingContext2D
const canvas = ref<HTMLCanvasElement>()
let textCanvas: HTMLCanvasElement

let ctx2: CanvasRenderingContext2D
const canvas2 = ref<HTMLCanvasElement>()
let dotCanvas: HTMLCanvasElement

const fontName = 'Verdana'
const textureFontSize = 100
const string = '弱水三千' + '\n' + '我只取一尿饮'
let textureCoordinates: Array<Point> = []

function initCanvas() {
  if (canvas.value) {
    ctx = canvas.value.getContext('2d')!
    textCanvas = canvas.value
  }
  if (canvas2.value) {
    ctx2 = canvas2.value.getContext('2d')!
    dotCanvas = canvas2.value
  }
}

function sampleCoordinates() {
  // 找出最长字符串宽度，重新设置画布尺寸，下一步读取画布像素位置，就不需要铺满屏幕整张读取
  const lines = string.split(`\n`)
  const linesMaxLength = lines.map(item => item.length).reduce((pre, cur) => cur > pre ? cur : pre, 0)
  // 根据最长字符串长度（宽度），字符串数量（高度）调整画布尺寸
  const wTexture = textureFontSize * linesMaxLength + 100
  const hTexture = lines.length * textureFontSize + 100
  textCanvas.width = wTexture
  textCanvas.height = hTexture
  dotCanvas.width = wTexture
  dotCanvas.height = hTexture

  // 绘制字体
  const linesNumber = lines.length
  ctx.font = `${textureFontSize}px ${fontName}`
  ctx.fillStyle = '#fff'
  for (let i = 0; i < linesNumber; i++)
    ctx.fillText(lines[i], 0, ((i + 0.8) * hTexture) / linesNumber)

  // 获取画布上绘制的文字坐标信息
  textureCoordinates = []
  const samplingStep = 6 // rgb取样跨度
  if (wTexture > 0) {
    const imageData = ctx.getImageData(
      0,
      0,
      textCanvas.width,
      textCanvas.height,
    )
    for (let i = 0; i < textCanvas.height; i += samplingStep) {
      for (let j = 0; j < textCanvas.width; j += samplingStep) {
        // 如果当前rgba像素中的r不为0，是文字像素
        if (imageData.data[(j + i * textCanvas.width) * 4] > 0) {
          // 只判断r位置，收集当前像素点位置
          textureCoordinates.push({
            x: j,
            y: i,
          })
        }
      }
    }
  }
}

function drawDot() {
  const t = performance.now() / 1000

  for (let i = 0, len = textureCoordinates.length; i < len; i++) {
    const coor = textureCoordinates[i]
    ctx2.fillStyle = '#fff'
    ctx2.beginPath()
    ctx2.arc(coor.x, coor.y, map(noise(coor.x, coor.y, Math.sin(t)), -1, 1, 0, 1) * 4 + 1, 0, PI * 2)
    ctx2.fill()
  }
}
function animate() {
  ctx2.clearRect(0, 0, dotCanvas.width, dotCanvas.height)

  drawDot()
  requestAnimationFrame(animate)
}

onMounted(() => {
  initCanvas()
  sampleCoordinates()
  drawDot()

  animate()
})
</script>

<template>
  <div class="w-full min-h-full bg-#000 flex flex-col items-center gap-10px">
    <canvas ref="canvas" class="canvas" />
    <canvas ref="canvas2" class="canvas" />
  </div>
</template>

<style lang="less" scoped>
.canvas {
  border: 1px solid #fff;
}
</style>
