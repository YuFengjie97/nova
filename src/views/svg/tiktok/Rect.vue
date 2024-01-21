<script lang="ts" setup>
import { ref } from 'vue'

withDefaults(defineProps<{ color: string }>(), {
  color: '#fff',
})
</script>

<template>
  <svg
    width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M192 896a64 64 0 0 1-64-64V192a64 64 0 0 1 64-64h640a64 64 0 0 1 64 64v640a64 64 0 0 1-64 64H192z m0-64V192h640v640H192z"
      :fill="color"
    />
  </svg>
</template>
