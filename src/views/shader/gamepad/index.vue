<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Mesh, PlaneGeometry, ShaderMaterial, TextureLoader, Vector2, Vector3 } from 'three'
import { textureSize } from 'fabric/fabric-impl'
import vertexShader from './vert.vs?raw'
import fragmentShader from './frag.fs?raw'
import { initThree } from '@/hooks/initThree'

// import pic1 from '@/assets/img/gamepad/key-circle.png'
// import pic2 from '@/assets/img/gamepad/key-rect.png'
// import pic3 from '@/assets/img/gamepad/key-triangle.png'
// import pic4 from '@/assets/img/gamepad/key-cross.png'

import pic from '@/assets/img/gamepad/all.png'

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
      value: 16,
    },
    texture1: {
      value: new TextureLoader().load(pic),
    },
    // textures: {
    //   value: [new TextureLoader().load(pic1), new TextureLoader().load(pic2), new TextureLoader().load(pic3), new TextureLoader().load(pic4)],
    // },
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
