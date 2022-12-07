<template>
  <div class="viewCon">
    <div ref="ol" id="ol"></div>
    <Pop :map="map" title="ddd"/>
  </div>
</template>

<script lang="ts" setup>
import Pop from './Pop.vue'
import { GUI } from 'dat.gui';
import { ref, onMounted } from 'vue'
import Map from 'ol/Map.js'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { Geometry } from 'ol/geom';

import { initMap } from './initMap';
import {randomLayer} from './layer'

import red from '@/assets/img/mapIcon/red.png'
import blue from '@/assets/img/mapIcon/blue.png'
import green from '@/assets/img/mapIcon/green.png'
import yellow from '@/assets/img/mapIcon/yellow.png'

const ol = ref<HTMLElement>()
let map: Map
let layerRed: VectorLayer<VectorSource<Geometry>>
let layerBlue: VectorLayer<VectorSource<Geometry>>
let layerGreen: VectorLayer<VectorSource<Geometry>>
let layerYellow: VectorLayer<VectorSource<Geometry>>

const params = {
  red: true,
  blue: true,
  green: true,
  yellow: true
}
function initGUI(){
  const panel = new GUI()
  const mark =  panel.addFolder('mark')
  mark.add(params, 'red').name('showRed').onChange(val=>{
    layerRed.setVisible(val)
  })
  mark.add(params, 'blue').name('showBlue').onChange(val=>{
    layerBlue.setVisible(val)
  })
  mark.add(params, 'green').name('showGreen').onChange(val=>{
    layerGreen.setVisible(val)
  })
  mark.add(params, 'yellow').name('showYellow').onChange(val=>{
    layerYellow.setVisible(val)
  })
}
initGUI()

onMounted(() => {
  map = initMap(ol.value!)
  layerRed = randomLayer(map, red)
  layerBlue = randomLayer(map, blue)
  layerGreen = randomLayer(map, green)
  layerYellow = randomLayer(map, yellow)
})
</script>

<style lang="less" scoped>
.viewCon {
  #ol{
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    overflow: hidden;
  }
}
</style>
