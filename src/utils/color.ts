const { floor, ceil, random } = Math

export function getRandomColor(colorRange: number = 255): string {
  if (colorRange > 255) colorRange = colorRange % 255
  let r = myRandom(colorRange)
  let g = myRandom(colorRange)
  let b = myRandom(colorRange)
  return `rgb(${r},${g},${b})`
}

export function myRandom(max: number): number
export function myRandom(min: number, max: number): number
export function myRandom(arr: Array<any>): any
export function myRandom(
  mixin: number | Array<any>,
  max?: number
): number | any {
  // 只有一个参数
  if (typeof mixin === 'number' && max === undefined) {
    return floor(random() * mixin)
  }
  // 有两个数字类型参数
  else if (typeof mixin === 'number' && typeof max === 'number') {
    return floor(random() * (max - mixin)) + mixin
  }
  // 只有一个数组参数
  else if (Array.isArray(mixin)) {
    let index = myRandom(mixin.length)
    return mixin[index]
  }
}
