<template>
  <div class="card" :style="{ '--bgColor': `${bgColor}` }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps<{
  bgColor: string
}>()
</script>

<style lang="less" scoped>
.card {
  min-width: 600px;
  display: inline-block;
  border-radius: 6px;
  overflow: hidden;
  background-color: var(--bgColor);
  box-shadow: 0px 0px 80px rgba(0, 0, 0, 0.5);
}
</style>
