import{ax as x,ay as v,az as T,aa as k}from"./index.d28c4049.js";class q extends x{constructor(t){super(t)}load(t,e,n,r){const h=this,i=new v(this.manager);i.setPath(this.path),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(t,function(c){const a=h.parse(JSON.parse(c));e&&e(a)},n,r)}parse(t){return new F(t)}}class F{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],r=S(t,e,this.data);for(let h=0,i=r.length;h<i;h++)n.push(...r[h].toShapes());return n}}function S(l,t,e){const n=Array.from(l),r=t/e.resolution,h=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*r,i=[];let c=0,a=0;for(let u=0;u<n.length;u++){const d=n[u];if(d===`
`)c=0,a-=h;else{const p=w(d,r,c,a,e);c+=p.offsetX,i.push(p.path)}}return i}function w(l,t,e,n,r){const h=r.glyphs[l]||r.glyphs["?"];if(!h){console.error('THREE.Font: character "'+l+'" does not exists in font family '+r.familyName+".");return}const i=new T;let c,a,u,d,p,y,b,f;if(h.o){const s=h._cachedOutline||(h._cachedOutline=h.o.split(" "));for(let o=0,g=s.length;o<g;)switch(s[o++]){case"m":c=s[o++]*t+e,a=s[o++]*t+n,i.moveTo(c,a);break;case"l":c=s[o++]*t+e,a=s[o++]*t+n,i.lineTo(c,a);break;case"q":u=s[o++]*t+e,d=s[o++]*t+n,p=s[o++]*t+e,y=s[o++]*t+n,i.quadraticCurveTo(p,y,u,d);break;case"b":u=s[o++]*t+e,d=s[o++]*t+n,p=s[o++]*t+e,y=s[o++]*t+n,b=s[o++]*t+e,f=s[o++]*t+n,i.bezierCurveTo(p,y,b,f,u,d);break}}return{offsetX:h.ha*t,path:i}}const C="/nova/assets/helvetiker_regular.typeface.d5c54676.json";class P extends k{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const r=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(r,e)}this.type="TextGeometry"}}export{q as F,P as T,C as f};