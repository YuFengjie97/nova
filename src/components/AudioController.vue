<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { AudioAnalyser } from '@/utils'
import audioSrc from '@/assets/audio/audio1.mp3'

const props = withDefaults(
  defineProps<{
    showStop?: boolean
    showForward?: boolean
    showBackward?: boolean
    audioSrc?: string
    fftSize?: number
  }>(),
  {
    showStop: false,
    showForward: false,
    showBackward: false,
    fftSize: 512,
    audioSrc,
  },
)
const emit = defineEmits([
  'backward',
  'play',
  'pause',
  'stop',
  'forward',
  'initAudioAnalyser',
])

let aa: AudioAnalyser
const playing = ref(false)
const audioDom = ref<HTMLAudioElement>()
const canPlay = ref(false)

function play() {
  playing.value = true
  audioDom.value?.play()
  if (!aa) {
    aa = new AudioAnalyser(audioDom.value!, props.fftSize)
    emit('initAudioAnalyser', aa)
  }
}

function pause() {
  playing.value = false
  audioDom.value?.pause()
}

onMounted(() => {
  if (audioDom.value) {
    audioDom.value.src = props.audioSrc
    audioDom.value.oncanplay = function () {
      canPlay.value = true
    }
  }
})
</script>

<template>
  <div class="con">
    <div class="audioControlCon" :class="{ disable: !canPlay }">
      <img
        v-show="showBackward"
        class="houtui"
        src="@/assets/iconSvg/houtui.svg"
      >
      <img
        v-show="!playing"
        class="bofang"
        src="@/assets/iconSvg/bofang.svg"
        @click="play"
      >
      <img
        v-show="playing"
        class="zanting"
        src="@/assets/iconSvg/zanting.svg"
        @click="pause"
      >
      <img
        v-show="showStop"
        class="tingzhi"
        src="@/assets/iconSvg/tingzhi.svg"
      >
      <img
        v-show="showForward"
        class="kuaijin"
        src="@/assets/iconSvg/kuaijin.svg"
      >
    </div>
    <audio ref="audioDom" loop />
  </div>
</template>

<style lang="less" scoped>
.disable {
  cursor: not-allowed;
  opacity: 0.5;
  img {
    cursor: not-allowed !important;
    pointer-events: none;
  }
}
.audioControlCon {
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #dff9fb;
  border-radius: 5px;
  padding: 0.8rem 0.8rem;
  img {
    width: 2rem;
    height: 2rem;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  }
}
</style>
