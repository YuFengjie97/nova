<script lang="ts" setup>
import { ref } from 'vue'

withDefaults(defineProps<{ color?: string }>(), {
  color: '#fff',
})
</script>

<template>
  <svg width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M512 64C264.576 64 64 264.576 64 512c0 247.36 200.576 448 448 448s448-200.64 448-448c0-247.424-200.576-448-448-448z m0 832C299.936 896 128 724.032 128 512 128 299.904 299.936 128 512 128s384 171.904 384 384c0 212.032-171.936 384-384 384z"
      :fill="color"
    />
    <path d="M512 512m-288 0a288 288 0 1 0 576 0 288 288 0 1 0-576 0Z" :fill="color" />
  </svg>
</template>
