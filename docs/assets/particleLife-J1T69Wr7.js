var j=Object.defineProperty;var D=(o,s,a)=>s in o?j(o,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[s]=a;var r=(o,s,a)=>(D(o,typeof s!="symbol"?s+"":s,a),a);import{d as G,r as I,h as O,E as Q,C as Z,o as q,b as H,O as J,T as K,aP as V,N as X,Q as k,U as Y}from"./index-somVfJ8D.js";import{c as $}from"./chroma-lS9WeMwn.js";import{i as tt}from"./initThree-GAaZivY4.js";import{p as et}from"./dotTexture-mhtNNgxL.js";import"./OrbitControls-Qre0769Z.js";import"./initStats-YaCbrA8F.js";function st(o){return new Worker("/nova/assets/particleLife-Naf20EnW.js",{name:o==null?void 0:o.name})}const ut=G({__name:"particleLife",setup(o){const s=new st,{PI:a,min:v,atan:x}=Math,g=I(),c=8,l=50,C=c*l,B=$.scale(["#00b894","#0984e3","#6c5ce7","#fdcb6e","#e84393"]);return O(async()=>{const{width:d,height:u}=g.value.getBoundingClientRect(),{scene:M,camera:p,renderWrap:F}=tt(g.value,!0,!1,!1),f=d,w=u,P=8,N=.8,U=v(d,u),m=P*2,_=U/10,W=.5;M.background=new Q(0);const A=800;p.position.set(f/2,w/2,A),p.aspect=d/u,p.fov=x(u/2/A)*2/a*180,p.lookAt(f/2,w/2,0),p.updateProjectionMatrix();class z{constructor(e,n){r(this,"positions");r(this,"colors");r(this,"types");r(this,"geo",new J);r(this,"mat",new K({size:P,map:new V().load(et),blending:X,transparent:!1,sizeAttenuation:!0,vertexColors:!0}));r(this,"mesh");this.positions=new Float32Array(c*l*3),this.types=new Float32Array(c*l);for(let t=0;t<e.length;t++)this.positions[t]=e[t];for(let t=0;t<n.length;t++)this.types[t]=n[t];this.positions=e,this.types=n,this.colors=new Float32Array(C*3),this.geo.setAttribute("position",new k(this.positions,3)),this.geo.setAttribute("color",new k(this.colors,3));for(let t=0;t<c;t++)for(let h=0;h<l;h++){const b=t*l+h,[R,S,T]=B(t/c).gl();this.colors[b*3]=R,this.colors[b*3+1]=S,this.colors[b*3+2]=T}this.mesh=new Y(this.geo,this.mat),this.mesh.geometry.attributes.position.needsUpdate=!0,M.add(this.mesh)}accelatorForce(e,n){return e<=m?e/m-1:e<_?(e-m)/(_-m)*n:0}getPos(e){return[this.positions[3*e],this.positions[3*e+1],this.positions[3*e+2]]}update(){s.postMessage({tag:"update_cloud"})}draw(){this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.attributes.color.needsUpdate=!0}}async function E(){return new Promise(i=>{s.postMessage({tag:"init_settings",data:{typeNum:c,typeParticleNum:l,width:d,height:u,xRange:f,yRange:w,frictionFactor:N,distMin:m,distMax:_,forceFactor:W}}),s.onmessage=e=>{e.data.tag==="init_settings_done"&&(console.log("init_settings_done"),i(1))}})}await E();async function L(){return s.postMessage({tag:"init_cloud"}),new Promise(i=>{s.onmessage=e=>{if(e.data.tag==="init_cloud_done"){const{positions:n,types:t}=e.data.data,h=new z(n,t);console.log("init_cloud_done"),i(h)}}})}const y=await L();s.onmessage=i=>{const{data:e}=i.data;if(i.data.tag==="update_cloud_done"){const{positions:n}=e;for(let t=0;t<n.length;t++)y.positions[t]=n[t]}},F(()=>{y.update(),y.draw()})()}),Z(()=>{s.postMessage("close"),s.terminate()}),(d,u)=>(q(),H("div",{ref_key:"con",ref:g,class:"w-full h-full"},null,512))}});export{ut as default};