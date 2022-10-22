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
    <div class="content">
      <router-link :to="link">{{ title }}</router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

interface navItem {
  title: string
  link: string
  conDomRect: DOMRect
  bg: string
}

const props = defineProps<navItem>()

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
</script>

<style lang="less" scoped>
.navItem {
  min-height: fit-content;
  display: flex;
  align-items: center;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  box-shadow:
  0px 0px 20.1px rgba(0, 0, 0, 0.057),
  0px 0px 36.2px rgba(0, 0, 0, 0.083),
  0px 0px 55.6px rgba(0, 0, 0, 0.106),
  0px 0px 84.3px rgba(0, 0, 0, 0.14),
  0px 0px 156px rgba(0, 0, 0, 0.22)
;
  &:hover {
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
    padding: 20px 40px;
    text-align: center;
    user-select: none;
    color: #fd93b8;
    cursor: pointer;
    background: #2d3436;
    transition: 0.3s;
    transform-origin: center center;
    transform: rotateY(180deg);
  }
}
</style>
