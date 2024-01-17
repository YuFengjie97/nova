<template>
  <div class=" w-full h-full flex justify-center align-items bg-#000">
    <DeathLoading />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DeathLoading from '@/components/DeathLoading.vue'
</script>

<style lang="less" scoped>
.viewCon {
  background: #2d3436;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
