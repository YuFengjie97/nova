import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import { Icon, Style } from 'ol/style'
import { Coordinate } from 'ol/coordinate'
import Map from 'ol/Map'
import { Geometry } from 'ol/geom'


const { random } = Math

interface Mark {
  coordinate: Coordinate
  imgUrl: string,
  type: 'mark'
}

// 创建地图图标
function createIcon(obj: Mark) {
  const iconFeature = new Feature({
    geometry: new Point(obj.coordinate),
    custom: obj // 自定义
  })
  const iconStyle = new Style({
    image: new Icon({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: obj.imgUrl,
      scale: 0.8 //显示完整大小,然后缩放
    })
  })
  iconFeature.setStyle(iconStyle)
  return iconFeature
}

// 根据中国边境经纬度随机生成图标
export function randomIcon(imgUrl: string): Array<Feature> {
  const N = 53 // 最北N53.37
  const S = 3 // 最南N3.52
  const E = 135 // 最东E135.05
  const W = 73 // 最西E73.40
  const result = []
  for (let i = 0; i < 20; i++) {
    const coordinate = [random() * (E - W) + W,random() * (N - S) + S]
    const icon = createIcon({ coordinate, imgUrl, type: 'mark' })
    result.push(icon)
  }
  return result
}

// 创建新图层
export function createLayer(map: Map, features: Array<Feature<Geometry>>) {
  const layer = new VectorLayer({
    source: new VectorSource({ features }),
  })
  map.addLayer(layer)
  return layer
}

// 使用随机坐标的图标创建的图层
export function randomLayer(map: Map, imgUrl: string){
  const icons = randomIcon(imgUrl)
  return createLayer(map, icons)
}
