<template>
  <div class="w-full h-full bg-#000 flex justify-center items-center" ref="con">
    <ProgressCube class="item" :fill-color="color" :val="val" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ProgressCube from '@/components/ProgressCube.vue'
import { useGUI } from '@/hooks/useGUI'

const val = ref(0.4)
const color = ref('#e308cd')

const con = ref<HTMLElement>()
onMounted(() => {
  const {gui} = useGUI(con.value!)
  gui.addColor(color, 'value').name('color')
  gui.add(val, 'value', 0, 1, 0.1).name('progress')
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
