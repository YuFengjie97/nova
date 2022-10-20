<template>
  <div class="about">
    {{msg}}
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const msg = ref('aboutaaaa')
</script>
<style lang="less" scoped>
.about {
}
</style>
