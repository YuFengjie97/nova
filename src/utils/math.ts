import { Vector2, Vector3 } from 'three'

const { floor, random } = Math

export function myRandom(max: number): number
export function myRandom(min: number, max: number): number
export function myRandom(arr: Array<any>): any
export function myRandom(
  mixin: number | Array<any>,
  max?: number,
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
    const index = myRandom(mixin.length)
    return mixin[index]
  }
}

// 获取随机数字，每次获取在0-len范围内不重复
export function getRandomIndex(len: number) {
  const arr: Array<number> = []
  for (let i = 0; i < len; i++)
    arr.push(i)

  return function (): number | undefined {
    if (arr.length === 0)
      return
    const i = floor(random() * arr.length)
    return arr.splice(i, 1)[0]
  }
}

/**
 *
 * @param v 变化的值
 * @param s1 v范围的起始值
 * @param s2 v范围的终点值
 * @param t1 v映射目标范围的起始值
 * @param t2 v映射目标范围的终点值
 * @returns v映射到t1到t2的值
 */
export function map(v: number, s1: number, s2: number, t1: number, t2: number) {
  if (v <= s1)
    return t1
  if (v >= s2)
    return t2

  return (v - s1) / (s2 - s1) * (t2 - t1) + t1
}

export function getTriangleCenter(p1: Vector2, p2: Vector2, p3: Vector2) {
  return new Vector2().copy(p1).add(p2).add(p3).multiply(new Vector2(1 / 3, 1 / 3))
}
