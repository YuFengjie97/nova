<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { createNoise4D } from 'simplex-noise'
import { AdditiveBlending, BufferAttribute, BufferGeometry, Color, Group, Mesh, MeshLambertMaterial, NoBlending, Points, PointsMaterial, ShaderMaterial, TextureLoader, Vector2, Vector3 } from 'three'
import chroma from 'chroma-js'
import { initThree } from '@/hooks/initThree'
import picDot from '@/assets/img/textures/dotTexture.png'

const { random, PI, sin, cos, floor, sqrt, min } = Math
const con = ref<HTMLElement>()

const typeNum = 4
const typeParticleNum = 100
const particleNum = typeNum * typeParticleNum
const palette = chroma.scale(['#00b894', '#0984e3', '#6c5ce7', '#fdcb6e', '#e84393'])

const AGrid: Array<Array<number>> = []
function initGrid() {
  let off = -0
  for (let i = 0; i < typeNum; i++) {
    const arr = []
    for (let j = 0; j < typeNum; j++) {
      off += 0.1
      off = off > 1 ? -1 : off
      arr.push(off)
    }
    AGrid.push(arr)
  }
}
initGrid()

function resetGrid() {
  for (let i = 0; i < typeNum; i++) {
    for (let j = 0; j < typeNum; j++) {
      // AGrid[i][j] = floor((random() * 20) - 10) * 0.1
      let val = AGrid[i][j]
      val += 0.1
      AGrid[i][j] = val > 1 ? -1 : val
    }
  }
}
setInterval(resetGrid, 1500)

onMounted(() => {
  const { width, height } = con.value!.getBoundingClientRect()!
  const { scene, camera, renderWrap, orbitControls } = initThree(con.value!, true, false, true)
  const xRange = width
  const yRange = height
  const distMin = 40
  const distMax = 80
  const frictionFactor = 0.98

  scene.background = new Color(0x000)
  camera.position.set(xRange / 2, yRange / 2, 400)
  camera.lookAt(xRange / 2, yRange / 2, min(xRange, yRange) * 0.6)

  // 调试代码
  orbitControls.target = new Vector3(xRange / 2, yRange / 2, 0)
  orbitControls.object.position.set(xRange / 2, yRange / 2, min(xRange, yRange) * 0.6)
  orbitControls.update()

  class ParticleCloud {
    positions = new Float32Array(typeNum * typeParticleNum * 3)
    vels = new Float32Array(typeNum * typeParticleNum * 3)
    colors = new Float32Array(typeNum * typeParticleNum * 3)
    types = new Float32Array(typeNum * typeParticleNum)
    geo = new BufferGeometry()
    mat = new PointsMaterial({
      size: 4.5,
      map: new TextureLoader().load(picDot), // 加载圆形纹理
      blending: AdditiveBlending,
      transparent: false,
      sizeAttenuation: true, // 是否受相机距离影响缩放
      vertexColors: true, // 使用顶点颜色
    })

    mesh: Points
    constructor() {
      this.geo.setAttribute('position', new BufferAttribute(this.positions, 3))
      this.geo.setAttribute('color', new BufferAttribute(this.colors, 3))
      for (let t = 0; t < typeNum; t++) {
        for (let n = 0; n < typeParticleNum; n++) {
          const i = t * typeParticleNum + n
          this.types[i] = t
          this.positions[i * 3] = random() * xRange
          this.positions[i * 3 + 1] = random() * yRange
          this.positions[i * 3 + 2] = 10
          this.vels[i * 3] = 0
          this.vels[i * 3 + 1] = 0
          this.vels[i * 3 + 2] = 0
          const [r, g, b] = palette(t / typeNum).gl()

          this.colors[i * 3] = r
          this.colors[i * 3 + 1] = g
          this.colors[i * 3 + 2] = b
        }
      }
      this.mesh = new Points(this.geo, this.mat)
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

    getVel(i: number) {
      return [this.vels[3 * i], this.vels[3 * i + 1], this.vels[3 * i + 2]]
    }

    getRGB(i: number) {
      return [this.colors[3 * i], this.colors[3 * i + 1], this.colors[3 * i + 2]]
    }

    edge(i: number) {
      const [x, y] = this.getPos(i)

      if (x < 0 || x > xRange || y < 0 || y > yRange) {
        const angle = random() * 2 * PI
        const length = random() * xRange / 4
        this.positions[i * 3] = cos(angle) * length + xRange / 2
        this.positions[i * 3 + 1] = sin(angle) * length + xRange / 2
        return true
      }
      return false
    }

    update() {
      for (let m = 0; m < particleNum; m++) {
        for (let n = m + 1; n < particleNum; n++) {
          if (this.edge(m) || this.edge(n))
            continue
          const [mx, my] = this.getPos(m)
          const [nx, ny] = this.getPos(n)
          const dx = mx - nx
          const dy = my - ny
          const dist = sqrt(dx ** 2 + dy ** 2)
          const tm = this.types[m]
          const tn = this.types[n]
          const a = AGrid[tm][tn]
          const f = this.accelatorForce(dist, a)

          // console.log(this.positions[m * 3], this.positions[m * 3 + 1])

          this.vels[m * 3] = dx / dist * f
          this.vels[m * 3 + 1] = dy / dist * f

          this.vels[m * 3] *= frictionFactor
          this.vels[m * 3 + 1] *= frictionFactor

          // console.log(this.vels[m * 3], this.vels[m * 3 + 1])

          const [vx, vy] = this.getVel(m)
          this.positions[m * 3] += vx
          this.positions[m * 3 + 1] += vy
        }
      }
    }

    draw() {
      this.mesh.geometry.attributes.position.needsUpdate = true
      this.mesh.geometry.attributes.color.needsUpdate = true
    }
  }

  const cloud = new ParticleCloud()

  renderWrap(() => {
    cloud.update()
    cloud.draw()
  })()

  // setInterval(() => {
  //   cloud.update()
  //   cloud.draw()
  // }, 1000)
})
</script>

<template>
  <div ref="con" class="w-full h-full" />
</template>
