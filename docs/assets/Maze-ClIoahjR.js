var b=Object.defineProperty;var S=(a,h,o)=>h in a?b(a,h,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[h]=o;var f=(a,h,o)=>(S(a,typeof h!="symbol"?h+"":h,o),o);import{C as M}from"./Card-Dv0n58Uq.js";import{P as N}from"./P5Con-Cx4nSln6.js";import{d as R,e as z,q as m,s as A,o as B}from"./index-Dk52mj26.js";const C={class:"viewCon",style:{height:"100%"}},e=20,P="#c0392b",j="#55efc4",q="#34495e",U=R({__name:"Maze",setup(a){const{floor:h,random:o}=Math;let $=0,x=0,d=0,W=0,r=[];class w{constructor(t,i,l){f(this,"$p");f(this,"x");f(this,"y");f(this,"isWall");f(this,"visited");this.$p=t,this.x=i,this.y=l,this.isWall=[!0,!0,!0,!0],this.visited=!1}getNeighbor(){let t=[],i=[[0,1],[0,-1],[1,0],[-1,0]];for(let l=0;l<4;l++){let[g,E]=i[l],p=this.x+g,u=this.y+E;p<0||p>=d||u<0||u>=W||r[p][u].visited||t.push(r[p][u])}return t.length>0?t[h(o()*t.length)]:null}highlight(){this.$p.fill(j),this.$p.noStroke(),this.$p.rect(this.x*e,this.y*e,e,e)}draw(){let t=this.x*e+2,i=this.y*e+2;this.$p.stroke(P),this.$p.strokeWeight(4),this.$p.strokeCap(this.$p.SQUARE),this.$p.strokeJoin(this.$p.MITER),this.isWall[0]&&this.$p.line(t,i,t+e,i),this.isWall[1]&&this.$p.line(t+e,i,t+e,i+e),this.isWall[2]&&this.$p.line(t+e,i+e,t,i+e),this.isWall[3]&&this.$p.line(t,i+e,t,i),this.visited&&(this.$p.noStroke(),this.$p.fill(q),this.$p.rect(t,i,e,e))}}function y(s){r=[];for(let t=0;t<d;t++){let i=[];for(let l=0;l<W;l++){const g=new w(s,t,l);i.push(g)}r.push(i)}}function _(s,t){let i=t.x-s.x,l=t.y-s.y;i>0?(s.isWall[1]=!1,t.isWall[3]=!1):i<0&&(s.isWall[3]=!1,t.isWall[1]=!1),l>0?(s.isWall[2]=!1,t.isWall[0]=!1):l<0&&(s.isWall[0]=!1,t.isWall[2]=!1)}let c=[],n;function k(s){$=s.width,x=s.height,d=h($/e),W=h(x/e),s.frameRate(60),y(s),c.push(r[0][0])}function v(){if(r.forEach(s=>{s.forEach(t=>{t.draw()})}),c.length>0){n=c.pop(),n.highlight(),n.visited=!0;const s=n.getNeighbor();s&&(c.push(n),_(n,s),s.visited=!0,c.push(s))}}return(s,t)=>(B(),z("div",C,[m(M,null,{default:A(()=>[m(N,{setup:k,draw:v})]),_:1})]))}});export{U as default};
