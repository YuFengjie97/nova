<template>
  <div
    class="navItem"
    ref="navItem"
    :style="navItemStyle"
    @mousemove="mousemove"
    @mouseout="mouseout"
  >
    <div class="bg" :style="bgStyle"></div>
    <div class="content" :style="contentStyle" @click="go">{{ title }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue'
import router from '../router'

interface NavItem {
  title: string
  link: string
  conDomRect: DOMRect
  bg: string
  show?: boolean // 默认是否展示
}

const props = withDefaults(defineProps<NavItem>(),{
  show: false
}) 
const navItem = ref<HTMLElement>()
const bgPos = ref('')

watch(
  () => props.conDomRect,
  (conDomRect) => {
    const { top, left } = navItem.value!.getBoundingClientRect()
    let { top: baseTop, left: baseLeft } = conDomRect as DOMRect

    bgPos.value = `-${left - baseLeft}px -${top - baseTop}px`
  }
)

function go() {
  let routeData = router.resolve({ path: props.link })
  window.open(routeData.href, '_blank')
}

const isHover = ref(props.show ? true : false)
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
      : '0px 0px 8px rgba(0, 0, 0, 1)'
  }
})
const contentStyle = computed(() => {
  return {
    transform: isHover.value ? 'rotateY(0deg)' : 'rotateY(180deg)'
  }
})
const bgStyle = computed(() => {
  return {
    transform: isHover.value ? 'rotateY(180deg)' : 'rotateY(0deg)',
    'background-position': bgPos.value,
    'background-size': `${props.conDomRect?.width ?? 0}px`,
    'background-image': `url(${props.bg})`
  }
})
defineExpose({
  isHover,
  mousemove,
  mouseout
})
</script>

<style lang="less" scoped>
.navItem {
  font-size: 1.2rem;
  min-height: fit-content;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
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
    background-color: #e84393;
    background-repeat: repeat;
    overflow: hidden;
  }
  .content {
    position: relative;
    backface-visibility: hidden;
    text-align: center;
    user-select: none;
    color: #fd93b8;
    background: #2d3436;
    transition: 0.3s;
    transform-origin: center center;
    transform: rotateY(180deg);
    padding: 1rem 2rem;
    letter-spacing: 0.1rem;
    font-family: 'Patrick Hand';
  }
}
</style>
