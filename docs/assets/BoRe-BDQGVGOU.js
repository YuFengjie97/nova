var B=Object.defineProperty;var P=(i,c,f)=>c in i?B(i,c,{enumerable:!0,configurable:!0,writable:!0,value:f}):i[c]=f;var a=(i,c,f)=>(P(i,typeof c!="symbol"?c+"":c,f),f);import{a as A}from"./p5.min-B-rUit5K.js";import{P as E}from"./P5Con-CIfN-iJX.js";import{d as F,b as M,k as R,o as S,_ as V}from"./index-B4Kd1SlF.js";import"./_commonjsHelpers-BosuxZz1.js";const q={class:"w-full h-full"},s=10,N="华文楷体",j=.02,D=.08,G=8e-5,H=10,_="观自在菩萨，行深般若波罗蜜多时，照见五蕴皆空，度一切苦厄。舍利子，色不异空，空不异色，色即是空，空即是色，受想行识，亦复如是。舍利子，是诸法空相，不生不灭，不垢不净，不增不减。是故空中无色，无受想行识，无眼耳鼻舌身意，无色声香味触法，无眼界，乃至无意识界，无无明，亦无无明尽，乃至无老死，亦无老死尽。无苦集灭道，无智亦无得。以无所得故。菩提萨埵，依般若波罗蜜多故，心无挂碍。无挂碍故，无有恐怖，远离颠倒梦想，究竟涅盘。三世诸佛，依般若波罗蜜多故，得阿耨多罗三藐三菩提。故知般若波罗蜜多，是大神咒，是大明咒，是无上咒，是无等等咒，能除一切苦，真实不虚。故说般若波罗蜜多咒，即说咒曰：揭谛揭谛，波罗揭谛，波罗僧揭谛，菩提萨婆诃。",J=F({__name:"BoRe",setup(i){const{min:c,max:f,sqrt:y,floor:w}=Math;let m,p,r;const b=[253,203,110];let h=0,u;const g=_.split(""),x=[];function C(o){let t=s+r/2,e=s+r/2;u=setInterval(()=>{const n=g.shift();n?(x.push(new v(o,new A.Vector(t,e),n)),e+=r+s,e>p-s&&(t+=s+r,e=s+r/2)):clearInterval(u)},H)}function I(){x.forEach(o=>{o.update(),o.draw()})}class v{constructor(t,e,n){a(this,"$p");a(this,"pos");a(this,"basePos");a(this,"char");a(this,"xoff",0);a(this,"yoff",0);a(this,"opacity",255);this.$p=t,this.basePos=e,this.pos=e.copy(),this.char=n}draw(){const{$p:t,pos:{x:e,y:n},char:l,opacity:d}=this;t.fill(...b,d),t.textFont(N),t.textSize(r),t.text(l,e,n)}update(){const{$p:t,basePos:{x:e,y:n}}=this;this.xoff+=j,this.yoff+=D,h+=G;const l=t.map(t.noise(this.xoff,h),0,1,e-s,e+s),d=t.map(t.noise(this.yoff,h),0,1,n-s,n+s);this.pos.set(l,d),this.opacity=t.map(t.noise(h),0,1,100,255)}}function k(o){m=o.width,p=o.height;const t=m*p,e=_.length;r=w(y(t/e))-s*1.5,o.textAlign("center","center"),o.rectMode("center"),C(o)}function z(o){o.background("rgba(0, 0, 0, 0.07)"),I()}return(o,t)=>(S(),M("div",q,[R(E,{setup:k,draw:z})]))}}),U=V(J,[["__scopeId","data-v-88ed79ff"]]);export{U as default};
