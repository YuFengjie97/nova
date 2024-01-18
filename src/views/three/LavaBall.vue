<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { GUI } from 'dat.gui'
import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import { Mat } from 'threePatch'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass'
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass'

import imgCloud from '@/assets/img/textures/lava/cloud.png'
import imgLavatile from '@/assets/img/textures/lava/lavatile.jpg'

const { random, PI, floor, ceil, min, max, sin, cos } = Math

const canvasDom = ref<HTMLElement>()
const canvasCon = ref<HTMLElement>()
let width = window.innerWidth
let height = window.innerHeight
let stats: Stats
let orbitControls: OrbitControls
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let composer: EffectComposer
const clock = new THREE.Clock()

let uniforms: {
  fogDensity: { value: number }
  fogColor: { value: THREE.Vector3 }
  time: { value: number }
  uvScale: { value: THREE.Vector2 }
  texture1: { value: THREE.Texture }
  texture2: { value: THREE.Texture }
}
let mesh: THREE.Mesh

onMounted(() => {
  initGUI()
  initTHREE()
  initMesh()
  initComposer()
  render()
})

const params = {}
function initGUI() {
  const panel = new GUI()
}

function animate() {
  const delta = 5 * clock.getDelta()
  uniforms.time.value += 0.2 * delta

  // mesh.rotation.y += 0.0125 * delta
  // mesh.rotation.x += 0.05 * delta

  renderer.clear()
  composer.render(0.01)
}

function initMesh() {
  const textureLoader = new THREE.TextureLoader()

  uniforms = {
    fogDensity: { value: 0.45 },
    fogColor: { value: new THREE.Vector3(0, 0, 0) },
    time: { value: 1.0 },
    uvScale: { value: new THREE.Vector2(3.0, 1.0) },
    texture1: { value: textureLoader.load(imgCloud) },
    texture2: { value: textureLoader.load(imgLavatile) },
  }

  uniforms.texture1.value.wrapS = uniforms.texture1.value.wrapT
    = THREE.RepeatWrapping
  uniforms.texture2.value.wrapS = uniforms.texture2.value.wrapT
    = THREE.RepeatWrapping

  const vertexShader = `
  uniform vec2 uvScale;
  varying vec2 vUv;

  void main()
  {

    vUv = uvScale * uv;
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_Position = projectionMatrix * mvPosition;

  }
    `
  const fragmentShader = `
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
  `

  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
  })

  mesh = new THREE.Mesh(new THREE.SphereGeometry(0.65, 32, 16), material)
  scene.add(mesh)
}

function initComposer() {
  const renderModel = new RenderPass(scene, camera)
  const effectBloom = new BloomPass(1.25)
  const effectFilm = new FilmPass(0.35, 0.95, 2048)

  composer = new EffectComposer(renderer)

  composer.addPass(renderModel)
  composer.addPass(effectBloom)
  composer.addPass(effectFilm)
}

// three初始化
function initTHREE() {
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x444444)
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
  renderer = new THREE.WebGLRenderer({
    canvas: canvasDom.value,
    antialias: true,
  })
  renderer.setSize(width, height)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.autoClear = false

  // 自适应
  window.addEventListener('resize', onWindowResize)
  // 坐标轴
  scene.add(new THREE.AxesHelper(1000))
  // 环境光
  scene.add(new THREE.AmbientLight(0x404040))
  // 帧率状态
  stats = Stats()
  canvasCon.value!.append(stats.dom)
  // 轨道控制器
  orbitControls = new OrbitControls(camera, renderer.domElement)
  orbitControls.target = new THREE.Vector3(0, 0, 0)
  orbitControls.object.position.set(1, 1, 1)
  orbitControls.update()
}
let animateId = 0
// 绘制
function render() {
  animateId = requestAnimationFrame(render)
  stats.update()
  animate()
}
onUnmounted(() => {
  cancelAnimationFrame(animateId)
})
// 自适应
function onWindowResize() {
  width = window.innerWidth
  height = window.innerHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}
</script>

<template>
  <div class="viewCon">
    <div ref="canvasCon" class="canvasCon">
      <canvas ref="canvasDom" class="canvas" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.viewCon {
  margin: 0;
  padding: 0;
}
</style>
