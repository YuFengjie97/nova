<script lang="ts" setup>
import type { Component, ShallowRef } from 'vue'
import { onMounted, onUnmounted, ref, shallowRef } from 'vue'
import RectHollow from './RectHollow.vue'
import Rect from './Rect.vue'
import RectPoint from './RectPoint.vue'
import Circle from './Circle.vue'
import CircleDouble from './CircleDouble.vue'
import CircleHollow from './CircleHollow.vue'
import Cross from './Cross.vue'
import Link1 from './Link1.vue'
import Link2 from './Link2.vue'

const { random, floor } = Math

const components = [RectHollow, Rect, RectPoint, Circle, CircleDouble, CircleHollow, Cross, Link1, Link2]
const componentList = ref<Array<{
  x: number
  y: number
  com: ShallowRef<Component>
}>>([])
const con = ref<HTMLElement>()

const scaleList = ref<number[]>([])

let animateId: NodeJS.Timer
onUnmounted(() => {
  clearInterval(animateId)
})

const transitionDuration = ref(350)
const gap = ref(0)
const size = ref(60)

onMounted(() => {
  const { width, height } = con.value!.getBoundingClientRect()
  const col = floor(width / (size.value + gap.value))
  const row = floor(height / (size.value + gap.value))
  const total = col * row

  function init() {
    for (let x = 0; x < col; x += 1) {
      for (let y = 0; y < row; y += 1) {
        const i = floor(random() * components.length)
        componentList.value.push({
          x,
          y,
          com: shallowRef(components[i]),
        })
      }
    }

    scaleList.value = Array.from({ length: total }, () => 0)
  }
  init()

  function animate() {
    animateId = setInterval(() => {
      for (let x = 0; x < col; x += 1) {
        for (let y = 0; y < row; y += 1)
          scaleList.value[y * col + x] = random() * 0.8 + 0.2
      }
    }, transitionDuration.value)
  }
  animate()
})
</script>

<template>
  <div ref="con" :style="[`gap: ${gap}px`]" class="w-full h-full flex  justify-center items-center flex-wrap  bg-#000 ">
    <component
      :is="item.com"
      v-for="(item, i) in componentList"
      :key="i"
      :style="`
                width: ${size}px; height: ${size}px;
                transform: scale(${scaleList[i]});
                transition-duration: ${transitionDuration}ms`"
    />
  </div>
</template>
