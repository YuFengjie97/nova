import{d as _,r as c,w as y,a as R,c as v,o as f,b as h,e as d,n as g,u as x,f as k,t as C,g as B,_ as D,h as M,i as S,F as $,j as z,k as P,m as Y}from"./index-D5VwQozy.js";import"./p5.min-8ea0dEJR.js";const j={class:"fit-content flex flex-col items-center pointer-events-none"},E=_({__name:"ReverseCard",props:{name:null,conDomRect:null,bg:null,show:{type:Boolean}},setup(r){const n=r,s=c(),l=c("");y(()=>{if(!n.conDomRect||!s.value)return;const{top:o,left:a}=s.value.getBoundingClientRect(),{top:w,left:b}=n.conDomRect;l.value=`-${a-b}px -${o-w}px`});const e=c(!!n.show);R(()=>n.show,o=>{e.value=o});function p(){e.value=!0}function i(){e.value=!1}const m=v(()=>({"box-shadow":e.value?"0px 0px 10px rgb(210, 175, 210)":"0px 0px 8px rgba(0, 0, 0, 1)"})),t=v(()=>({transform:e.value?"rotateY(0deg)":"rotateY(180deg)"})),u=v(()=>{var o;return{transform:e.value?"rotateY(180deg)":"rotateY(0deg)","background-position":l.value,"background-size":`${((o=n.conDomRect)==null?void 0:o.width)??0}px`,"background-image":`url(${n.bg})`}});return(o,a)=>(f(),h("div",{ref_key:"card",ref:s,class:"card font-ani",style:g(x(m)),onMousemove:p,onMouseout:i},[d("div",{class:"bg pointer-events-none",style:g(x(u))},null,4),d("div",{class:"content pointer-events-none",style:g(x(t))},[d("div",j,[k(C(r.name)+" ",1),d("div",{class:B(["h-2px m-t-2px bg-#fff transition-duration-0.35s transition-delay-0.3s",e.value?"w-full":"w-0"])},null,2)])],4)],36))}}),L=D(E,[["__scopeId","data-v-e4c5c7a1"]]),T="/nova/assets/disco_communism-8paHOis6.jpg";function F(r){return new Promise(n=>{setTimeout(n,r)})}const V=_({__name:"reverseCardPic",setup(r){const n=`一个幽灵，共产主义的幽灵，在欧洲游荡。为了对这个幽灵进行神圣的围剿，旧欧洲的一切势力，教皇和沙皇、梅特涅和基佐、法国的激进派和德国的警察，都联合起来了。
有哪一个反对党不被它的当政的敌人骂为共产党呢？又有哪一个反对党不拿共产主义这个罪名去回敬更进步的反对党人和自己的反动敌人呢？
从这一事实中可以得出两个结论：
共产主义已经被欧洲的一切势力公认为一种势力；
现在，我们眼前又进行着类似的运动。资产阶级的生产关系和交换关系，资产阶级的所有制关系，
这个曾经仿佛用法术创造了如此庞大的生产资料和交换手段的现代资产阶级社会，
现在像一个魔法师一样不能再支配自己用法术呼唤出来的魔鬼了。几十年来的工业和商业的历史，
只不过是现代生产力反抗现代生产关系、反抗作为资产阶级及其统治的存在条件的所有制关系的历史。
只要指出在周期性的重复中越来越危及整个资产阶级社会生存的商业危机就够了。在商业危机期间，
总是不仅有很大一部分制成的产品被毁灭掉，而且有很大一部分已经造成的生产力被毁灭掉。在危机期间，
发生一种在过去一切时代看来都好像是荒唐现象的社会瘟疫，即生产过剩的瘟疫。
社会突然发现自己回到了一时的野蛮状态；仿佛是一次饥荒、一场普遍的毁灭性战争，
使社会失去了全部生活资料；仿佛是工业和商业全被毁灭了。这是什么缘故呢？
因为社会上文明过度，生活资料太多，工业和商业太发达。社会所拥有的生产力已
经不能再促进资产阶级文明和资产阶级所有制关系的发展；相反，生产力已经强大
到这种关系所不能适应的地步，它已经受到这种关系的阻碍；而它一着手克服这种
障碍，就使整个资产阶级社会陷入混乱，就使资产阶级所有制的存在受到威胁。资产
阶级的关系已经太狭窄了，再容纳不了它本身所造成的财富了。资产阶级用什么办法
来克服这种危机呢？一方面不得不消灭大量生产力，另一方面夺取新的市场，更加彻
底地利用旧的市场。这究竟是怎样的一种办法呢？这不过是资产阶级准备更全面更猛
烈的危机的办法，不过是使防止危机的手段越来越少的办法。`,s=c(),l=c(),e=c([]);function p(){let t=0;for(;t<n.length;){const u=3+Math.floor(Math.random()*6),o=n.slice(t,t+u);t+=u;const a={name:o,bg:T,show:!1};e.value.push(a)}}function i(){l.value=s.value.getBoundingClientRect()}async function m(){for(let t=0;t<e.value.length;t+=1)e.value[t].show=!0,t!==0&&(e.value[t-1].show=!1,await F(750))}return M(async()=>{p(),i(),window.addEventListener("resize",S(i,500)),await m()}),(t,u)=>(f(),h("div",{ref_key:"con",ref:s,class:"w-full min-h-full flex flex-wrap p-y-40px p-x-10px bg-red justify-center items-center"},[(f(!0),h($,null,z(e.value,(o,a)=>(f(),P(L,Y({key:a},o,{"con-dom-rect":l.value}),null,16,["con-dom-rect"]))),128))],512))}});export{V as default};
