const V=.3333333333333333,c=1/6,K=b=>Math.floor(b)|0,L=new Float64Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]);function _(b=Math.random){const e=W(b),o=new Float64Array(e).map(l=>L[l%12*3]),t=new Float64Array(e).map(l=>L[l%12*3+1]),z=new Float64Array(e).map(l=>L[l%12*3+2]);return function(A,S,G){let h,D,M,N;const P=(A+S+G)*V,T=K(A+P),U=K(S+P),X=K(G+P),Y=(T+U+X)*c,O=T-Y,Q=U-Y,R=X-Y,i=A-O,r=S-Q,s=G-R;let a,f,m,p,u,y;i>=r?r>=s?(a=1,f=0,m=0,p=1,u=1,y=0):i>=s?(a=1,f=0,m=0,p=1,u=0,y=1):(a=0,f=0,m=1,p=1,u=0,y=1):r<s?(a=0,f=0,m=1,p=0,u=1,y=1):i<s?(a=0,f=1,m=0,p=0,u=1,y=1):(a=0,f=1,m=0,p=1,u=1,y=0);const Z=i-a+c,q=r-f+c,v=s-m+c,B=i-p+2*c,C=r-u+2*c,E=s-y+2*c,H=i-1+3*c,I=r-1+3*c,J=s-1+3*c,k=T&255,w=U&255,x=X&255;let d=.6-i*i-r*r-s*s;if(d<0)h=0;else{const n=k+e[w+e[x]];d*=d,h=d*d*(o[n]*i+t[n]*r+z[n]*s)}let F=.6-Z*Z-q*q-v*v;if(F<0)D=0;else{const n=k+a+e[w+f+e[x+m]];F*=F,D=F*F*(o[n]*Z+t[n]*q+z[n]*v)}let g=.6-B*B-C*C-E*E;if(g<0)M=0;else{const n=k+p+e[w+u+e[x+y]];g*=g,M=g*g*(o[n]*B+t[n]*C+z[n]*E)}let j=.6-H*H-I*I-J*J;if(j<0)N=0;else{const n=k+1+e[w+1+e[x+1]];j*=j,N=j*j*(o[n]*H+t[n]*I+z[n]*J)}return 32*(h+D+M+N)}}function W(b){const o=new Uint8Array(512);for(let t=0;t<512/2;t++)o[t]=t;for(let t=0;t<512/2-1;t++){const z=t+~~(b()*(256-t)),l=o[t];o[t]=o[z],o[z]=l}for(let t=256;t<512;t++)o[t]=o[t-256];return o}export{_ as c};