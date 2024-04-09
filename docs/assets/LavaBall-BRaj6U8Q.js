import{G}from"./dat.gui.module-DcMWPYuf.js";import{V as h,aI as b,aH as w,aG as g,K as B,d as O,r as U,h as X,aL as A,G as y,aM as I,M as V,ac as W,S as Y,C as j,P as H,W as Z,D as q,E as J,B as $,b as ee,e as D,aJ as te,o as ne,_ as ie}from"./index-BkxFcAok.js";import{S as ae}from"./stats.module--VATS4Kh.js";import{O as re}from"./OrbitControls-DAtR5M-x.js";import{P as R,F,R as oe,E as se}from"./RenderPass-AbMwISxY.js";const x={defines:{KERNEL_SIZE_FLOAT:"25.0",KERNEL_SIZE_INT:"25"},uniforms:{tDiffuse:{value:null},uImageIncrement:{value:new h(.001953125,0)},cKernel:{value:[]}},vertexShader:`

		uniform vec2 uImageIncrement;

		varying vec2 vUv;

		void main() {

			vUv = uv - ( ( KERNEL_SIZE_FLOAT - 1.0 ) / 2.0 ) * uImageIncrement;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float cKernel[ KERNEL_SIZE_INT ];

		uniform sampler2D tDiffuse;
		uniform vec2 uImageIncrement;

		varying vec2 vUv;

		void main() {

			vec2 imageCoord = vUv;
			vec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );

			for( int i = 0; i < KERNEL_SIZE_INT; i ++ ) {

				sum += texture2D( tDiffuse, imageCoord ) * cKernel[ i ];
				imageCoord += uImageIncrement;

			}

			gl_FragColor = sum;

		}`,buildKernel:function(s){let t=2*Math.ceil(s*3)+1;t>25&&(t=25);const i=(t-1)*.5,n=new Array(t);let r=0;for(let a=0;a<t;++a)n[a]=le(a-i,s),r+=n[a];for(let a=0;a<t;++a)n[a]/=r;return n}};function le(s,e){return Math.exp(-(s*s)/(2*e*e))}class c extends R{constructor(e=1,t=25,i=4){super(),this.renderTargetX=new b,this.renderTargetX.texture.name="BloomPass.x",this.renderTargetY=new b,this.renderTargetY.texture.name="BloomPass.y",this.combineUniforms=w.clone(S.uniforms),this.combineUniforms.strength.value=e,this.materialCombine=new g({uniforms:this.combineUniforms,vertexShader:S.vertexShader,fragmentShader:S.fragmentShader,blending:B,transparent:!0}),x===void 0&&console.error("THREE.BloomPass relies on ConvolutionShader");const n=x;this.convolutionUniforms=w.clone(n.uniforms),this.convolutionUniforms.uImageIncrement.value=c.blurX,this.convolutionUniforms.cKernel.value=x.buildKernel(i),this.materialConvolution=new g({uniforms:this.convolutionUniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,defines:{KERNEL_SIZE_FLOAT:t.toFixed(1),KERNEL_SIZE_INT:t.toFixed(0)}}),this.needsSwap=!1,this.fsQuad=new F(null)}render(e,t,i,n,r){r&&e.state.buffers.stencil.setTest(!1),this.fsQuad.material=this.materialConvolution,this.convolutionUniforms.tDiffuse.value=i.texture,this.convolutionUniforms.uImageIncrement.value=c.blurX,e.setRenderTarget(this.renderTargetX),e.clear(),this.fsQuad.render(e),this.convolutionUniforms.tDiffuse.value=this.renderTargetX.texture,this.convolutionUniforms.uImageIncrement.value=c.blurY,e.setRenderTarget(this.renderTargetY),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCombine,this.combineUniforms.tDiffuse.value=this.renderTargetY.texture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(i),this.clear&&e.clear(),this.fsQuad.render(e)}setSize(e,t){this.renderTargetX.setSize(e,t),this.renderTargetY.setSize(e,t)}dispose(){this.renderTargetX.dispose(),this.renderTargetY.dispose(),this.materialCombine.dispose(),this.materialConvolution.dispose(),this.fsQuad.dispose()}}const S={uniforms:{tDiffuse:{value:null},strength:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float strength;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = strength * texel;

		}`};c.blurX=new h(.001953125,0);c.blurY=new h(0,.001953125);const E={uniforms:{tDiffuse:{value:null},time:{value:0},nIntensity:{value:.5},sIntensity:{value:.05},sCount:{value:4096},grayscale:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		// control parameter
		uniform float time;

		uniform bool grayscale;

		// noise effect intensity value (0 = no effect, 1 = full effect)
		uniform float nIntensity;

		// scanlines effect intensity value (0 = no effect, 1 = full effect)
		uniform float sIntensity;

		// scanlines effect count value (0 = no effect, 4096 = full effect)
		uniform float sCount;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

		// sample the source
			vec4 cTextureScreen = texture2D( tDiffuse, vUv );

		// make some noise
			float dx = rand( vUv + time );

		// add noise
			vec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx, 0.0, 1.0 );

		// get us a sine and cosine
			vec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );

		// add scanlines
			cResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;

		// interpolate between source and result by intensity
			cResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );

		// convert to grayscale if desired
			if( grayscale ) {

				cResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );

			}

			gl_FragColor =  vec4( cResult, cTextureScreen.a );

		}`};class ue extends R{constructor(e,t,i,n){super(),E===void 0&&console.error("THREE.FilmPass relies on FilmShader");const r=E;this.uniforms=w.clone(r.uniforms),this.material=new g({uniforms:this.uniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),n!==void 0&&(this.uniforms.grayscale.value=n),e!==void 0&&(this.uniforms.nIntensity.value=e),t!==void 0&&(this.uniforms.sIntensity.value=t),i!==void 0&&(this.uniforms.sCount.value=i),this.fsQuad=new F(this.material)}render(e,t,i,n){this.uniforms.tDiffuse.value=i.texture,this.uniforms.time.value+=n,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const ce="/nova/assets/cloud-CwOgKcfO.png",fe="/nova/assets/lavatile-Dcesmnuo.jpg",me={class:"viewCon"},ve=O({__name:"LavaBall",setup(s){const e=U(),t=U();let i=window.innerWidth,n=window.innerHeight,r,a,f,m,o,v;const L=new te;let l,T;X(()=>{M(),N(),K(),z(),_()});function M(){new G}function P(){const u=5*L.getDelta();l.time.value+=.2*u,o.clear(),v.render(.01)}function K(){const u=new A;l={fogDensity:{value:.45},fogColor:{value:new y(0,0,0)},time:{value:1},uvScale:{value:new h(3,1)},texture1:{value:u.load(ce)},texture2:{value:u.load(fe)}},l.texture1.value.wrapS=l.texture1.value.wrapT=I,l.texture2.value.wrapS=l.texture2.value.wrapT=I;const d=`
  uniform vec2 uvScale;
  varying vec2 vUv;

  void main()
  {

    vUv = uvScale * uv;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_Position = projectionMatrix * mvPosition;

  }
    `,p=`
  uniform float time;

      uniform float fogDensity;
      uniform vec3 fogColor;

      uniform sampler2D texture1;
      uniform sampler2D texture2;

      varying vec2 vUv;

      void main( void ) {

        vec2 position = - 1.0 + 2.0 * vUv;

        vec4 noise = texture2D( texture1, vUv );
        vec2 T1 = vUv + vec2( 1.5, - 1.5 ) * time * 0.02;
        vec2 T2 = vUv + vec2( - 0.5, 2.0 ) * time * 0.01;

        T1.x += noise.x * 2.0;
        T1.y += noise.y * 2.0;
        T2.x -= noise.y * 0.2;
        T2.y += noise.z * 0.2;

        float p = texture2D( texture1, T1 * 2.0 ).a;

        vec4 color = texture2D( texture2, T2 * 2.0 );
        vec4 temp = color * ( vec4( p, p, p, p ) * 2.0 ) + ( color * color - 0.1 );

        if( temp.r > 1.0 ) { temp.bg += clamp( temp.r - 2.0, 0.0, 100.0 ); }
        if( temp.g > 1.0 ) { temp.rb += temp.g - 1.0; }
        if( temp.b > 1.0 ) { temp.rg += temp.b - 1.0; }

        gl_FragColor = temp;

        float depth = gl_FragCoord.z / gl_FragCoord.w;
        const float LOG2 = 1.442695;
        float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );
        fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );

        gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );

    }
  `,k=new g({uniforms:l,vertexShader:d,fragmentShader:p});T=new V(new W(.65,32,16),k),f.add(T)}function z(){const u=new oe(f,m),d=new c(1.25),p=new ue(.35,.95,2048);v=new se(o),v.addPass(u),v.addPass(d),v.addPass(p)}function N(){f=new Y,f.background=new j(4473924),m=new H(75,i/n,.1,1e3),o=new Z({canvas:e.value,antialias:!0}),o.setSize(i,n),o.setPixelRatio(window.devicePixelRatio),o.autoClear=!1,window.addEventListener("resize",Q),f.add(new q(1e3)),f.add(new J(4210752)),r=ae(),t.value.append(r.dom),a=new re(m,o.domElement),a.target=new y(0,0,0),a.object.position.set(1,1,1),a.update()}let C=0;function _(){C=requestAnimationFrame(_),r.update(),P()}$(()=>{cancelAnimationFrame(C)});function Q(){i=window.innerWidth,n=window.innerHeight,m.aspect=i/n,m.updateProjectionMatrix(),o.setSize(i,n)}return(u,d)=>(ne(),ee("div",me,[D("div",{ref_key:"canvasCon",ref:t,class:"canvasCon"},[D("canvas",{ref_key:"canvasDom",ref:e,class:"canvas"},null,512)],512)]))}}),Se=ie(ve,[["__scopeId","data-v-b97af2ee"]]);export{Se as default};
