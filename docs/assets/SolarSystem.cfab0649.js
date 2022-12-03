var De=Object.defineProperty;var ze=(d,e,t)=>e in d?De(d,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[e]=t;var w=(d,e,t)=>(ze(d,typeof e!="symbol"?e+"":e,t),t);import{a5 as fe,h as K,a6 as O,f as de,a7 as z,a8 as N,d as x,a9 as k,aa as Le,C as F,V as D,g as Ae,a2 as Fe,S as He,A as Ve,a as Qe,P as ke,W as Ge,b as Oe,X as Ie,ab as We,G as je,z as Ne,ac as Ke,ad as Xe,L as Ye,ae as $e}from"./stats.module.19a9d4fa.js";import{G as qe}from"./dat.gui.module.5aaed78b.js";import{O as Je}from"./OrbitControls.b964b052.js";import{d as Ze,b as oe,h as et,c as tt,a as le,o as st,_ as it}from"./index.b04169dd.js";const G={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class H{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const rt=new fe(-1,1,1,-1,0,1),X=new K;X.setAttribute("position",new O([-1,3,0,-1,-1,0,3,-1,0],3));X.setAttribute("uv",new O([0,2,0,0,2,0],2));class ce{constructor(e){this._mesh=new de(X,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,rt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ne extends H{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof z?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=N.clone(e.uniforms),this.material=new z({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ce(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class he extends H{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,u;this.inverse?(a=0,u=1):(a=1,u=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(u),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class at extends H{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ot{constructor(e,t){if(this.renderer=e,t===void 0){const i=e.getSize(new x);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new k(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],G===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),ne===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new ne(G),this.clock=new Le}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const u=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}he!==void 0&&(a instanceof he?i=!0:a instanceof at&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new x);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new fe(-1,1,1,-1,0,1);const me=new K;me.setAttribute("position",new O([-1,3,0,-1,-1,0,3,-1,0],3));me.setAttribute("uv",new O([0,2,0,0,2,0],2));class lt extends H{constructor(e,t,i,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new F}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==void 0&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=a),e.autoClear=r}}const ue={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new F(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class L extends H{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new x(e.x,e.y):new x(256,256),this.clearColor=new F(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new k(s,a),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const C=new k(s,a);C.texture.name="UnrealBloomPass.h"+h,C.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(C);const R=new k(s,a);R.texture.name="UnrealBloomPass.v"+h,R.texture.generateMipmaps=!1,this.renderTargetsVertical.push(R),s=Math.round(s/2),a=Math.round(a/2)}ue===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const u=ue;this.highPassUniforms=N.clone(u.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new z({uniforms:this.highPassUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.texSize.value=new x(s,a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const V=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=V,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,G===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const U=G;this.copyUniforms=N.clone(U.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new z({uniforms:this.copyUniforms,vertexShader:U.vertexShader,fragmentShader:U.fragmentShader,blending:Ae,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new F,this.oldClearAlpha=1,this.basic=new Fe,this.fsQuad=new ce(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.texSize.value=new x(i,r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let u=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=u.texture,this.separableBlurMaterials[l].uniforms.direction.value=L.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=L.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),u=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){return new z({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new x(.5,.5)},direction:{value:new x(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new z({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}L.BlurDirectionX=new x(1,0);L.BlurDirectionY=new x(0,1);const nt={class:"viewCon"},ht=Ze({__name:"SolarSystem",setup(d){const{random:e,PI:t,floor:i,ceil:r,min:s,max:a,sin:u,cos:l}=Math,V=oe(),U=oe();let h=window.innerWidth,C=window.innerHeight,R,Q,T,_,B,A,y,Y,S;et(()=>{Me(),ge(),Ce(),xe(),_e(),Te(),we(),ae()});let m,$,q,I,J,Z,ee,te,se,ie,re,p=20,M=10*p,P=20;const W=[];let n={vBase:.001,showHelper:!1,lightVisible:!0,lightColor:15158332,intensity:5,distance:2e3,decay:.5,exposure:1,bloomStrength:1.5,bloomThreshold:0,bloomRadius:0};function pe(){let f=new qe({width:300});f.add(n,"showHelper").onChange(o=>{W.forEach(v=>v.visible=o)}),f.add(n,"vBase",0,.03,.001);const c=f.addFolder("light");c.open(),c.add(n,"lightVisible").onChange(o=>{S.visible=o}),c.addColor(n,"lightColor").onChange(o=>{S.color.setHex(o)}),c.add(n,"intensity",0,7,.1).onChange(o=>{S.intensity=o}),c.add(n,"distance",0,4e3,1).onChange(o=>{S.distance=o}),c.add(n,"decay",0,10,.1).onChange(o=>{S.decay=o});const g=f.addFolder("glow");g.open(),g.add(n,"exposure",0,10,.1).onChange(o=>{B.toneMappingExposure=Math.pow(o,4)}),g.add(n,"bloomStrength",0,10,.1).onChange(o=>{y.threshold=o}),g.add(n,"bloomThreshold",0,10,.1).onChange(o=>{y.strength=o}),g.add(n,"bloomRadius",0,10,.1).onChange(o=>{y.radius=o})}pe();class b{constructor(c=!1,g,o,v,j,E){w(this,"isGlow");w(this,"group");w(this,"targetPlanet");w(this,"planetMesh");w(this,"oribitCurve");w(this,"oribitMesh");w(this,"oribitR");w(this,"t",0);w(this,"vRatio");this.isGlow=c,this.targetPlanet=E,this.group=new je;let ye=new Ne(g,128,128),Pe=new Ke({color:o});if(this.planetMesh=new de(ye,Pe),this.planetMesh.layers.enable(0),this.group.add(this.planetMesh),this.t=e(),this.vRatio=j,E){this.oribitR=v;const{x:Re,y:Be}=E==null?void 0:E.planetMesh.position;E.group.add(this.group),this.oribitCurve=new Xe(Re,Be,v,v,0,2*Math.PI,!0,0);let Ue=new K().setFromPoints(this.oribitCurve.getPoints(300)),Ee=new Ye({color:o});this.oribitMesh=new $e(Ue,Ee),this.oribitMesh.layers.enable(0),this.oribitMesh.rotation.x=t/2,this.group.add(this.oribitMesh)}}planetMoveByCurve(){if(this.t>=1&&(this.t=0),this.targetPlanet){let{x:c,y:g,z:o}=this.targetPlanet.planetMesh.position;this.group.position.set(c,g,o),this.t+=this.vRatio*n.vBase;const{x:v,y:j}=this.oribitCurve.getPoint(this.t);this.planetMesh.position.set(v,0,j)}}}function ge(){Y=new lt(T,_),y=new L(new x(window.innerWidth,window.innerHeight),1.5,.4,.85),y.threshold=n.bloomThreshold,y.strength=n.bloomStrength,y.radius=n.bloomRadius,A=new ot(B),A.addPass(Y),A.addPass(y)}function ve(){_.layers.set(1),A.render(),_.layers.set(0)}function xe(){m=new b(!0,M,15158332,0,0),T.add(m.group),$=new b(!1,.5*p,1752220,M+2*P,4.1,m),q=new b(!1,p,15965202,M+6*P,1.6,m),I=new b(!1,p,3447003,M+12*P,1,m),Z=new b(!1,.8*p,12597547,M+16*P,.5,m),ee=new b(!1,.3*p,2600544,M+20*P,.08,m),te=new b(!1,5*p,9807270,M+30*P,.03,m),se=new b(!1,4*p,9323693,M+50*P,.01,m),ie=new b(!1,3*p,3447003,M+60*P,.006,m),J=new b(!1,.2*p,15528177,1.4*p,2,I),re=[$,q,I,Z,ee,te,se,ie,J]}function be(){re.forEach(f=>{f.planetMoveByCurve()})}function we(){R=He(),U.value.append(R.dom)}function Ce(){Q=new Je(_,B.domElement),Q.target=new D(0,0,0),Q.object.position.set(300,400,800),Q.update()}function Te(){let f=new Ve(1600);f.visible=n.showHelper,W.push(f),T.add(f)}function Se(){h=window.innerWidth,C=window.innerHeight,_.aspect=h/C,_.updateProjectionMatrix(),B.setSize(h,C)}function Me(){T=new Qe,T.background=new F(0),_=new ke(75,h/C,1,4e4),B=new Ge({canvas:V.value,antialias:!0}),B.setSize(h,C),window.addEventListener("resize",Se)}function _e(){const f=new Oe(4210752);T.add(f),S=new Ie(15158332,5,2e3,.5);let{x:c,y:g,z:o}=m.planetMesh.position;S.position.set(c,g,o),T.add(S);const v=new We(S,1600);v.visible=n.showHelper,W.push(v),T.add(v)}function ae(){requestAnimationFrame(ae),R.update(),be(),ve(),B.render(T,_),A.render()}return(f,c)=>(st(),tt("div",nt,[le("div",{class:"canvasCon",ref_key:"canvasCon",ref:U},[le("canvas",{class:"canvas",ref_key:"canvasDom",ref:V},null,512)],512)]))}});const pt=it(ht,[["__scopeId","data-v-7e6f646a"]]);export{pt as default};
