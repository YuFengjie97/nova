<template>
  <div class="home py-40 flex justify-center">
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
  { title: '肥', link: '/' },
  { title: '愤愤愤愤', link: '/' },
  { title: '分分分', link: '/' },
  { title: '愤愤愤愤', link: '/' },
  { title: '愤愤愤愤', link: '/' },
  { title: 'gggg鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼', link: '/' },
  { title: 'ss', link: '/' },
  { title: 'ffffeee', link: '/' },
  { title: '愤愤愤愤', link: '/' },
  { title: '愤愤ffff愤愤', link: '/' },
  { title: '愤愤愤愤', link: '/' },
  { title: '愤愤愤愤', link: '/' },
  { title: 'gggg鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼', link: '/' },
  { title: 'fefefefefefefe', link: '/' },
  { title: 'fefe', link: '/' },
  { title: 'aafefefe ', link: '/' },
  { title: 'ffeewwwwwww', link: '/' },
  { title: 'gggg鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼', link: '/' },
  { title: 'gggg鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼', link: '/' },
  { title: '愤愤afefeafe愤愤', link: '/' },
  { title: 'fefefefefefefe', link: '/' },
  { title: 'fefe', link: '/' },
  { title: 'aafefefe ', link: '/' },
  { title: 'ffeewwwwwww', link: '/' },
  { title: 'fefefefefefefe', link: '/' },
  { title: 'fefe', link: '/' },
  { title: 'aafefefe ', link: '/' },
  { title: 'ffeewwwwwww', link: '/' },
  { title: '肥', link: '/' },
  { title: '愤愤愤愤', link: '/' },
  { title: '分分分', link: '/' },
  { title: '愤愤愤愤', link: '/' },
  { title: '愤愤愤愤', link: '/' },
  { title: 'gggg鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼', link: '/' },
  { title: 'ss', link: '/' },
  { title: 'ffffeee', link: '/' },
  { title: '愤愤愤愤', link: '/' },
  { title: '愤愤ffff愤愤', link: '/' },
  { title: '愤愤愤愤', link: '/' },
  { title: '愤愤愤愤', link: '/' },
  { title: 'gggg鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼', link: '/' },
  { title: 'fefefefefefefe', link: '/' },
  { title: 'fefe', link: '/' },
  { title: 'aafefefe ', link: '/' },
  { title: 'ffeewwwwwww', link: '/' },
  { title: 'gggg鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼', link: '/' },
  { title: 'gggg鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼鬼', link: '/' },
  { title: '愤愤afefeafe愤愤', link: '/' },
  { title: 'fefefefefefefe', link: '/' },
  { title: 'fefe', link: '/' },
  { title: 'aafefefe ', link: '/' },
  { title: 'ffeewwwwwww', link: '/' },
  { title: 'fefefefefefefe', link: '/' },
  { title: 'fefe', link: '/' },
  { title: 'aafefefe ', link: '/' },
  { title: 'ffeewwwwwww', link: '/' },
])
</script>
<style lang="less" scoped>
.home {
  background-color: #b4286c;
}
</style>
