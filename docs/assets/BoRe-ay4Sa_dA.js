var M=Object.defineProperty;var R=(i,c,f)=>c in i?M(i,c,{enumerable:!0,configurable:!0,writable:!0,value:f}):i[c]=f;var a=(i,c,f)=>(R(i,typeof c!="symbol"?c+"":c,f),f);import{a as S}from"./p5.min-1FAOWjEp.js";import{P as V}from"./P5Con-VUyy89kq.js";import{d as q,o as N,b as j,l as D,_ as G}from"./index-ip7fc9kF.js";const H={class:"w-full h-full"},J=q({__name:"BoRe",setup(i){const{min:c,max:f,sqrt:y,floor:w}=Math;let m,l,r;const s=10,b=[253,203,110],g="华文楷体",C=.02,I=.08;let h=0;const v=8e-5;let u;const z=10,x="观自在菩萨，行深般若波罗蜜多时，照见五蕴皆空，度一切苦厄。舍利子，色不异空，空不异色，色即是空，空即是色，受想行识，亦复如是。舍利子，是诸法空相，不生不灭，不垢不净，不增不减。是故空中无色，无受想行识，无眼耳鼻舌身意，无色声香味触法，无眼界，乃至无意识界，无无明，亦无无明尽，乃至无老死，亦无老死尽。无苦集灭道，无智亦无得。以无所得故。菩提萨埵，依般若波罗蜜多故，心无挂碍。无挂碍故，无有恐怖，远离颠倒梦想，究竟涅盘。三世诸佛，依般若波罗蜜多故，得阿耨多罗三藐三菩提。故知般若波罗蜜多，是大神咒，是大明咒，是无上咒，是无等等咒，能除一切苦，真实不虚。故说般若波罗蜜多咒，即说咒曰：揭谛揭谛，波罗揭谛，波罗僧揭谛，菩提萨婆诃。",B=x.split(""),_=[];function P(o){let t=s+r/2,e=s+r/2;u=setInterval(()=>{const n=B.shift();n?(_.push(new A(o,new S.Vector(t,e),n)),e+=r+s,e>l-s&&(t+=s+r,e=s+r/2)):clearInterval(u)},z)}function k(){_.forEach(o=>{o.update(),o.draw()})}class A{constructor(t,e,n){a(this,"$p");a(this,"pos");a(this,"basePos");a(this,"char");a(this,"xoff",0);a(this,"yoff",0);a(this,"opacity",255);this.$p=t,this.basePos=e,this.pos=e.copy(),this.char=n}draw(){const{$p:t,pos:{x:e,y:n},char:p,opacity:d}=this;t.fill(...b,d),t.textFont(g),t.textSize(r),t.text(p,e,n)}update(){const{$p:t,basePos:{x:e,y:n}}=this;this.xoff+=C,this.yoff+=I,h+=v;const p=t.map(t.noise(this.xoff,h),0,1,e-s,e+s),d=t.map(t.noise(this.yoff,h),0,1,n-s,n+s);this.pos.set(p,d),this.opacity=t.map(t.noise(h),0,1,100,255)}}function E(o){m=o.width,l=o.height;const t=m*l,e=x.length;r=w(y(t/e))-s*1.5,o.textAlign("center","center"),o.rectMode("center"),P(o)}function F(o){o.background("rgba(0, 0, 0, 0.07)"),k()}return(o,t)=>(N(),j("div",H,[D(V,{setup:E,draw:F})]))}}),T=G(J,[["__scopeId","data-v-88ed79ff"]]);export{T as default};