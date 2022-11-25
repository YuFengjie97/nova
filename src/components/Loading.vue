<template>
  <!-- https://codepen.io/aurer/pen/ZEJxpO -->
  <div class="loading" v-show="isLoading">
    <div class="mask"></div>
    <div class="loader">
      <div class="ring"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  isLoading: boolean
  type?: number
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false,
  type: 0
})
</script>

<style lang="less" scoped>
.loading {
  position: absolute;
  width: 100vw;
  height: 100vh;
  .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(32, 31, 31, 0.8);
  }
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(2);
  }
  .ring {
    width: 2rem;
    height: 2rem;
    padding: 1rem;
    border: 1rem dashed #4b9cdb;
    border-radius: 100%;
    animation: loadingD 1.5s 0.3s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
  }

  @keyframes loadingD {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
