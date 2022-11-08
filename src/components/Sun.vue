<template>
  <div class="sunCon">
    <div
      class="sun"
      :style="{
        '--baseColor': baseColor,
        '--lightColor': lightColor
      }"
    >
      <div class="lightCon">
        <div
          class="light"
          v-for="n in lightNum"
          :style="{
            transform: `rotate(${n * (360 / lightNum)}deg)`
          }"
        ></div>
      </div>
      <div class="base"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const { random, floor } = Math

const props = withDefaults(
  defineProps<{
    baseColor: string
    lightColor: string
  }>(),
  {
    baseColor: '#fee433',
    lightColor: '#e41014'
  }
)

const lightNum = ref(floor(random() * 6) + 6)

onMounted(() => {
  console.log(props)
})
</script>

<style lang="less" scoped>
.sunCon {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sun {
  // --black: #0a0a0a;
  // --lightColor: #e41014;
  // --baseColor: #fee433;
  --size: 16rem;
  position: relative;
  height: var(--size);
  width: var(--size);
  -webkit-box-reflect: below -3.5rem linear-gradient(transparent 50%, #0005 100%);
  .base {
    height: 40%;
    width: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;

    background: var(--baseColor);
    box-shadow: 0px 0px 14px 6px var(--baseColor);
    background-image: url('@/assets/img/pikachu.svg');
    background-size: 120%;
    background-position: center center;
  }
  .lightCon {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center center;
    animation: 6s linear infinite shine;
  }
  .light {
    --width: 0.8rem;
    --height: 2rem;
    --top: -2rem; // 高度加间隔
    position: absolute;
    top: calc(var(--top) * -1);
    left: calc(50% - var(--width) / 2);
    width: var(--width);
    height: var(--height);
    background: var(--lightColor);
    transform-origin: calc(var(--width) / 2) calc(var(--top) + var(--size) / 2);
    border-radius: 4px;
    box-shadow: 0px 0px 14px 6px var(--lightColor);
  }

  @keyframes shine {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
}
</style>
