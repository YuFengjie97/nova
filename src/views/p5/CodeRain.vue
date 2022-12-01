<template>
  <div class="codeRain viewCon">
    <Card>
      <P5Con
        :isWEBGL="true"
        :preLoad="preload"
        :setup="setup"
        :draw="draw"
      ></P5Con>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Card from '@/components/Card.vue'
import P5Con from '@/components/P5Con.vue'
import p5 from 'p5'

import { myRandom, langs } from '@/utils/index'
import fontAssets from '@/assets/font/Roboto-Regular.ttf'

const { random, floor } = Math

let font: p5.Font
let bgColor = '#000'
let width: number
let height: number
let fontSize = 20
let letterSpace = 2
let velBase = 15
let velMin = 5
let flickerChance = 0.3
let errorChance = 0.001
let baseColor = [120, 100, 100]
let flickerColor = [120, 30, 100]
let errColor = [0, 255, 127]

const streams: Array<Stream> = []
const streamTotal = 200

class Char {
  char: string
  $p: p5
  pos: p5.Vector
  constructor($p: p5, char: string, pos: p5.Vector, color?: string) {
    this.$p = $p
    this.char = char
    this.pos = pos
  }

  draw() {
    this.$p.textSize(fontSize)
    let chance = random()
    if (random() < errorChance) {
      this.$p.fill(errColor)
    } else if (chance > errorChance && chance < flickerChance) {
      this.$p.fill(flickerColor)
    } else {
      this.$p.fill(baseColor)
    }

    this.$p.text(this.char, this.pos.x, this.pos.y)
  }
}

class Stream {
  $p: p5
  str: string
  pos: p5.Vector
  length: number = 0 // 字符串垂直排布加字体大小，间距的总长度px
  vel: p5.Vector
  chars: Array<Char> = []
  translateZ: number = 0
  scale: number = 1
  constructor($p: p5, str: string, pos: p5.Vector, vel: p5.Vector) {
    this.$p = $p
    this.str = str
    this.pos = pos
    this.vel = vel
    let translateZ = parseFloat((-8 * random() + 3).toFixed(1))
    this.translateZ = translateZ

    for (let i = 0; i < str.length; i++) {
      let len = fontSize + letterSpace
      this.length += len
      let charPos = this.pos.copy().add(0, i * len)
      this.chars.push(new Char(this.$p, this.str[i], charPos))
    }
  }
  draw() {
    this.$p.textFont(font)
    this.$p.translate(0, 0, this.translateZ)
    this.chars.forEach((char) => {
      char.draw()
    })
  }
  edge() {
    if (this.pos.y > height + this.length * 2) {
      this.pos.set(random() * width, -this.length * 2)
    }
  }
  update() {
    this.pos.add(this.vel)
    this.updateCharsPosByPos()
    this.edge()
  }
  updateCharsPosByPos() {
    let {
      pos: { y: startY }
    } = this
    for (let i = 0; i < this.str.length; i++) {
      let char = this.chars[i]
      char.pos.set(char.pos.x, startY + i * (fontSize + letterSpace))
    }
  }
}

function initStreams($p: p5) {
  let langLen = langs.length
  for (let i = 0; i < streamTotal; i++) {
    let str = langs[i < langLen ? i : i % langLen]
    let pos = new p5.Vector($p.random(width), -100)
    let vel = new p5.Vector(0, velMin + random() * velBase)
    streams.push(new Stream($p, str, pos, vel))
  }
}
function updateStreams() {
  for (let i = 0; i < streamTotal; i++) {
    streams[i].update()
    streams[i].draw()
  }
}

function preload($p: p5) {
  font = $p.loadFont(fontAssets)
}

function setup($p: p5) {
  width = $p.width
  height = $p.height
  // $p.frameRate(60)
  $p.background(bgColor)
  $p.colorMode($p.HSB)
  initStreams($p)
}

function draw($p: p5) {
  $p.translate(-width / 2, -height / 2)
  $p.background(bgColor)
  updateStreams()
}
</script>
