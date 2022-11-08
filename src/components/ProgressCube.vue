<template>
  <div
    class="progressCube"
    :style="{
      '--progress': `${val * 100}%`,
      '--fillColor': fillColor
    }"
  >
    <div class="bar">
      <div class="front"></div>
      <div class="behind"></div>
      <div class="left"></div>
      <div class="right"></div>
      <div class="top"></div>
      <div class="bottom"></div>
      <div class="inner"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = withDefaults(
  defineProps<{
    fillColor: string
    val: number
  }>(),
  {
    fillColor: 'rgba(236, 0, 140 , 0.8)',
    val: 0.5
  }
)
</script>

<style lang="less" scoped>
.progressCube {
  --size: 4rem;
  --width: 25rem;
  --bgWhite: rgba(254, 254, 254, 0.6);
  --borderColor: rgba(68, 68, 68, 0.08);
  .bar {
    display: inline-block;
    position: relative;
    height: var(--size);
    width: var(--width);
    transform: rotateX(-20deg) rotateY(0deg);
    transform-style: preserve-3d;
    perspective-origin: 50% 50%;
    perspective: 1000px;
  }
  // 所有面的公共部分
  .face {
    border: 1px solid var(--borderColor);
    position: absolute;
    top: 0;
  }
  // 需要展示进度的面的伪元素公共部分
  .progress {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: var(--fillColor);
    width: var(--progress);
    height: 100%;
    background: var(--fillColor);
    box-shadow: -0.8rem -2rem 12rem 0px var(--fillColor);
    transition: 0.3s ease-in-out;
  }
  .left {
    .face();
    width: var(--size);
    height: var(--size);
    background: var(--fillColor);
    left: 0;
    transform-origin: left center;
    transform: rotateY(90deg);
    &::before {
      .progress();
    }
  }
  .right {
    .face();
    width: var(--size);
    height: var(--size);
    background: var(--bgWhite);
    right: 0;
    transform-origin: right center;
    transform: rotateY(-90deg);
  }
  .front {
    .face();
    width: var(--width);
    height: var(--size);
    background: var(--bgWhite);
    left: 0;
    &::before {
      .progress();
    }
  }
  .behind {
    .face();
    width: var(--width);
    height: var(--size);
    background: var(--bgWhite);
    left: 0;
    transform: translateZ(calc(var(--size) * -1));
    &::before {
      .progress();
    }
  }
  .top {
    .face();
    width: var(--width);
    height: var(--size);
    background: var(--bgWhite);
    left: 0;
    transform-origin: center top;
    transform: rotateX(-90deg);
    &::before {
      .progress();
    }
  }
  .bottom {
    .face();
    width: var(--width);
    height: var(--size);
    background: var(--bgWhite);
    left: 0;
    transform-origin: center bottom;
    transform: rotateX(90deg);
    box-shadow: 0 0 4rem 0 rgba(0, 0, 0, 0.6);
    &::before {
      .progress();
    }
  }
}
</style>
