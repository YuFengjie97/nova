<template>
  <div class="con">
    <div class="audioControlCon" :class="{ disable: !canPlay }">
      <img
        class="houtui"
        v-show="showBackward"
        src="@/assets/iconSvg/houtui.svg"
      />
      <img
        class="bofang"
        v-show="!playing"
        @click="play"
        src="@/assets/iconSvg/bofang.svg"
      />
      <img
        class="zanting"
        v-show="playing"
        @click="pause"
        src="@/assets/iconSvg/zanting.svg"
      />
      <img
        class="tingzhi"
        v-show="showStop"
        src="@/assets/iconSvg/tingzhi.svg"
      />
      <img
        class="kuaijin"
        v-show="showForward"
        src="@/assets/iconSvg/kuaijin.svg"
      />
    </div>
    <audio ref="audioDom" loop></audio>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { AudioAnalyser } from '@/utils'

const props = withDefaults(
  defineProps<{
    showStop?: boolean
    showForward?: boolean
    showBackward?: boolean
    audioSrc: string
    fftSize?: number
  }>(),
  {
    showStop: false,
    showForward: false,
    showBackward: false,
    fftSize: 512
  }
)
const emit = defineEmits([
  'backward',
  'play',
  'pause',
  'stop',
  'forward',
  'initAudioAnalyser'
])

let aa: AudioAnalyser
const playing = ref(false)
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

const audioDom = ref<HTMLAudioElement>()
const canPlay = ref(false)
onMounted(() => {
  if (audioDom.value) {
    audioDom.value.src = props.audioSrc
    audioDom.value.oncanplay = function () {
      canPlay.value = true
      console.log('audio load ok')
    }
  }
})
</script>

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
