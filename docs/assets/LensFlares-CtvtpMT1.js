import{G as O}from"./dat.gui.module-DYGKXP-V.js";import{aO as J,L as P,aP as G,R as U,av as Z,aQ as I,aR as H,aS as B,T as $,V as j,I as K,aT as ee,aU as te,U as oe,aV as ie,aW as Q,d as ne,r as q,j as se,M as ae,an as N,aq as re,aM as ce,S as le,aw as he,P as ue,W as de,C as me,e as ve,f as X,aK as pe,o as fe,_ as we}from"./index-CqfaNC88.js";import{S as ye}from"./stats.module--VATS4Kh.js";import{F as be,f as ge,T as Se}from"./helvetiker_regular.typeface-CPSUW8b3.js";const xe={type:"change"};class ke extends J{constructor(i,l){super(),this.object=i,this.domElement=l,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const e=this,y=1e-6,u=new G,m=new P;this.tmpQuaternion=new G,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new P(0,0,0),this.rotationVector=new P(0,0,0),this.keydown=function(n){if(!n.altKey){switch(n.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(n){switch(n.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()},this.pointerdown=function(n){if(this.dragToLook)this.status++;else{switch(n.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(n){if(!this.dragToLook||this.status>0){const a=this.getContainerDimensions(),r=a.size[0]/2,S=a.size[1]/2;this.moveState.yawLeft=-(n.pageX-a.offset[0]-r)/r,this.moveState.pitchDown=(n.pageY-a.offset[1]-S)/S,this.updateRotationVector()}},this.pointerup=function(n){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(n.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()},this.update=function(n){const a=n*e.movementSpeed,r=n*e.rollSpeed;e.object.translateX(e.moveVector.x*a),e.object.translateY(e.moveVector.y*a),e.object.translateZ(e.moveVector.z*a),e.tmpQuaternion.set(e.rotationVector.x*r,e.rotationVector.y*r,e.rotationVector.z*r,1).normalize(),e.object.quaternion.multiply(e.tmpQuaternion),(m.distanceToSquared(e.object.position)>y||8*(1-u.dot(e.object.quaternion))>y)&&(e.dispatchEvent(xe),u.copy(e.object.quaternion),m.copy(e.object.position))},this.updateMovementVector=function(){const n=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-n+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",Y),this.domElement.removeEventListener("pointerdown",v),this.domElement.removeEventListener("pointermove",b),this.domElement.removeEventListener("pointerup",c),window.removeEventListener("keydown",p),window.removeEventListener("keyup",h)};const b=this.pointermove.bind(this),v=this.pointerdown.bind(this),c=this.pointerup.bind(this),p=this.keydown.bind(this),h=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",Y),this.domElement.addEventListener("pointerdown",v),this.domElement.addEventListener("pointermove",b),this.domElement.addEventListener("pointerup",c),window.addEventListener("keydown",p),window.addEventListener("keyup",h),this.updateMovementVector(),this.updateRotationVector()}}function Y(g){g.preventDefault()}class _ extends U{constructor(){super(_.Geometry,new Z({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const i=new P,l=new P,e=new I(16,16,H),y=new I(16,16,H),u=_.Geometry,m=new B({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),b=new B({uniforms:{map:{value:e},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),v=new U(u,m),c=[],p=M.Shader,h=new B({uniforms:{map:{value:null},occlusionMap:{value:y},color:{value:new K(16777215)},scale:{value:new j},screenPosition:{value:new P}},vertexShader:p.vertexShader,fragmentShader:p.fragmentShader,blending:$,transparent:!0,depthWrite:!1}),n=new U(u,h);this.addElement=function(d){c.push(d)};const a=new j,r=new j,S=new ee,t=new te;this.onBeforeRender=function(d,z,k){d.getCurrentViewport(t);const W=t.w/t.z,R=t.z/2,A=t.w/2;let V=16/t.w;if(a.set(V*W,V),S.min.set(t.x,t.y),S.max.set(t.x+(t.z-16),t.y+(t.w-16)),l.setFromMatrixPosition(this.matrixWorld),l.applyMatrix4(k.matrixWorldInverse),!(l.z>0)&&(i.copy(l).applyMatrix4(k.projectionMatrix),r.x=t.x+i.x*R+R-8,r.y=t.y+i.y*A+A-8,S.containsPoint(r))){d.copyFramebufferToTexture(r,e);let E=m.uniforms;E.scale.value=a,E.screenPosition.value=i,d.renderBufferDirect(k,null,u,m,v,null),d.copyFramebufferToTexture(r,y),E=b.uniforms,E.scale.value=a,E.screenPosition.value=i,d.renderBufferDirect(k,null,u,b,v,null);const C=-i.x*2,T=-i.y*2;for(let D=0,f=c.length;D<f;D++){const s=c[D],o=h.uniforms;o.color.value.copy(s.color),o.map.value=s.texture,o.screenPosition.value.x=i.x+C*s.distance,o.screenPosition.value.y=i.y+T*s.distance,V=s.size/t.w;const x=t.w/t.z;o.scale.value.set(V*x,V),h.uniformsNeedUpdate=!0,d.renderBufferDirect(k,null,u,h,n,null)}}},this.dispose=function(){m.dispose(),b.dispose(),h.dispose(),e.dispose(),y.dispose();for(let d=0,z=c.length;d<z;d++)c[d].texture.dispose()}}}class M{constructor(i,l=1,e=0,y=new K(16777215)){this.texture=i,this.size=l,this.distance=e,this.color=y}}M.Shader={uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};_.Geometry=function(){const g=new oe,i=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),l=new ie(i,5);return g.setIndex([0,1,2,0,2,3]),g.setAttribute("position",new Q(l,3,0,!1)),g.setAttribute("uv",new Q(l,2,3,!1)),g}();const Ve="/nova/assets/lensflare0-BADikF6S.png",Ee="/nova/assets/lensflare3-C9_pX5j7.png",Le={class:"viewCon"},w=600,Me=200,Pe=ne({__name:"LensFlares",setup(g){const{random:i,PI:l}=Math,e=q(),y=q();let u=window.innerWidth,m=window.innerHeight,b,v,c,p,h,n,a,r,S;const t={color:623843,intensity:1,distance:w,decay:.4};se(async()=>{S=await W(ge),d(),E(),A(),V(),T()});function d(){const s=new O().addFolder("lfParams");s.open(),s.addColor(t,"color").onChange(o=>{a.color.setHex(o)}),s.add(t,"intensity",0,3,.1).onChange(o=>{a.intensity=o}),s.add(t,"distance",0,w*2,1).onChange(o=>{a.distance=o}),s.add(t,"decay",0,10,.1).onChange(o=>{a.decay=o})}const z=new pe;function k(){const f=z.getDelta();v.update(f)}function W(f){const s=new be;return new Promise((o,x)=>{s.load(f,F=>{o(F)},void 0,F=>{x(F)})})}function R(f,s){const o=new Se(f,{font:S,size:20,height:1,curveSegments:1,bevelEnabled:!0,bevelThickness:2,bevelSize:2.4,bevelSegments:3});return new U(o,s)}function A(){const s="can't find a jod,None of this is going well,Demons get out of here".split(",");n=new ae,c.add(n);const o=[new N({color:16777215,flatShading:!0}),new N({color:16777215})];for(let x=0,F=s.length;x<Me;x++){const L=R(s[x%F],o);L.position.x=i()*2*w-w,L.position.y=i()*2*w-w,L.position.z=i()*2*w-w,L.rotation.x=i()*l,L.rotation.y=i()*l,L.rotation.z=i()*l,n.add(L)}}function V(){a=new re(t.color,t.intensity,t.distance,t.decay),r=new _;const f=new ce,s=f.load(Ve),o=f.load(Ee);r.addElement(new M(s,700,0,new K().setHex(t.color))),r.addElement(new M(o,60,.6)),r.addElement(new M(o,70,.7)),r.addElement(new M(o,120,.9)),r.addElement(new M(o,70,1)),a.add(r),c.add(a)}function E(){c=new le,c.background=new K().setHSL(.51,.4,.01),c.fog=new he(c.background,1,w*2),p=new ue(75,u/m,1,w*2),p.position.set(w/2,w/2,w/2),p.lookAt(0,0,0),h=new de({canvas:e.value,antialias:!0}),h.setSize(u,m),window.addEventListener("resize",D),b=ye(),y.value.append(b.dom),v=new ke(p,h.domElement),v.movementSpeed=100,v.domElement=h.domElement,v.rollSpeed=Math.PI/18,v.autoForward=!1,v.dragToLook=!1}let C=0;function T(){C=requestAnimationFrame(T),b.update(),k(),h.render(c,p)}me(()=>{cancelAnimationFrame(C)});function D(){u=window.innerWidth,m=window.innerHeight,p.aspect=u/m,p.updateProjectionMatrix(),h.setSize(u,m)}return(f,s)=>(fe(),ve("div",Le,[X("div",{ref_key:"canvasCon",ref:y,class:"canvasCon"},[X("canvas",{ref_key:"canvasDom",ref:e,class:"canvas"},null,512)],512)]))}}),Re=we(Pe,[["__scopeId","data-v-93774b5d"]]);export{Re as default};
