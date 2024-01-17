import { map, myRandom } from './math'

export function getRandomColor(colorRange: number = 255): string {
  if (colorRange > 255)
    colorRange = colorRange % 255
  const r = myRandom(colorRange)
  const g = myRandom(colorRange)
  const b = myRandom(colorRange)
  return `rgb(${r},${g},${b})`
}

export type Vec3 = [number, number, number]
// http://dev.thi.ng/gradients/
export function initPalette(a: Vec3, b: Vec3, c: Vec3, d: Vec3): (t: number) => Vec3 {
  const cos = Math.cos
  const TWO_PI = Math.PI * 2
  return function (t: number) {
    const v3 = [0, 0, 0].map((item, i) => {
      const v = a[i] + b[i] * cos(TWO_PI * (c[i] * t + d[i]))
      return v
    }) as Vec3

    return v3
  }
}

export function vec3ToRgb(v: Vec3) {
  const r = map(v[0], 0, 1, 0, 255)
  const g = map(v[1], 0, 1, 0, 255)
  const b = map(v[2], 0, 1, 0, 255)
  return `rgb(${r},${g},${b})`
}
