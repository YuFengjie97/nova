import{P as m}from"./P5.d62c173a.js";import{d as u,c as P,e as b,o as h,_ as v}from"./index.5fb479d3.js";import"./p5.min.842f70d3.js";const y={class:"viewCon"},g=u({__name:"NoisePixels",setup(k){let e,s=600,i=600,p=1e-4,_=.001,n=0;function r(a){e=a,e.setup=function(){e.createCanvas(s,i),e.pixelDensity(1)},e.draw=function(){e.background(51),e.loadPixels();for(let t=0;t<s;t++){let c=0;for(let o=0;o<i;o++){let l=4*o*s+4*t,d=e.map(e.noise(n,c),0,1,0,255),x=e.map(t,0,s,0,255),f=e.map(o,i,0,0,255);e.pixels[l]=d,e.pixels[l+1]=x,e.pixels[l+2]=f,e.pixels[l+3]=255,c+=_}n+=p}e.updatePixels()}}return(a,t)=>(h(),P("div",y,[b(m,{sketch:r})]))}});const I=v(g,[["__scopeId","data-v-5b74d5b6"]]);export{I as default};
