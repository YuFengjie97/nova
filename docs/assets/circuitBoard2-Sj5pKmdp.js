var W=Object.defineProperty;var j=(v,r,i)=>r in v?W(v,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):v[r]=i;var w=(v,r,i)=>(j(v,typeof r!="symbol"?r+"":r,i),i);import{d as q,r as C,h as D,o as E,b as F,n as G}from"./index-FlqLmR99.js";const J=q({__name:"circuitBoard2",setup(v){const{floor:r,random:i}=Math,N=C(),$=C(),n={size:20,wireMaxLen:40,stroke:"#81ecec",bg:"#000",pathBg:"#2d3436",pathBloomLength:10,bloomSpeed:50,straightness:2},O=C(n.bg);return D(()=>{const{width:A,height:_}=N.value.getBoundingClientRect();$.value.setAttribute("width",`${A}`),$.value.setAttribute("height",`${_}`);const B=r(_/n.size),k=r(A/n.size);let L=r(B*k);const x=[],h={},M=[],S=[[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]];class T{constructor(t,s){w(this,"x",0);w(this,"y",0);w(this,"available",!0);w(this,"dirInd",r(i()*S.length));this.x=t,this.y=s}}class R{constructor(t){w(this,"cells",[]);t.available=!1,this.cells.push(t),L-=1}validNoCrossOver(t,s){var l,g,e,o,d,a,m,y;if([0,2,4,6].includes(s))return!0;if(s===1){const c=((l=h[`${t.x},${t.y-1}`])==null?void 0:l.available)??!0,u=((g=h[`${t.x+1},${t.y}`])==null?void 0:g.available)??!0;if(c&&u)return!0}if(s===3){const c=((e=h[`${t.x+1},${t.y}`])==null?void 0:e.available)??!0,u=((o=h[`${t.x},${t.y+1}`])==null?void 0:o.available)??!0;if(c&&u)return!0}if(s===5){const c=((d=h[`${t.x-1},${t.y}`])==null?void 0:d.available)??!0,u=((a=h[`${t.x},${t.y+1}`])==null?void 0:a.available)??!0;if(c&&u)return!0}if(s===7){const c=((m=h[`${t.x-1},${t.y}`])==null?void 0:m.available)??!0,u=((y=h[`${t.x},${t.y-1}`])==null?void 0:y.available)??!0;if(c&&u)return!0}return!1}generate(){for(;this.cells.length<n.wireMaxLen;){const t=this.cells[this.cells.length-1],s=i()<.5?[0,1,-1]:[0,-1,1];for(;s.length>0;){let l=t.dirInd+s.splice(r(i()**n.straightness*s.length),1)[0];l=l<0?8+l:l%8;const g=S[l],e=t.x+g[0],o=t.y+g[1],d=o*k+e,a=d>=0&&d<x.length?x[d]:!1;if(!(e<0||e>=k||o<0||o>=B||!a||!a.available||!this.validNoCrossOver(t,l))){a.available=!1,a.dirInd=l,L-=1,this.cells.push(a);break}}if(s.length===0)break}}draw(){var y,c,u,z;const t=document.createElementNS("http://www.w3.org/2000/svg","path"),s=document.createElementNS("http://www.w3.org/2000/svg","circle"),l=document.createElementNS("http://www.w3.org/2000/svg","circle");let g="";const e=n.size,o=i()*(e/6)+e/12;s.setAttribute("r",`${o}`),l.setAttribute("r",`${o}`),s.setAttribute("stroke",n.stroke),l.setAttribute("stroke",n.stroke),s.setAttribute("stroke-width",`${o/4}`),l.setAttribute("stroke-width",`${o/2}`);const d=i()>.5;s.setAttribute("fill",d?n.stroke:n.bg),l.setAttribute("fill",d?n.stroke:n.bg);for(let f=0;f<this.cells.length;f+=1){const p=this.cells[f];f===0&&(g+=`M ${p.x*e+e/2} ${p.y*e+e/2}`,s.setAttribute("cx",`${p.x*e+e/2}`),s.setAttribute("cy",`${p.y*e+e/2}`)),f<this.cells.length&&(g+=` L ${p.x*e+e/2} ${p.y*e+e/2}`),f===this.cells.length-1&&(l.setAttribute("cx",`${p.x*e+e/2}`),l.setAttribute("cy",`${p.y*e+e/2}`))}t.setAttribute("d",g),t.setAttribute("fill","none"),t.setAttribute("stroke",n.stroke),t.setAttribute("stroke-width",`${o*2}`);const a=t.getTotalLength();t.style.cssText=`
      --len: ${a}; 
      --len-1:${-a};
      --len_add_bloomLen:${a+n.pathBloomLength};
      --animate-time:${(a/n.bloomSpeed).toFixed(1)}s
      `;const m=i()>.5;if(m){const f=t.cloneNode(!1);t.setAttribute("stroke",n.pathBg),(y=$.value)==null||y.append(f)}t.classList.add(m?"animated-path-repeat":"animated-path-once"),(c=$.value)==null||c.append(t),(u=$.value)==null||u.append(s),(z=$.value)==null||z.append(l)}}for(let b=0;b<B;b+=1)for(let t=0;t<k;t+=1){const s=new T(t,b);x.push(s),h[`${t},${b}`]=s}for(;M.length<L;){const b=x[r(i()*x.length)];if(!b.available)continue;const t=new R(b);M.push(t),t.generate(),t.draw()}}),(A,_)=>(E(),F("div",{ref_key:"con",ref:N,class:"w-full h-full",style:G({background:O.value})},[(E(),F("svg",{ref_key:"svgCon",ref:$,class:"block",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},null,512))],4))}});export{J as default};