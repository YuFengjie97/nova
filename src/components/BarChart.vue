<template>
  <div class="barChart">
    <div class="chartCon">
      <div
        class="item"
        v-for="(item, i) in dataCom"
        :key="i"
        :style="{ background: item.color,width: `${item.ratio! * 100}%` }"
        @mousemove="mousemove(i, $event)"
        @mouseout="pop.isShow = false"
      >
        {{ item.name }}
      </div>
    </div>
    <div
      class="pop"
      v-show="pop.isShow"
      :style="{
        top: `${pop.pos.top}px`,
        left: `${pop.pos.left}px`,
        '--color': pop.color
      }"
    >
      <div class="titleCon">
        <div class="point"></div>
        <div class="val">{{ pop.name }} {{ pop.ratio * 100 }}%</div>
      </div>
      <div class="childCon">
        <div class="child" v-for="(item, i) in pop.childs" :key="i">
          <div class="point"></div>
          <div class="val">{{ item.name }}--{{ item.val }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue'

export interface dataItem {
  name: string
  val: number
  childs?: Array<dataItem>
  total?: number
  ratio?: number
  color?: string
}
const colors = [
  '#00b894',
  '#00cec9',
  '#0984e3',
  '#6c5ce7',
  '#b2bec3',
  '#fdcb6e',
  '#e17055',
  '#d63031',
  '#e84393',
  '#2d3436'
]

const props = defineProps<{
  dataArr: Array<dataItem>
}>()

const dataCom = computed(() => {
  let total = props.dataArr.reduce(
    (pre, acc) => {
      return { val: pre.val + acc.val }
    },
    { val: 0 }
  ).val
  return props.dataArr.map((item, i) => {
    item.total = total
    item.ratio = parseFloat((item.val / item.total).toFixed(3))
    item.color = colors[i % colors.length]
    return item
  })
})

const pop = reactive<{
  isShow: boolean
  pos: {
    top: number
    left: number
  }
  name: string
  ratio: number
  childs: Array<dataItem>
  color: string
}>({
  isShow: false,
  pos: { top: 0, left: 0 },
  name: '',
  ratio: 0,
  childs: [],
  color: '#fff'
})

function mousemove(i: number, e: MouseEvent) {
  let data = props.dataArr[i]
  pop.isShow = true
  pop.name = data.name
  pop.ratio = data.ratio!
  pop.childs = data.childs!
  const { clientX, clientY } = e
  pop.pos.top = clientY + 15
  pop.pos.left = clientX + 15
  pop.color = data.color!
}
</script>

<style lang="less" scoped>
.barChart {
  height: 3rem;
  border-radius: 2px;
  overflow: hidden;
  .chartCon {
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
  }
  .item {
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(84, 83, 83);
    font-weight: 600;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .pop {
    position: fixed;
    width: fit-content;
    height: fit-content;
    right: -100px;
    bottom: -100px;
    padding: 1rem;
    border-radius: 10px;
    background: rgb(61, 61, 61);
    color: #fff;
    // transition: .15s ease-out 0s ;
  }
  @size1: 1rem;
  @size2: 0.4rem;
  @ml: 1rem;
  @pl: 1.8rem;
  @lineWidth: 2px;
  .val {
    margin-left: @ml;
  }
  .titleCon {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    font-size: 1.6rem;
    .point {
      width: @size1;
      height: @size1;
      border-radius: 50%;
      background: var(--color);
      position: relative;
    }
  }

  .child {
    font-size: 1rem;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    .val {
      padding: 0.5rem 0;
      padding-left: @pl;
    }
    .point {
      width: @size2;
      height: @size2;
      margin-left: (
        @size1 / 2 - @size2 / 2
      ); //使得子级的小点和title的大点中心整齐排列
      border-radius: 50%;
      background: var(--color);
      position: relative;
      // 垂直线
      &::before {
        content: '';
        position: absolute;
        width: @lineWidth;
        height: 3rem;
        bottom: 2px;
        left: calc(50% - @lineWidth / 2);
        border-radius: 1px;
        background: var(--color);
      }
      // 水平线
      &::after {
        content: '';
        position: absolute;
        width: @pl + @ml;
        height: @lineWidth;
        top: calc(50% - @lineWidth / 2);
        left: 0;
        border-radius: 1px;
        background: var(--color);
      }
    }
  }
}
</style>
