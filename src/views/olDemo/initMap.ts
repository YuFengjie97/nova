import 'ol/ol.css'
import Map from 'ol/Map.js'
import View from 'ol/View.js'
import OSM from 'ol/source/OSM.js'
import TileLayer from 'ol/layer/Tile.js'

export function initMap(target: HTMLElement) {
  return new Map({
    layers: [new TileLayer({ source: new OSM() })],
    view: new View({
      projection: "EPSG:4326",
      center: [108.405285, 39.904989],
      zoom: 4,
    }),
    target
  })
}
