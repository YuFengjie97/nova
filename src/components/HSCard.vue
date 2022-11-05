<template>
  <div
    class="hsCard"
    :style="{
      '--front': `url(${frontImg})`,
      '--back': `url(${backImg})`,
    }"
    @mousemove="mousemove"
      @mouseout="mouseout"
  >
    <div
      class="front"
      :style="styleFront"
      ref="front"
      
    >
    <img :src="`${frontImg}`"/>
  </div>
    <div class="back" :style="styleBack" @click="show"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'
import { map } from '@/utils'

const {floor} = Math

const props = defineProps<{
  frontImg: string
  backImg: string
}>()
let cardInfo = {
  startX: 0,
  endX: 0,
  startY: 0,
  endY: 0,
}
let rotateXBase = 12 // 最大x轴y轴旋转角度是7deg
let rotateYBase = 20 // 最大x轴y轴旋转角度是7deg

// 正面是否展示
const isShow = ref(false)
function show() {
  isShow.value = true
}
// 正面在mousemove时，3d旋转
const front = ref<HTMLElement>()
const rotateX = ref(0)
const rotateY = ref(0)
const isHover = ref(false)
function mousemove (e: MouseEvent) {
  isHover.value = true
  const { startX, endX, startY, endY } = cardInfo
  const { clientX, clientY } = e
  rotateY.value = floor(map(clientX, startX, endX, rotateYBase, -rotateYBase))
  rotateX.value = floor(map(clientY, startY, endY, -rotateXBase, rotateXBase))
}
function mouseout() {
  isHover.value = false
}

const styleFront = computed(() => {
  let rx = 0
  let ry = -180
  let s = 1
  if (isShow.value) {
    ry = 0
    if (isHover.value) {
      rx = rotateX.value
      ry = rotateY.value
      s = isHover.value ? 1.1 : 1
    }
  }

  return { transform: `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(${s},${s},${s})` }
})
const styleBack = computed(() => {
  let rx = 0
  let ry = 0
  if (isShow.value) {
    ry = -180
  }
  return { transform: `rotateX(${rx}deg) rotateY(${ry}deg)` }
})

function initCardPos() {
  let { x, y, width, height } = front.value!.getBoundingClientRect()
  cardInfo.startX = x
  cardInfo.endX = x + width
  cardInfo.startY = y
  cardInfo.endY = y + height
}

onMounted(() => {
  initCardPos()
  window.onresize = initCardPos
})
</script>

<style lang="less" scoped>
.hsCard {
  --light: #fbfd4d;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 15rem;
  height: 22rem;
  .public {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 100%;
    background-repeat: no-repeat;
    backface-visibility: hidden;
    transform-origin: center center;
    transform-style: preserve-3d;
    transition: 0.15s ease-out 0s;
    cursor: pointer;
  }
  .front {
    .public();
    // background-image: var(--front);// 因为filter会使整个dom模糊，所以将图片放到子img元素
    img{
      filter: drop-shadow(0 0 5px var(--light));
    }
    &:hover {
      img{
        filter: drop-shadow(0 0 20px var(--light));
      }
    }
  }
  .back {
    .public();
    background-image: var(--back);
    filter: drop-shadow(0 0 10px #000);
    &:hover {
      filter: drop-shadow(0 0 20px var(--light));
    }
  }
}
</style>
