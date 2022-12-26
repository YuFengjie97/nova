var S=Object.defineProperty;var k=(e,r,i)=>r in e?S(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i;var b=(e,r,i)=>(k(e,typeof r!="symbol"?r+"":r,i),i);import{d as B,b as A,h as E,c as P,a as _,y,z as g,x as M,o as O,_ as D}from"./index.d28c4049.js";import{p}from"./p5.min.0a1714b2.js";class R{constructor(r,i=512){b(this,"dataArray");b(this,"analyser");const d=window.AudioContext,u=new d,a=u.createAnalyser();a.fftSize=i,this.analyser=a,u.createMediaElementSource(r).connect(a),a.connect(u.destination);const n=a.frequencyBinCount;this.dataArray=new Uint8Array(n)}getAudioData(){return this.analyser.getByteFrequencyData(this.dataArray),this.dataArray}}const F="/nova/assets/houtui.4a03eb37.svg",G="/nova/assets/bofang.8674e47a.svg",N="/nova/assets/zanting.a3da3082.svg",W="/nova/assets/tingzhi.b8a7fdb5.svg",j="/nova/assets/kuaijin.855f2fcd.svg",q={class:"con"},I={class:"houtui",src:F},T={class:"tingzhi",src:W},U={class:"kuaijin",src:j},V=B({__name:"AudioController",props:{showStop:{type:Boolean,default:!1},showForward:{type:Boolean,default:!1},showBackward:{type:Boolean,default:!1},audioSrc:null,fftSize:{default:512}},emits:["backward","play","pause","stop","forward","initAudioAnalyser"],setup(e,{emit:r}){const i=e;let d;const u=A(!1);function a(){var o;u.value=!0,(o=n.value)==null||o.play(),d||(d=new R(n.value,i.fftSize),r("initAudioAnalyser",d))}function l(){var o;u.value=!1,(o=n.value)==null||o.pause()}const n=A(),t=A(!1);return E(()=>{n.value&&(n.value.src=i.audioSrc,n.value.oncanplay=function(){t.value=!0,console.log("audio load ok")})}),(o,J)=>(O(),P("div",q,[_("div",{class:M(["audioControlCon",{disable:!t.value}])},[y(_("img",I,null,512),[[g,e.showBackward]]),y(_("img",{class:"bofang",onClick:a,src:G},null,512),[[g,!u.value]]),y(_("img",{class:"zanting",onClick:l,src:N},null,512),[[g,u.value]]),y(_("img",T,null,512),[[g,e.showStop]]),y(_("img",U,null,512),[[g,e.showForward]])],2),_("audio",{ref_key:"audioDom",ref:n,loop:""},null,512)]))}});const Y=D(V,[["__scopeId","data-v-c6d76712"]]),Z="/nova/assets/audio1.c4ef9dc4.mp3",$=[.2,.1,.05,.04,.02,.01,.008,.002,.001,5e-4,1e-4];let f,s,h,v,C,z,x,w,m;function L(e,r=!1){if(f=e,s=f.drawingContext,p&&e instanceof p.Graphics)C=!0,h=s.constructor.name==="WebGLRenderingContext"?3:2,z=f.beginShape,x=f.vertex,w=f.vertex,m=f.endShape;else if(p&&e instanceof p.Renderer||e.drawingContext)!p||p&&!(e instanceof p.Renderer)?(window.console.warn("[p5.bezier] Support for non-p5 canvas is not tested."),h=e.isP3D?3:2):h=s.constructor.name==="WebGLRenderingContext"?3:2,C=!1,h=s.constructor.name==="WebGLRenderingContext"?3:2,z=s.beginPath.bind(s),x=s.moveTo.bind(s),w=s.lineTo.bind(s),m=s.closePath.bind(s);else throw new Error("[p5.bezier] Canvas is not supported.");v=r}function ee(e,r="OPEN",i=6){if(v&&!Array.isArray(e))throw new Error(`[p5.bezier] newBezier() function expects an array, got ${typeof e}.`);const d=$[i];if(h!==0){if(v){for(let l of e)if(!Array.isArray(e)||l.length!==h)throw new Error("[p5.bezier] One or more points in the array are not input correctly.")}r==="CLOSE"&&e.push(e[0]);let a=e.length-1;if(z(),x(...e[0]),h===2){let l,n,t,o;for(t=0;t<=1;t+=d){for(l=0,n=0,o=0;o<=a;o++)l+=c(a)/(c(o)*c(a-o))*Math.pow(1-t,a-o)*Math.pow(t,o)*e[o][0],n+=c(a)/(c(o)*c(a-o))*Math.pow(1-t,a-o)*Math.pow(t,o)*e[o][1];w(l,n)}w(...e.slice(-1)[0])}else if(h===3){let l=[0,0,0],n,t,o;for(n=0;n<=1;n+=d){for(l=[0,0,0],t=0;t<=a;t++)for(o=0;o<3;o++)l[o]+=c(a)/(c(t)*c(a-t))*Math.pow(1-n,a-t)*Math.pow(n,t)*e[t][o];w(...l)}w(...e.slice(-1)[0])}if(C)m(r);else if(r==="CLOSE")m();else if(v&&r!=="OPEN")throw new Error("[p5.bezier] Close type error. A bezier curve can only be either OPEN or CLOSE.");H();return}}function c(e){return e>1?e*c(e-1):1}function H(){f._doFill&&s.fill(),f._doStroke&&s.stroke()}export{Y as A,Z as a,L as i,ee as n};