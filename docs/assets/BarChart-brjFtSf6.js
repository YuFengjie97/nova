import{d as f,c as x,z as A,o as n,b as c,e as s,F as h,j as m,u as B,A as y,B as I,t as d,n as u,v as b,x as C,_ as S,r as k,l as g}from"./index-J-7TjqAC.js";const w=t=>(b("data-v-23fba1b6"),t=t(),C(),t),F={class:"barChart"},M={class:"chartCon"},z=["onMousemove"],D={class:"titleCon"},N=w(()=>s("div",{class:"point"},null,-1)),V={class:"val"},j={class:"childCon"},E=w(()=>s("div",{class:"point"},null,-1)),L={class:"val"},X=f({__name:"BarChart",props:{dataArr:null},setup(t){const r=t,p=["#00b894","#00cec9","#0984e3","#6c5ce7","#b2bec3","#fdcb6e","#e17055","#d63031","#e84393","#2d3436"],_=x(()=>{let i=r.dataArr.reduce((o,e)=>({val:o.val+e.val}),{val:0}).val;return r.dataArr.map((o,e)=>(o.total=i,o.ratio=parseFloat((o.val/o.total).toFixed(3)),o.color=p[e%p.length],o))}),a=A({isShow:!1,pos:{top:0,left:0},name:"",ratio:0,childs:[],color:"#fff"});function $(i,o){let e=r.dataArr[i];a.isShow=!0,a.name=e.name,a.ratio=e.ratio,a.childs=e.childs;const{clientX:l,clientY:v}=o;a.pos.top=v+15,a.pos.left=l+15,a.color=e.color}return(i,o)=>(n(),c("div",F,[s("div",M,[(n(!0),c(h,null,m(B(_),(e,l)=>(n(),c("div",{class:"item",key:l,style:u({background:e.color,width:`${e.ratio*100}%`}),onMousemove:v=>$(l,v),onMouseout:o[0]||(o[0]=v=>a.isShow=!1)},d(e.name),45,z))),128))]),y(s("div",{class:"pop",style:u({top:`${a.pos.top}px`,left:`${a.pos.left}px`,"--color":a.color})},[s("div",D,[N,s("div",V,d(a.name)+" "+d(a.ratio*100)+"%",1)]),s("div",j,[(n(!0),c(h,null,m(a.childs,(e,l)=>(n(),c("div",{class:"child",key:l},[E,s("div",L,d(e.name)+"--"+d(e.val),1)]))),128))])],4),[[I,a.isShow]])]))}}),Y=S(X,[["__scopeId","data-v-23fba1b6"]]),q=t=>(b("data-v-95be7b7c"),t=t(),C(),t),G={class:"viewCon"},H=q(()=>s("h1",null,"鼠标移入查看详细信息",-1)),J=f({__name:"BarChart",setup(t){const r=k([{name:"村东头菜市场",val:800,childs:[{name:"黄瓜",val:11},{name:"西红柿",val:11},{name:"茄子",val:11},{name:"土豆",val:11}]},{name:"就坑你大酒店",val:200,childs:[{name:"黄瓜",val:110},{name:"西红柿",val:110},{name:"茄子",val:110},{name:"土豆",val:110}]},{name:"大学城",val:900,childs:[{name:"黄瓜",val:121},{name:"西红柿",val:131},{name:"茄子",val:11},{name:"土豆",val:11}]},{name:"狗剩批发超市",val:400,childs:[{name:"黄瓜",val:115},{name:"西红柿",val:151},{name:"茄子",val:111},{name:"土豆",val:121}]}]);return(p,_)=>(n(),c("div",G,[H,g(Y,{dataArr:r.value},null,8,["dataArr"])]))}}),O=S(J,[["__scopeId","data-v-95be7b7c"]]);export{O as default};
