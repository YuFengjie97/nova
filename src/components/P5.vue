<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import p5 from 'p5'

interface Props {
  sketch: (p: p5) => void
  showFps?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  sketch: (p: p5) => {},
  showFps: true,
})

const p5Con = ref<HTMLElement>()
let _p: p5
const frameRate = ref(0)
let timer: NodeJS.Timer

onMounted(() => {
  _p = new p5(props.sketch, p5Con.value)

  if (props.showFps) {
    timer = setInterval(() => {
      frameRate.value = _p.floor(_p.frameRate())
    }, 1000)
  }
})
onUnmounted(() => {
  _p.remove()
  if (timer)
    clearInterval(timer)
})
</script>

<template>
  <div class="p5Container">
    <div ref="p5Con" class="p5Con" />
    <div v-if="showFps" class="framRate">
      fps: {{ frameRate }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.p5Container {
  .framRate {
    user-select: none;
    width: 5.5rem;
    padding: 0.5rem 1rem;
    font-family: 'Patrick Hand';
    border-radius: 0.2rem;
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    background: #000;
    color: #fff;
  }
}
</style>
