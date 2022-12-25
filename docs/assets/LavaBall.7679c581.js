import{J as h,aI as C,aH as w,aG as g,R as k,d as B,b,h as G,G as X,aL as O,V as y,aM as U,O as V,ai as W,S as Y,C as j,P as A,W as H,D as Z,E as J,c as q,a as I,o as $,aJ as ee,_ as te}from"./index.d28c4049.js";import{S as ne}from"./stats.module.f23e5c82.js";import{O as ae}from"./OrbitControls.7467a5d6.js";import{P as R,F as D,R as ie,E as re}from"./RenderPass.5fb2dbda.js";const x={defines:{KERNEL_SIZE_FLOAT:"25.0",KERNEL_SIZE_INT:"25"},uniforms:{tDiffuse:{value:null},uImageIncrement:{value:new h(.001953125,0)},cKernel:{value:[]}},vertexShader:`

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

		}`,buildKernel:function(s){let t=2*Math.ceil(s*3)+1;t>25&&(t=25);const a=(t-1)*.5,n=new Array(t);let r=0;for(let i=0;i<t;++i)n[i]=oe(i-a,s),r+=n[i];for(let i=0;i<t;++i)n[i]/=r;return n}};function oe(s,e){return Math.exp(-(s*s)/(2*e*e))}class c extends R{constructor(e=1,t=25,a=4){super(),this.renderTargetX=new C,this.renderTargetX.texture.name="BloomPass.x",this.renderTargetY=new C,this.renderTargetY.texture.name="BloomPass.y",this.combineUniforms=w.clone(S.uniforms),this.combineUniforms.strength.value=e,this.materialCombine=new g({uniforms:this.combineUniforms,vertexShader:S.vertexShader,fragmentShader:S.fragmentShader,blending:k,transparent:!0}),x===void 0&&console.error("THREE.BloomPass relies on ConvolutionShader");const n=x;this.convolutionUniforms=w.clone(n.uniforms),this.convolutionUniforms.uImageIncrement.value=c.blurX,this.convolutionUniforms.cKernel.value=x.buildKernel(a),this.materialConvolution=new g({uniforms:this.convolutionUniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,defines:{KERNEL_SIZE_FLOAT:t.toFixed(1),KERNEL_SIZE_INT:t.toFixed(0)}}),this.needsSwap=!1,this.fsQuad=new D(null)}render(e,t,a,n,r){r&&e.state.buffers.stencil.setTest(!1),this.fsQuad.material=this.materialConvolution,this.convolutionUniforms.tDiffuse.value=a.texture,this.convolutionUniforms.uImageIncrement.value=c.blurX,e.setRenderTarget(this.renderTargetX),e.clear(),this.fsQuad.render(e),this.convolutionUniforms.tDiffuse.value=this.renderTargetX.texture,this.convolutionUniforms.uImageIncrement.value=c.blurY,e.setRenderTarget(this.renderTargetY),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCombine,this.combineUniforms.tDiffuse.value=this.renderTargetY.texture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(a),this.clear&&e.clear(),this.fsQuad.render(e)}setSize(e,t){this.renderTargetX.setSize(e,t),this.renderTargetY.setSize(e,t)}dispose(){this.renderTargetX.dispose(),this.renderTargetY.dispose(),this.materialCombine.dispose(),this.materialConvolution.dispose(),this.fsQuad.dispose()}}const S={uniforms:{tDiffuse:{value:null},strength:{value:1}},vertexShader:`

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

		}`};class se extends R{constructor(e,t,a,n){super(),E===void 0&&console.error("THREE.FilmPass relies on FilmShader");const r=E;this.uniforms=w.clone(r.uniforms),this.material=new g({uniforms:this.uniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),n!==void 0&&(this.uniforms.grayscale.value=n),e!==void 0&&(this.uniforms.nIntensity.value=e),t!==void 0&&(this.uniforms.sIntensity.value=t),a!==void 0&&(this.uniforms.sCount.value=a),this.fsQuad=new D(this.material)}render(e,t,a,n){this.uniforms.tDiffuse.value=a.texture,this.uniforms.time.value+=n,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const le="/nova/assets/cloud.aab284a9.png",ue="/nova/assets/lavatile.8dd33ecf.jpg",ce={class:"viewCon"},fe=B({__name:"LavaBall",setup(s){const e=b(),t=b();let a=window.innerWidth,n=window.innerHeight,r,i,f,v,o,m,F=new ee,l,T;G(()=>{L(),z(),P(),K(),_()});function L(){new X}function M(){const u=5*F.getDelta();l.time.value+=.2*u,o.clear(),m.render(.01)}function P(){const u=new O;l={fogDensity:{value:.45},fogColor:{value:new y(0,0,0)},time:{value:1},uvScale:{value:new h(3,1)},texture1:{value:u.load(le)},texture2:{value:u.load(ue)}},l.texture1.value.wrapS=l.texture1.value.wrapT=U,l.texture2.value.wrapS=l.texture2.value.wrapT=U;const d=`
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
  `,Q=new g({uniforms:l,vertexShader:d,fragmentShader:p});T=new V(new W(.65,32,16),Q),f.add(T)}function K(){const u=new ie(f,v),d=new c(1.25),p=new se(.35,.95,2048);m=new re(o),m.addPass(u),m.addPass(d),m.addPass(p)}function z(){f=new Y,f.background=new j(4473924),v=new A(75,a/n,.1,1e3),o=new H({canvas:e.value,antialias:!0}),o.setSize(a,n),o.setPixelRatio(window.devicePixelRatio),o.autoClear=!1,window.addEventListener("resize",N),f.add(new Z(1e3)),f.add(new J(4210752)),r=ne(),t.value.append(r.dom),i=new ae(v,o.domElement),i.target=new y(0,0,0),i.object.position.set(1,1,1),i.update()}function _(){requestAnimationFrame(_),r.update(),M()}function N(){a=window.innerWidth,n=window.innerHeight,v.aspect=a/n,v.updateProjectionMatrix(),o.setSize(a,n)}return(u,d)=>($(),q("div",ce,[I("div",{class:"canvasCon",ref_key:"canvasCon",ref:t},[I("canvas",{class:"canvas",ref_key:"canvasDom",ref:e},null,512)],512)]))}});const he=te(fe,[["__scopeId","data-v-78f7fa57"]]);export{he as default};
