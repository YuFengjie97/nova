<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import jigsaw_v from '/img/jigsaw/vertical.png'
import jigsaw_h from '/img/jigsaw/horizontal.png'
import { Easing, Group, Tween } from '@tweenjs/tween.js'

const gridCon = ref<HTMLElement>()
const cellSize = 20

const group = new Group()
function createTween1(source: { tx: number, ty: number, tz: number, scale: number, rx: number, ry: number, rz: number }, el: HTMLElement): Tween {
  const tween = new Tween(source, group)
    .to({ tx: 0, ty: 0, tz: 0, scale: 1, rx: 0, ry: 0, rz: 0 })
    .duration(150)
    .delay(0)
    .easing(Easing.Cubic.Out)
    .onUpdate(() => {
      el.style.transform = `translate3d(${source.tx}px,${source.ty}px,${source.tz}px) scale(${source.scale}) rotateX(${source.rx}deg) rotateY(${source.ry}deg) rotateZ(${source.rz}deg)`
    })

  return tween
}

onMounted(() => {
  const { width, height } = gridCon.value!.getBoundingClientRect()
  const cols = Math.floor(width / (cellSize * 3))
  const rows = Math.floor(height / (cellSize * 3))

  let tweenHead = null
  let tweenPointer = null

  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      const isVertical = (r + c) % 2 === 0
      const jigsawEl = document.createElement('div')
      const tx = Math.random() * cellSize * 4
      const ty = Math.random() * cellSize * 4
      const tz = -40 + 80 * Math.random()
      const scale = Math.random()
      const rx = Math.random() * 180
      const ry = Math.random() * 180
      const rz = Math.random() * 180
      let cssText = `
        transform-origin: center;
        transform: translate3d(${tx}px, ${ty}px, ${tz}px) scale(${scale}) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg);
      `
      if (isVertical) {
        cssText += `
          width: ${cellSize * 3}px;
          height: ${cellSize * 5}px;
          background: url(${jigsaw_v}) 0% 0% / 100% 100% no-repeat;
          grid-row: ${r * 3 - 1} / span 5;
          grid-column: ${c * 3} / span 3;
          `
      }
      else {
        cssText += `
          width: ${cellSize * 5}px;
          height: ${cellSize * 3}px;
          background: url(${jigsaw_h}) 0% 0% / 100% 100% no-repeat;
          grid-row: ${r * 3} / span 3;
          grid-column: ${c * 3 - 1} / span 5;
        `
      }
      jigsawEl.style.cssText = cssText
      gridCon.value!.appendChild(jigsawEl)

      const tween = createTween1({
        tx,
        ty,
        tz,
        scale,
        rx,
        ry,
        rz,
      }, jigsawEl)
      if (!tweenHead) {
        tweenHead = tween
        tweenPointer = tween
      }
      else {
        tweenPointer!.chain(tween)
        tweenPointer = tween
      }
    }
  }

  tweenHead?.start()
  animate()

  function animate() {
    group.update()
    const keepGoing = !group.allStopped()
    if (keepGoing)
      requestAnimationFrame(animate)
  }
})
</script>

<template>
  <div class="bg-black w-full h-full flex items-center justify-center">
    <div ref="gridCon" class="grid-con" />
  </div>
</template>

<style lang='less' scoped>
.grid-con{
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  perspective: 600px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 20px);
  grid-template-rows: repeat(auto-fill, 20px);
}
</style>
