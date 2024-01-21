<script lang="ts" setup>
import { ref } from 'vue'
import RectHollow from './RectHollow.vue'
import Rect from './Rect.vue'
import RectPoint from './RectPoint.vue'
import Circle from './Circle.vue'
import CircleDouble from './CircleDouble.vue'
import CircleHollow from './CircleHollow.vue'
import Cross from './Cross.vue'
import Link1 from './Link1.vue'
import Link2 from './Link2.vue'
</script>

<template>
  <div class="w-full h-full bg-#000">
    <RectHollow />
    <Rect />
    <RectPoint />
    <Circle />
    <CircleDouble />
    <CircleHollow />
    <Cross />
    <Link1 />
    <Link2 />
  </div>
</template>
