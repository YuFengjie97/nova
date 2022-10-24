<template>
  <div class="starRate h-full flex justify-center items-center">
    <Card bgColor="#175f8f">
      <StarRate v-for="(item, index) in starList" :key="index" v-bind="item" />
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Card from '@/components/Card.vue'
import StarRate from '@/components/StarRate.vue'
import { ref } from 'vue'

let starList = ref([
  { title: '咖喱', rate: 0.65, color: '#e67e22' },
  { title: 'Banana', rate: 0.23, color: '#f1c40f' },
  { title: 'Ghost', rate: 0.56, color: '#9b59b6', content:'👻' },
  { title: 'pizza', rate: 0.56, color: '#e67e22', content:'🍕' },
])
</script>

<style lang="less" scoped>
</style>
