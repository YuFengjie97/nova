var E=Object.defineProperty;var S=(n,o,a)=>o in n?E(n,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[o]=a;var u=(n,o,a)=>(S(n,typeof o!="symbol"?o+"":o,a),a);import{a as v}from"./p5.min-8ea0dEJR.js";import{a as L,A as V}from"./AudioController-xk7Quh6U.js";import{P as D}from"./P5Con-q3KiC56D.js";import{i as N,n as A}from"./p5bezier-z6y-IyX8.js";import{d as P,r as T,o as W,b as F,l as R,u as I}from"./index-D5VwQozy.js";const j={class:"w-full h-full"},U=P({__name:"MusicRect",setup(n){let o;function a(e){o=e}let w,r;const H=T(128),d=250,f=H.value/2,p=[];let c;const k=2,_=.6,x=60;class z{constructor(t,i){u(this,"$p");u(this,"pos");u(this,"h",0);u(this,"rectHeight",0);this.$p=t,this.pos=i}draw(t,i){const{$p:s,pos:{x:m,y:h},rectHeight:g}=this;s.fill(this.h,255,127),s.push(),s.rectMode(s.CENTER),s.noStroke(),s.translate(0,r/2);const l=c*.2;s.rect(m,h,c,this.rectHeight+k,l,l,l,l),s.pop()}update(t){this.updateH(t),this.updateHeight(t)}updateH(t){this.h=this.$p.map(t,0,d,0,255)}updateHeight(t){this.rectHeight=this.$p.map(t,0,d,0,r*_)}}function b(e){for(let t=0;t<f;t++)p.push(new z(e,new v.Vector(t*c,0)))}function y(e){for(let t=0;t<f;t++){const i=o.getAudioData()[t];p[t].update(i),p[t].draw(i,t)}}function B(e){e.push(),e.translate(0,r/2),e.noFill(),e.stroke("#fff"),e.strokeWeight(2);const t=[],i=[];o.getAudioData().forEach((s,m)=>{const h=m*c,g=e.map(s,0,d,0,r/2)*_+x;t.push([h,-g]),i.push([h,g])}),A(t),A(i),e.pop()}function M(e,t){w=e.width,r=e.height,c=w/f,e.frameRate(30),e.colorMode(e.HSB),e.noStroke(),b(e),t&&N(t)}function C(e){e.background("rgba(0, 0, 0, 0.08)"),o&&(y(),B(e))}return(e,t)=>(W(),F("div",j,[R(V,{class:"absolute top-0 left-0 z-100","audio-src":I(L),"fft-size":H.value,onInitAudioAnalyser:a},null,8,["audio-src","fft-size"]),R(D,{setup:M,draw:C})]))}});export{U as default};
