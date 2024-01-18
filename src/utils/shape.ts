import p5 from 'p5'

const { sin, cos } = Math

// 以pos为原点，以range为半径，画圆，在这个圆内随机取三个点，形成三角形的三个顶点
export function getRandomTriangle($p: p5, pos: p5.Vector, range: number) {
  const { x, y } = pos
  const xRange = [x - range, x + range]
  const yRange = [y - range, y + range]
  const { x: x1, y: y1 } = $p.createVector(
    $p.random(xRange[0], xRange[1]),
    $p.random(yRange[0], yRange[1]),
  )
  const { x: x2, y: y2 } = $p.createVector(
    $p.random(xRange[0], xRange[1]),
    $p.random(yRange[0], yRange[1]),
  )
  const { x: x3, y: y3 } = $p.createVector(
    $p.random(xRange[0], xRange[1]),
    $p.random(yRange[0], yRange[1]),
  )

  return [x1, y1, x2, y2, x3, y3]
}

// 判断点是否在多边形内
// https://stackoverflow.com/questions/16282330/find-centerpoint-of-polygon-in-javascript

export function pointInPolygon(polygon: Array<p5.Vector>, point: Point) {
  let odd = false
  for (let i = 0, j = polygon.length - 1; i < polygon.length; i++) {
    // prettier-ignore
    if (((polygon[i].y > point[1]) !== (polygon[j].y > point[1]))
      && (point[0] < ((polygon[j].x - polygon[i].x) * (point[1] - polygon[i].y) / (polygon[j].y - polygon[i].y) + polygon[i].x)))
      odd = !odd

    j = i
  }
  return odd
}
/**
 *
 * @param vertexs 多边形的顶点左边
 * @returns 多边形面积
 */
function getArea(vertexs: Array<p5.Vector>): number {
  let area = 0
  let i
  let j
  let point1
  let point2
  const len = vertexs.length

  for (i = 0, j = len - 1; i < len; j = i, i++) {
    point1 = vertexs[i]
    point2 = vertexs[j]
    area += point1.x * point2.y
    area -= point1.y * point2.x
  }
  area /= 2

  return area
}
/**
 *
 * @param vertexs 多边形的顶点坐标
 * @returns 多边形的中心点
 * https://stackoverflow.com/questions/16282330/find-centerpoint-of-polygon-in-javascript
 */
export function centroid(vertexs: Array<p5.Vector>): p5.Vector {
  let x = 0
  let y = 0
  let i
  let j
  let f
  let point1
  let point2
  const len = vertexs.length

  for (i = 0, j = len - 1; i < len; j = i, i++) {
    point1 = vertexs[i]
    point2 = vertexs[j]
    f = point1.x * point2.y - point2.x * point1.y
    x += (point1.x + point2.x) * f
    y += (point1.y + point2.y) * f
  }

  f = getArea(vertexs) * 6
  return new p5.Vector(x / f, y / f)
}
/**
 *
 * @param p 要旋转的点
 * @param c 中心点
 * @param a 角度(PI进制)
 */
export function rotateByPoint(p: p5.Vector, c: p5.Vector, a: number) {
  let { x, y } = p
  const { x: ox, y: oy } = c
  x = (x - ox) * cos(a) - (y - oy) * sin(a) + ox
  y = (x - ox) * sin(a) + (y - oy) * cos(a) + oy
  p.set(x, y)
}
