<template>
  <div class="card">
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="less" scoped>
.card {
  height: 100%;
  display: inline-block;
  border-radius: 6px;
  overflow: hidden;
  background-color: #2c3e50;
  box-shadow: 0px 0px 80px rgba(0, 0, 0, 0.5);
}
</style>
