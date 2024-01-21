<script lang="ts" setup>
import { ref } from 'vue'

withDefaults(defineProps<{ color: string }>(), {
  color: '#fff',
})
</script>

<template>
  <svg
    class="icon"
    width="200px"
    height="200.00px"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path :fill="color" d="M853.333333 128H170.666667c-47.061333 0-85.333333 38.272-85.333334 85.333333v597.333334c0 47.061333 38.272 85.333333 85.333334 85.333333h682.666666c47.061333 0 85.333333-38.272 85.333334-85.333333V213.333333c0-47.061333-38.272-85.333333-85.333334-85.333333zM170.666667 810.666667V213.333333h682.666666l0.042667 597.333334H170.666667z" />
  </svg>
</template>
