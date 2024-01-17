<script lang="ts" setup>
import { onMounted, ref} from 'vue';

const con = ref<HTMLElement>()
const canvas = ref<HTMLCanvasElement>()
onMounted(() => {
  const {width,height} = con.value!.getBoundingClientRect()
  const ctx = canvas.value?.getContext('2d')
  canvas.value!.width = width
  canvas.value!.height = height
})
</script>

<template>
  <div class='w-full h-full' ref="con">
    <canvas class="block w-full h-full" ref="canvas"></canvas>
  </div>
</template>

<style lang='less' scoped>
</style>