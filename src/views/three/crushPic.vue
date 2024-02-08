<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { BufferAttribute, BufferGeometry, Color, ExtrudeGeometry, Group, Material, Mesh, MeshBasicMaterial, MeshPhongMaterial, PlaneGeometry, RepeatWrapping, Shape, TextureLoader, Triangle, Vector2, Vector3 } from 'three'
import Delaunator from 'delaunator'
import { initThree } from '@/hooks/initThree'
import pic from '@/assets/img/disco_communism.jpg'

const { random, floor, ceil, PI, min } = Math

const con = ref<HTMLElement>()

class PrismGeometry extends ExtrudeGeometry {
  constructor(ves: Vector2[], height: number) {
    super(new Shape(ves), { depth: height, bevelEnabled: false })
  }
}

const texture = new TextureLoader().load(pic)
// texture.repeat.set(1, 1)
texture.wrapS = RepeatWrapping
texture.wrapT = RepeatWrapping

onMounted(() => {
  const { scene, camera, renderer, renderWrap } = initThree(con.value!, true, true, true)
  scene.background = new Color(0xE17055)
  camera.position.set(0, 0, 800)
  const size = new Vector2(600, 800) // x宽y高
  const gap = 40
  const height = 10
  const triangleGroup = new Group()
  scene.add(triangleGroup)

  // 随机点
  const points = []
  for (let x = -size.x / 2; x < size.x / 2; x += gap) {
    for (let y = -size.y / 2; y < size.y / 2; y += gap) {
      const p = new Vector2(random() * gap + x, random() * gap + y)
      points.push(p)
    }
  }
  // 三角剖分
  const delaunay = Delaunator.from(points.map(item => [item.x, item.y]))
  const triangleInds = delaunay.triangles
  const triangleNum = triangleInds.length / 3
  for (let i = 0; i < triangleInds.length; i += 3) {
    const a = points[triangleInds[i]]
    const b = points[triangleInds[i + 1]]
    const c = points[triangleInds[i + 2]]
    const triangle = new PrismGeometry([a, b, c], height)

    // 对每个三角形，计算并设置uv坐标
    const pos = triangle.getAttribute('position')
    const uv: number[] = []
    for (let i = 0; i < pos.count; i++) {
      const p = new Vector3().fromBufferAttribute(pos, i)
      // triangle.computeBoundingBox() // 计算边界
      // const { min, max } = triangle.boundingBox // 因为是以整张尺寸为边界进行计算uv坐标，所以这里不用这套。
      uv.push((p.x - size.x / 2) / size.x, (p.y - size.y / 2) / size.y) // 整张完整图片中心点以原点为基准
    }
    triangle.setAttribute('uv', new BufferAttribute(new Float32Array(uv), 2))
    const material = new MeshBasicMaterial({ map: texture })

    const mesh = new Mesh(triangle, material)
    triangleGroup.add(mesh)
  }

  const range = PI * 2
  const randomRotaion = Array.from({ length: triangleNum }).fill(0).map(() => {
    return new Vector3(random() * range, random() * range, random() * range)
  })

  triangleGroup.children.forEach((mesh, i) => {
    const r = randomRotaion[i]
    mesh.rotation.set(r.x, r.y, r.z)
  })

  let startTime: number
  const duration = 2000
  renderWrap(() => {
    const t = performance.now()
    if (!startTime)
      startTime = t

    const elapsedTime = t - startTime
    const progress = min(elapsedTime / duration, 1)

    triangleGroup.children.forEach((mesh, i) => {
      const rInc = new Vector3(0, 0, 0).sub(randomRotaion[i]).multiplyScalar(progress)
      const r = new Vector3().copy(randomRotaion[i]).add(rInc)
      mesh.rotation.set(r.x, r.y, r.z)
    })
  })()
})
</script>

<template>
  <div ref="con" class="w-full h-full" />
</template>
