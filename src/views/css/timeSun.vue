<script lang="ts" setup>
import { computed, onMounted, reactive, ref } from 'vue'
import { map } from '@/utils'

const { floor, abs } = Math

const con = ref<HTMLElement>()
let width = 0
onMounted(() => {
  const { width: w } = con.value!.getBoundingClientRect()
  width = w
})

const per = ref(0)

function handleMousemove(event: MouseEvent) {
  const { offsetX: x } = event
  per.value = Number((x / width).toFixed(2))
}

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

const sunCon = ref<HTMLElement>()
const sunPos = computed(() => {
  if (!sunCon.value)
    return ''

  const { width, height } = sunCon.value!.getBoundingClientRect()
  const x = `${per.value * width}px - 50%`
  const y = abs(per.value - 0.5) * height
  return `transform: translate(calc(${x}), calc(${y}px));`
})
const sunColor = computed(() => {
  return `--color: rgba(243, 156, 18, ${map(-abs(per.value - 0.5), -0.5, 0, 0.1, 1)})`
})

function format(val: number) {
  if (val >= 10)
    return `${val}`
  return `0${val}`
}

function getShadow(x: number, y: number) {
  // let res = ''
  // const total = 5
  // for (let i = 0; i < total; i += 1)
  //   res += `${x + i}px ${y + i}px ${10}px rgba(160,160,160,${(total - i) / total})${i === total - 1 ? '' : ','}`

  // return res
  return `
  text-shadow: 0px 0px 10px #eee,${x}px ${y}px 20px #858585
  `
}
</script>

<template>
  <div ref="con" class="w-full min-h-full bg-#ecf0f1" @mousemove="handleMousemove">
    <div ref="sunCon" class="relative w-full h-40vh overflow-hidden">
      <div class="sun" :style="[sunPos, sunColor]" />
    </div>
    <div class="time w-full h-30vh flex justify-center font-size-8rem color-#fff select-none" :style="timeShadow">
      {{ `${hour > 12 ? 'PM' : 'AM'} ${time}` }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.sun {
  color: rgba(26, 26, 26, 0.196);
  position: absolute;
  pointer-events: none;
  transform-origin: center;
  transition: .1s;
  width: 15vh;
  height: 15vh;
  border-radius: 50%;
  background: url('@/assets/img/pikachu.svg') no-repeat 0 0 / 100%;
  background-color: var(--color);
  box-shadow: 0 0 4px #b5b5b5, 0 0 20px #b4b4b4, 0 0 40px #d9d9d9;
}
</style>
