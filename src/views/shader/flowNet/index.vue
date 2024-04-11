<script lang="ts" setup>
import utils from '../utils.glsl?raw'
import fs from './fs.fs?raw'
import Shader from '@/components/Shader.vue'
</script>

<template>
  <div class="w-full h-full">
    <Shader :utils="utils" :fs="fs" />
  </div>
</template>
