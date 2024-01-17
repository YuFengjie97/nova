import{G as k}from"./dat.gui.module-PWGADmkp.js";import{a1 as h,at as _,au as w,ar as g,D as B,d as X,b,e as A,av as G,V as y,aw as U,M as H,a8 as V,S as W,C as Y,P as j,W as O,A as Z,y as q,o as J,c as $,a as I,ax as ee,_ as te}from"./index-242-C2dX.js";import{S as ne}from"./stats.module-nRd2dy6L.js";import{O as ie}from"./OrbitControls-_GrtrkN1.js";import{P as E,F as R,R as ae,E as re}from"./RenderPass-8wrLhG63.js";const x={defines:{KERNEL_SIZE_FLOAT:"25.0",KERNEL_SIZE_INT:"25"},uniforms:{tDiffuse:{value:null},uImageIncrement:{value:new h(.001953125,0)},cKernel:{value:[]}},vertexShader:`

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

		}`,buildKernel:function(s){let t=2*Math.ceil(s*3)+1;t>25&&(t=25);const i=(t-1)*.5,n=new Array(t);let r=0;for(let a=0;a<t;++a)n[a]=oe(a-i,s),r+=n[a];for(let a=0;a<t;++a)n[a]/=r;return n}};function oe(s,e){return Math.exp(-(s*s)/(2*e*e))}class c extends E{constructor(e=1,t=25,i=4){super(),this.renderTargetX=new _,this.renderTargetX.texture.name="BloomPass.x",this.renderTargetY=new _,this.renderTargetY.texture.name="BloomPass.y",this.combineUniforms=w.clone(S.uniforms),this.combineUniforms.strength.value=e,this.materialCombine=new g({uniforms:this.combineUniforms,vertexShader:S.vertexShader,fragmentShader:S.fragmentShader,blending:B,transparent:!0}),x===void 0&&console.error("THREE.BloomPass relies on ConvolutionShader");const n=x;this.convolutionUniforms=w.clone(n.uniforms),this.convolutionUniforms.uImageIncrement.value=c.blurX,this.convolutionUniforms.cKernel.value=x.buildKernel(i),this.materialConvolution=new g({uniforms:this.convolutionUniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,defines:{KERNEL_SIZE_FLOAT:t.toFixed(1),KERNEL_SIZE_INT:t.toFixed(0)}}),this.needsSwap=!1,this.fsQuad=new R(null)}render(e,t,i,n,r){r&&e.state.buffers.stencil.setTest(!1),this.fsQuad.material=this.materialConvolution,this.convolutionUniforms.tDiffuse.value=i.texture,this.convolutionUniforms.uImageIncrement.value=c.blurX,e.setRenderTarget(this.renderTargetX),e.clear(),this.fsQuad.render(e),this.convolutionUniforms.tDiffuse.value=this.renderTargetX.texture,this.convolutionUniforms.uImageIncrement.value=c.blurY,e.setRenderTarget(this.renderTargetY),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCombine,this.combineUniforms.tDiffuse.value=this.renderTargetY.texture,r&&e.state.buffers.stencil.setTest(!0),e.setRenderTarget(i),this.clear&&e.clear(),this.fsQuad.render(e)}setSize(e,t){this.renderTargetX.setSize(e,t),this.renderTargetY.setSize(e,t)}dispose(){this.renderTargetX.dispose(),this.renderTargetY.dispose(),this.materialCombine.dispose(),this.materialConvolution.dispose(),this.fsQuad.dispose()}}const S={uniforms:{tDiffuse:{value:null},strength:{value:1}},vertexShader:`

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

		}`};c.blurX=new h(.001953125,0);c.blurY=new h(0,.001953125);const D={uniforms:{tDiffuse:{value:null},time:{value:0},nIntensity:{value:.5},sIntensity:{value:.05},sCount:{value:4096},grayscale:{value:1}},vertexShader:`

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

		}`};class se extends E{constructor(e,t,i,n){super(),D===void 0&&console.error("THREE.FilmPass relies on FilmShader");const r=D;this.uniforms=w.clone(r.uniforms),this.material=new g({uniforms:this.uniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),n!==void 0&&(this.uniforms.grayscale.value=n),e!==void 0&&(this.uniforms.nIntensity.value=e),t!==void 0&&(this.uniforms.sIntensity.value=t),i!==void 0&&(this.uniforms.sCount.value=i),this.fsQuad=new R(this.material)}render(e,t,i,n){this.uniforms.tDiffuse.value=i.texture,this.uniforms.time.value+=n,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const le="/nova/assets/cloud-sDoCnHzh.png",ue="/nova/assets/lavatile-3HrJp7qB.jpg",ce={class:"viewCon"},fe=X({__name:"LavaBall",setup(s){const e=b(),t=b();let i=window.innerWidth,n=window.innerHeight,r,a,f,v,o,m,F=new ee,l,T;A(()=>{L(),z(),P(),K(),C()});function L(){new k}function M(){const u=5*F.getDelta();l.time.value+=.2*u,o.clear(),m.render(.01)}function P(){const u=new G;l={fogDensity:{value:.45},fogColor:{value:new y(0,0,0)},time:{value:1},uvScale:{value:new h(3,1)},texture1:{value:u.load(le)},texture2:{value:u.load(ue)}},l.texture1.value.wrapS=l.texture1.value.wrapT=U,l.texture2.value.wrapS=l.texture2.value.wrapT=U;const d=`
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
  `,Q=new g({uniforms:l,vertexShader:d,fragmentShader:p});T=new H(new V(.65,32,16),Q),f.add(T)}function K(){const u=new ae(f,v),d=new c(1.25),p=new se(.35,.95,2048);m=new re(o),m.addPass(u),m.addPass(d),m.addPass(p)}function z(){f=new W,f.background=new Y(4473924),v=new j(75,i/n,.1,1e3),o=new O({canvas:e.value,antialias:!0}),o.setSize(i,n),o.setPixelRatio(window.devicePixelRatio),o.autoClear=!1,window.addEventListener("resize",N),f.add(new Z(1e3)),f.add(new q(4210752)),r=ne(),t.value.append(r.dom),a=new ie(v,o.domElement),a.target=new y(0,0,0),a.object.position.set(1,1,1),a.update()}function C(){requestAnimationFrame(C),r.update(),M()}function N(){i=window.innerWidth,n=window.innerHeight,v.aspect=i/n,v.updateProjectionMatrix(),o.setSize(i,n)}return(u,d)=>(J(),$("div",ce,[I("div",{class:"canvasCon",ref_key:"canvasCon",ref:t},[I("canvas",{class:"canvas",ref_key:"canvasDom",ref:e},null,512)],512)]))}}),pe=te(fe,[["__scopeId","data-v-78f7fa57"]]);export{pe as default};
