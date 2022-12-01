<template>
  <div class="viewCon">
    <water></water>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Water from '@/components/Water.vue'
</script>

<style lang="less" scoped>
.viewCon {
  background: var(--bg4);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
