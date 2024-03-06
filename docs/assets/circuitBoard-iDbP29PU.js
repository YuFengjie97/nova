var R=Object.defineProperty;var T=(v,n,o)=>n in v?R(v,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):v[n]=o;var b=(v,n,o)=>(T(v,typeof n!="symbol"?n+"":n,o),o);import{d as W,r as P,h as E,o as V,b as j,e as q}from"./index-4DVSqO0R.js";const F=W({__name:"circuitBoard",setup(v){const{floor:n,random:o,PI:C}=Math,w=P(),S=P(),i={size:10,leave:2,wireMaxLen:20};return E(()=>{const{width:k,height:m}=w.value.getBoundingClientRect();w.value.width=k,w.value.height=m;const s=w.value.getContext("2d");s.fillStyle="#10ac84",s.strokeStyle="#ff9f43",s.lineWidth=i.size/4,s.fillRect(0,0,k,m);const z=n(m/i.size),_=n(k/i.size),L=n(z*_/(i.wireMaxLen+i.leave)),$=[],c={},B=[],M=[[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]],N=M.length;class I{constructor(e,l){b(this,"x",0);b(this,"y",0);b(this,"available",!0);b(this,"dirInd",n(o()*M.length));this.x=e,this.y=l}}class O{constructor(e){b(this,"cells",[]);e.available=!1,this.cells.push(e)}validNoCrossOver(e,l){var t,a,x,p,d,y,g,u;if([0,2,4,6].includes(l))return!0;if(l===1){const f=((t=c[`${e.x},${e.y-1}`])==null?void 0:t.available)??!0,h=((a=c[`${e.x+1},${e.y}`])==null?void 0:a.available)??!0;if(f&&h)return!0}if(l===3){const f=((x=c[`${e.x+1},${e.y}`])==null?void 0:x.available)??!0,h=((p=c[`${e.x},${e.y+1}`])==null?void 0:p.available)??!0;if(f&&h)return!0}if(l===5){const f=((d=c[`${e.x-1},${e.y}`])==null?void 0:d.available)??!0,h=((y=c[`${e.x},${e.y+1}`])==null?void 0:y.available)??!0;if(f&&h)return!0}if(l===7){const f=((g=c[`${e.x-1},${e.y}`])==null?void 0:g.available)??!0,h=((u=c[`${e.x},${e.y-1}`])==null?void 0:u.available)??!0;if(f&&h)return!0}return!1}generate(){let e=!0;for(;this.cells.length<i.wireMaxLen&&e;){e=!0;let l=0,t=0;for(;t<N;){const a=this.cells[this.cells.length-1],x=(a.dirInd+l)%8,p=M[x],d=a.x+p[0],y=a.y+p[1],g=y*_+d;if(d<0||d>=_||y<0||y>=z||g<0||g>=$.length){l+=1,t+=1;continue}const u=$[g];if(!u.available){l+=1,t+=1;continue}if(!this.validNoCrossOver(a,x)){l+=1,t+=1;continue}u.available=!1,u.dirInd=x,this.cells.push(u),l=0,t=0;break}t===N&&(e=!1,l=0,t=0)}}update(){}draw(){s.beginPath();const e=this.cells[0],l=this.cells[this.cells.length-1],t=i.size;s.moveTo(e.x*t+t/2,e.y*t+t/2);for(let a=1;a<this.cells.length;a++)s.lineTo(this.cells[a].x*t+t/2,this.cells[a].y*t+t/2);s.stroke(),s.fillStyle="#fff",s.beginPath(),s.arc(e.x*t+t/2,e.y*t+t/2,i.size/4,0,C*2),s.fill(),s.stroke(),s.beginPath(),s.arc(l.x*t+t/2,l.y*t+t/2,i.size/4,0,C*2),s.fill(),s.stroke()}}for(let r=0;r<z;r+=1)for(let e=0;e<_;e+=1){const l=new I(e,r);$.push(l),c[`${e},${r}`]=l}for(;B.length<L;){const r=$[n(o()*$.length)];if(!r.available)continue;const e=new O(r);B.push(e),e.generate(),e.draw()}}),(k,m)=>(V(),j("div",{ref_key:"con",ref:S,class:"w-full h-full"},[q("canvas",{ref_key:"canvas",ref:w,class:"block w-full h-full"},null,512)],512))}});export{F as default};
