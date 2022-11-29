<template>
  <div class="viewCon">
    <canvas class="canvas" ref="canvas"></canvas>
    <canvas class="canvas" ref="canvas2"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const {PI} = Math

type Point = {x: number, y: number}

let ctx: CanvasRenderingContext2D
const canvas = ref<HTMLCanvasElement>()
let textCanvas: HTMLCanvasElement

let ctx2: CanvasRenderingContext2D
const canvas2 = ref<HTMLCanvasElement>()
let dotCanvas: HTMLCanvasElement

const fontName = 'Verdana'
const textureFontSize = 100
let string = 'Some text' + '\n' + 'to sample' + '\n' + 'with Canvas'
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
  const linesMaxLength = [...lines].sort((a, b) => b.length - a.length)[0]
    .length
  // 根据最长字符串长度（宽度），字符串数量（高度）调整画布尺寸
  const wTexture = textureFontSize * 0.7 * linesMaxLength
  const hTexture = lines.length * textureFontSize
  textCanvas.width = wTexture
  textCanvas.height = hTexture
  dotCanvas.width = wTexture
  dotCanvas.height = hTexture

  // 绘制字体
  const linesNumber = lines.length
  ctx.font = '100 ' + textureFontSize + 'px ' + fontName
  ctx.fillStyle = '#2a9d8f'
  for (let i = 0; i < linesNumber; i++) {
    ctx.fillText(lines[i], 0, ((i + 0.8) * hTexture) / linesNumber)
  }

  // 获取画布上绘制的文字坐标信息
  textureCoordinates = []
  const samplingStep = 4 //像素是每4个为一组rgba
  if (wTexture > 0) {
    const imageData = ctx.getImageData(
      0,
      0,
      textCanvas.width,
      textCanvas.height
    )
    for (let i = 0; i < textCanvas.height; i += samplingStep) {
      for (let j = 0; j < textCanvas.width; j += samplingStep) {
        // 如果当前rgba像素中的r不为0，是文字像素
        if (imageData.data[(j + i * textCanvas.width) * 4] > 0) {
          // 只判断r位置，收集当前像素点位置
          textureCoordinates.push({
            x: j,
            y: i
          })
        }
      }
    }
  }
}

function drawDot(){
  for(let i=0,len=textureCoordinates.length;i<len;i++){
    let coor = textureCoordinates[i]
    ctx2.fillStyle = '#fff'
    ctx2.beginPath()
    ctx2.arc(coor.x, coor.y, 1, 0, PI*2);
    ctx2.fill()
  }
}

onMounted(() => {
  initCanvas()
  sampleCoordinates()
  drawDot()
})
</script>

<style lang="less" scoped>
.viewCon {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  background: #000;
  .canvas {
    border: 1px solid #fff;
  }
}
</style>
