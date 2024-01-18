export function sleep(val: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, val)
  })
}
