var C=Object.defineProperty;var N=(o,a,r)=>a in o?C(o,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[a]=r;var c=(o,a,r)=>(N(o,typeof a!="symbol"?a+"":a,r),r);import{C as R}from"./Card.e5710724.js";import{P as j}from"./P5Con.f20865f1.js";import{d as A,b as B,c as I,e as m,w as P,o as J,_ as Q}from"./index.87d26285.js";import"./p5.min.4a57bc93.js";const T={class:"maze flex justify-center items-center"},U=A({__name:"Maze",setup(o){const{floor:a,ceil:r,random:v}=Math;B();let _=800,x=600;const e=20,g=a(_/e)-1,W=a(x/e)-1;let n=[];const y="#2980b9",$="#fdcb6e",k="#d63031",w="#c0392b";class b{constructor(t,s,l){c(this,"$p");c(this,"x");c(this,"y");c(this,"isWall");c(this,"visited");this.$p=t,this.x=s,this.y=l,this.isWall=[!0,!0,!0,!0],this.visited=!1}getNeighbor(){let t=[],s=[[0,1],[0,-1],[1,0],[-1,0]];for(let l=0;l<4;l++){let[u,S]=s[l],p=this.x+u,d=this.y+S;p<0||p>=g||d<0||d>=W||n[p][d].visited||t.push(n[p][d])}return t.length>0?t[a(v()*t.length)]:null}highlight(){this.$p.fill(k),this.$p.noStroke(),this.$p.rect(this.x*e,this.y*e,e,e)}draw(){let t=this.x*e+4,s=this.y*e+4;this.$p.stroke($),this.$p.strokeWeight(4),this.$p.strokeCap(this.$p.SQUARE),this.$p.strokeJoin(this.$p.MITER),this.isWall[0]&&this.$p.line(t,s,t+e,s),this.isWall[1]&&this.$p.line(t+e,s,t+e,s+e),this.isWall[2]&&this.$p.line(t+e,s+e,t,s+e),this.isWall[3]&&this.$p.line(t,s+e,t,s),this.visited&&(this.$p.noStroke(),this.$p.fill(w),this.$p.rect(t,s,e,e))}}function z(i){n=[];for(let t=0;t<g;t++){let s=[];for(let l=0;l<W;l++){const u=new b(i,t,l);s.push(u)}n.push(s)}}function E(i,t){let s=t.x-i.x,l=t.y-i.y;s>0?(i.isWall[1]=!1,t.isWall[3]=!1):s<0&&(i.isWall[3]=!1,t.isWall[1]=!1),l>0?(i.isWall[2]=!1,t.isWall[0]=!1):l<0&&(i.isWall[0]=!1,t.isWall[2]=!1)}let f=[],h;function M(i){i.setup=function(){i.createCanvas(_,x),i.background(y),i.frameRate(60),z(i),f.push(n[0][0])},i.draw=function(){if(n.forEach(t=>{t.forEach(s=>{s.draw()})}),f.length>0){h=f.pop(),h.highlight(),h.visited=!0;const t=h.getNeighbor();t&&(f.push(h),E(h,t),t.visited=!0,f.push(t))}}}return(i,t)=>(J(),I("div",T,[m(R,{class:"card"},{default:P(()=>[m(j,{sketch:M})]),_:1})]))}});const F=Q(U,[["__scopeId","data-v-fa3e550f"]]);export{F as default};