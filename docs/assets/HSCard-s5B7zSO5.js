import"./p5.min-uw89XDce.js";import{m as x}from"./math-tumV98r1.js";import{d as Y,r as s,c as C,h as V,o as y,b as X,e as g,n as v,u as e,_ as w,l as r}from"./index-zDBImyJF.js";const z=["src"],A=Y({__name:"HSCard",props:{frontImg:null,backImg:null},setup(i){const{floor:m}=Math,o={startX:0,endX:0,startY:0,endY:0},p=12,k=20,d=s(!1);function I(){d.value=!0}const _=s(),b=s(0),h=s(0),u=s(!1);function B(n){u.value=!0;const{startX:t,endX:a,startY:f,endY:M}=o,{clientX:F,clientY:P}=n;h.value=m(x(F,t,a,k,-k)),b.value=m(x(P,f,M,-p,p))}function S(){u.value=!1}const H=C(()=>{let n=0,t=-180,a=1;return d.value&&(t=0,u.value&&(n=b.value,t=h.value,a=u.value?1.1:1)),{transform:`perspective(1000px) rotateX(${n}deg) rotateY(${t}deg) scale3d(${a},${a},${a})`}}),D=C(()=>{let t=0;return d.value&&(t=-180),{transform:`rotateX(0deg) rotateY(${t}deg)`}});function $(){const{x:n,y:t,width:a,height:f}=_.value.getBoundingClientRect();o.startX=n,o.endX=n+a,o.startY=t,o.endY=t+f}return V(()=>{$(),window.onresize=$}),(n,t)=>(y(),X("div",{class:"hsCard",style:v({"--front":`url(${i.frontImg})`,"--back":`url(${i.backImg})`}),onMousemove:B,onMouseout:S},[g("div",{ref_key:"front",ref:_,class:"front",style:v(e(H))},[g("img",{src:`${i.frontImg}`},null,8,z)],4),g("div",{class:"back",style:v(e(D)),onClick:I},null,4)],36))}}),c=w(A,[["__scopeId","data-v-320099a1"]]),E="/nova/assets/card1-CE20R-lq.png",N="/nova/assets/card2-DDCPmFn8.png",R="/nova/assets/card3-dYiDbV1a.png",j="/nova/assets/card4-Lc0kACxd.png",q="/nova/assets/card5-6m-Q6oZK.png",l="/nova/assets/back-4AoDUPFe.png",K={class:"w-full min-h-full flex flex-wrap justify-center items-center view-con"},L=Y({__name:"HSCard",setup(i){return(m,o)=>(y(),X("div",K,[r(c,{"back-img":e(l),"front-img":e(E)},null,8,["back-img","front-img"]),r(c,{"back-img":e(l),"front-img":e(N)},null,8,["back-img","front-img"]),r(c,{"back-img":e(l),"front-img":e(R)},null,8,["back-img","front-img"]),r(c,{"back-img":e(l),"front-img":e(j)},null,8,["back-img","front-img"]),r(c,{"back-img":e(l),"front-img":e(q)},null,8,["back-img","front-img"])]))}}),G=w(L,[["__scopeId","data-v-45c60346"]]);export{G as default};
