<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Mesh, PlaneGeometry, ShaderMaterial, TextureLoader, Vector2, Vector3 } from 'three'
import vertexShader from './vert.vs?raw'
import fragmentShader from './frag.fs?raw'
import { initThree } from '@/hooks/initThree'
import { map } from '@/utils'

import pic from '@/assets/img/textures_icon_3x3.png'

const con = ref<HTMLElement>()

const mouse = new Vector2(0, 0)
function handleMousemove(e: MouseEvent) {
  const { height } = con.value!.getBoundingClientRect()
  mouse.x = e.x
  mouse.y = height - e.y
}

onMounted(() => {
  const { scene, renderWrap } = initThree(con.value!)
  const { width, height } = con.value!.getBoundingClientRect()
  const uniforms = {
    iResolution: {
      value: new Vector2(width, height),
    },
    iMouse: {
      value: mouse,
    },
    iTime: {
      value: 0,
    },
    size: {
      value: 20,
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
  <div ref="con" class="w-full h-full relative" @mousemove="handleMousemove" />
</template>
