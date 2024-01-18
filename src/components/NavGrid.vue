<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import debounce from 'lodash/debounce'
import FontFaceObserver from 'fontfaceobserver'

import NavItem from './NavItem.vue'
import type { NavItemProp } from './NavItem.vue'
import { outlink, routes } from '@/router'
import bg from '@/assets/img/bg.png'

const navList = ref<NavItemProp[]>([])

const navGrid = ref<HTMLElement>()
const navGridDomRect = ref<DOMRect>()

function resolveRoutes() {
  routes.forEach((r) => {
    r.children && r.children?.forEach((rc) => {
      if (rc.meta?.show) {
        const item: NavItemProp = {
          name: rc.meta!.name as string,
          link: `${r.path}/${rc.path}`,
          conDomRect: navGrid.value!.getBoundingClientRect(),
          show: rc.meta!.show as boolean,
          bg,
        }
        navList.value.push(item)
      }
    })
  })

  outlink.forEach((l) => {
    const item = {
      name: l.meta.name,
      link: l.path,
      conDomRect: navGrid.value!.getBoundingClientRect(),
      outLink: true,
      show: l.meta.show,
      bg,
    }
    navList.value.push(item)
  })
}

// 计算navItem容器信息，用来navItem内部计算background-position位置信息
function initNavGridDomRect() {
  navGridDomRect.value = navGrid.value!.getBoundingClientRect()
}

onMounted(() => {
  resolveRoutes()

  // 字体加载，更新容器信息，防止前后不同字体导致的容器信息错误，由此导致navItem的background-position计算错误
  const myFont = new FontFaceObserver('Patrick Hand')
  myFont.load().then(initNavGridDomRect)

  // 适配响应式
  window.addEventListener('resize', debounce(initNavGridDomRect, 500))
})
</script>

<template>
  <div ref="navGrid" class="navGrid">
    <NavItem
      v-for="(item, index) in navList" :key="index" v-bind="item"
      :con-dom-rect="navGridDomRect as DOMRect"
    />
  </div>
</template>

<style lang="less" scoped>
.navGrid {
  width: 100%;
  max-width: 1000px;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2px;
}
</style>
