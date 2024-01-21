<script lang="ts" setup>
import { ref } from 'vue'

const props = withDefaults(defineProps<{ color: string }>(), {
  color: '#fff',
})
</script>

<template>
  <svg width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path
      :fill="color"
      d="M950.857143 512q0 119.428571-58.857143 220.285714T732.285714 892 512 950.857143t-220.285714-58.857143T132 732.285714 73.142857 512t58.857143-220.285714T291.714286 132 512 73.142857t220.285714 58.857143T892 291.714286 950.857143 512z"
    />
  </svg>
</template>
