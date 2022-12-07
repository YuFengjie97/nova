// import Feature from 'ol/Feature'
// import Point from "ol/geom/Point";
// import {Icon, Style} from 'ol/style'
// import IconAnchorUnits from "ol/style/IconAnchorUnits";
// import { Coordinate } from "ol/coordinate";

// interface FeatureObj{
//   coordinate: Coordinate,
// }

// function createIcon(obj: FeatureObj){
//   const iconFeature = new Feature({
//     geometry: new Point(obj.coordinate),
//     custom: obj, //将feature对象绑在custom属性上
//   });
//   const iconStyle = new Style({
//     image: new Icon({
//       anchor: [0.5, 46],
//       anchorXUnits: IconAnchorUnits.FRACTION,
//       anchorYUnits: IconAnchorUnits.PIXELS,
//       src: obj.imgUrl,
//       scale: 0.8, //显示完整大小,然后缩放
//     }),
//   });
//   iconFeature.setStyle(iconStyle);
//   return iconFeature;
// }

// function randomMark(){

// }