<template>
  <div class="pop" ref="pop">
    <div class="close" @click="close"></div>
    <div class="title">{{ title }}</div>
    <div class="coordinate">{{ coor }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import Overlay from 'ol/Overlay'
import Map from 'ol/Map'
import OverlayPositioning from 'ol/OverlayPositioning'
import { Coordinate } from 'ol/coordinate'

const props = defineProps<{
  map: Map
  title: string
}>()
const pop = ref<HTMLElement>()
const coor = ref('')
let popup: Overlay

function initPop() {
  console.log(OverlayPositioning.BOTTOM_CENTER);
  
  // const popup = new Overlay({
  //   element: pop.value!,
  //   autoPan: {
  //     animation: {
  //       duration: 250
  //     }
  //   },
  //   positioning: OverlayPositioning.BOTTOM_CENTER
  // })
  // props.map.addOverlay(popup)

  // map点击事件
  props.map.on('click', async function (evt) {
    const pixel = props.map.getEventPixel(evt.originalEvent)
    const feature = props.map.forEachFeatureAtPixel(pixel, function (f) {
      return f
    })
    if (feature?.get('custom').type === 'mark') {
      coor.value = `经度：${11},纬度${11}`
      console.log(feature.get('custom'))
    }
  })
  return popup
}
function close() {
  popup.setPosition(undefined)
}


onMounted(() => {
  popup = initPop()
})
</script>

<style lang="less" scoped>
.pop {
  position: relative;
  width: 100px;
  height: 100px;
  height: fit-content;
  .close {
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background: red;
  }
}
</style>
