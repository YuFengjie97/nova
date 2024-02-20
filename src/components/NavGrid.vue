<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import debounce from 'lodash/debounce'
import FontFaceObserver from 'fontfaceobserver'

import NavItem from './NavItem.vue'
import type { NavItemProp, NavType } from './NavItem.vue'
import { outlink, routes } from '@/router'
import bg from '@/assets/img/bg.png'

interface NavItemEx extends NavItemProp {
  visable: boolean
}

const navList = ref<NavItemEx[]>([])

const navGrid = ref<HTMLElement>()
const navGridDomRect = ref<DOMRect>()

function resolveRoutes() {
  routes.forEach((r) => {
    r.children && r.children?.forEach((rc) => {
      if (rc.meta?.visable) {
        const item: NavItemEx = {
          name: rc.meta.name as string,
          link: `${r.path}/${rc.path}`,
          conDomRect: navGrid.value!.getBoundingClientRect(),
          visable: rc.meta.visable as boolean,
          bg,
          type: rc.meta.type as NavType,
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
      visable: l.meta.visable,
      bg,
      type: l.meta.type as NavType,
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
  <div class="w-full h-full flex justify-center overflow-y-scroll">
    <div ref="navGrid" class="max-w-600px h-fit p-y-2rem flex flex-wrap justify-center gap-2px">
      <div
        v-for="(item, index) in navList" :key="index"
      >
        <NavItem
          v-if="item.visable"
          v-bind="item"
          :con-dom-rect="navGridDomRect as DOMRect"
        />
      </div>
    </div>
  </div>
</template>
