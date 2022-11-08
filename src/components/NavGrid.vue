<template>
  <div class="navGrid" ref="navGrid">
    <NavItem
      v-for="(item, index) in navList"
      :key="index"
      v-bind="item"
      :conDomRect="(navGridDomRect as DOMRect)"
      :bg="bg"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import debounce from 'lodash/debounce'
import NavItem from './NavItem.vue'

import FontFaceObserver from 'fontfaceobserver'

const props = defineProps<{
  navList: Array<NavItem>
  bg: string
}>()

const navGrid = ref<HTMLElement>()
const navGridDomRect = ref<DOMRect>()

function initNavGridDomRect() {
  console.log('nav 计算')
  navGridDomRect.value = navGrid.value!.getBoundingClientRect()
}

onMounted(() => {
  let myFont = new FontFaceObserver('Patrick Hand')
  myFont.load().then(initNavGridDomRect)

  window.addEventListener('resize', debounce(initNavGridDomRect, 500))
})
</script>

<style lang="less" scoped>
.navGrid {
  width: 100%;
  max-width: 1000px;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}
</style>
