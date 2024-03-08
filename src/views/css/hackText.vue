<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const { floor, random, ceil } = Math

const con = ref<HTMLElement>()
const charCon = ref<HTMLElement>()
const cellSize = 200
const charConStyle = ref<string>('')
const str = '123456789asfghjkl'
function getrandomContent(n: number) {
  let s = ''
  for (let i = 0; i < n; i++)
    s += str.charAt(floor(random() * str.length))

  return s
}
onMounted(() => {
  const { width, height } = con.value!.getBoundingClientRect()
  const rows = ceil(height / cellSize)
  const cols = ceil(width / cellSize)
  const fontSize = cellSize
  const lineHeight = fontSize
  const letterSpacing = fontSize / 2

  let bgColor = ''
  let bgPos = ''
  let bgSize = ''
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      const i = y * cols + x
      const endChar = i === rows * cols - 1 ? '' : ','
      const color = `rgb(${floor(random() * 255)},${floor(random() * 255)},${floor(random() * 255)})`
      bgColor += `linear-gradient(90deg, ${color},${color})${endChar}`
      bgPos += `${x * cellSize}px ${y * cellSize}px${endChar}`
      bgSize += `${cellSize}px ${cellSize}px${endChar}`
    }
  }
  const randomContent1 = getrandomContent(rows * cols)
  const randomContent2 = getrandomContent(rows * cols)
  const randomContent3 = getrandomContent(rows * cols)
  const randomContent4 = getrandomContent(rows * cols)
  const randomContent5 = getrandomContent(rows * cols)
  const randomContent6 = getrandomContent(rows * cols)

  charConStyle.value! = `
  --content1: ${randomContent1};
  --content2: ${randomContent2};
  --content3: ${randomContent3};
  --content4: ${randomContent4};
  --content5: ${randomContent5};
  --content6: ${randomContent6};
  --font-size: ${cellSize}px;
  --bg-color: ${bgColor};
  --bg-pos: ${bgPos};
  --bg-size: ${bgSize};
  --line-height: ${lineHeight}px;
  --letter-spacing: ${letterSpacing}px;
  `
})
</script>

<template>
  <div ref="con" class="con w-full h-full">
    <div ref="charCon" class="char-con w-full h-full" data-content="" :style="charConStyle" />
  </div>
</template>

<style lang='less' scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&family=Ubuntu+Mono&display=swap');
.con {
  background: #27ae60;
  width: 100%;
  height: 100%;

  .char-con {
    font-size: 200px;
    width: 100%;
    height: 100%;
    --content: '';
    &::before {
      font-family: 'Ubuntu Mono', monospace;
      content: var(--content);
      word-break:break-all;
      position: absolute;
      inset: 0;
      color: red;
      // background-clip: text;
      font-size: var(--font-size);
      background-repeat: no-repeat;
      background-image: var(--bg-color);
      background-position: var(--bg-pos);
      background-size: var(--bg-size);
      line-height: var(--line-height);
      letter-spacing: var(--letter-spacing);
      animation: content_change 3s linear infinite;
    }
  }
  @keyframes content_change {
    0% {
     content: var(--content)
    }
    20%{
     content: var(--content2)
    }
    40% {
     content: var(--content3)
    }
    60%{
     content: var(--content4)
    }
    80%{
     content: var(--content5)
    }
    100%{
     content: var(--content6)
    }
  }
}
</style>
