import p5 from 'p5'

interface ParticleOption {
  $p: p5,
  rangeWidth: number,
  rangeHeight: number
  position: p5.Vector
  r?: number
  color?: string
}

export class Particle {
  $p
  prevPos = new p5.Vector(0, 0)
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
    this.prevPos = this.pos.copy()
    if(option.r){
      this.r = option.r
    }
    if(option.color){
      this.color = option.color
    }
  }

  draw () {
    this.$p.stroke(this.h, 255, 255, 25);
    this.h = this.h + 1;
    if (this.h > 255) {
      this.h = 0;
    }
    this.$p.strokeWeight(this.r);
    this.$p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
  };

  update () {
    this.edges()
    this.updatePrev()
    
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  applyForce (force: p5.Vector) {
    this.acc.add(force);
  };

  updatePrev() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  };

  edges() {
    if (this.pos.x > this.rangeWidth) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = this.rangeWidth;
      this.updatePrev();
    }
    if (this.pos.y > this.rangeHeight) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = this.rangeHeight;
      this.updatePrev();
    }
  };

  
}
