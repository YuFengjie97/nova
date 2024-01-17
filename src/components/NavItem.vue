<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { router } from '@/router'

export interface NavItemProp {
  name: string
  link: string
  conDomRect: DOMRect
  bg: string
  show: boolean
  outLink?: boolean
}

const props = withDefaults(defineProps<NavItemProp>(), {
  outLink: false,
})
const navItem = ref<HTMLElement>()
const bgPos = ref('')

watch(
  () => props.conDomRect,
  (conDomRect) => {
    const { top, left } = navItem.value!.getBoundingClientRect()
    const { top: baseTop, left: baseLeft } = conDomRect as DOMRect

    bgPos.value = `-${left - baseLeft}px -${top - baseTop}px`
  },
)

function go() {
  if (props.outLink) {
    window.open(props.link, '_blank')
    return
  }

  // const routeLocation = router.resolve({ path: props.link })
  // window.open(routeLocation.href, '_blank')
  router.push(props.link)
}

const isHover = ref(!!props.show)
function mousemove() {
  isHover.value = true
}
function mouseout() {
  isHover.value = false
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
defineExpose({
  isHover,
  mousemove,
  mouseout,
})
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
        {{ name }}
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
