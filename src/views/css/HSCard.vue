<script lang="ts" setup>
import HSCard from '@/components/HSCard.vue'
import card1 from '@/assets/img/hs/card1.png'
import card2 from '@/assets/img/hs/card2.png'
import card3 from '@/assets/img/hs/card3.png'
import card4 from '@/assets/img/hs/card4.png'
import card5 from '@/assets/img/hs/card5.png'
import back from '@/assets/img/hs/back.png'
</script>

<template>
  <div class="w-full min-h-full flex flex-wrap justify-center items-center view-con">
    <HSCard :back-img="back" :front-img="card1" />
    <HSCard :back-img="back" :front-img="card2" />
    <HSCard :back-img="back" :front-img="card3" />
    <HSCard :back-img="back" :front-img="card4" />
    <HSCard :back-img="back" :front-img="card5" />
  </div>
</template>

<style lang="less" scoped>
.view-con {
  background-image: linear-gradient(60deg, #c0392b 50%, #2980b9 80%);
}
</style>
