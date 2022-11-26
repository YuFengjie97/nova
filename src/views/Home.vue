<template>
  <div class="home">
    <h1 class="title">Hover and Click</h1>
    <NavGrid :navList="navList" :bg="img" />
  </div>
</template>
<script lang="ts" setup>
import NavGrid from '@/components/NavGrid.vue'
import { ref } from 'vue'

import img from '@/assets/img/bg.png'

const navList = ref<Array<NavItem>>([
  { title: 'css-StarRate', link: '/starRate' },
  { title: 'css-Sun', link: '/sun', show: true },
  { title: 'css-DeathLoading', link: '/deathLoading', show: true },
  { title: 'css-ProgerssCube', link: '/progressCube' },
  { title: 'css-hsCard', link: '/hsCard', show: true },
  { title: 'css-barChart', link: '/barChart' },
  { title: 'css-water', link: '/water' },
  // { title: 'fabric-FlowField', link: '/flowField' },
  // { title: 'fabric-FlowFieldPoint', link: '/flowFieldLine' },
  { title: 'p5-FlowFieldLine', link: '/flowFieldLine2' },
  { title: 'p5-randomMaze', link: '/maze', show: true },
  { title: 'p5-gradientLine', link: '/gradientLine', show: true },
  { title: 'p5-CodeRain', link: '/codeRain' },
  { title: 'p5-MusicRect', link: '/musicRect' },
  { title: 'p5-MusicCircle', link: '/musicCircle' },
  { title: 'p5-BoRe', link: '/bore' },
  // { title: 'p5-bloodBranch', link: '/bloodBranch' },
  { title: 'p5-tangram', link: '/tangram', show: true },
  // { title: 'p5-terrain', link: '/terrain' },
  { title: 'p5-disperseParticle', link: '/disperseParticle' },
  { title: 'p5-disperseParticle2', link: '/disperseParticle2', show: true },
  { title: 'p5-snake', link: '/snake', show: true },
  // { title: 'p5-corssLine', link: '/crossLine' },
  // { title: 'p5-NoisePixels', link: '/noisePixels' },
  { title: 'p5-LightBall', link: '/lightBall' },
  { title: 'p5-FlappyBird', link: '/flappyBird', show: true },
  { title: 'p5-Firework', link: '/firework' },
  { title: 'p5-PixelPicture', link: '/pixelPicture', show: true},
  { title: 'three-Cube', link: '/cube' },
  { title: 'helloIamnull', link: '/' },
  { title: 'helloIamnull', link: '/' },
  { title: 'helloIamnull', link: '/' },
  { title: 'helloIamnull', link: '/' },
  { title: 'helloIamnull', link: '/' },
  { title: 'helloIamnull', link: '/' },
  { title: 'helloIamnull', link: '/' },
  { title: 'helloIamnull', link: '/' },
  { title: 'helloIamnull', link: '/' },
  { title: 'helloIamnull', link: '/' },
  { title: 'helloIamnull', link: '/' },
  { title: 'helloIamnull', link: '/' }
])
</script>
<style lang="less" scoped>
.home {
  background: #b4286c;
  min-height: 100vh;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    width: fit-content;
    padding-bottom: 1rem;
    font-size: 3rem;
    font-family: 'Patrick Hand';
  }
}
</style>
