<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Mesh, PlaneGeometry, ShaderMaterial, Vector2, Vector3 } from 'three'
import vertexShader from './vert.vs?raw'
import fragmentShader from './frag.fs?raw'
import { initThree } from '@/hooks/initThree'
import { initGUI } from '@/hooks/initGUI'
import type { AudioAnalyser } from '@/utils/audio'
import AudioControllerVue from '@/components/AudioController.vue'
import { map } from '@/utils'

const con = ref<HTMLElement>()
let aa: AudioAnalyser
const fftSize = 512

onMounted(() => {
  const { scene, renderWrap } = initThree(con.value!)
  const { width, height } = con.value!.getBoundingClientRect()
  const uniforms = {
    iResolution: {
      value: new Vector2(width, height),
    },
    iMouse: {
      value: new Vector2(width / 2, height / 2),
    },
    iTime: {
      value: 0,
    },
    colorChannel: {
      value: {
        a: new Vector3(0.000, 0.500, 0.500),
        b: new Vector3(0.000, 0.500, 0.500),
        c: new Vector3(0.000, 0.500, 0.333),
        d: new Vector3(0.000, 0.500, 0.667),
      },
    },
    radius: {
      value: 0,
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

  // const { gui } = initGUI(con.value!)
  // const folderColor = gui.addFolder('color')
  // folderColor.add(uniforms.colorChannel.value.a, 'x', 0, 1, 0.01).name('ax')
  // folderColor.add(uniforms.colorChannel.value.a, 'y', 0, 1, 0.01).name('ay')
  // folderColor.add(uniforms.colorChannel.value.a, 'z', 0, 1, 0.01).name('az')
  // folderColor.add(uniforms.colorChannel.value.b, 'x', 0, 1, 0.01).name('bx')
  // folderColor.add(uniforms.colorChannel.value.b, 'y', 0, 1, 0.01).name('by')
  // folderColor.add(uniforms.colorChannel.value.b, 'z', 0, 1, 0.01).name('bz')
  // folderColor.add(uniforms.colorChannel.value.c, 'x', 0, 1, 0.01).name('cx')
  // folderColor.add(uniforms.colorChannel.value.c, 'y', 0, 1, 0.01).name('cy')
  // folderColor.add(uniforms.colorChannel.value.c, 'z', 0, 1, 0.01).name('cz')
  // folderColor.add(uniforms.colorChannel.value.d, 'x', 0, 1, 0.01).name('dx')
  // folderColor.add(uniforms.colorChannel.value.d, 'y', 0, 1, 0.01).name('dy')
  // folderColor.add(uniforms.colorChannel.value.d, 'z', 0, 1, 0.01).name('dz')

  function getSampleIndex(length: number, n: number) {
    const step = Math.floor(length / n)
    const res = []
    for (let i = 0; i < length; i += step)
      res.push(i)
    return res
  }
  const sis = getSampleIndex(fftSize / 2, 13) // sampleIndexArr
  function d(i: number) {
    const val = aa.getAudioData()[sis[i]]
    return map(val, 0, 255, 0, 1)
  }

  renderWrap(() => {
    const t = performance.now() / 1000
    uniforms.iTime.value = t
    if (!aa)
      return
    uniforms.colorChannel.value.a.x = d(5) * 0.5
    // uniforms.colorChannel.value.b.set(d(3), d(4), d(5))
    // uniforms.colorChannel.value.c.set(d(6), d(7), d(8))
    // uniforms.colorChannel.value.d.set(d(9), d(10), d(11))

    uniforms.radius.value = d(4) * 0.8 * 10 + t
  })()
})

function getaa(val: AudioAnalyser) {
  aa = val
}
</script>

<template>
  <div ref="con" class="w-full h-full relative">
    <AudioControllerVue class="absolute top-70px left-0" :fft-size="fftSize" @init-audio-analyser="getaa" />
  </div>
</template>
