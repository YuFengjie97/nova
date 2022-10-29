<template>
  <div class="gradientLine viewCon">
    <Card class="card">
      <P5Con :setup="setup" :draw="draw"></P5Con>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import Card from '@/components/Card.vue'
import P5Con from '@/components/P5Con.vue'
import p5 from 'p5'

function setup($p: p5){}
function draw($p: p5){}

</script>