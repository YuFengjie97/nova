<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { myRandom } from '@/utils'

const props = withDefaults(
  defineProps<{
    dropNum: number
  }>(),
  { dropNum: 40 },
)

const { random, floor } = Math

interface Drop {
  left: number
  top: number
  size: number
}

const con = ref<HTMLElement>()
const dropSizeMin = 20
const dropSizeMax = 100
const transitionDelay = ref(0.05)
const transitionDuration = ref(0.3)
const isMerge = ref(false)
const dropArr = ref<Array<Drop>>([])
const scaleMin = 0.5
const scaleMax = 1
let scaleStep: number = 0.1
const scale = ref(scaleMax)

function initDrop() {
  scaleStep = (scaleMax - scaleMin) / props.dropNum
  for (let i = 0; i < props.dropNum; i++)
    dropArr.value?.push({ top: 50, left: 50, size: 20 })
}
initDrop()

function separateDrop() {
  dropArr.value!.forEach((item) => {
    item.left = floor(random() * 100)
    item.top = floor(random() * 100)
    item.size = myRandom(dropSizeMin, dropSizeMax)
    scale.value -= scaleStep
  })
}
function mergeDrop() {
  dropArr.value!.forEach((item) => {
    item.left = 50
    item.top = 50
    scale.value += scaleStep
  })
}

function handleMerge() {
  if (isMerge.value)
    mergeDrop()
  else
    separateDrop()

  isMerge.value = !isMerge.value
}

let timer: NodeJS.Timer
onMounted(() => {
  timer = setInterval(() => {
    handleMerge()
  }, 1700)
})
onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div ref="con" class="water">
    <div
      class="base"
      :style="{
        transform: `translate(-50%, -50%) scale(${scale})`,
      }"
    />
    <div
      v-for="(item, i) in dropArr"
      :key="i"
      class="drop"
      :style="{
        'top': `${item.top}%`,
        'left': `${item.left}%`,
        'width': `${item.size}px`,
        'height': `${item.size}px`,
        'transition-delay': `${transitionDelay * i}s`,
        'transition-duration': `${transitionDuration}s`,
      }"
    />
  </div>
</template>

<style lang="less" scoped>
.water {
  @color: #fff;
  @baseSize: 15rem;
  background: var(--bg4);
  width: 100%;
  height: 100%;
  overflow: hidden;

  // bg和contrast需要作用于同一个父级元素
  background-color: #000;
  filter: contrast(30);

  .base {
    position: absolute;
    z-index: 100;
    top: 50%;
    left: 50%;
    filter: blur(20px);

    width: @baseSize;
    height: @baseSize;
    border-radius: 50%;
    color: @color;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    background: @color;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  .drop {
    filter: blur(20px);
    border-radius: 50%;
    background: @color;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.3s;
    transition-timing-function: ease-out;
  }
}
</style>
