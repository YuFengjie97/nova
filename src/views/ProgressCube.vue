<template>
  <div class='viewCon'>
    <ProgressCube class="item" :val="val1" />
    <ProgressCube class="item" :val="val2" fill-color="#e74c3ccc"/>
    <ProgressCube class="item" :val="val3" fill-color="#6c5ce7cc"/>
    <ProgressCube class="item" :val="val4" fill-color="#74b9ffcc"/>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted} from 'vue';
import ProgressCube from '@/components/ProgressCube.vue'

const {random} = Math

const val1 = ref(0.2)
const val2 = ref(0.4)
const val3 = ref(0.6)
const val4 = ref(0.8)

let timer: NodeJS.Timer

onMounted(()=>{
  timer = setInterval(()=>{
    val1.value = random()
    val2.value = random()
    val3.value = random()
    val4.value = random()
  },1000)
})

onUnmounted(()=>{
  clearInterval(timer)
})

</script>

<style lang='less' scoped>
.viewCon{
  background: #2d3436;
  display: flex;
  flex-direction: column;
  align-items: center;
  .item{
    padding-top: 5rem;
  }
  // color: rgb(255, 0, 0);
  // color: #ff0000cc;
  // color: rgb(9, 132, 227);
  // color: #0985e3cc;
}
</style>