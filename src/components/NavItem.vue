<script lang="ts" setup>
import { computed, ref, watch, watchEffect } from 'vue'
import { router } from '@/router'
import iconOutlink from '@/assets/iconSvg/nav-type-icon/outlink.png'
import iconCss from '@/assets/iconSvg/nav-type-icon/css.png'
import iconCanvas from '@/assets/iconSvg/nav-type-icon/canvas.png'
import iconThreejs from '@/assets/iconSvg/nav-type-icon/threejs.png'

export type NavType = 'css' | 'canvas' | 'threejs' | 'outlink'

export interface NavItemProp {
  name: string
  link: string
  conDomRect: DOMRect
  bg: string
  outLink?: boolean
  type?: NavType
}
const props = withDefaults(defineProps<NavItemProp>(), {
  outLink: false,
})

const iconType = ref({
  outlink: {
    color: '#00b894',
    img: iconOutlink,
  },
  css: {
    color: '#00cec9',
    img: iconCss,
  },
  canvas: {
    color: '#6c5ce7',
    img: iconCanvas,
  },
  threejs: {
    color: '#fdcb6e',
    img: iconThreejs,
  },
})

const navItem = ref<HTMLElement>()
const bgPos = ref('')

watchEffect(() => {
  if (!props.conDomRect || !navItem.value)
    return
  const { top, left } = navItem.value!.getBoundingClientRect()
  const { top: baseTop, left: baseLeft } = props.conDomRect

  bgPos.value = `-${left - baseLeft}px -${top - baseTop}px`
})

let watched = false
function go() {
  watched = true
  if (props.outLink) {
    window.open(props.link, '_blank')
    return
  }

  const routeLocation = router.resolve({ path: props.link })
  window.open(routeLocation.href, '_blank')
  // router.push(props.link)
}

const isHover = ref(true)
function mousemove() {
  isHover.value = true
}
function mouseout() {
  isHover.value = !watched
}
const navItemStyle = computed(() => {
  return {
    'box-shadow': isHover.value
      ? '0px 0px 10px rgb(210, 175, 210)'
      : '0px 0px 8px rgba(0, 0, 0, 1)',
  }
})
const contentStyle = computed(() => {
  return {
    transform: isHover.value ? 'rotateY(0deg)' : 'rotateY(180deg)',
  }
})
const bgStyle = computed(() => {
  return {
    'transform': isHover.value ? 'rotateY(180deg)' : 'rotateY(0deg)',
    'background-position': bgPos.value,
    'background-size': `${props.conDomRect?.width ?? 0}px`,
    'background-image': `url(${props.bg})`,
  }
})
// defineExpose({
//   isHover,
//   mousemove,
//   mouseout,
// })
</script>

<template>
  <div
    ref="navItem"
    class="navItem font-ani"
    :style="navItemStyle"
    @mousemove="mousemove"
    @mouseout="mouseout"
    @click="go"
  >
    <div class="bg  pointer-events-none" :style="bgStyle" />
    <div class="content  pointer-events-none" :style="contentStyle">
      <div class="fit-content flex flex-col items-center pointer-events-none">
        <div class="flex items-center m-r-10px">
          <div v-if="type" class="rounded p-4px flex items-center justify-center m-r-4px" :style="{ background: iconType[type].color }">
            <img class="h-20px" :src="iconType[type].img" alt="">
          </div>
          {{ name }}
        </div>

        <div class="h-2px m-t-2px bg-#fff transition-duration-0.35s transition-delay-0.3s" :class="isHover ? 'w-full' : 'w-0'" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.navItem {
  --color-light: #f4cbdf;
  font-size: 1.2rem;
  min-height: fit-content;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  color: var(--color-light);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 1);
  transition: 0.3s;
  cursor: pointer;

  // 这部分样式改为js来控制
  // &:hover {
  //   box-shadow: 0px 0px 10px rgb(210, 175, 210);
  //   .content {
  //     transform: rotateY(0deg);
  //   }
  //   .bg {
  //     transform: rotateY(180deg);
  //   }
  // }
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden; // 如果不使用这个样式，也可以在旋转前后，对bg content设置相反的zIndex来实现
    width: 100%;
    height: 100%;
    transition: 0.3s;
    transform-origin: center center;
    transform: rotateY(0deg);
    background-repeat: repeat;
    overflow: hidden;
  }
  .content {
    position: relative;
    backface-visibility: hidden;
    text-align: center;
    user-select: none;
    background: #141414;
    transition: 0.3s;
    transform-origin: center center;
    transform: rotateY(180deg);
    padding: 1rem 2rem;
    letter-spacing: 0.1rem;
    font-family: 'Patrick Hand';
  }
}
</style>
