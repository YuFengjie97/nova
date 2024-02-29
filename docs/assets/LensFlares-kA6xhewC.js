import{G as ie}from"./dat.gui.module-PWGADmkp.js";import{aG as ne,I as _,aH as N,M as T,aq as se,aI as Y,aJ as J,aK as I,E as U,V as H,N as ae,aL as re,O as ce,aM as le,aN as O,aO as he,d as ue,r as X,h as de,J as me,Z,al as ve,aB as pe,S as fe,ar as we,P as ye,W as be,C as ge,o as Se,b as xe,e as $,aD as ke,_ as Ve}from"./index-ZaEf4npp.js";import{S as Ee}from"./stats.module-nRd2dy6L.js";import{F as Le,f as Me,T as De}from"./helvetiker_regular.typeface-PrrTjMu8.js";const Pe={type:"change"};class ze extends ne{constructor(i,l){super(),this.object=i,this.domElement=l,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const e=this,b=1e-6,g=new N,S=new _;this.tmpQuaternion=new N,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new _(0,0,0),this.rotationVector=new _(0,0,0),this.keydown=function(o){if(!o.altKey){switch(o.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(o){switch(o.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()},this.pointerdown=function(o){if(this.dragToLook)this.status++;else{switch(o.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(o){if(!this.dragToLook||this.status>0){const c=this.getContainerDimensions(),n=c.size[0]/2,m=c.size[1]/2;this.moveState.yawLeft=-(o.pageX-c.offset[0]-n)/n,this.moveState.pitchDown=(o.pageY-c.offset[1]-m)/m,this.updateRotationVector()}},this.pointerup=function(o){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(o.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()},this.update=function(o){const c=o*e.movementSpeed,n=o*e.rollSpeed;e.object.translateX(e.moveVector.x*c),e.object.translateY(e.moveVector.y*c),e.object.translateZ(e.moveVector.z*c),e.tmpQuaternion.set(e.rotationVector.x*n,e.rotationVector.y*n,e.rotationVector.z*n,1).normalize(),e.object.quaternion.multiply(e.tmpQuaternion),(S.distanceToSquared(e.object.position)>b||8*(1-g.dot(e.object.quaternion))>b)&&(e.dispatchEvent(Pe),g.copy(e.object.quaternion),S.copy(e.object.position))},this.updateMovementVector=function(){const o=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-o+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",ee),this.domElement.removeEventListener("pointerdown",P),this.domElement.removeEventListener("pointermove",V),this.domElement.removeEventListener("pointerup",v),window.removeEventListener("keydown",x),window.removeEventListener("keyup",d)};const V=this.pointermove.bind(this),P=this.pointerdown.bind(this),v=this.pointerup.bind(this),x=this.keydown.bind(this),d=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",ee),this.domElement.addEventListener("pointerdown",P),this.domElement.addEventListener("pointermove",V),this.domElement.addEventListener("pointerup",v),window.addEventListener("keydown",x),window.addEventListener("keyup",d),this.updateMovementVector(),this.updateRotationVector()}}function ee(y){y.preventDefault()}class C extends T{constructor(){super(C.Geometry,new se({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const i=new _,l=new _,e=new Y(16,16,J),b=new Y(16,16,J),g=C.Geometry,S=new I({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),V=new I({uniforms:{map:{value:e},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),P=new T(g,S),v=[],x=D.Shader,d=new I({uniforms:{map:{value:null},occlusionMap:{value:b},color:{value:new U(16777215)},scale:{value:new H},screenPosition:{value:new _}},vertexShader:x.vertexShader,fragmentShader:x.fragmentShader,blending:ae,transparent:!0,depthWrite:!1}),o=new T(g,d);this.addElement=function(s){v.push(s)};const c=new H,n=new H,m=new re,t=new he;this.onBeforeRender=function(s,z,a){s.getCurrentViewport(t);const K=t.w/t.z,f=t.z/2,w=t.w/2;let k=16/t.w;if(c.set(k*K,k),m.min.set(t.x,t.y),m.max.set(t.x+(t.z-16),t.y+(t.w-16)),l.setFromMatrixPosition(this.matrixWorld),l.applyMatrix4(a.matrixWorldInverse),!(l.z>0)&&(i.copy(l).applyMatrix4(a.projectionMatrix),n.x=t.x+i.x*f+f-8,n.y=t.y+i.y*w+w-8,m.containsPoint(n))){s.copyFramebufferToTexture(n,e);let h=S.uniforms;h.scale.value=c,h.screenPosition.value=i,s.renderBufferDirect(a,null,g,S,P,null),s.copyFramebufferToTexture(n,b),h=V.uniforms,h.scale.value=c,h.screenPosition.value=i,s.renderBufferDirect(a,null,g,V,P,null);const B=-i.x*2,W=-i.y*2;for(let A=0,G=v.length;A<G;A++){const E=v[A],L=d.uniforms;L.color.value.copy(E.color),L.map.value=E.texture,L.screenPosition.value.x=i.x+B*E.distance,L.screenPosition.value.y=i.y+W*E.distance,k=E.size/t.w;const j=t.w/t.z;L.scale.value.set(k*j,k),d.uniformsNeedUpdate=!0,s.renderBufferDirect(a,null,g,d,o,null)}}},this.dispose=function(){S.dispose(),V.dispose(),d.dispose(),e.dispose(),b.dispose();for(let s=0,z=v.length;s<z;s++)v[s].texture.dispose()}}}class D{constructor(i,l=1,e=0,b=new U(16777215)){this.texture=i,this.size=l,this.distance=e,this.color=b}}D.Shader={uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};C.Geometry=function(){const y=new ce,i=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),l=new le(i,5);return y.setIndex([0,1,2,0,2,3]),y.setAttribute("position",new O(l,3,0,!1)),y.setAttribute("uv",new O(l,2,3,!1)),y}();const Fe="/nova/assets/lensflare0-QA4pBekj.png",_e="/nova/assets/lensflare3-vf6V-Y-6.png",Ae={class:"viewCon"},Re=ue({__name:"LensFlares",setup(y){const{random:i,PI:l,floor:e,ceil:b,min:g,max:S,sin:V,cos:P}=Math,v=X(),x=X();let d=window.innerWidth,o=window.innerHeight,c,n,m,t,s,z;const a=600,K=200;let f,w,k;const h={color:623843,intensity:1,distance:a,decay:.4};de(async()=>{k=await G(Me),B(),te(),L(),j(),q()});function B(){const u=new ie().addFolder("lfParams");u.open(),u.addColor(h,"color").onChange(r=>{f.color.setHex(r)}),u.add(h,"intensity",0,3,.1).onChange(r=>{f.intensity=r}),u.add(h,"distance",0,a*2,1).onChange(r=>{f.distance=r}),u.add(h,"decay",0,10,.1).onChange(r=>{f.decay=r})}const W=new ke;function A(){const p=W.getDelta();n.update(p)}function G(p){const u=new Le;return new Promise((r,F)=>{u.load(p,R=>{r(R)},void 0,R=>{F(R)})})}function E(p,u){const r=new De(p,{font:k,size:20,height:1,curveSegments:1,bevelEnabled:!0,bevelThickness:2,bevelSize:2.4,bevelSegments:3});return new T(r,u)}function L(){const u="can't find a jod,None of this is going well,Demons get out of here".split(",");z=new me,m.add(z);const r=[new Z({color:16777215,flatShading:!0}),new Z({color:16777215})];for(let F=0,R=u.length;F<K;F++){const M=E(u[F%R],r);M.position.x=i()*2*a-a,M.position.y=i()*2*a-a,M.position.z=i()*2*a-a,M.rotation.x=i()*l,M.rotation.y=i()*l,M.rotation.z=i()*l,z.add(M)}}function j(){f=new ve(h.color,h.intensity,h.distance,h.decay),w=new C;const p=new pe,u=p.load(Fe),r=p.load(_e);w.addElement(new D(u,700,0,new U().setHex(h.color))),w.addElement(new D(r,60,.6)),w.addElement(new D(r,70,.7)),w.addElement(new D(r,120,.9)),w.addElement(new D(r,70,1)),f.add(w),m.add(f)}function te(){m=new fe,m.background=new U().setHSL(.51,.4,.01),m.fog=new we(m.background,1,a*2),t=new ye(75,d/o,1,a*2),t.position.set(a/2,a/2,a/2),t.lookAt(0,0,0),s=new be({canvas:v.value,antialias:!0}),s.setSize(d,o),window.addEventListener("resize",oe),c=Ee(),x.value.append(c.dom),n=new ze(t,s.domElement),n.movementSpeed=100,n.domElement=s.domElement,n.rollSpeed=Math.PI/18,n.autoForward=!1,n.dragToLook=!1}let Q=0;function q(){Q=requestAnimationFrame(q),c.update(),A(),s.render(m,t)}ge(()=>{cancelAnimationFrame(Q)});function oe(){d=window.innerWidth,o=window.innerHeight,t.aspect=d/o,t.updateProjectionMatrix(),s.setSize(d,o)}return(p,u)=>(Se(),xe("div",Ae,[$("div",{ref_key:"canvasCon",ref:x,class:"canvasCon"},[$("canvas",{ref_key:"canvasDom",ref:v,class:"canvas"},null,512)],512)]))}}),Be=Ve(Re,[["__scopeId","data-v-93774b5d"]]);export{Be as default};
