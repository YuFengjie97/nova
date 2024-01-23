import{a as et}from"./simplex-noise-WoAbzQnb.js";import{d as it,r as st,C as ot,h as lt,V as H,o as ct,b as rt,e as at}from"./index-1TrBq7Et.js";import{g as ht}from"./math-VuRofD-j.js";import{v as ut,i as ft}from"./color--44dIFKd.js";const N=11102230246251565e-32,K=134217729,_t=(3+8*N)*N;function Y(r,t,s,c,u){let i,o,l,y,_=t[0],g=c[0],n=0,e=0;g>_==g>-_?(i=_,_=t[++n]):(i=g,g=c[++e]);let h=0;if(n<r&&e<s)for(g>_==g>-_?(o=_+i,l=i-(o-_),_=t[++n]):(o=g+i,l=i-(o-g),g=c[++e]),i=o,l!==0&&(u[h++]=l);n<r&&e<s;)g>_==g>-_?(o=i+_,y=o-i,l=i-(o-y)+(_-y),_=t[++n]):(o=i+g,y=o-i,l=i-(o-y)+(g-y),g=c[++e]),i=o,l!==0&&(u[h++]=l);for(;n<r;)o=i+_,y=o-i,l=i-(o-y)+(_-y),_=t[++n],i=o,l!==0&&(u[h++]=l);for(;e<s;)o=i+g,y=o-i,l=i-(o-y)+(g-y),g=c[++e],i=o,l!==0&&(u[h++]=l);return(i!==0||h===0)&&(u[h++]=i),h}function yt(r,t){let s=t[0];for(let c=1;c<r;c++)s+=t[c];return s}function G(r){return new Float64Array(r)}const dt=(3+16*N)*N,gt=(2+12*N)*N,wt=(9+64*N)*N*N,j=G(4),W=G(8),Z=G(12),$=G(16),D=G(4);function mt(r,t,s,c,u,i,o){let l,y,_,g,n,e,h,w,f,b,d,m,x,k,v,T,C,I;const z=r-u,a=s-u,p=t-i,A=c-i;k=z*A,e=K*z,h=e-(e-z),w=z-h,e=K*A,f=e-(e-A),b=A-f,v=w*b-(k-h*f-w*f-h*b),T=p*a,e=K*p,h=e-(e-p),w=p-h,e=K*a,f=e-(e-a),b=a-f,C=w*b-(T-h*f-w*f-h*b),d=v-C,n=v-d,j[0]=v-(d+n)+(n-C),m=k+d,n=m-k,x=k-(m-n)+(d-n),d=x-T,n=x-d,j[1]=x-(d+n)+(n-T),I=m+d,n=I-m,j[2]=m-(I-n)+(d-n),j[3]=I;let S=yt(4,j),U=gt*o;if(S>=U||-S>=U||(n=r-z,l=r-(z+n)+(n-u),n=s-a,_=s-(a+n)+(n-u),n=t-p,y=t-(p+n)+(n-i),n=c-A,g=c-(A+n)+(n-i),l===0&&y===0&&_===0&&g===0)||(U=wt*o+_t*Math.abs(S),S+=z*g+A*l-(p*_+a*y),S>=U||-S>=U))return S;k=l*A,e=K*l,h=e-(e-l),w=l-h,e=K*A,f=e-(e-A),b=A-f,v=w*b-(k-h*f-w*f-h*b),T=y*a,e=K*y,h=e-(e-y),w=y-h,e=K*a,f=e-(e-a),b=a-f,C=w*b-(T-h*f-w*f-h*b),d=v-C,n=v-d,D[0]=v-(d+n)+(n-C),m=k+d,n=m-k,x=k-(m-n)+(d-n),d=x-T,n=x-d,D[1]=x-(d+n)+(n-T),I=m+d,n=I-m,D[2]=m-(I-n)+(d-n),D[3]=I;const L=Y(4,j,4,D,W);k=z*g,e=K*z,h=e-(e-z),w=z-h,e=K*g,f=e-(e-g),b=g-f,v=w*b-(k-h*f-w*f-h*b),T=p*_,e=K*p,h=e-(e-p),w=p-h,e=K*_,f=e-(e-_),b=_-f,C=w*b-(T-h*f-w*f-h*b),d=v-C,n=v-d,D[0]=v-(d+n)+(n-C),m=k+d,n=m-k,x=k-(m-n)+(d-n),d=x-T,n=x-d,D[1]=x-(d+n)+(n-T),I=m+d,n=I-m,D[2]=m-(I-n)+(d-n),D[3]=I;const E=Y(L,W,4,D,Z);k=l*g,e=K*l,h=e-(e-l),w=l-h,e=K*g,f=e-(e-g),b=g-f,v=w*b-(k-h*f-w*f-h*b),T=y*_,e=K*y,h=e-(e-y),w=y-h,e=K*_,f=e-(e-_),b=_-f,C=w*b-(T-h*f-w*f-h*b),d=v-C,n=v-d,D[0]=v-(d+n)+(n-C),m=k+d,n=m-k,x=k-(m-n)+(d-n),d=x-T,n=x-d,D[1]=x-(d+n)+(n-T),I=m+d,n=I-m,D[2]=m-(I-n)+(d-n),D[3]=I;const M=Y(E,Z,4,D,$);return $[M-1]}function Q(r,t,s,c,u,i){const o=(t-i)*(s-u),l=(r-u)*(c-i),y=o-l,_=Math.abs(o+l);return Math.abs(y)>=dt*_?y:-mt(r,t,s,c,u,i,_)}const tt=Math.pow(2,-52),V=new Uint32Array(512);class J{static from(t,s=At,c=vt){const u=t.length,i=new Float64Array(u*2);for(let o=0;o<u;o++){const l=t[o];i[2*o]=s(l),i[2*o+1]=c(l)}return new J(i)}constructor(t){const s=t.length>>1;if(s>0&&typeof t[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=t;const c=Math.max(2*s-5,0);this._triangles=new Uint32Array(c*3),this._halfedges=new Int32Array(c*3),this._hashSize=Math.ceil(Math.sqrt(s)),this._hullPrev=new Uint32Array(s),this._hullNext=new Uint32Array(s),this._hullTri=new Uint32Array(s),this._hullHash=new Int32Array(this._hashSize).fill(-1),this._ids=new Uint32Array(s),this._dists=new Float64Array(s),this.update()}update(){const{coords:t,_hullPrev:s,_hullNext:c,_hullTri:u,_hullHash:i}=this,o=t.length>>1;let l=1/0,y=1/0,_=-1/0,g=-1/0;for(let a=0;a<o;a++){const p=t[2*a],A=t[2*a+1];p<l&&(l=p),A<y&&(y=A),p>_&&(_=p),A>g&&(g=A),this._ids[a]=a}const n=(l+_)/2,e=(y+g)/2;let h=1/0,w,f,b;for(let a=0;a<o;a++){const p=O(n,e,t[2*a],t[2*a+1]);p<h&&(w=a,h=p)}const d=t[2*w],m=t[2*w+1];h=1/0;for(let a=0;a<o;a++){if(a===w)continue;const p=O(d,m,t[2*a],t[2*a+1]);p<h&&p>0&&(f=a,h=p)}let x=t[2*f],k=t[2*f+1],v=1/0;for(let a=0;a<o;a++){if(a===w||a===f)continue;const p=xt(d,m,x,k,t[2*a],t[2*a+1]);p<v&&(b=a,v=p)}let T=t[2*b],C=t[2*b+1];if(v===1/0){for(let A=0;A<o;A++)this._dists[A]=t[2*A]-t[0]||t[2*A+1]-t[1];q(this._ids,this._dists,0,o-1);const a=new Uint32Array(o);let p=0;for(let A=0,S=-1/0;A<o;A++){const U=this._ids[A];this._dists[U]>S&&(a[p++]=U,S=this._dists[U])}this.hull=a.subarray(0,p),this.triangles=new Uint32Array(0),this.halfedges=new Uint32Array(0);return}if(Q(d,m,x,k,T,C)<0){const a=f,p=x,A=k;f=b,x=T,k=C,b=a,T=p,C=A}const I=kt(d,m,x,k,T,C);this._cx=I.x,this._cy=I.y;for(let a=0;a<o;a++)this._dists[a]=O(t[2*a],t[2*a+1],I.x,I.y);q(this._ids,this._dists,0,o-1),this._hullStart=w;let z=3;c[w]=s[b]=f,c[f]=s[w]=b,c[b]=s[f]=w,u[w]=0,u[f]=1,u[b]=2,i.fill(-1),i[this._hashKey(d,m)]=w,i[this._hashKey(x,k)]=f,i[this._hashKey(T,C)]=b,this.trianglesLen=0,this._addTriangle(w,f,b,-1,-1,-1);for(let a=0,p,A;a<this._ids.length;a++){const S=this._ids[a],U=t[2*S],L=t[2*S+1];if(a>0&&Math.abs(U-p)<=tt&&Math.abs(L-A)<=tt||(p=U,A=L,S===w||S===f||S===b))continue;let E=0;for(let X=0,nt=this._hashKey(U,L);X<this._hashSize&&(E=i[(nt+X)%this._hashSize],!(E!==-1&&E!==c[E]));X++);E=s[E];let M=E,P;for(;P=c[M],Q(U,L,t[2*M],t[2*M+1],t[2*P],t[2*P+1])>=0;)if(M=P,M===E){M=-1;break}if(M===-1)continue;let F=this._addTriangle(M,S,c[M],-1,-1,u[M]);u[S]=this._legalize(F+2),u[M]=F,z++;let B=c[M];for(;P=c[B],Q(U,L,t[2*B],t[2*B+1],t[2*P],t[2*P+1])<0;)F=this._addTriangle(B,S,P,u[S],-1,u[B]),u[S]=this._legalize(F+2),c[B]=B,z--,B=P;if(M===E)for(;P=s[M],Q(U,L,t[2*P],t[2*P+1],t[2*M],t[2*M+1])<0;)F=this._addTriangle(P,S,M,-1,u[M],u[P]),this._legalize(F+2),u[P]=F,c[M]=M,z--,M=P;this._hullStart=s[S]=M,c[M]=s[B]=S,c[S]=B,i[this._hashKey(U,L)]=S,i[this._hashKey(t[2*M],t[2*M+1])]=M}this.hull=new Uint32Array(z);for(let a=0,p=this._hullStart;a<z;a++)this.hull[a]=p,p=c[p];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(t,s){return Math.floor(bt(t-this._cx,s-this._cy)*this._hashSize)%this._hashSize}_legalize(t){const{_triangles:s,_halfedges:c,coords:u}=this;let i=0,o=0;for(;;){const l=c[t],y=t-t%3;if(o=y+(t+2)%3,l===-1){if(i===0)break;t=V[--i];continue}const _=l-l%3,g=y+(t+1)%3,n=_+(l+2)%3,e=s[o],h=s[t],w=s[g],f=s[n];if(pt(u[2*e],u[2*e+1],u[2*h],u[2*h+1],u[2*w],u[2*w+1],u[2*f],u[2*f+1])){s[t]=f,s[l]=e;const d=c[n];if(d===-1){let x=this._hullStart;do{if(this._hullTri[x]===n){this._hullTri[x]=t;break}x=this._hullPrev[x]}while(x!==this._hullStart)}this._link(t,d),this._link(l,c[o]),this._link(o,n);const m=_+(l+1)%3;i<V.length&&(V[i++]=m)}else{if(i===0)break;t=V[--i]}}return o}_link(t,s){this._halfedges[t]=s,s!==-1&&(this._halfedges[s]=t)}_addTriangle(t,s,c,u,i,o){const l=this.trianglesLen;return this._triangles[l]=t,this._triangles[l+1]=s,this._triangles[l+2]=c,this._link(l,u),this._link(l+1,i),this._link(l+2,o),this.trianglesLen+=3,l}}function bt(r,t){const s=r/(Math.abs(r)+Math.abs(t));return(t>0?3-s:1+s)/4}function O(r,t,s,c){const u=r-s,i=t-c;return u*u+i*i}function pt(r,t,s,c,u,i,o,l){const y=r-o,_=t-l,g=s-o,n=c-l,e=u-o,h=i-l,w=y*y+_*_,f=g*g+n*n,b=e*e+h*h;return y*(n*b-f*h)-_*(g*b-f*e)+w*(g*h-n*e)<0}function xt(r,t,s,c,u,i){const o=s-r,l=c-t,y=u-r,_=i-t,g=o*o+l*l,n=y*y+_*_,e=.5/(o*_-l*y),h=(_*g-l*n)*e,w=(o*n-y*g)*e;return h*h+w*w}function kt(r,t,s,c,u,i){const o=s-r,l=c-t,y=u-r,_=i-t,g=o*o+l*l,n=y*y+_*_,e=.5/(o*_-l*y),h=r+(_*g-l*n)*e,w=t+(o*n-y*g)*e;return{x:h,y:w}}function q(r,t,s,c){if(c-s<=20)for(let u=s+1;u<=c;u++){const i=r[u],o=t[i];let l=u-1;for(;l>=s&&t[r[l]]>o;)r[l+1]=r[l--];r[l+1]=i}else{const u=s+c>>1;let i=s+1,o=c;R(r,u,i),t[r[s]]>t[r[c]]&&R(r,s,c),t[r[i]]>t[r[c]]&&R(r,i,c),t[r[s]]>t[r[i]]&&R(r,s,i);const l=r[i],y=t[l];for(;;){do i++;while(t[r[i]]<y);do o--;while(t[r[o]]>y);if(o<i)break;R(r,i,o)}r[s+1]=r[o],r[o]=l,c-i+1>=o-s?(q(r,t,i,c),q(r,t,s,o-1)):(q(r,t,s,o-1),q(r,t,i,c))}}function R(r,t,s){const c=r[t];r[t]=r[s],r[s]=c}function At(r){return r[0]}function vt(r){return r[1]}const Tt={class:"w-full h-full"},zt=it({__name:"delaunator",setup(r){const t=et(),{random:s}=Math,c=st(),y=ft([1,.5,.5],[.5,.5,.5],[.75,1,.667],[.8,1,.333]);let _=0;return ot(()=>{cancelAnimationFrame(_)}),lt(()=>{if(!c.value)return;const{width:g,height:n}=c.value.getBoundingClientRect(),e=c.value.getContext("2d");e.strokeStyle="transparent",c.value.width=g,c.value.height=n;const h=1e3,w=[],f=[];b();function b(){const m=[];for(let v=0;v<h;v+=1){const T=s()*(g+200)-100,C=s()*(n+200)-100;m.push(T,C)}const k=new J(m).triangles;for(let v=0;v<k.length;v+=3){const T=k[v],C=k[v+1],I=k[v+2],z=new H(m[T*2],m[T*2+1]),a=new H(m[C*2],m[C*2+1]),p=new H(m[I*2],m[I*2+1]);w.push({p1:z,p2:a,p3:p});const A=ht(z,a,p).multiply(new H(.001,.001));f.push(A)}}function d(){const m=performance.now()/8e3;e.fillStyle="rgba(0,0,0,0.02)",e.fillRect(0,0,g,n),w.forEach(({p1:x,p2:k,p3:v},T)=>{e.beginPath(),e.moveTo(x.x,x.y),e.lineTo(k.x,k.y),e.lineTo(v.x,v.y),e.lineTo(x.x,x.y);const C=ut(y(t(f[T].x+m,f[T].y+m)));e.strokeStyle=C,e.fillStyle=C,e.stroke(),e.fill()}),_=requestAnimationFrame(d)}d()}),(g,n)=>(ct(),rt("div",Tt,[at("canvas",{ref_key:"canvas",ref:c,class:"block w-full h-full"},null,512)]))}});export{zt as default};
