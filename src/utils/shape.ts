import p5 from 'p5'

// 以pos为原点，以range为半径，画圆，在这个圆内随机取三个点，形成三角形的三个顶点
export function getRandomTriangle($p: p5, pos: p5.Vector, range: number) {
  let { x, y } = pos
  let xRange = [x - range, x + range]
  let yRange = [y - range, y + range]
  let { x: x1, y: y1 } = $p.createVector(
    $p.random(xRange[0], xRange[1]),
    $p.random(yRange[0], yRange[1])
  )
  let { x: x2, y: y2 } = $p.createVector(
    $p.random(xRange[0], xRange[1]),
    $p.random(yRange[0], yRange[1])
  )
  let { x: x3, y: y3 } = $p.createVector(
    $p.random(xRange[0], xRange[1]),
    $p.random(yRange[0], yRange[1])
  )

  return [x1, y1, x2, y2, x3, y3]
}
