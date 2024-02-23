import { loadImg } from './html'

// idle精灵图canvas离屏绘制
export async function createImgCanvasIdle(canvasSize: { w: number, h: number }, imgSrc: string, idleNum: number, interval: number = 60) {
  const canvas = document.createElement('canvas')
  canvas.width = canvasSize.w
  canvas.height = canvasSize.h
  const ctx = canvas.getContext('2d')!

  const img = await loadImg(imgSrc)

  let i = 0
  const idleW = img.width / idleNum
  const idleH = img.height
  // const scale = floor(idleW > idleH ? canvasSize.w / idleW : canvasSize.h / idleH)
  const timer = setInterval(() => {
    i += 1
    ctx.clearRect(0, 0, canvasSize.w, canvasSize.h)
    ctx.drawImage(img, i % idleNum * idleW, 0, idleW, idleH, 0, 0, canvasSize.w, canvasSize.h)
  }, interval)

  return { timer, canvas, img }
}
