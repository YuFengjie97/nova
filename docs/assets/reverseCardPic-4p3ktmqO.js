import{c as T,g as V}from"./_commonjsHelpers-4gQjN7DL.js";import{d as D,r as v,w as X,a as q,c as S,o as _,b as k,e as h,n as $,u as w,f as J,t as K,g as Q,_ as Z,h as ee,F as te,i as ne,j as re,m as oe}from"./index-buY-64hZ.js";import{p as ae}from"./disco_communism-NN-qA4tW.js";import"./p5.min-8Dsz88oV.js";function ie(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var G=ie,se=typeof T=="object"&&T&&T.Object===Object&&T,ce=se,ue=ce,le=typeof self=="object"&&self&&self.Object===Object&&self,fe=ue||le||Function("return this")(),F=fe,de=F,me=function(){return de.Date.now()},ve=me,be=/\s/;function ge(e){for(var t=e.length;t--&&be.test(e.charAt(t)););return t}var pe=ge,ye=pe,xe=/^\s+/;function Te(e){return e&&e.slice(0,ye(e)+1).replace(xe,"")}var he=Te,_e=F,je=_e.Symbol,W=je,E=W,z=Object.prototype,Se=z.hasOwnProperty,$e=z.toString,y=E?E.toStringTag:void 0;function we(e){var t=Se.call(e,y),a=e[y];try{e[y]=void 0;var s=!0}catch{}var n=$e.call(e);return s&&(t?e[y]=a:delete e[y]),n}var Oe=we,ke=Object.prototype,Re=ke.toString;function Ie(e){return Re.call(e)}var Ce=Ie,B=W,Ee=Oe,Be=Ce,Le="[object Null]",Me="[object Undefined]",L=B?B.toStringTag:void 0;function Ne(e){return e==null?e===void 0?Me:Le:L&&L in Object(e)?Ee(e):Be(e)}var Pe=Ne;function De(e){return e!=null&&typeof e=="object"}var Ge=De,Fe=Pe,We=Ge,ze="[object Symbol]";function Ae(e){return typeof e=="symbol"||We(e)&&Fe(e)==ze}var Ye=Ae,He=he,M=G,Ue=Ye,N=NaN,Ve=/^[-+]0x[0-9a-f]+$/i,Xe=/^0b[01]+$/i,qe=/^0o[0-7]+$/i,Je=parseInt;function Ke(e){if(typeof e=="number")return e;if(Ue(e))return N;if(M(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=M(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=He(e);var a=Xe.test(e);return a||qe.test(e)?Je(e.slice(2),a?2:8):Ve.test(e)?N:+e}var Qe=Ke,Ze=G,O=ve,P=Qe,et="Expected a function",tt=Math.max,nt=Math.min;function rt(e,t,a){var s,n,d,l,i,r,f=0,c=!1,u=!1,b=!0;if(typeof e!="function")throw new TypeError(et);t=P(t)||0,Ze(a)&&(c=!!a.leading,u="maxWait"in a,d=u?tt(P(a.maxWait)||0,t):d,b="trailing"in a?!!a.trailing:b);function g(o){var m=s,p=n;return s=n=void 0,f=o,l=e.apply(p,m),l}function A(o){return f=o,i=setTimeout(x,t),c?g(o):l}function Y(o){var m=o-r,p=o-f,C=t-m;return u?nt(C,d-p):C}function R(o){var m=o-r,p=o-f;return r===void 0||m>=t||m<0||u&&p>=d}function x(){var o=O();if(R(o))return I(o);i=setTimeout(x,Y(o))}function I(o){return i=void 0,b&&s?g(o):(s=n=void 0,l)}function H(){i!==void 0&&clearTimeout(i),f=0,s=r=n=i=void 0}function U(){return i===void 0?l:I(O())}function j(){var o=O(),m=R(o);if(s=arguments,n=this,r=o,m){if(i===void 0)return A(r);if(u)return clearTimeout(i),i=setTimeout(x,t),g(r)}return i===void 0&&(i=setTimeout(x,t)),l}return j.cancel=H,j.flush=U,j}var ot=rt;const at=V(ot),it={class:"fit-content flex flex-col items-center pointer-events-none"},st=D({__name:"ReverseCard",props:{name:null,conDomRect:null,bg:null,show:{type:Boolean}},setup(e){const t=e,a=v(),s=v("");X(()=>{if(!t.conDomRect||!a.value)return;const{top:c,left:u}=a.value.getBoundingClientRect(),{top:b,left:g}=t.conDomRect;s.value=`-${u-g}px -${c-b}px`});const n=v(!!t.show);q(()=>t.show,c=>{n.value=c});function d(){n.value=!0}function l(){n.value=!1}const i=S(()=>({"box-shadow":n.value?"0px 0px 10px rgb(210, 175, 210)":"0px 0px 8px rgba(0, 0, 0, 1)"})),r=S(()=>({transform:n.value?"rotateY(0deg)":"rotateY(180deg)"})),f=S(()=>{var c;return{transform:n.value?"rotateY(180deg)":"rotateY(0deg)","background-position":s.value,"background-size":`${((c=t.conDomRect)==null?void 0:c.width)??0}px`,"background-image":`url(${t.bg})`}});return(c,u)=>(_(),k("div",{ref_key:"card",ref:a,class:"card font-ani",style:$(w(i)),onMousemove:d,onMouseout:l},[h("div",{class:"bg pointer-events-none",style:$(w(f))},null,4),h("div",{class:"content pointer-events-none",style:$(w(r))},[h("div",it,[J(K(e.name)+" ",1),h("div",{class:Q(["h-2px m-t-2px bg-#fff transition-duration-0.35s transition-delay-0.3s",n.value?"w-full":"w-0"])},null,2)])],4)],36))}}),ct=Z(st,[["__scopeId","data-v-e4c5c7a1"]]);function ut(e){return new Promise(t=>{setTimeout(t,e)})}const vt=D({__name:"reverseCardPic",setup(e){const t=`一个幽灵，共产主义的幽灵，在欧洲游荡。为了对这个幽灵进行神圣的围剿，旧欧洲的一切势力，教皇和沙皇、梅特涅和基佐、法国的激进派和德国的警察，都联合起来了。
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
烈的危机的办法，不过是使防止危机的手段越来越少的办法。`,a=v(),s=v(),n=v([]);function d(){let r=0;for(;r<t.length;){const f=3+Math.floor(Math.random()*6),c=t.slice(r,r+f);r+=f;const u={name:c,bg:ae,show:!1};n.value.push(u)}}function l(){s.value=a.value.getBoundingClientRect()}async function i(){for(let r=0;r<n.value.length;r+=1)n.value[r].show=!0,r!==0&&(n.value[r-1].show=!1,await ut(750))}return ee(async()=>{d(),l(),window.addEventListener("resize",at(l,500)),await i()}),(r,f)=>(_(),k("div",{ref_key:"con",ref:a,class:"w-full min-h-full flex flex-wrap p-y-40px p-x-10px bg-red justify-center items-center"},[(_(!0),k(te,null,ne(n.value,(c,u)=>(_(),re(ct,oe({key:u},c,{"con-dom-rect":s.value}),null,16,["con-dom-rect"]))),128))],512))}});export{vt as default};
