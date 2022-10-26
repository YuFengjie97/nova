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
  sketch: ($p: p5) => void,
  showFps?: boolean
}

const props = withDefaults(defineProps<Props>(),{
  sketch: ($p: p5) => {},
  showFps: true
})

const p5Con = ref<HTMLElement>()
let $p: p5
const frameRate = ref(0)

let timer: NodeJS.Timer

onMounted(() => {
  $p = new p5(props.sketch, p5Con.value)
  
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
    width: 80px;
    padding: 10px;
    font-family: 'Patrick Hand';
    border-radius: 4px;
    overflow: hidden;
    position: absolute;
    top: 4px;
    right: 2px;
    background: #2d3436;
    color: #fff;
  }
}
</style>
