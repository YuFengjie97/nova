<template>
  <div class="starRate viewCon h-full flex justify-center items-center">
    <Card class="card">
      <StarRate v-for="(item, index) in starList" :key="index" v-bind="item" />
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Card from '@/components/Card.vue'
import StarRate from '@/components/StarRate.vue'
import { router } from '@/router';
import { ref } from 'vue'

let starList = ref([
  { title: '咖喱', rate: 0.68, color: '#e67e22' },
  { title: 'Banana', rate: 0.33, color: '#f1c40f' },
  { title: 'Ghost', rate: 0.51, color: '#9b59b6', content: '👻' },
  { title: 'pizza', rate: 0.85, color: '#e67e22', content: '🍕' }
])

console.log(router);

</script>

<style lang="less" scoped>
.starRate {
  .card {
    width: fit-content;
    height: fit-content;
    padding: 2rem 4rem;
  }
}
</style>
