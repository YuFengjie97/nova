import{G as oe}from"./dat.gui.module-DcMWPYuf.js";import{ap as ie,I as R,as as q,M as W,ay as ne,aR as X,aS as Y,aT as H,E as B,V as Q,N as se,aU as ae,O as re,aV as ce,aW as J,aX as le,d as he,r as O,h as ue,J as de,Z,al as me,aP as ve,S as pe,az as fe,P as we,W as ye,C as be,o as ge,b as Se,e as $,aN as xe,_ as ke}from"./index-CpijY5gs.js";import{S as Ve}from"./stats.module--VATS4Kh.js";import{F as Ee,f as Le,T as Me}from"./helvetiker_regular.typeface-DwGTPDBG.js";const Pe={type:"change"};class De extends ie{constructor(i,c){super(),this.object=i,this.domElement=c,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const e=this,y=1e-6,b=new q,S=new R;this.tmpQuaternion=new q,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new R(0,0,0),this.rotationVector=new R(0,0,0),this.keydown=function(o){if(!o.altKey){switch(o.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(o){switch(o.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()},this.pointerdown=function(o){if(this.dragToLook)this.status++;else{switch(o.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(o){if(!this.dragToLook||this.status>0){const r=this.getContainerDimensions(),n=r.size[0]/2,u=r.size[1]/2;this.moveState.yawLeft=-(o.pageX-r.offset[0]-n)/n,this.moveState.pitchDown=(o.pageY-r.offset[1]-u)/u,this.updateRotationVector()}},this.pointerup=function(o){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(o.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()},this.update=function(o){const r=o*e.movementSpeed,n=o*e.rollSpeed;e.object.translateX(e.moveVector.x*r),e.object.translateY(e.moveVector.y*r),e.object.translateZ(e.moveVector.z*r),e.tmpQuaternion.set(e.rotationVector.x*n,e.rotationVector.y*n,e.rotationVector.z*n,1).normalize(),e.object.quaternion.multiply(e.tmpQuaternion),(S.distanceToSquared(e.object.position)>y||8*(1-b.dot(e.object.quaternion))>y)&&(e.dispatchEvent(Pe),b.copy(e.object.quaternion),S.copy(e.object.position))},this.updateMovementVector=function(){const o=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-o+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",ee),this.domElement.removeEventListener("pointerdown",z),this.domElement.removeEventListener("pointermove",k),this.domElement.removeEventListener("pointerup",p),window.removeEventListener("keydown",x),window.removeEventListener("keyup",h)};const k=this.pointermove.bind(this),z=this.pointerdown.bind(this),p=this.pointerup.bind(this),x=this.keydown.bind(this),h=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",ee),this.domElement.addEventListener("pointerdown",z),this.domElement.addEventListener("pointermove",k),this.domElement.addEventListener("pointerup",p),window.addEventListener("keydown",x),window.addEventListener("keyup",h),this.updateMovementVector(),this.updateRotationVector()}}function ee(w){w.preventDefault()}class U extends W{constructor(){super(U.Geometry,new ne({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const i=new R,c=new R,e=new X(16,16,Y),y=new X(16,16,Y),b=U.Geometry,S=new H({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),k=new H({uniforms:{map:{value:e},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),z=new W(b,S),p=[],x=D.Shader,h=new H({uniforms:{map:{value:null},occlusionMap:{value:y},color:{value:new B(16777215)},scale:{value:new Q},screenPosition:{value:new R}},vertexShader:x.vertexShader,fragmentShader:x.fragmentShader,blending:se,transparent:!0,depthWrite:!1}),o=new W(b,h);this.addElement=function(s){p.push(s)};const r=new Q,n=new Q,u=new ae,t=new le;this.onBeforeRender=function(s,F,d){s.getCurrentViewport(t);const g=t.w/t.z,A=t.z/2,v=t.w/2;let V=16/t.w;if(r.set(V*g,V),u.min.set(t.x,t.y),u.max.set(t.x+(t.z-16),t.y+(t.w-16)),c.setFromMatrixPosition(this.matrixWorld),c.applyMatrix4(d.matrixWorldInverse),!(c.z>0)&&(i.copy(c).applyMatrix4(d.projectionMatrix),n.x=t.x+i.x*A+A-8,n.y=t.y+i.y*v+v-8,u.containsPoint(n))){s.copyFramebufferToTexture(n,e);let E=S.uniforms;E.scale.value=r,E.screenPosition.value=i,s.renderBufferDirect(d,null,b,S,z,null),s.copyFramebufferToTexture(n,y),E=k.uniforms,E.scale.value=r,E.screenPosition.value=i,s.renderBufferDirect(d,null,b,k,z,null);const j=-i.x*2,G=-i.y*2;for(let C=0,I=p.length;C<I;C++){const L=p[C],M=h.uniforms;M.color.value.copy(L.color),M.map.value=L.texture,M.screenPosition.value.x=i.x+j*L.distance,M.screenPosition.value.y=i.y+G*L.distance,V=L.size/t.w;const K=t.w/t.z;M.scale.value.set(V*K,V),h.uniformsNeedUpdate=!0,s.renderBufferDirect(d,null,b,h,o,null)}}},this.dispose=function(){S.dispose(),k.dispose(),h.dispose(),e.dispose(),y.dispose();for(let s=0,F=p.length;s<F;s++)p[s].texture.dispose()}}}class D{constructor(i,c=1,e=0,y=new B(16777215)){this.texture=i,this.size=c,this.distance=e,this.color=y}}D.Shader={uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};U.Geometry=function(){const w=new re,i=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),c=new ce(i,5);return w.setIndex([0,1,2,0,2,3]),w.setAttribute("position",new J(c,3,0,!1)),w.setAttribute("uv",new J(c,2,3,!1)),w}();const ze="/nova/assets/lensflare0-BADikF6S.png",Fe="/nova/assets/lensflare3-C9_pX5j7.png",_e={class:"viewCon"},m=600,Re=200,Ae=he({__name:"LensFlares",setup(w){const{random:i,PI:c,floor:e,ceil:y,min:b,max:S,sin:k,cos:z}=Math,p=O(),x=O();let h=window.innerWidth,o=window.innerHeight,r,n,u,t,s,F,d,g,A;const v={color:623843,intensity:1,distance:m,decay:.4};ue(async()=>{A=await G(Le),V(),M(),I(),L(),N()});function V(){const l=new oe().addFolder("lfParams");l.open(),l.addColor(v,"color").onChange(a=>{d.color.setHex(a)}),l.add(v,"intensity",0,3,.1).onChange(a=>{d.intensity=a}),l.add(v,"distance",0,m*2,1).onChange(a=>{d.distance=a}),l.add(v,"decay",0,10,.1).onChange(a=>{d.decay=a})}const E=new xe;function j(){const f=E.getDelta();n.update(f)}function G(f){const l=new Ee;return new Promise((a,_)=>{l.load(f,T=>{a(T)},void 0,T=>{_(T)})})}function C(f,l){const a=new Me(f,{font:A,size:20,height:1,curveSegments:1,bevelEnabled:!0,bevelThickness:2,bevelSize:2.4,bevelSegments:3});return new W(a,l)}function I(){const l="can't find a jod,None of this is going well,Demons get out of here".split(",");F=new de,u.add(F);const a=[new Z({color:16777215,flatShading:!0}),new Z({color:16777215})];for(let _=0,T=l.length;_<Re;_++){const P=C(l[_%T],a);P.position.x=i()*2*m-m,P.position.y=i()*2*m-m,P.position.z=i()*2*m-m,P.rotation.x=i()*c,P.rotation.y=i()*c,P.rotation.z=i()*c,F.add(P)}}function L(){d=new me(v.color,v.intensity,v.distance,v.decay),g=new U;const f=new ve,l=f.load(ze),a=f.load(Fe);g.addElement(new D(l,700,0,new B().setHex(v.color))),g.addElement(new D(a,60,.6)),g.addElement(new D(a,70,.7)),g.addElement(new D(a,120,.9)),g.addElement(new D(a,70,1)),d.add(g),u.add(d)}function M(){u=new pe,u.background=new B().setHSL(.51,.4,.01),u.fog=new fe(u.background,1,m*2),t=new we(75,h/o,1,m*2),t.position.set(m/2,m/2,m/2),t.lookAt(0,0,0),s=new ye({canvas:p.value,antialias:!0}),s.setSize(h,o),window.addEventListener("resize",te),r=Ve(),x.value.append(r.dom),n=new De(t,s.domElement),n.movementSpeed=100,n.domElement=s.domElement,n.rollSpeed=Math.PI/18,n.autoForward=!1,n.dragToLook=!1}let K=0;function N(){K=requestAnimationFrame(N),r.update(),j(),s.render(u,t)}be(()=>{cancelAnimationFrame(K)});function te(){h=window.innerWidth,o=window.innerHeight,t.aspect=h/o,t.updateProjectionMatrix(),s.setSize(h,o)}return(f,l)=>(ge(),Se("div",_e,[$("div",{ref_key:"canvasCon",ref:x,class:"canvasCon"},[$("canvas",{ref_key:"canvasDom",ref:p,class:"canvas"},null,512)],512)]))}}),We=ke(Ae,[["__scopeId","data-v-93774b5d"]]);export{We as default};
