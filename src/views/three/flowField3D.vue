<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { createNoise3D } from 'simplex-noise'
import { AdditiveBlending, BufferAttribute, BufferGeometry, Color, Group, Mesh, MeshLambertMaterial, NoBlending, Points, PointsMaterial, Vector2, Vector3 } from 'three'
import chroma from 'chroma-js'
import { initThree } from '@/hooks/initThree'
import { initStats } from '@/hooks/initStats'

const { random, PI, sin, cos, floor } = Math

const palette = chroma.scale(['#00b894', '#0984e3', '#6c5ce7', '#fdcb6e', '#e84393'])

let noiseZ = 0
const noise3D = createNoise3D()

const con = ref<HTMLElement>()

const paricleNum = 10000
const positions = new Float32Array(paricleNum * 3)
const colors = new Float32Array(paricleNum * 3)

const particles: Array<Particle> = []
class Particle {
  ind: number
  acc: Vector3
  vel: Vector3
  constructor(ind: number) {
    this.ind = ind
    this.acc = new Vector3(0, 0, 0)
    this.vel = new Vector3(0, 0, 0)
  }

  updatePos(acc: Vector3) {
    this.acc.add(acc)
    this.vel.add(this.acc)
    positions[this.ind] += this.vel.x
    positions[this.ind + 1] += this.vel.y
    positions[this.ind + 2] += this.vel.z
    this.acc.setLength(0)
  }

  updateCol(r: number, g: number, b: number) {
    colors[this.ind] = r
    colors[this.ind + 1] = g
    colors[this.ind + 2] = b
  }
}
onMounted(() => {
  let xRange = 0
  let yRange = 0
  let flowSize = 0
  const zRange = 100
  const flowSizeZ = 10
  const noiseSpeed = 0.01

  const { width, height } = con.value!.getBoundingClientRect()
  xRange = width
  yRange = height
  flowSize = height / 10
  const { stats } = initStats(con.value!)
  const { scene, camera, renderWrap, orbitControls } = initThree(con.value!, true, false, false)
  camera.position.set(width / 2, height / 2, 430)// z轴距离是试出来的，所有粒子刚好能被看到
  camera.lookAt(width / 2, height / 2, 0) // z轴距离是试出来的，所有粒子刚好能被看到

  // 调试代码
  orbitControls.target = new Vector3(width / 2, height / 2, 0)
  orbitControls.object.position.set(width / 2, height / 2, 430)
  orbitControls.update()

  scene.background = new Color(0x000)

  for (let i = 0; i < paricleNum; i++) {
    const x = random() * xRange
    const y = random() * yRange
    const z = random() * zRange
    positions[i * 3] = x
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = z
    particles.push(new Particle(i))
  }
  const geo = new BufferGeometry()
  geo.setAttribute('position', new BufferAttribute(positions, 3))
  geo.setAttribute('color', new BufferAttribute(colors, 3))
  // NoBlending：不进行混合，直接覆盖背景。
  // NormalBlending：使用默认的混合方式，即根据对象的 alpha 值和背景进行混合。
  // AdditiveBlending：将对象的颜色与背景颜色相加，适用于创建发光效果。
  // SubtractiveBlending：将对象的颜色与背景颜色相减。
  // MultiplyBlending：将对象的颜色与背景颜色相乘。
  const mat = new PointsMaterial({
    size: 3,
    blending: AdditiveBlending,
    transparent: false,
    sizeAttenuation: true, // 是否受相机距离影响缩放
    vertexColors: true, // 使用顶点颜色
  })
  const mesh = new Points(geo, mat)
  scene.add(mesh)

  renderWrap(() => {
    stats.update()
    noiseZ += noiseSpeed

    for (let i = 0; i < paricleNum; i++) {
      const x = positions[i * 3]
      const y = positions[i * 3 + 1]
      // const [xoff, yoff, zoff] = noiseStates[`${floor(x / flowSize)},${floor(y / flowSize)},${floor(z / flowSizeZ)}`]

      const nz = noise3D(x / xRange * 2, y / yRange * 2, noiseZ) * 0.5 + 0.5
      positions[i * 3 + 2] = nz * zRange

      const xf = floor(x / flowSize)
      const yf = floor(y / flowSize)
      const angle = 2 * PI * (noise3D(xf * 100 / xRange, yf * 100 / yRange, noiseZ) * 0.5 + 0.5)
      const length = 10 * (noise3D(x / xRange + 100, y / yRange + 100, noiseZ) * 0.5 + 0.5)
      let x2 = x + cos(angle) * length
      let y2 = y + sin(angle) * length
      x2 = x2 < 0 ? xRange : x2 > width ? 0 : x2
      y2 = y2 < 0 ? yRange : y2 > height ? 0 : y2
      positions[i * 3] = x2
      positions[i * 3 + 1] = y2

      const [r, g, b] = palette(nz).gl()
      colors[i * 3] = r
      colors[i * 3 + 1] = g
      colors[i * 3 + 2] = b
    }
    mesh.geometry.attributes.position.needsUpdate = true
    mesh.geometry.attributes.color.needsUpdate = true
  })()
})
</script>

<template>
  <div ref="con" class="w-full h-full" />
</template>
