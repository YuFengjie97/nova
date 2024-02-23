<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import pic from '@/assets/img/nyan-cat.png'
import { createImgCanvasIdle } from '@/utils/canvas'

const con = ref<HTMLElement>()
const canvas = ref<HTMLCanvasElement>()

let animateId: number
let timer: NodeJS.Timer
onMounted(async () => {
  const { width, height } = con.value!.getBoundingClientRect()
  canvas.value!.width = width
  canvas.value!.height = height
  const ctx = canvas.value!.getContext('2d')!

  const { canvas: c, timer: t } = await createImgCanvasIdle({ w: 400, h: 400 }, pic, 6)
  timer = t

  function animate() {
    ctx.clearRect(0, 0, width, height)
    ctx.moveTo(0, 0)
    ctx.lineTo(400, 400)
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 200
    ctx.stroke()
    ctx.drawImage(c, 0, 0)
    animateId = requestAnimationFrame(animate)
  }
  animate()
})

onUnmounted(() => {
  cancelAnimationFrame(animateId)
  clearInterval(timer)
})
</script>

<template>
  <div ref="con" class="w-full h-full">
    <canvas ref="canvas" class="block w-full h-full" />
  </div>
</template>

<style lang='less' scoped>
.view-con{}
</style>
