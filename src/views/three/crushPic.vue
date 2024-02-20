<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { AmbientLight, BufferAttribute, BufferGeometry, Color, ExtrudeGeometry, Group, Material, Mesh, MeshBasicMaterial, MeshPhongMaterial, PlaneGeometry, PointLight, PointLightHelper, RepeatWrapping, Shape, SpotLight, TextureLoader, Triangle, Vector2, Vector3 } from 'three'
import Delaunator from 'delaunator'
import { gsap } from 'gsap'
import { initThree } from '@/hooks/initThree'
import pic from '@/assets/img/disco_communism.jpg'
import { getTriangleCenter } from '@/utils'

const { random, floor, ceil, PI, min, max } = Math

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
  const { scene, camera, renderer, renderWrap } = initThree(con.value!, false, false, false)
  scene.background = new Color(0xE17055)
  camera.position.set(0, 0, 800)
  const size = new Vector2(600, 800) // x宽y高
  const gap = 40
  const height = 10 // 碎片厚度
  const triangleGroup = new Group()
  scene.add(triangleGroup)

  // 灯光
  const plDistance = max(size.x, size.y)
  const lightColor = 0xFF7979
  const pl = new PointLight(lightColor, 10, plDistance, 1)
  pl.position.set(40, 40, 400)
  scene.add(pl)
  const al = new AmbientLight(0x404040) // soft white light
  scene.add(al)

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
    const material = new MeshPhongMaterial({ map: texture })

    const mesh = new Mesh(triangle, material)
    mesh.position.set(0, 0, 0)
    triangleGroup.add(mesh)
  }

  const rangeAngle = PI
  const rangePos = 800
  const randomRotaion = Array.from({ length: triangleNum }).fill(0).map(() => {
    return new Vector3(random() * rangeAngle - rangeAngle / 2, random() * rangeAngle - rangeAngle / 2, random() * rangeAngle - rangeAngle / 2)
  })
  const randomPosition = Array.from({ length: triangleNum }).fill(0).map(() => {
    return new Vector3(random() * rangePos - rangePos / 2, random() * rangePos - rangePos / 2, random() * rangePos - rangePos / 2)
  })

  // 使用gsap来动画
  function animate() {
    const tl = gsap.timeline({
      repeat: -1,
    })
    tl.to(triangleGroup.rotation, {
      y: PI * 2,
      duration: 4,
      ease: 'power2.out',
    }).add('groupRotateStop')

    triangleGroup.children.forEach((mesh, i) => {
      tl.to(mesh.rotation, {
        x: randomRotaion[i].x,
        y: randomRotaion[i].y,
        duration: 3,
        ease: 'power2.out',
      }, i === 0 ? 'groupRotateStop-=3' : '<')

      tl.to(mesh.position, {
        x: randomPosition[i].x,
        y: randomPosition[i].y,
        z: randomPosition[i].z,
        duration: 3,
        ease: 'power2.out',
      }, i === 0 ? 'groupRotateStop-=3' : '<')

      if (i === triangleGroup.children.length - 1)
        tl.add('randomStop')
    })
    triangleGroup.children.forEach((mesh, i) => {
      tl.to(mesh.rotation, {
        x: 0,
        y: 0,
        duration: 3,
        ease: 'power2.out',
      }, i === 0 ? 'randomStop' : '<')

      tl.to(mesh.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 3,
        ease: 'power2.out',
      }, i === 0 ? 'randomStop' : '<')
    })
    tl.to(triangleGroup.rotation, {
      y: PI * 4,
      duration: 4,
      ease: 'power2.out',
    }, 'randomStop')
  }
  renderWrap()()
  animate()

  // 使用threejs中的render函数来动画
  // let startTime: number
  // const duration = 2000
  // renderWrap(() => {
  //   const t = performance.now()
  //   if (!startTime)
  //     startTime = t

  //   const elapsedTime = t - startTime
  //   const progress = min(elapsedTime / duration, 1)

  //   triangleGroup.children.forEach((mesh, i) => {
  //     const rInc = new Vector3(0, 0, 0).sub(randomRotaion[i]).multiplyScalar(progress)
  //     const r = new Vector3().copy(randomRotaion[i]).add(rInc)
  //     mesh.rotation.set(r.x, r.y, r.z)
  //   })
  // })()
})
</script>

<template>
  <div ref="con" class="w-full h-full" />
</template>
