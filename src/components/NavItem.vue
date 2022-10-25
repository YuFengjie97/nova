<template>
  <div class="navItem" ref="navItem">
    <div
      class="bg"
      :style="{
        'background-position': bgPos,
        'background-size': `${conDomRect?.width ?? 0}px`,
        'background-image': `url(${bg})`,
      }"
    ></div>
    <div class="content" @click="go">{{ title }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import router from '../router'

interface NavItem {
  title: string
  link: string
  conDomRect: DOMRect
  bg: string
}

const props = defineProps<NavItem>()

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
</script>

<style lang="less" scoped>
.navItem {
  min-height: fit-content;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 1);
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 0px 10px rgb(210, 175, 210);
    .content {
      transform: rotateY(0deg);
      z-index: 2;
    }
    .bg {
      transform: rotateY(180deg);
      z-index: 1;
    }
  }
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
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
    z-index: 1;
    text-align: center;
    cursor: pointer;
    user-select: none;
    color: #fd93b8;
    background: #2d3436;
    transition: 0.3s;
    transform-origin: center center;
    transform: rotateY(180deg);
    padding: 20px 40px;
    letter-spacing: 2px;
    font-family: Pacifico, 'Microsoft YaHei';
    // font-family: 'Blackadder ITC', 'Microsoft YaHei';
  }
}
</style>
