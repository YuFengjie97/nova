<script lang="ts" setup>
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'
import { map } from '@/utils'

const { floor, abs } = Math

const con = ref<HTMLElement>()
let width = 0
onMounted(() => {
  const { width: w } = con.value!.getBoundingClientRect()
  width = w
})

const per = ref(0)

const hour = ref(0)
const time = computed(() => {
  const minutes = 1440 * per.value
  const h = (floor(minutes / 60))
  const m = (floor(minutes - h * 60))
  // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  hour.value = h
  return `${format(h)}:${format(m)}`
})

const timeShadow = computed(() => {
  const OffsetXmax = 40
  const OffsetYmax = 30

  const shadowX = -(per.value - 0.5) * OffsetXmax
  const shadowY = abs((per.value - 0.5) * OffsetYmax) + 10
  return getShadow(shadowX, shadowY)
})

const sunPos = ref({ x: 0, y: 0 })
const sunCon = ref<HTMLElement>()
function updateSunPos() {
  if (!sunCon.value)
    return

  const easingFactor = 0.1

  const { width, height } = sunCon.value.getBoundingClientRect()
  const deltaX = (per.value * width - sunPos.value.x) * easingFactor
  const deltaY = (abs(per.value - 0.5) * height - sunPos.value.y) * easingFactor

  sunPos.value.x += deltaX
  sunPos.value.y += deltaY
}
// 动画不圆滑，鼠标的移动同样是不圆滑（满帧率）的，所以不能这样直接设置
// function updateSunPos() {
//   if (!sunCon.value)
//     return

//   const { width, height } = sunCon.value.getBoundingClientRect()
//   sunPos.value.x = (per.value * width)
//   sunPos.value.y = (abs(per.value - 0.5) * height)
// }
let animateId = 0
onUnmounted(() => {
  cancelAnimationFrame(animateId)
})
function animate() {
  updateSunPos()
  animateId = requestAnimationFrame(animate)
}
onMounted(() => {
  animate()
})

function handleMousemove(event: MouseEvent) {
  const { offsetX: x } = event
  let val = x / width
  val = val < 0.1 ? 0.1 : val > 0.9 ? 0.9 : val
  per.value = val
}

const sunColor = computed(() => {
  return `--color: rgba(243, 156, 18, ${map(-abs(per.value - 0.5), -0.5, 0, 0.1, 1)})`
})

function format(val: number) {
  if (val >= 10)
    return `${val}`
  return `0${val}`
}

function getShadow(x: number, y: number) {
  x = -x * 0.1
  y = y * 0.1
  return `
  text-shadow:
  ${-x}px ${y}px 0 rgba(160, 160, 160, .1), 
  ${x}px ${-y}px 0 rgba(255, 255, 255, .1), 
  ${x}px ${-y}px 25px white, 
  ${-x}px ${y * 1.9}px 1px rgba(160, 160, 160, 2), 
  ${-x * 2}px ${y * 3.8}px 2px #a0a0a0, 
  ${-x * 3}px ${y * 5.7}px 3px rgba(160, 160, 160, 0.66666666666667), 
  ${-x * 4}px ${y * 7.6}px 4px rgba(160, 160, 160, 0.5), 
  ${-x * 5}px ${y * 9.5}px 5px rgba(160, 160, 160, 0.4), 
  ${-x * 6}px ${y * 11.4}px 6px rgba(160, 160, 160, 0.33333333333333), 
  ${-x * 7}px ${y * 13.3}px 7px rgba(160, 160, 160, 0.28571428571429), 
  ${-x * 8}px ${y * 15.2}px 8px rgba(160, 160, 160, 0.25), 
  ${-x * 9}px ${y * 17.1}px 9px rgba(160, 160, 160, 0.22222222222222), 
  ${-x * 10}px ${y * 19}px 10px rgba(160, 160, 160, 0.2), 
  ${-x * 11}px ${y * 20.9}px 11px rgba(160, 160, 160, 0.18181818181818), 
  ${-x * 12}px ${y * 22.8}px 12px rgba(160, 160, 160, 0.16666666666667), 
  ${-x * 13}px ${y * 24.7}px 13px rgba(160, 160, 160, 0.15384615384615), 
  ${-x * 14}px ${y * 26.6}px 14px rgba(160, 160, 160, 0.14285714285714), 
  ${-x * 15}px ${y * 28.5}px 15px rgba(160, 160, 160, 0.13333333333333), 
  ${-x * 16}px ${y * 30.4}px 16px rgba(160, 160, 160, 0.125), 
  ${-x * 17}px ${y * 32.3}px 17px rgba(160, 160, 160, 0.11764705882353), 
  ${-x * 18}px ${y * 34.2}px 18px rgba(160, 160, 160, 0.11111111111111), 
  ${-x * 19}px ${y * 36.1}px 19px rgba(160, 160, 160, 0.10526315789474), 
  ${-x * 20}px ${y * 38}px 20px rgba(160, 160, 160, 0.1), 
  ${-x * 21}px ${y * 39.9}px 21px rgba(160, 160, 160, 0.095238095238095), 
  ${-x * 22}px ${y * 41.8}px 22px rgba(160, 160, 160, 0.090909090909091), 
  ${-x * 23}px ${y * 43.7}px 23px rgba(160, 160, 160, 0.08695652173913), 
  ${-x * 24}px ${y * 45.6}px 24px rgba(160, 160, 160, 0.083333333333333), 
  ${-x * 25}px ${y * 47.5}px 25px rgba(160, 160, 160, 0.08)
  `
}
</script>

<template>
  <div ref="con" class="w-full min-h-full bg-#e0e0e0" @mousemove="handleMousemove">
    <div ref="sunCon" class="relative w-full h-40vh overflow-hidden">
      <div class="sun" :style="[`transform: translate(calc(${sunPos.x}px - 50%), ${sunPos.y}px)`, sunColor]" />
    </div>
    <div class="time w-full h-30vh flex justify-center font-size-8rem color-#e0e0e0 select-none" :style="timeShadow">
      {{ `${hour > 12 ? 'PM' : 'AM'} ${time}` }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.sun {
  position: absolute;
  pointer-events: none;
  transform-origin: center;
  width: 15vh;
  height: 15vh;
  border-radius: 50%;
  background: url('@/assets/img/pikachu.svg') no-repeat 0 0 / 100%;
  background-color: var(--color);
  box-shadow: 0 0 10px #FFFFFF;
}
.time{
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  font-family: "Avenir Next", "Helvetica Neue", sans-serif;
}
</style>
