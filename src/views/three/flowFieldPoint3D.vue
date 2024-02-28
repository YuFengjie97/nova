<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { createNoise4D } from 'simplex-noise'
import { AdditiveBlending, BufferAttribute, BufferGeometry, Color, Group, Mesh, MeshLambertMaterial, NoBlending, Points, PointsMaterial, ShaderMaterial, TextureLoader, Vector2, Vector3 } from 'three'
import chroma from 'chroma-js'
import { initThree } from '@/hooks/initThree'
import picDot from '@/assets/img/textures/dotTexture.png'

const { random, PI, sin, cos, floor } = Math
const palette = chroma.scale(['#00b894', '#0984e3', '#6c5ce7', '#fdcb6e', '#e84393'])
const noise4D = createNoise4D()
const con = ref<HTMLElement>()
const paricleNum = 10000
const positions = new Float32Array(paricleNum * 3)
const colors = new Float32Array(paricleNum * 3)

let xRange = 0
let yRange = 0
const zRange = 100
let flowSize = 20
const flowSizeZ = 4

const maxSpeed = 2
const particles: Array<Particle> = []
const flowField: {
  [k in string]: {
    n: number
    v: Vector3
  }
} = {}

class Particle {
  ind: number
  acc: Vector3
  vel: Vector3
  constructor(ind: number) {
    this.ind = ind
    this.acc = new Vector3(0, 0, 0)
    this.vel = new Vector3(0, 0, 0)
  }

  getPos() {
    return { x: positions[this.ind * 3], y: positions[this.ind * 3 + 1], z: positions[this.ind * 3 + 2] }
  }

  edge() {
    const { x, y, z } = this.getPos()
    if (x < 0)
      positions[this.ind * 3] = xRange
    if (x > xRange)
      positions[this.ind * 3] = 0
    if (y < 0)
      positions[this.ind * 3 + 1] = yRange
    if (y > yRange)
      positions[this.ind * 3 + 1] = 0
    // if (x < 0 || x > xRange || y < 0 || y > yRange) {
    //   positions[this.ind * 3] = random() * xRange
    //   positions[this.ind * 3 + 1] = random() * yRange
    //   this.vel.setLength(0)
    // }
    if (z < 0)
      positions[this.ind * 3 + 2] = zRange

    if (z > zRange)
      positions[this.ind * 3 + 2] = 0
  }

  update(n: number, acc: Vector3) {
    this.edge()
    const [r, g, b] = palette(n).gl()
    colors[this.ind * 3] = r
    colors[this.ind * 3 + 1] = g
    colors[this.ind * 3 + 2] = b

    this.acc.add(acc)
    this.vel.add(this.acc)
    if (this.vel.length() > maxSpeed)
      this.vel.setLength(maxSpeed)
    positions[this.ind * 3] += this.vel.x
    positions[this.ind * 3 + 1] += this.vel.y
    positions[this.ind * 3 + 2] += this.vel.z
    this.acc.setLength(0)
  }
}

onMounted(() => {
  const { width, height } = con.value!.getBoundingClientRect()
  xRange = width / 4
  yRange = height / 4
  flowSize = height / 40
  const { scene, camera, renderWrap, orbitControls } = initThree(con.value!, false, false, false)
  camera.position.set(xRange / 2, yRange / 2, zRange * 2)
  camera.lookAt(xRange / 2, yRange / 2, 0)

  // 调试代码
  // orbitControls.target = new Vector3(xRange / 2, yRange / 2, 0)
  // orbitControls.object.position.set(xRange / 2, yRange / 2, zRange * 2)
  // orbitControls.update()

  scene.background = new Color(0x000)

  // flowField初始化
  for (let x = -1; x * flowSize < xRange + flowSize; x += 1) {
    for (let y = -1; y * flowSize < yRange + flowSize; y += 1) {
      for (let z = -1; z * flowSizeZ < zRange + flowSizeZ; z += 1) {
        flowField[`${x},${y},${z}`] = {
          n: 0,
          v: new Vector3(0, 0, 0),
        }
      }
    }
  }

  // 粒子初始化
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
    size: 1.5,
    map: new TextureLoader().load(picDot), // 加载圆形纹理
    blending: AdditiveBlending,
    transparent: false,
    sizeAttenuation: true, // 是否受相机距离影响缩放
    vertexColors: true, // 使用顶点颜色
  })
  const mesh = new Points(geo, mat)
  scene.add(mesh)

  // 使用xoff,yoff,zoff是因为使用粒子位置去做映射比较麻烦，不好控制
  const xInc = 0.05
  const yInc = 0.05
  const zInc = 0.01
  let toff = 0
  const tInc = 0.01
  renderWrap(() => {
    // flowField更新
    toff += tInc
    let xoff = 0
    for (let x = -1; x * flowSize < xRange + flowSize; x += 1) {
      xoff += xInc
      let yoff = 0
      for (let y = -1; y * flowSize < yRange + flowSize; y += 1) {
        yoff += yInc
        let zoff = 0
        for (let z = -1; z * flowSizeZ < zRange + flowSizeZ; z += 1) {
          zoff += zInc
          const n = noise4D(xoff, yoff, zoff, toff) * 0.5 + 0.5
          const angle = 4 * PI * n
          const length = maxSpeed * 0.1 * n
          flowField[`${x},${y},${z}`].n = n
          flowField[`${x},${y},${z}`].v.set(cos(angle) * length, sin(angle) * length, sin(angle) * length)
        }
      }
    }

    // 粒子更新
    particles.forEach((p) => {
      const { x, y, z } = p.getPos()

      const { n, v } = flowField[`${floor(x / flowSize)},${floor(y / flowSize)},${floor(z / flowSizeZ)}`]
      p.update(n, v)
    })
    mesh.geometry.attributes.position.needsUpdate = true
    mesh.geometry.attributes.color.needsUpdate = true
  })()
})
</script>

<template>
  <div ref="con" class="w-full h-full" />
</template>
