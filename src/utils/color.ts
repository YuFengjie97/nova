import { myRandom } from './math'

export function getRandomColor(colorRange: number = 255): string {
  if (colorRange > 255) colorRange = colorRange % 255
  let r = myRandom(colorRange)
  let g = myRandom(colorRange)
  let b = myRandom(colorRange)
  return `rgb(${r},${g},${b})`
}
