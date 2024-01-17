<template>
  <div class="starRate viewCon h-full flex justify-center items-center" ref="con">
    <Card class="card">
      <StarRate v-bind="starItem" />
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Card from '@/components/Card.vue'
import StarRate from '@/components/StarRate.vue'
import { onMounted, ref } from 'vue'
import {useGUI} from '@/hooks/useGUI'

const con = ref<HTMLElement>()
const starItem = ref({ title: 'Ghost', rate: 0.5, color: '#9b59b6', content: '👻' });

onMounted(() => {
  const {gui} = useGUI(con.value!)

  gui.addColor(starItem.value, 'color')
  gui.add(starItem.value, 'content', ['字','👻','🐯'])
  gui.add(starItem.value, 'rate', 0,1,0.1);
})

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
@/hooks/useGUI