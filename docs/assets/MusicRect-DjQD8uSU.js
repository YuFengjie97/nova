var E=Object.defineProperty;var S=(r,o,a)=>o in r?E(r,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[o]=a;var u=(r,o,a)=>(S(r,typeof o!="symbol"?o+"":o,a),a);import{a as v}from"./p5.min-3HXR7yvj.js";import{A as L}from"./AudioController-KhJbxLFI.js";import{P as V}from"./P5Con-FQKd_Z9e.js";import{m as D}from"./audio-sugarCrush-sMDL0Z2H.js";import{i as N,n as A}from"./p5bezier-6Oms73Ub.js";import{d as P,r as T,o as W,b as F,l as R,u as I}from"./index-w3o6Dwr7.js";const j={class:"w-full h-full"},X=P({__name:"MusicRect",setup(r){let o;function a(e){o=e}let w,n;const H=T(128),f=250,d=H.value/2,p=[];let c;const k=2,_=.6,x=60;class z{constructor(t,i){u(this,"$p");u(this,"pos");u(this,"h",0);u(this,"rectHeight",0);this.$p=t,this.pos=i}draw(t,i){const{$p:s,pos:{x:m,y:h},rectHeight:g}=this;s.fill(this.h,255,127),s.push(),s.rectMode(s.CENTER),s.noStroke(),s.translate(0,n/2);const l=c*.2;s.rect(m,h,c,this.rectHeight+k,l,l,l,l),s.pop()}update(t){this.updateH(t),this.updateHeight(t)}updateH(t){this.h=this.$p.map(t,0,f,0,255)}updateHeight(t){this.rectHeight=this.$p.map(t,0,f,0,n*_)}}function b(e){for(let t=0;t<d;t++)p.push(new z(e,new v.Vector(t*c,0)))}function y(e){for(let t=0;t<d;t++){const i=o.getAudioData()[t];p[t].update(i),p[t].draw(i,t)}}function B(e){e.push(),e.translate(0,n/2),e.noFill(),e.stroke("#fff"),e.strokeWeight(2);const t=[],i=[];o.getAudioData().forEach((s,m)=>{const h=m*c,g=e.map(s,0,f,0,n/2)*_+x;t.push([h,-g]),i.push([h,g])}),A(t),A(i),e.pop()}function M(e,t){w=e.width,n=e.height,c=w/d,e.frameRate(30),e.colorMode(e.HSB),e.noStroke(),b(e),t&&N(t)}function C(e){e.background("rgba(0, 0, 0, 1.)"),o&&(y(),B(e))}return(e,t)=>(W(),F("div",j,[R(L,{class:"absolute top-0 left-0 z-100","audio-src":I(D),"fft-size":H.value,onInitAudioAnalyser:a},null,8,["audio-src","fft-size"]),R(V,{setup:M,draw:C})]))}});export{X as default};
