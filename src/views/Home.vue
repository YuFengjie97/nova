<template>
  <div class="home">
    <SnowyBg class="snowBg"/>
    <h1 class="title">Hover and Click</h1>
    <NavGrid />
  </div>
</template>
<script lang="ts" setup>
import NavGrid from '@/components/NavGrid.vue'
import SnowyBg from './three/SnowyBg.vue';

</script>
<style lang="less" scoped>
.home {
  position: relative;
  background: #b4286c;
  min-height: 100vh;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .snowBg{
    position: absolute;
    top: 0;
    left: 0;
    // bottom: 0;
    // right: 0;
    height: 100%;
    width: 100%;
  }
  .title {
    z-index: 1;
    color: #e84393;
    width: fit-content;
    padding-bottom: 1rem;
    font-size: 3rem;
    font-family: 'Patrick Hand';
  }
}
</style>
