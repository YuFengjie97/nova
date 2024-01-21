<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Mesh, PlaneGeometry, ShaderMaterial, TextureLoader, Vector2, Vector3 } from 'three'
import { textureSize } from 'fabric/fabric-impl'
import vertexShader from './vert.vs?raw'
import fragmentShader from './frag.fs?raw'
import { initThree } from '@/hooks/initThree'
import { map } from '@/utils'

import pic from '@/assets/img/tiktok_icon_all.png'

const con = ref<HTMLElement>()

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
    size: {
      value: 40,
    },
    texture1: {
      value: new TextureLoader().load(pic),
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
    uniforms.iTime.value = t
  })()
})
</script>

<template>
  <div ref="con" class="w-full h-full relative" />
</template>
