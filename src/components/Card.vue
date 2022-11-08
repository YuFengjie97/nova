<template>
  <div class="cardCon">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.cardCon {
  width: 100%;
  height: 100%;
  padding: 0.4rem;
  display: inline-block;
  border-radius: 0.3rem;
  overflow: hidden;
  background-color: var(--bg4);
  box-shadow: 0px 0px 80px rgba(0, 0, 0, 0.5);
}
</style>
