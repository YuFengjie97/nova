<template>
  <div class="navGrid" ref="navGrid">
    <NavItem
      v-for="(item, index) in navList"
      :key="index"
      ref="navItemRefs"
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

// 计算navItem容器信息，用来navItem内部计算background-position位置信息
function initNavGridDomRect() {
  console.log('nav 计算')
  navGridDomRect.value = navGrid.value!.getBoundingClientRect()
}

onMounted(() => {
  // 字体加载，更新容器信息，防止前后不同字体导致的容器信息错误，由此导致navItem的background-position计算错误
  let myFont = new FontFaceObserver('Patrick Hand')
  myFont.load().then(initNavGridDomRect)

  // 适配响应式
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
