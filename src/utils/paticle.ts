import p5 from 'p5'
import { getRandomColor } from '@/utils/index'

interface ParticleOption {
  $p: p5
  rangeWidth: number
  rangeHeight: number
  position: p5.Vector
  r?: number
  color?: string
}

export class Particle {
  $p
  pos = new p5.Vector(0, 0)
  rangeWidth = 100
  rangeHeight = 100
  vel = new p5.Vector(0, 0)
  acc = new p5.Vector(0, 0)
  maxSpeed = 4
  r = 1
  color = 'red'
  h = 0

  constructor(option: ParticleOption) {
    this.$p = option.$p
    this.rangeWidth = option.rangeWidth
    this.rangeHeight = option.rangeHeight
    this.pos = option.position
    if (option.r) {
      this.r = option.r
    }
    if (option.color) {
      this.color = option.color
    }
  }

  draw(multiColor: boolean = true) {
    if (multiColor) {
      this.$p.stroke(this.h, 255, 255, 30)
      this.h = this.h + 1
      if (this.h > 255) {
        this.h = 0
      }
    } else {
      this.$p.stroke(this.color)
    }
    this.$p.strokeWeight(this.r)
    this.$p.circle(this.pos.x, this.pos.y, this.r * 2)
  }

  update() {
    this.vel.add(this.acc)
    this.vel.limit(this.maxSpeed)
    this.pos.add(this.vel)
    this.acc.mult(0)
  }

  applyForce(force: p5.Vector) {
    this.acc.add(force)
  }
}

export class ParticleFlow extends Particle {
  prevPos = new p5.Vector(0, 0)

  constructor(option: ParticleOption) {
    super(option)
    this.prevPos = this.pos.copy()
  }

  draw(multiColor: boolean = true) {
    if (multiColor) {
      this.$p.stroke(this.h, 255, 255, 30)
      this.h = this.h + 1
      if (this.h > 255) {
        this.h = 0
      }
    } else {
      this.$p.stroke(this.color)
    }
    this.$p.strokeWeight(this.r)
    this.$p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y)
  }

  update() {
    this.edges()
    this.updatePrev()

    super.update()
  }

  updatePrev() {
    this.prevPos.x = this.pos.x
    this.prevPos.y = this.pos.y
  }

  edges() {
    if (this.pos.x > this.rangeWidth) {
      this.pos.x = 0
      this.updatePrev()
    }
    if (this.pos.x < 0) {
      this.pos.x = this.rangeWidth
      this.updatePrev()
    }
    if (this.pos.y > this.rangeHeight) {
      this.pos.y = 0
      this.updatePrev()
    }
    if (this.pos.y < 0) {
      this.pos.y = this.rangeHeight
      this.updatePrev()
    }
  }
}

export class ParticleGradientLine extends Particle {
  constructor(option: ParticleOption, vel: p5.Vector) {
    super(option)
    this.vel = vel
  }
  draw(multiColor: boolean = true) {
    if (multiColor) {
      this.$p.fill(this.h, 255, 255, 30)
      this.h = this.h + 1
      if (this.h > 255) {
        this.h = 0
      }
    } else {
      this.$p.fill(this.color)
    }
    this.$p.noStroke()
    this.$p.circle(this.pos.x, this.pos.y, this.r * 2)
  }
  updateColor() {
    this.color = getRandomColor()
  }
  update() {
    this.pos.add(this.vel)
    this.edge()
  }
  edge() {
    const {
      pos: { x, y },
      rangeHeight,
      rangeWidth
    } = this
    if (x <= 0 || x >= rangeWidth) {
      this.updateColor()
      this.vel.mult([-1, 1])
    }
    if (y <= 0 || y >= rangeHeight) {
      this.updateColor()
      this.vel.mult([1, -1])
    }
  }
}
