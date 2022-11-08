<template>
  <div class="viewCon">
    <ProgressCube class="item" :fill-color="color" :val="val" />
  </div>
</template>

<script lang="ts" setup>
import * as dat from 'dat.gui'
import { ref, onMounted, onUnmounted } from 'vue'
import ProgressCube from '@/components/ProgressCube.vue'

const val = ref(0.4)
const color = ref('#e308cd')
const PARAMS = {
  color: '#0984e3',
  val: 0.4
}
const gui = new dat.GUI()
gui.addColor(PARAMS, 'color').onChange((e) => {
  color.value = e
})
gui.add(PARAMS, 'val', 0, 1, 0.1).onChange((e) => {
  val.value = parseFloat(e.toFixed(1))
})
</script>

<style lang="less" scoped>
.viewCon {
  background: #2d3436;
  display: flex;
  justify-content: center;
  align-items: center;
  .item {
    padding-top: 5rem;
  }
  // color: rgb(255, 0, 0);
  // color: #ff0000cc;
  // color: rgb(9, 132, 227);
  // color: #0985e3cc;
}
</style>
