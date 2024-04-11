<script lang="ts" setup>
import { ref } from 'vue'
import fs from './fs.fs?raw'
import common from './common.fs?raw'
import Shader from '@/components/Shader.vue'
</script>

<template>
  <div class="w-full h-full">
    <Shader :utils="common" :fs="fs" />
  </div>
</template>
