<template>
  <div class="flowField">
    <Card bgColor="#d63031" class="p-2">
      <div class="con" ref="con">
        <canvas ref="canvasDom" />
      </div>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Card from '@/components/Card.vue'
import { fabric } from 'fabric'
import { ref, onMounted } from 'vue'
import { noise } from '@/utils/index'

const { sin, cos, PI, ceil, random } = Math

const con = ref<HTMLElement>()
const canvasDom = ref<HTMLCanvasElement>()
const flowFields: Array<FlowField> = []

let canvas: fabric.StaticCanvas | null = null
let width: number = 0
let height: number = 0
let rows: number = 0
let cols: number = 0
let flowFieldSize: number = 50

let xInc = 0.3
let yInc = 0.3
let zInc = 0.0007
let zoff = 0

class FlowField {
  position: Position
  size: number
  angle: number = 45 // deg 180
  originRadius = 4
  lineWidth = 2
  borderWidth = 1
  triangleWidth = 10
  triangleHeight = 14
  arrowColor = '#e74c3c'
  group: fabric.Group

  constructor(position: Position, size: number) {
    this.position = position // 左上角坐标
    this.size = size

    let {
      angle,
      lineWidth,
      borderWidth,
      arrowColor,
      originRadius,
      triangleWidth,
      triangleHeight,
      position: { x, y },
    } = this

    let rect = new fabric.Rect({
      left: x,
      top: y,
      width: size,
      height: size,
      stroke: '#3498db',
      strokeWidth: borderWidth,
      fill: '#fff',
    })
    canvas?.add(rect)

    let circle = new fabric.Circle({
      originX: 'center',
      originY: 'center',
      top: y,
      left: x,
      radius: originRadius,
      fill: arrowColor,
    })
    canvas?.add(circle)

    let x2 = size * 0.7 + x
    let y2 = y
    let line = new fabric.Line([x, y, x2, y2], {
      originX: 'left',
      originY: 'center',
      stroke: arrowColor,
      strokeWidth: lineWidth,
      strokeLineCap: 'round',
    })
    let triangle = new fabric.Triangle({
      originX: 'center',
      originY: 'top',
      top: y2,
      left: x2 + triangleHeight,
      width: triangleWidth,
      height: triangleHeight,
      fill: arrowColor,
      angle: 90,
    })

    this.group = new fabric.Group([line, triangle], {
      top: y,
      left: x,
      angle,
      originX: 'left',
      originY: 'center',
    })

    canvas?.add(this.group)
  }

  updateAngle(angle: number) {
    // this.group.rotate(angle) // 这个api是以中心点为基准旋转
    this.group.set('angle', angle)
  }
}

function initFlowFields() {
  for (let i = 0; i < height; i += flowFieldSize) {
    for (let j = 0; j < width; j += flowFieldSize) {
      flowFields.push(new FlowField({ x: j, y: i }, flowFieldSize))
    }
  }
}

function updateFlowFields() {
  let xoff = 0
  for (let y = 0; y < rows; y++) {
    xoff += xInc
    zoff += zInc
    let yoff = 0
    for (let x = 0; x < cols; x++) {
      yoff += yInc
      let angle = noise(xoff, yoff, zoff) * 90
      let index = x + y * cols
      flowFields[index].updateAngle(angle)
    }
  }
  canvas?.renderAll()
}

function animate() {
  updateFlowFields()
  requestAnimationFrame(animate)
}

onMounted(() => {
  const { width: conWidth, height: conHeight } =
    con.value?.getBoundingClientRect() as DOMRect
  width = conWidth
  height = conHeight
  cols = ceil(width / flowFieldSize)
  rows = ceil(height / flowFieldSize)
  canvas = new fabric.StaticCanvas(canvasDom.value as HTMLCanvasElement, {
    width,
    height,
    backgroundColor: '#3498db',
  })
  initFlowFields()
  animate()
})
</script>

<style lang="less" scoped>
.flowField {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .con {
    width: 800px;
    height: 600px;
  }
}
</style>
