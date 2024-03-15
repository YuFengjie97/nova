<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Mesh, PlaneGeometry, ShaderMaterial, TextureLoader, Vector2, Vector3 } from 'three'
import { textureSize } from 'fabric/fabric-impl'
import vertexShader from './vert.vs?raw'
import fragmentShader from './frag.fs?raw'
import { initThree } from '@/hooks/initThree'
import mp3 from '@/assets/audio/audio-sugarCrush.mp3'

import { initAudioAnalyser } from '@/utils/audio2'

const con = ref<HTMLElement>()

const fftSize = 512
const { audio, getAnalyser } = initAudioAnalyser(mp3, fftSize)
let analyser: AnalyserNode
const dataArray = new Float32Array(fftSize)
const isPlaying = ref(false)
const sampleInterval = 100

function handleAudio() {
  if (audio.paused) {
    audio.play()
    isPlaying.value = true
    analyser = getAnalyser().analyser
  }
  else {
    audio.pause()
    isPlaying.value = false
  }
}
// setInterval(() => {
//   if (!isPlaying.value)
//     return
//   analyser.getFloatTimeDomainData(dataArray)
// }, sampleInterval)

onMounted(() => {
  const { scene, renderWrap } = initThree(con.value!)
  const { width, height } = con.value!.getBoundingClientRect()
  const uniforms = {
    iResolution: {
      value: new Vector2(width, height),
    },
    iTime: {
      value: 0,
    },
    dataArray: {
      value: dataArray,
    },
    fftSize: {
      value: fftSize,
    },
  }

  const shaderMaterial = new ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
  })
  const geo = new PlaneGeometry(1000, 1000)
  const mesh = new Mesh(geo, shaderMaterial)
  mesh.position.set(0, 0, 10)
  scene.add(mesh)

  renderWrap(() => {
    const t = performance.now() / 1000
    analyser && analyser.getFloatTimeDomainData(dataArray)
    uniforms.iTime.value = t
  })()
})
</script>

<template>
  <div ref="con" class="con w-full h-full relative">
    <div class="bt" @click="handleAudio">
      {{ isPlaying ? 'pause' : 'play' }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.con {
  .bt {
    width: 100px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    z-index: 100;
    cursor: pointer;
  }
}
</style>
