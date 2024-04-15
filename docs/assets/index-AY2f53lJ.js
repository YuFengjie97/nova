import{_ as n}from"./Shader.vue_vue_type_script_setup_true_lang-CbWeuFZB.js";import{d as e,e as t,q as o,A as a,o as l}from"./index-C5HxIGZc.js";const r=`precision mediump float;

#define PI 3.1415926

uniform vec2 iResolution;
uniform float iTime;

float sdBox(in vec2 p, in vec2 b) {
  vec2 d = abs(p) - b;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}

vec3 palette(float t) {
  vec3 a = vec3(0.731, 1.098, 0.192);
  vec3 b = vec3(0.358, 1.090, 0.657);
  vec3 c = vec3(1.077, 0.360, 0.328);
  vec3 d = vec3(0.965, 2.265, 0.837);
  return a + b * cos(6.28318 * (c * t + d));
}

float randomFloat(float seed) {
  return fract(sin(seed) * 1348.2585);
}

vec2 random(float v) {
  float x = fract(sin(v) * 45.53 + 13.46);
  float y = fract(sin(v) * 76.41 + 75.85);
  return vec2(x, y);
}

float plotGlowParticle(vec2 uv, vec2 pos, float r, float glowFactor) {
  float v = length(uv - pos) - r;
  return smoothstep(0.01, 0., abs(v));
  //return exp(-1. * glowFactor * v);
}

mat4 ortho(float t, float b, float l, float r, float n, float f) {
  return mat4(
    2. / (r - l), 0., 0., 0.,
   0., 2. / (t - b), 0., 0., 
   0., 0., 2. / (n - f), 0., 
   0., 0., 0., 1.) 
   * mat4(
    1., 0., 0., -(r + l) / 2., 
    0., 1., 0., -(t + b) / 2.,
    0., 0., 1., -(n + f) / 2.,
   0., 0., 0., 1.);
}

mat4 viewport(float w, float h) {
  return mat4(
    w/2., 0., 0., w/2.,
    0,h/2.,0.,h/2.,
    0.,0.,1.,0.,
    0.,0.,0.,1.
  );
}

float sdSphere( vec3 p, float s )
{
  return length(p)-s;
}

void main() {
  vec3 uv = vec3((gl_FragCoord.xy) / iResolution.y, gl_FragCoord.z);
  float ixy = iResolution.x / iResolution.y;
  vec3 c_fin = vec3(0.);
  float pix = 1. / iResolution.y;


  float s = sdSphere(uv, 0.1);
  float sphere = smoothstep(0.01, 0., s);
  c_fin += sphere;


  gl_FragColor = vec4(c_fin, 1.);
}
`,f={class:"w-full h-full"},m=e({__name:"index",setup(c){return(s,i)=>(l(),t("div",f,[o(n,{fs:a(r)},null,8,["fs"])]))}});export{m as default};
