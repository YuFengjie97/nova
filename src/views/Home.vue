<template>
  <div class="home py-40 flex justify-center">
    <NavGrid :navList="navList" bg="/img/bg.png" />
  </div>
</template>
<script lang="ts" setup>
import NavGrid from '@/components/NavGrid.vue'
import { ref } from 'vue'

const navList = ref<Array<navItem>>([
  { title: '愤愤愤愤', link: '/' },
  { title: '分分分分分分分分分', link: '/' },
  { title: '啊', link: '/' },
  { title: '愤愤愤愤烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦', link: '/' },
  { title: '肥', link: '/' },
  { title: '愤愤愤愤', link: '/' },
  { title: '分分分', link: '/' },
  { title: '愤愤愤愤', link: '/' },
  { title: '愤愤愤愤', link: '/' },
  { title: '愤愤愤愤烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦', link: '/' },
  { title: 'ss', link: '/' },
  { title: 'ffffeee', link: '/' },
  { title: '愤愤愤愤', link: '/' },
  { title: '愤愤ffff愤愤', link: '/' },
  { title: '愤愤愤愤', link: '/' },
  { title: '愤愤愤愤', link: '/' },
  { title: '愤愤愤愤烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦', link: '/' },
  { title: 'fefefefefefefe', link: '/' },
  { title: 'fefe', link: '/' },
  { title: 'aafefefe ', link: '/' },
  { title: 'ffeewwwwwww', link: '/' },
  { title: '愤愤愤愤烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦', link: '/' },
  { title: '愤愤愤愤烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦', link: '/' },
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
  { title: '愤愤愤愤烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦', link: '/' },
  { title: 'ss', link: '/' },
  { title: 'ffffeee', link: '/' },
  { title: '愤愤愤愤', link: '/' },
  { title: '愤愤ffff愤愤', link: '/' },
  { title: '愤愤愤愤', link: '/' },
  { title: '愤愤愤愤', link: '/' },
  { title: '愤愤愤愤烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦', link: '/' },
  { title: 'fefefefefefefe', link: '/' },
  { title: 'fefe', link: '/' },
  { title: 'aafefefe ', link: '/' },
  { title: 'ffeewwwwwww', link: '/' },
  { title: '愤愤愤愤烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦', link: '/' },
  { title: '愤愤愤愤烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦', link: '/' },
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
