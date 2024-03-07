const { random, PI, sin, cos, sqrt, min } = Math

export interface Settings {
  typeNum: number
  typeParticleNum: number
  width: number
  height: number
  xRange: number
  yRange: number
  frictionFactor: number
  distMin: number
  distMax: number
  forceFactor: number
}
const settings: Settings = {
  typeNum: 0,
  typeParticleNum: 0,
  width: 0,
  height: 0,
  xRange: 0,
  yRange: 0,
  frictionFactor: 0,
  distMin: 0,
  distMax: 0,
  forceFactor: 0,
}

class ParticleCloud {
  particleNum = 0
  positions: Float32Array
  vels: Float32Array
  types: Float32Array
  AGrid: Array<Array<number>> = []

  /**
   * @param typeNum 几类粒子
   * @param typeParticleNum 每类多少个
   */
  constructor() {
    const { typeNum, typeParticleNum, width, height } = settings
    this.particleNum = typeNum * typeParticleNum
    this.positions = new Float32Array(typeNum * typeParticleNum * 3)
    this.vels = new Float32Array(typeNum * typeParticleNum * 3)
    this.types = new Float32Array(typeNum * typeParticleNum)
    for (let t = 0; t < typeNum; t++) {
      for (let n = 0; n < typeParticleNum; n++) {
        const i = t * typeParticleNum + n
        this.types[i] = t
        const { xRange, yRange } = settings
        this.positions[i * 3] = random() * xRange / 2 - xRange / 4 + width / 2
        this.positions[i * 3 + 1] = random() * yRange / 2 - yRange / 4 + height / 2
        this.positions[i * 3 + 2] = 0
        this.vels[i * 3] = 0
        this.vels[i * 3 + 1] = 0
        this.vels[i * 3 + 2] = 0
      }
    }

    let off = -0.5
    for (let i = 0; i < typeNum; i++) {
      const arr = []
      for (let j = 0; j < typeNum; j++) {
        off += 0.1
        off = off > 1 ? -1 : off
        arr.push(random() * 2 - 1)
      }
      this.AGrid.push(arr)
    }
  }

  accelatorForce(dist: number, a: number) {
    if (dist <= settings.distMin)
      return (dist / settings.distMin - 1)

    if (dist < settings.distMax)
      return (dist - settings.distMin) / (settings.distMax - settings.distMin) * a

    return 0
  }

  getPos(i: number) {
    return [this.positions[3 * i], this.positions[3 * i + 1], this.positions[3 * i + 2]]
  }

  getVel(i: number) {
    return [this.vels[3 * i], this.vels[3 * i + 1], this.vels[3 * i + 2]]
  }

  edge(i: number) {
    const [x, y] = this.getPos(i)

    if (x < 0 || x > settings.xRange || y < 0 || y > settings.yRange) {
      const angle = random() * 2 * PI
      const length = random() * min(settings.xRange, settings.yRange) / 2
      this.positions[i * 3] = cos(angle) * length + settings.xRange / 2
      this.positions[i * 3 + 1] = sin(angle) * length + settings.yRange / 2
      this.vels[i * 3] = 0
      this.vels[i * 3 + 1] = 0
      return true
    }
    return false
  }

  updatePos(i: number, dfx: number, dfy: number) {
    this.vels[i * 3] += dfx
    this.vels[i * 3 + 1] += dfy
    this.vels[i * 3] *= settings.frictionFactor
    this.vels[i * 3 + 1] *= settings.frictionFactor
    const [vx, vy] = this.getVel(i)
    this.positions[i * 3] += vx
    this.positions[i * 3 + 1] += vy
  }

  update() {
    for (let m = 0; m < this.particleNum; m++) {
      let dfx = 0
      let dfy = 0
      for (let n = 0; n < this.particleNum; n++) {
        if (this.edge(m) || this.edge(n) || m === n)
          continue
        const [mx, my] = this.getPos(m)
        const [nx, ny] = this.getPos(n)
        const dx = nx - mx
        const dy = ny - my
        const dist = sqrt(dx ** 2 + dy ** 2)
        const tm = this.types[m]
        const tn = this.types[n]
        const a = this.AGrid[tm][tn]
        const f = this.accelatorForce(dist, a) * settings.forceFactor
        dfx += (dist === 0 ? -0.1 * settings.forceFactor : (dx / dist * f))
        dfy += (dist === 0 ? -0.1 * settings.forceFactor : (dy / dist * f))
      }
      this.updatePos(m, dfx, dfy)
    }
  }
}

let cloud: ParticleCloud
addEventListener('message', (e) => {
  const { tag, data } = e.data as {
    tag: string
    data: Settings
  }

  if (tag === 'close') {
    close()
    postMessage({ tag: 'close_done' })
  }

  if (tag === 'init_settings') {
    for (const key in data) {
      const k = key as keyof Settings
      settings[k] = data[k]
    }
    postMessage({ tag: 'init_settings_done' })
  }

  if (tag === 'init_cloud') {
    cloud = new ParticleCloud()
    postMessage({
      tag: 'init_cloud_done',
      data: {
        positions: cloud.positions,
        types: cloud.types,
      },
    })
  }

  if (tag === 'update_cloud') {
    cloud.update()
    postMessage({
      tag: 'update_cloud_done',
      data: {
        positions: cloud.positions,
      },
    })
  }
}, false)
