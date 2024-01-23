<script lang="ts" setup>
import SnowyBg from './three/SnowyBg.vue'
import NavGrid from '@/components/NavGrid.vue'
</script>

<template>
  <div class="bg-#b4286c relative w-full h-full overflow-hidden flex justify-center items-center">
    <SnowyBg class="snowBg absolute top-0 left-0 pointer-events-none" />
    <NavGrid />
  </div>
</template>
