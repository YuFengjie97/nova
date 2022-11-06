<template>
  <div class="viewCon">
    <h1>鼠标移入查看详细信息</h1>
    <BarChart :dataArr="dataArr" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import BarChart from '@/components/BarChart.vue'

import { dataItem } from '@/components/BarChart.vue'

const dataArr = ref<Array<dataItem>>([
  {
    name: '村东头菜市场',
    val: 800,
    childs: [
      { name: '黄瓜', val: 11 },
      { name: '西红柿', val: 11 },
      { name: '茄子', val: 11 },
      { name: '土豆', val: 11 },
    ],
  },
  {
    name: '就坑你大酒店',
    val: 200,
    childs: [
      { name: '黄瓜', val: 110 },
      { name: '西红柿', val: 110 },
      { name: '茄子', val: 110 },
      { name: '土豆', val: 110 },
    ],
  },
  {
    name: '大学城',
    val: 900,
    childs: [
      { name: '黄瓜', val: 121 },
      { name: '西红柿', val: 131 },
      { name: '茄子', val: 11 },
      { name: '土豆', val: 11 },
    ],
  },
  {
    name: '狗剩批发超市',
    val: 400,
    childs: [
      { name: '黄瓜', val: 115 },
      { name: '西红柿', val: 151 },
      { name: '茄子', val: 111 },
      { name: '土豆', val: 121 },
    ],
  },
])
</script>

<style lang="less" scoped>
.viewCon {
  h1{
    color: #fff;
    font-size: 2rem;
    text-align: center;
    line-height: 9rem;
  }
  background: var(--bg4);
  padding: 4rem 10rem;
}
</style>
