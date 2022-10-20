<template>
  <div class="home">
    <router-link to="/">home</router-link>
    <router-link to="about">about</router-link>
    <router-view/>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const msg = ref('hello')
</script>
<style lang="less" scoped>
.home {
}
</style>
