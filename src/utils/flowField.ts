import p5 from 'p5'

const { random, cos, sin, PI } = Math

export class FlowField {
  position: Position
  size: number
  vec: p5.Vector

  constructor(position: Position, size: number) {
    this.position = position // 左上角坐标
    this.size = size
    this.vec = new p5.Vector(0, 0)
  }

  update(vec: p5.Vector) {
    this.vec.set(vec.x, vec.y)
  }
}
