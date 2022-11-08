<template>
  <div class="deatchLoading">
    <div class="petalCon">
      <div
        class="petal"
        :class="{
          petalFade: progress !== 1
        }"
        v-for="n in 5"
        :style="{
          '--color': colors[n - 1],
          transform: `rotate(${(360 / 5) * n}deg)`,
          background: colors[n - 1]
        }"
      ></div>
    </div>
    <div class="progressCon">
      <div
        class="progress"
        :style="{
          '--progress': `${progress * 100}%`
        }"
      ></div>
      <div class="val">{{ progress * 100 }}%</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const { random } = Math

const colors = ref(['#f368e0', '#ff9f43', '#ee5253', '#0abde3', '#10ac84'])

let progress = ref(0)

onMounted(() => {
  setInterval(() => {
    let val = progress.value
    if (val < 1) {
      let inc = random() * 0.2
      val += inc
      val = val > 1 ? 1 : parseFloat(val.toFixed(1))
      progress.value = val
    }
  }, 800)
})
</script>

<style lang="less" scoped>
.deatchLoading {
  position: relative;
  --size: 16rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .petalCon {
    position: relative;
    width: var(--size);
    height: var(--size);
    display: flex;
    justify-content: center;
  }
  .petal {
    --h: 68%;
    position: absolute;
    width: 20%;
    height: 45%;
    transform-origin: 50% 104%;
    clip-path: polygon(50% 0, 100% var(--h), 50% 100%, 0% var(--h));
    transition: 0.3s;
  }
  .petalFade {
    animation: fade 2.5s infinite;
  }
  .progressCon {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }
  .progress {
    display: inline-block;
    width: 80%;
    height: 2rem;
    padding: 2px 4px;
    border: 2px solid #48dbfb;
    &::before {
      display: inline-block;
      content: '';
      background: #0abde3;
      width: var(--progress);
      height: 100%;
      transition: 0.3s;
    }
  }
  .val {
    margin-left: 0.5rem;
    width: 16%;
    display: inline-block;
    color: #48dbfb;
  }
  .petal:nth-child(1) {
    animation-delay: 0s;
  }
  .petal:nth-child(2) {
    animation-delay: 0.5s;
  }
  .petal:nth-child(3) {
    animation-delay: 1s;
  }
  .petal:nth-child(4) {
    animation-delay: 1.5s;
  }
  .petal:nth-child(5) {
    animation-delay: 2s;
  }
  @keyframes fade {
    0% {
      opacity: 0;
    }

    2% {
      opacity: 0.6;
    }

    4% {
      opacity: 0.4;
    }

    6% {
      opacity: 0.8;
    }

    8% {
      opacity: 0.4;
    }

    10% {
      opacity: 1;
    }

    80% {
      opacity: 0;
    }

    100% {
      opacity: 0;
    }
  }
}
</style>
