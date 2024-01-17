<template>
  <div
    class="starRate"
    :style="{
      '--color': `${color}`,
      '--rate': `${rate * 100}%`
    }"
  >
    <div class="title">{{ title }}</div>
    <div class="star">
      <span v-for="i in size">{{ content }}</span>
    </div>
    <span class="rate">{{ rate.toFixed(1) }}</span>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
const props = defineProps({
  title: { type: String, default: 'hello' },
  rate: { type: Number, default: 0.45 },
  color: { type: String, default: '#e67e22' },
  content: { type: String, default: '★' },
  size: { type: Number, default: 5 }
})
</script>

<style lang="less" scoped>
.starRate {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  font-size: 1rem;
  .title {
    padding-right: 1rem;
    color: var(--color);
    font-family: 'Pacifico';
  }
  .star {
    font-size: 2.4rem;
    position: relative;
    letter-spacing: 0.2rem;
    background-image: linear-gradient(
      90deg,
      var(--color) var(--rate),
      rgb(230, 230, 230) var(--rate)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .rate {
    color: var(--color);
    padding-left: 2rem;
  }
}
</style>
