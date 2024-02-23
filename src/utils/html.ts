export function loadImg(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      resolve(img)
    }
  })
}
