<script lang="ts" setup>
import SnowyBg from './three/SnowyBg.vue'
import NavGrid from '@/components/NavGrid.vue'
</script>

<template>
  <div class="home min-h-100vh flex justify-center items-center">
    <SnowyBg class="snowBg absolute top-0 left-0" />
    <NavGrid />
  </div>
</template>

<style lang="less" scoped>
.home {
  background: #b4286c;
  .title {
    color: #e84393;
    font-size: 3rem;
    font-family: 'Patrick Hand';
  }
}
</style>
