import{H as oe,V as F,Q as q,O as T,au as ie,aN as N,aO as J,aP as H,C as U,J as I,R as ne,aQ as se,U as ae,aR as re,aS as O,aT as ce,d as le,b as X,h as he,G as ue,K as de,a2 as Y,ap as ve,aL as me,S as pe,av as fe,P as we,W as ye,c as be,a as Z,o as ge,aJ as Se,_ as xe}from"./index.d28c4049.js";import{S as ke}from"./stats.module.f23e5c82.js";import{F as Ve,f as Le,T as Ee}from"./TextGeometry.3dcfb643.js";const Me={type:"change"};class Pe extends oe{constructor(i,l){super(),this.object=i,this.domElement=l,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const e=this,b=1e-6,g=new q,S=new F;this.tmpQuaternion=new q,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new F(0,0,0),this.rotationVector=new F(0,0,0),this.keydown=function(o){if(!o.altKey){switch(o.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(o){switch(o.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()},this.pointerdown=function(o){if(this.dragToLook)this.status++;else{switch(o.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(o){if(!this.dragToLook||this.status>0){const c=this.getContainerDimensions(),n=c.size[0]/2,v=c.size[1]/2;this.moveState.yawLeft=-(o.pageX-c.offset[0]-n)/n,this.moveState.pitchDown=(o.pageY-c.offset[1]-v)/v,this.updateRotationVector()}},this.pointerup=function(o){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(o.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()},this.update=function(o){const c=o*e.movementSpeed,n=o*e.rollSpeed;e.object.translateX(e.moveVector.x*c),e.object.translateY(e.moveVector.y*c),e.object.translateZ(e.moveVector.z*c),e.tmpQuaternion.set(e.rotationVector.x*n,e.rotationVector.y*n,e.rotationVector.z*n,1).normalize(),e.object.quaternion.multiply(e.tmpQuaternion),(S.distanceToSquared(e.object.position)>b||8*(1-g.dot(e.object.quaternion))>b)&&(e.dispatchEvent(Me),g.copy(e.object.quaternion),S.copy(e.object.position))},this.updateMovementVector=function(){const o=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-o+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",$),this.domElement.removeEventListener("pointerdown",_),this.domElement.removeEventListener("pointermove",V),this.domElement.removeEventListener("pointerup",m),window.removeEventListener("keydown",x),window.removeEventListener("keyup",d)};const V=this.pointermove.bind(this),_=this.pointerdown.bind(this),m=this.pointerup.bind(this),x=this.keydown.bind(this),d=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",$),this.domElement.addEventListener("pointerdown",_),this.domElement.addEventListener("pointermove",V),this.domElement.addEventListener("pointerup",m),window.addEventListener("keydown",x),window.addEventListener("keyup",d),this.updateMovementVector(),this.updateRotationVector()}}function $(y){y.preventDefault()}class C extends T{constructor(){super(C.Geometry,new ie({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const i=new F,l=new F,e=new N(16,16,J),b=new N(16,16,J),g=C.Geometry,S=new H({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),V=new H({uniforms:{map:{value:e},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),_=new T(g,S),m=[],x=P.Shader,d=new H({uniforms:{map:{value:null},occlusionMap:{value:b},color:{value:new U(16777215)},scale:{value:new I},screenPosition:{value:new F}},vertexShader:x.vertexShader,fragmentShader:x.fragmentShader,blending:ne,transparent:!0,depthWrite:!1}),o=new T(g,d);this.addElement=function(s){m.push(s)};const c=new I,n=new I,v=new se,t=new ce;this.onBeforeRender=function(s,D,a){s.getCurrentViewport(t);const K=t.w/t.z,f=t.z/2,w=t.w/2;let k=16/t.w;if(c.set(k*K,k),v.min.set(t.x,t.y),v.max.set(t.x+(t.z-16),t.y+(t.w-16)),l.setFromMatrixPosition(this.matrixWorld),l.applyMatrix4(a.matrixWorldInverse),!(l.z>0)&&(i.copy(l).applyMatrix4(a.projectionMatrix),n.x=t.x+i.x*f+f-8,n.y=t.y+i.y*w+w-8,v.containsPoint(n))){s.copyFramebufferToTexture(n,e);let h=S.uniforms;h.scale.value=c,h.screenPosition.value=i,s.renderBufferDirect(a,null,g,S,_,null),s.copyFramebufferToTexture(n,b),h=V.uniforms,h.scale.value=c,h.screenPosition.value=i,s.renderBufferDirect(a,null,g,V,_,null);const W=-i.x*2,B=-i.y*2;for(let R=0,G=m.length;R<G;R++){const L=m[R],E=d.uniforms;E.color.value.copy(L.color),E.map.value=L.texture,E.screenPosition.value.x=i.x+W*L.distance,E.screenPosition.value.y=i.y+B*L.distance,k=L.size/t.w;const j=t.w/t.z;E.scale.value.set(k*j,k),d.uniformsNeedUpdate=!0,s.renderBufferDirect(a,null,g,d,o,null)}}},this.dispose=function(){S.dispose(),V.dispose(),d.dispose(),e.dispose(),b.dispose();for(let s=0,D=m.length;s<D;s++)m[s].texture.dispose()}}}class P{constructor(i,l=1,e=0,b=new U(16777215)){this.texture=i,this.size=l,this.distance=e,this.color=b}}P.Shader={uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`};C.Geometry=function(){const y=new ae,i=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),l=new re(i,5);return y.setIndex([0,1,2,0,2,3]),y.setAttribute("position",new O(l,3,0,!1)),y.setAttribute("uv",new O(l,2,3,!1)),y}();const _e="/nova/assets/lensflare0.cc6aae5d.png",De="/nova/assets/lensflare3.b777765d.png",ze={class:"viewCon"},Fe=le({__name:"LensFlares",setup(y){const{random:i,PI:l,floor:e,ceil:b,min:g,max:S,sin:V,cos:_}=Math,m=X(),x=X();let d=window.innerWidth,o=window.innerHeight,c,n,v,t,s,D;const a=600,K=200;let f,w,k;const h={color:623843,intensity:1,distance:a,decay:.4};he(async()=>{k=await G(Le),W(),ee(),E(),j(),Q()});function W(){const u=new ue().addFolder("lfParams");u.open(),u.addColor(h,"color").onChange(r=>{f.color.setHex(r)}),u.add(h,"intensity",0,3,.1).onChange(r=>{f.intensity=r}),u.add(h,"distance",0,a*2,1).onChange(r=>{f.distance=r}),u.add(h,"decay",0,10,.1).onChange(r=>{f.decay=r})}const B=new Se;function R(){const p=B.getDelta();n.update(p)}function G(p){const u=new Ve;return new Promise((r,z)=>{u.load(p,function(A){r(A)},void 0,function(A){z(A)})})}function L(p,u){const r=new Ee(p,{font:k,size:20,height:1,curveSegments:1,bevelEnabled:!0,bevelThickness:2,bevelSize:2.4,bevelSegments:3});return new T(r,u)}function E(){const u="can't find a jod,None of this is going well,Demons get out of here".split(",");D=new de,v.add(D);const r=[new Y({color:16777215,flatShading:!0}),new Y({color:16777215})];for(let z=0,A=u.length;z<K;z++){const M=L(u[z%A],r);M.position.x=i()*2*a-a,M.position.y=i()*2*a-a,M.position.z=i()*2*a-a,M.rotation.x=i()*l,M.rotation.y=i()*l,M.rotation.z=i()*l,D.add(M)}}function j(){f=new ve(h.color,h.intensity,h.distance,h.decay),w=new C;const p=new me,u=p.load(_e),r=p.load(De);w.addElement(new P(u,700,0,new U().setHex(h.color))),w.addElement(new P(r,60,.6)),w.addElement(new P(r,70,.7)),w.addElement(new P(r,120,.9)),w.addElement(new P(r,70,1)),f.add(w),v.add(f)}function ee(){v=new pe,v.background=new U().setHSL(.51,.4,.01),v.fog=new fe(v.background,1,a*2),t=new we(75,d/o,1,a*2),t.position.set(a/2,a/2,a/2),t.lookAt(0,0,0),s=new ye({canvas:m.value,antialias:!0}),s.setSize(d,o),window.addEventListener("resize",te),c=ke(),x.value.append(c.dom),n=new Pe(t,s.domElement),n.movementSpeed=100,n.domElement=s.domElement,n.rollSpeed=Math.PI/18,n.autoForward=!1,n.dragToLook=!1}function Q(){requestAnimationFrame(Q),c.update(),R(),s.render(v,t)}function te(){d=window.innerWidth,o=window.innerHeight,t.aspect=d/o,t.updateProjectionMatrix(),s.setSize(d,o)}return(p,u)=>(ge(),be("div",ze,[Z("div",{class:"canvasCon",ref_key:"canvasCon",ref:x},[Z("canvas",{class:"canvas",ref_key:"canvasDom",ref:m},null,512)],512)]))}});const Te=xe(Fe,[["__scopeId","data-v-06476d23"]]);export{Te as default};
