<template>
  <div class="flowFieldLine">
    <Card bgColor="#00cec9">
      <div class="con" ref="con">
        <canvas ref="canvasDom"></canvas>
      </div>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Card from '@/components/Card.vue'
import { ref, onMounted } from 'vue'
import { fabric } from 'fabric'
import { noise } from '@/utils/index'

const { ceil, floor, sin, cos, PI, random } = Math

const con = ref<HTMLElement>()
const canvasDom = ref<HTMLCanvasElement>()

let width: number = 0
let height: number = 0
let cols: number = 0
let rows: number = 0
let flowFieldSize: number = 40
let canvas: fabric.StaticCanvas | null = null

let xInc = 0.3
let yInc = 0.3
let zInc = 0.0008
let zoff = 0
let flowFieldBaseAngle = 360

const flowFields: Array<FlowField> = []

let particleTotal = 100
const particles: Array<Particle> = []

onMounted(() => {
  initCanvasOptions()
  initFlowField()
  initParticles()
  animate()
})

function initCanvasOptions() {
  let { width: conWidth, height: conHeight } =
    con.value?.getBoundingClientRect()!
  width = conWidth
  height = conHeight

  cols = width / flowFieldSize
  rows = height / flowFieldSize

  canvas = new fabric.StaticCanvas(canvasDom.value!, {
    width,
    height,
    fill: 'rgba(255, 255, 255, 0.6)',
    // backgroundColor: 'rgba(255, 255, 255, 0.6)',
  })
}

function initFlowField() {
  for (let i = 0; i < width; i += flowFieldSize) {
    for (let j = 0; j < height; j += flowFieldSize) {
      flowFields.push(new FlowField({ x: i, y: j }, flowFieldSize))
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
      let angle = noise(xoff, yoff, zoff) * flowFieldBaseAngle
      let index = x + y * cols
      flowFields[index].update(angle)
    }
  }
}

function initParticles() {
  let i = 0
  while (i < particleTotal) {
    particles.push(
      new Particle({ x: random() * width, y: random() * height }, 'red')
    )
    i++
  }
}

function updateParticles() {
  let i = 0
  while (i < particleTotal) {
    let { top, left } = particles[i].circle
    let y = floor(top! / flowFieldSize)
    let x = floor(left! / flowFieldSize)
    let index = y * cols + x
    if (index >= 0 && index < flowFields.length) {
      particles[i].updatePos(flowFields[y * cols + x].vec)
    } else {
      particles[i].updatePos({ vx: 1, vy: 1 })
    }
    // 为什么不行，我理解错了？
    // particles[i].circle.render(canvas?.getContext()!)
    i++
  }
}

function animate() {
  updateFlowFields()
  updateParticles()
  canvas?.renderAll() // 重新绘制了所有，之前粒子的轨迹就保留不了了

  fabric.util.requestAnimFrame(animate)
}

class Particle {
  color: string
  circle: fabric.Circle
  constructor(position: Position, color: string) {
    let { x, y } = position

    this.color = color
    this.circle = new fabric.Circle({
      top: y,
      left: x,
      fill: 'red',
      radius: 1,
      originX: 'center',
      originY: 'center',
    })
    canvas?.add(this.circle)
  }
  updatePos(vec: Vector) {
    let { top, left } = this.circle
    if (left! <= 0 || left! >= width || top! <= 0 || top! >= height) {
      this.circle.left = random() * width
      this.circle.top = random() * height
    }

    let { vx, vy } = vec

    this.circle.left! += vx
    this.circle.top! += vy
  }
}

class FlowField {
  position: Position
  size: number
  angle: number = 45 // deg 180
  vec: Vector

  constructor(position: Position, size: number) {
    this.position = position // 左上角坐标
    this.size = size
    this.vec = { vx: 0, vy: 0 }
  }
  update(angle: number) {
    this.angle = angle
    let vx = cos((angle / 180) * PI) * 3
    let vy = sin((angle / 180) * PI) * 3
    this.vec.vx = vx
    this.vec.vy = vy
  }
}
</script>

<style lang="less" scoped>
.flowFieldLine {
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
