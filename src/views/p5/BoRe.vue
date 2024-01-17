<script lang="ts" setup>
import { ref } from 'vue'
import p5 from 'p5'
import P5Con from '@/components/P5Con.vue'

const { min, max, sqrt, floor } = Math

let width: number
let height: number
let rectSize: number
const gap: number = 10
const textColor = [253, 203, 110] as const
const fontFamily = '华文楷体'
const xInc = 0.02
const yInc = 0.08
let zoff = 0
const zInc = 0.00008
let timer: NodeJS.Timer
const interval = 10

const bore = `观自在菩萨，行深般若波罗蜜多时，照见五蕴皆空，度一切苦厄。舍利子，色不异空，空不异色，色即是空，空即是色，受想行识，亦复如是。舍利子，是诸法空相，不生不灭，不垢不净，不增不减。是故空中无色，无受想行识，无眼耳鼻舌身意，无色声香味触法，无眼界，乃至无意识界，无无明，亦无无明尽，乃至无老死，亦无老死尽。无苦集灭道，无智亦无得。以无所得故。菩提萨埵，依般若波罗蜜多故，心无挂碍。无挂碍故，无有恐怖，远离颠倒梦想，究竟涅盘。三世诸佛，依般若波罗蜜多故，得阿耨多罗三藐三菩提。故知般若波罗蜜多，是大神咒，是大明咒，是无上咒，是无等等咒，能除一切苦，真实不虚。故说般若波罗蜜多咒，即说咒曰：揭谛揭谛，波罗揭谛，波罗僧揭谛，菩提萨婆诃。`
const boreArr = bore.split('')
const chars: Array<Char> = []

function initChars($p: p5) {
  let x = gap + rectSize / 2
  let y = gap + rectSize / 2
  timer = setInterval(() => {
    const char = boreArr.shift()
    if (char) {
      chars.push(new Char($p, new p5.Vector(x, y), char))
      y += rectSize + gap
      if (y > height - gap) {
        x += gap + rectSize
        y = gap + rectSize / 2
      }
    }
    else {
      clearInterval(timer)
    }
  }, interval)
}
function updateChars() {
  chars.forEach((char) => {
    char.update()
    char.draw()
  })
}

class Char {
  $p: p5
  pos: p5.Vector
  basePos: p5.Vector
  char: string
  xoff = 0
  yoff = 0
  opacity = 255
  constructor($p: p5, basePos: p5.Vector, char: string) {
    this.$p = $p
    this.basePos = basePos
    this.pos = basePos.copy()
    this.char = char
  }

  draw() {
    const {
      $p,
      pos: { x, y },
      char,
      opacity,
    } = this
    $p.fill(...textColor, opacity)
    $p.textFont(fontFamily)
    $p.textSize(rectSize)
    $p.text(char, x, y)
    // $p.noFill()
    // $p.rect(x, y, rectSize, rectSize)
  }

  update() {
    const {
      $p,
      basePos: { x, y },
    } = this
    this.xoff += xInc
    this.yoff += yInc
    zoff += zInc
    const x2 = $p.map($p.noise(this.xoff, zoff), 0, 1, x - gap, x + gap)
    const y2 = $p.map($p.noise(this.yoff, zoff), 0, 1, y - gap, y + gap)
    this.pos.set(x2, y2)
    this.opacity = $p.map($p.noise(zoff), 0, 1, 100, 255)
  }
}

function setup($p: p5) {
  width = $p.width
  height = $p.height
  const area = width * height
  const num = bore.length
  rectSize = floor(sqrt(area / num)) - gap * 1.5
  $p.textAlign('center', 'center')
  $p.rectMode('center')

  initChars($p)
}
function draw($p: p5) {
  $p.background('rgba(0, 0, 0, 0.07)')
  updateChars()
}
</script>

<template>
  <div class="w-full h-full">
    <P5Con :setup="setup" :draw="draw" />
  </div>
</template>

<style lang="less" scoped>
.viewCon {
  color: #2d343685;
}
</style>
