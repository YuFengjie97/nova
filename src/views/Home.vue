<template>
  <div class="home py-40 flex felx-col flex-wrap justify-center items-center">
    <h1 class="title">Hover and Click</h1>
    <NavGrid :navList="navList" :bg="img" />
  </div>
</template>
<script lang="ts" setup>
import NavGrid from '@/components/NavGrid.vue'
import { ref } from 'vue'

import img from '@/assets/img/bg.png'

const navList = ref<Array<NavItem>>([
  { title: 'cssTrick-StarRate(星星评分)', link: '/starRate' },
  { title: 'fabric-FlowField(柏林噪音)', link: '/flowField' },
  { title: 'fabric-FlowFieldPoint', link: '/flowFieldLine' },
  { title: 'p5-FlowFieldLine', link: '/flowFieldLine2' },
  { title: 'p5-randomMaze(随机迷宫)', link: '/maze' },
  { title: 'p5-gradientLine(渐变线)', link: '/gradientLine' },
  { title: 'p5-CodeRain', link: '/codeRain' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null ', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null ', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
  { title: 'hello I am null', link: '/' },
])
</script>
<style lang="less" scoped>
.home {
  min-width: 900px;
  background-color: #b4286c;
  .title{
    width: fit-content;
    padding-bottom: 10px;
    font-size: 4rem;
    font-family: 'Patrick Hand';
  }
}
</style>
