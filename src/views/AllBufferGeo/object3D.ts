// import { BoxBufferGeometry } from 'three'
import * as THREE from 'three'
import { Mat } from 'threePatch'

const lineMaterial = new THREE.LineBasicMaterial({
  color: 0xffffff,
  transparent: true,
  opacity: 0.5
})
const meshMaterial = new THREE.MeshPhongMaterial({
  color: 0x156289,
  emissive: 0x072534,
  side: THREE.DoubleSide,
  flatShading: true
})

function initGroup(geometry: THREE.BufferGeometry) {
  const group = new THREE.Group()
  group.add(new THREE.LineSegments(geometry, lineMaterial))
  group.add(new THREE.Mesh(geometry, meshMaterial))
  return group
}

// 正方体
export function getBox() {
  const geometry = new THREE.BoxGeometry(10, 10, 10)
  return initGroup(geometry)
}
//圆
export function getCircle() {
  const geometry = new THREE.CircleGeometry(5, 32)
  return initGroup(geometry)
}
// 圆锥
export function getCone() {
  const geometry = new THREE.ConeGeometry(5, 10, 32)
  return initGroup(geometry)
}
// 圆柱
export function getCylinder() {
  const geometry = new THREE.CylinderGeometry(5, 5, 10, 32)
  return initGroup(geometry)
}
// 十二面缓冲几何体
export function getDodecahedron() {
  const geometry = new THREE.DodecahedronGeometry(5, 1)
  return initGroup(geometry)
}
//边缘几何体
export function getEdges() {
  const geometry = new THREE.BoxGeometry(10, 10, 10)
  const edges = new THREE.EdgesGeometry(geometry)
  return initGroup(geometry)
}
//挤压缓冲几何体
export function getExtrude() {
  const length = 12,
    width = 8

  const shape = new THREE.Shape()
  shape.moveTo(0, 0)
  shape.lineTo(0, width)
  shape.lineTo(length, width)
  shape.lineTo(length, 0)
  shape.lineTo(0, 0)

  const extrudeSettings = {
    steps: 2,
    depth: 10,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 1,
    bevelOffset: 0,
    bevelSegments: 1
  }

  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
  return initGroup(geometry)
}

// 二十面缓冲几何体（IcosahedronGeometry）
export function getIcosahedron() {
  const geometry = new THREE.IcosahedronGeometry(5, 1)
  return initGroup(geometry)
}
//车削缓冲几何体
export function getLathe() {
  const points = []
  for (let i = 0; i < 10; i++) {
    points.push(new THREE.Vector2(Math.sin(i * 0.2) * 10 + 5, (i - 5) * 2))
  }
  const geometry = new THREE.LatheGeometry(points)
  return initGroup(geometry)
}
// 八面缓冲几何体（OctahedronGeometry）
export function getOctahedron() {
  const geometry = new THREE.OctahedronGeometry(5)
  return initGroup(geometry)
}
//平面缓冲几何体（PlaneGeometry）
export function getPlane() {
  const geometry = new THREE.PlaneGeometry(5, 5)
  return initGroup(geometry)
}

//多面缓冲几何体（PolyhedronGeometry）
export function getPolyhedron() {
  const verticesOfCube = [
    -1, -1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1, 1, 1, -1, 1, 1, 1, 1,
    -1, 1, 1
  ]
  const indicesOfFaces = [
    2, 1, 0, 0, 3, 2, 0, 4, 7, 7, 3, 0, 0, 1, 5, 5, 4, 0, 1, 2, 6, 6, 5, 1, 2,
    3, 7, 7, 6, 2, 4, 5, 6, 6, 7, 4
  ]
  const geometry = new THREE.PolyhedronGeometry(
    verticesOfCube,
    indicesOfFaces,
    6,
    2
  )
  return initGroup(geometry)
}
//圆环缓冲几何体（RingGeometry）
export function getRing() {
  const geometry = new THREE.RingGeometry(1, 5, 32)
  return initGroup(geometry)
}
//形状缓冲几何体（ShapeGeometry）
export function getShape() {
  const x = 0,
    y = 0

  const heartShape = new THREE.Shape()

  heartShape.moveTo(x + 5, y + 5)
  heartShape.bezierCurveTo(x + 5, y + 5, x + 4, y, x, y)
  heartShape.bezierCurveTo(x - 6, y, x - 6, y + 7, x - 6, y + 7)
  heartShape.bezierCurveTo(x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19)
  heartShape.bezierCurveTo(x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7)
  heartShape.bezierCurveTo(x + 16, y + 7, x + 16, y, x + 10, y)
  heartShape.bezierCurveTo(x + 7, y, x + 5, y + 5, x + 5, y + 5)

  const geometry = new THREE.ShapeGeometry(heartShape)
  return initGroup(geometry)
}
//球缓冲几何体（SphereGeometry）
export function getSphere() {
  const geometry = new THREE.SphereGeometry(15, 32, 16)
  return initGroup(geometry)
}
//四面缓冲几何体（TetrahedronGeometry）
export function getTetrahedron() {
  const geometry = new THREE.TetrahedronGeometry(5)
  return initGroup(geometry)
}
//圆环缓冲几何体（TorusGeometry）
export function getTorus() {
  const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
  return initGroup(geometry)
}
//圆环缓冲扭结几何体（TorusKnotGeometry）
export function getTorusKnot() {
  const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16)
  return initGroup(geometry)
}
//管道缓冲几何体（TubeGeometry）
export function getTube() {
  class CustomSinCurve extends THREE.Curve<THREE.Vector3> {
    scale: number
    constructor(scale = 1) {
      super()
      this.scale = scale
    }

    getPoint(t: number, optionalTarget = new THREE.Vector3()) {
      const tx = t * 3 - 1.5
      const ty = Math.sin(2 * Math.PI * t)
      const tz = 0

      return optionalTarget.set(tx, ty, tz).multiplyScalar(this.scale)
    }
  }

  const path = new CustomSinCurve(10)
  const geometry = new THREE.TubeGeometry(path, 20, 2, 8, false)
  return initGroup(geometry)
}
//网格几何体（WireframeGeometry）
export function getWireframe() {
  const geometry = new THREE.SphereGeometry(10, 10, 10)

  const wireframe = new THREE.WireframeGeometry(geometry)
  return initGroup(geometry)
}
