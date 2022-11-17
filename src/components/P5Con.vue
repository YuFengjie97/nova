<template>
  <div class="p5Container">
    <div class="p5Con" ref="p5Con"></div>
    <div class="framRate" v-if="showFps">fps: {{ frameRate }}</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import p5 from 'p5'

interface Props {
  preLoad?: ($p: p5) => void
  setup: ($p: p5, canvas?: p5.Renderer) => void
  draw: ($p: p5) => void
  mousePressed?: () => void
  mouseReleased?: () => void
  keyPressed?: ()=>void
  isWEBGL?: boolean
  showFps?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isWEBGL: false,
  showFps: true
})

const p5Con = ref<HTMLElement>()
let $p: p5
const frameRate = ref(0)
let timer: NodeJS.Timer
let bgColor = '#2d3436'

function sketch($p: p5) {
  $p.preload = function () {
    if (props.preLoad) props.preLoad($p)
  }

  $p.setup = function () {
    let { width, height } = p5Con.value?.getBoundingClientRect()!
    let canvas = $p.createCanvas(
      width,
      height,
      props.isWEBGL ? $p.WEBGL : undefined
    )
    $p.background(bgColor)

    if (props.setup) props.setup($p, canvas)
  }

  $p.draw = function () {
    if (props.draw) props.draw($p)
  }

  $p.mousePressed = function() {
    if(props.mousePressed) props.mousePressed()
  }

  $p.mouseReleased = function() {
    if(props.mouseReleased) props.mouseReleased()
  }

  $p.keyPressed = function(){
    if(props.keyPressed) props.keyPressed()
  }
}

onMounted(() => {
  $p = new p5(sketch, p5Con.value)

  if (props.showFps) {
    timer = setInterval(() => {
      frameRate.value = $p.floor($p.frameRate())
    }, 1000)
  }
})
onUnmounted(() => {
  $p.remove()
  if (timer) clearInterval(timer)
})
</script>

<style lang="less" scoped>
.p5Container {
  position: relative;
  height: 100%;
  width: 100%;
  .p5Con {
    width: 100%;
    height: 100%;
  }
  .framRate {
    width: 5.5rem;
    padding: 0.5rem 1rem;
    font-family: 'Patrick Hand';
    border-radius: 0.2rem;
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    background: var(--bg2);
    color: var(--text);
  }
}
</style>
