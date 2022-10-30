<template>
  <div class='viewCon'>
    <Sun class="item" />
    <Sun class="item" baseColor="#0984e3" lightColor="#6c5ce7"/>
    <Sun class="item" baseColor="#00cec9" lightColor="#fdcb6e"/>
    <Sun class="item" baseColor="#1dd1a1" lightColor="#ff9ff3"/>
  </div>
</template>

<script lang="ts" setup>
import Sun from '@/components/Sun.vue'

</script>

<style lang='less' scoped>
.viewCon{
  background: var(--bg4);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .item{
    width: 20%;
  }
  @media screen and (max-width: 992px) {
    .item{
      width: 45%;
    }
  }
  @media  screen and (max-width: 576px) {
    .item{
      width: 80%;
    }
  }
}
</style>