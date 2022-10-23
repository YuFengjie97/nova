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


const props = defineProps<{
  navList: Array<navItem>
  bg: string
}>()

const navGrid = ref<HTMLElement>()
const navGridDomRect = ref<DOMRect>()

function initNavGridDomRect() {
  console.log('initNavGridDomRect')
  navGridDomRect.value = navGrid.value!.getBoundingClientRect()
}

onMounted(() => {
  initNavGridDomRect()
  window.addEventListener('resize', debounce(initNavGridDomRect, 1000))
})
</script>

<style lang="less" scoped>
.navGrid {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}
</style>
