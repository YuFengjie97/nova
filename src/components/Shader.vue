<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { Mesh, PlaneGeometry, ShaderMaterial, TextureLoader, Vector2, Vector3 } from 'three'
import { initThree } from '@/hooks/initThree'
import utilfs from '@/views/shader/utils.glsl?raw'

const props = withDefaults(defineProps<{
  utils: string
  fs: string
}>(), {
  utils: utilfs,
})

const con = ref<HTMLElement>()

const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`

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
    iMouse: {
      value: new Vector2(0, 0),
    },
  }

  let mousedown = false
  con.value?.addEventListener('mousedown', () => mousedown = true)
  con.value?.addEventListener('mouseup', () => mousedown = false)
  con.value?.addEventListener('mousemove', (e) => {
    if (!mousedown)
      return
    const { x, y } = e
    console.log(e)

    uniforms.iMouse.value.x = x
    uniforms.iMouse.value.y = y
  })

  const shaderMaterial = new ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader: `
    ${props.utils}
    ${props.fs}
    `,
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
