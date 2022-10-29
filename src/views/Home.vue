<template>
  <div class="home">
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
  // { title: 'fabric-FlowFieldPoint', link: '/flowFieldLine' },
  { title: 'p5-FlowFieldLine', link: '/flowFieldLine2' },
  { title: 'p5-randomMaze(随机迷宫)', link: '/maze' },
  { title: 'p5-gradientLine(渐变线)', link: '/gradientLine' },
  { title: 'p5-CodeRain', link: '/codeRain' },
  { title: 'p5-Cross', link: '/cross' },
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
  background: #b4286c;
  height: 100%;
  min-height: 100vh;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title{
    width: fit-content;
    padding-bottom: 1rem;
    font-size: 3rem;
    font-family: 'Patrick Hand';
  }
}
</style>
