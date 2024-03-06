<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { AdditiveBlending, BufferAttribute, BufferGeometry, Color, Group, Mesh, MeshLambertMaterial, NoBlending, Points, PointsMaterial, ShaderMaterial, TextureLoader, Vector2, Vector3 } from 'three'
import chroma from 'chroma-js'
import workerjs from './particleLife.ts?url'
import type { Settings } from './particleLife'
import { initThree } from '@/hooks/initThree'
import picDot from '@/assets/img/textures/dotTexture.png'

const worker = new Worker(workerjs)

const { PI, min, atan } = Math
const con = ref<HTMLElement>()

const typeNum = 8
const typeParticleNum = 100
const particleNum = typeNum * typeParticleNum
const palette = chroma.scale(['#00b894', '#0984e3', '#6c5ce7', '#fdcb6e', '#e84393'])

onUnmounted(() => {
  worker.postMessage('close')
  worker.terminate()
})
onMounted(async () => {
  const { width, height } = con.value!.getBoundingClientRect()!
  const { scene, camera, renderWrap } = initThree(con.value!, true, false, false)
  const xRange = width
  const yRange = height
  const particleSize = 6
  const frictionFactor = 0.8
  const cellSize = min(width, height) / 30
  const distMin = particleSize * 4 // 小于这个距离，所有力都会变成斥力
  const distMax = cellSize * 5 // 在disMin - distMax范围内受AGrid定义的力的影响
  const forceFactor = 0.5

  async function initSettings() {
    return new Promise((resolve) => {
      worker.postMessage({
        tag: 'init_settings',
        data: {
          typeNum,
          typeParticleNum,
          width,
          height,
          xRange,
          yRange,
          frictionFactor,
          distMin,
          distMax,
          forceFactor,
        } as Settings,
      })
      worker.onmessage = (e) => {
        if (e.data.tag === 'init_settings_done') {
          // eslint-disable-next-line no-console
          console.log('init_settings_done')
          resolve(1)
        }
      }
    })
  }
  await initSettings()

  scene.background = new Color(0x000)
  const cameraZ = 800
  camera.position.set(xRange / 2, yRange / 2, cameraZ)
  // 适配
  camera.aspect = width / height
  camera.fov = atan(height / 2 / cameraZ) * 2 / PI * 180
  camera.lookAt(xRange / 2, yRange / 2, 0)
  camera.updateProjectionMatrix()

  class ParticleCloud {
    positions: Float32Array
    colors: Float32Array
    types: Float32Array
    geo = new BufferGeometry()
    mat = new PointsMaterial({
      size: particleSize,
      map: new TextureLoader().load(picDot), // 加载圆形纹理
      blending: AdditiveBlending,
      transparent: false,
      sizeAttenuation: true, // 是否受相机距离影响缩放
      vertexColors: true, // 使用顶点颜色
    })

    mesh: Points
    constructor(positions: Float32Array, types: Float32Array) {
      this.positions = new Float32Array(typeNum * typeParticleNum * 3)
      this.types = new Float32Array(typeNum * typeParticleNum)
      for (let i = 0; i < positions.length; i++)
        this.positions[i] = positions[i]

      for (let i = 0; i < types.length; i++)
        this.types[i] = types[i]

      this.positions = positions
      this.types = types
      this.colors = new Float32Array(particleNum * 3)
      this.geo.setAttribute('position', new BufferAttribute(this.positions, 3))
      this.geo.setAttribute('color', new BufferAttribute(this.colors, 3))
      for (let t = 0; t < typeNum; t++) {
        for (let n = 0; n < typeParticleNum; n++) {
          const i = t * typeParticleNum + n
          const [r, g, b] = palette(t / typeNum).gl()
          this.colors[i * 3] = r
          this.colors[i * 3 + 1] = g
          this.colors[i * 3 + 2] = b
        }
      }
      this.mesh = new Points(this.geo, this.mat)
      this.mesh.geometry.attributes.position.needsUpdate = true
      scene.add(this.mesh)
    }

    accelatorForce(dist: number, a: number) {
      if (dist <= distMin)
        return (dist / distMin - 1)

      if (dist < distMax)
        return (dist - distMin) / (distMax - distMin) * a

      return 0
    }

    getPos(i: number) {
      return [this.positions[3 * i], this.positions[3 * i + 1], this.positions[3 * i + 2]]
    }

    async update() {
      return new Promise((resolve) => {
        worker.postMessage({
          tag: 'update_cloud',
        })
        worker.onmessage = (e) => {
          const { data } = e.data

          if (e.data.tag === 'update_cloud_done') {
            const { positions } = data
            for (let i = 0; i < positions.length; i++)
              this.positions[i] = positions[i]
            resolve(1)
          }
        }
      })
    }

    draw() {
      this.mesh.geometry.attributes.position.needsUpdate = true
      this.mesh.geometry.attributes.color.needsUpdate = true
    }
  }

  async function initCloud(): Promise<ParticleCloud> {
    worker.postMessage({
      tag: 'init_cloud',
    })
    return new Promise((resolve) => {
      worker.onmessage = (e) => {
        if (e.data.tag === 'init_cloud_done') {
          const { positions, types } = e.data.data
          const cloud = new ParticleCloud(positions, types)
          // eslint-disable-next-line no-console
          console.log('init_cloud_done')
          resolve(cloud)
        }
      }
    })
  }
  const cloud = await initCloud()

  renderWrap(() => {
    cloud.update()
    cloud.draw()
  })()
})
</script>

<template>
  <div ref="con" class="w-full h-full" />
</template>
