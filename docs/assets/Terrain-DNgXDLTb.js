import{P as u}from"./P5-RhKFErAM.js";import{d as x,e as g,q as v,o as y,_ as T}from"./index-BO-XTyUX.js";import"./p5.min-CSTknFkb.js";const k={class:"viewCon"},z=x({__name:"Terrain",setup(I){let e,c=1200,d=800,f=600,i=20,a=d/i,s=c/i,p=0,r=[];function h(){for(let n=0;n<s;n++){r[n]=[];for(let t=0;t<a;t++)r[n][t]=e.map(e.random(),0,1,-10,10)}}function w(){p-=.1;let n=p;for(let t=0;t<a;t++){let o=0;for(let l=0;l<s;l++)r[l][t]=e.map(e.noise(o,n),0,1,-100,100),o+=.2;n+=.2}}function _(){e.stroke(255),e.strokeWeight(1),e.noFill();for(let n=0;n<a-1;n++){e.beginShape(e.TRIANGLE_STRIP);for(let t=0;t<s;t++)e.vertex(t*i,n*i,r[t][n]),e.vertex(t*i,(n+1)*i,r[t][n+1]);e.endShape()}}function m(n){e=n;let t;e.setup=function(){t=e.createCanvas(f,f,e.WEBGL);let o=e.min(e.windowWidth,e.windowHeight);t.style(`width: ${o}px;height: ${o}px`),h()},e.draw=function(){e.frameRate(30),e.background(0),e.rotateX(e.PI/3),e.translate(-c/2,-d/2),w(),_()},e.windowResized=function(){let o=e.min(e.windowWidth,e.windowHeight);t.style(`width: ${o}px; height: ${o}px`)}}return(n,t)=>(y(),g("div",k,[v(u,{sketch:m})]))}}),W=T(z,[["__scopeId","data-v-a4682b15"]]);export{W as default};
