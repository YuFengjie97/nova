import{_ as r}from"./Shader.vue_vue_type_script_setup_true_lang-swmbkErG.js";import{d as n,e as o,q as t,y as a,o as e}from"./index-CqfaNC88.js";const l=`precision mediump float;\r
\r
#define PI 3.1415926\r
\r
uniform vec2 iResolution;\r
uniform float iTime;\r
\r
vec3 palette(float t) {\r
  vec3 a = vec3(0.731, 1.098, 0.192);\r
  vec3 b = vec3(0.358, 1.090, 0.657);\r
  vec3 c = vec3(1.077, 0.360, 0.328);\r
  vec3 d = vec3(0.965, 2.265, 0.837);\r
  return a + b * cos(6.28318 * (c * t + d));\r
}\r
\r
float randomFloat(float seed) {\r
  return fract(sin(seed) * 1348.2585);\r
}\r
\r
vec2 random(float v) {\r
  float x = fract(sin(v) * 45.53 + 13.46);\r
  float y = fract(sin(v) * 76.41 + 75.85);\r
  return vec2(x, y);\r
}\r
\r
float plotGlowParticle(vec2 uv, vec2 pos, float r, float glowFactor) {\r
  float v = length(uv - pos) - r;\r
  //return smoothstep(0.01, 0.,abs(v));\r
  return exp(-1. * glowFactor * v);\r
}\r
\r
void main() {\r
  vec2 uv = (gl_FragCoord.xy * 2. - iResolution.xy) / iResolution.y;\r
  float ixy = iResolution.x / iResolution.y;\r
  vec3 c_fin = vec3(0.);\r
  float pix = 1. / iResolution.y;\r
\r
  float total = 100.;\r
\r
  for(float i = 0.; i < total; i += 1.) {\r
\r
    float factor = i / total;\r
    float radius = (10. * factor + 4.) * pix;\r
    float glowFactor = 80. - ( i / total) * 40.;\r
    float isClock = randomFloat(i) > 0.5 ? 1. : -1.;\r
    float speed = (factor + 1.) * 0.4;\r
\r
    vec2 trackCenter = random(i) * vec2(ixy,1.) - vec2(ixy * 0.5, .5);\r
    float trackRadius = randomFloat(i) * .8 + .1;\r
    float randomStartAngle = randomFloat(i) * PI * 2.;\r
    vec2 pos = trackCenter + vec2(cos(iTime * isClock * speed + randomStartAngle) * trackRadius, sin(iTime *isClock * speed + randomStartAngle) * trackRadius);\r
\r
    float glowParticle = plotGlowParticle(uv, pos, radius, glowFactor);\r
\r
    //c_fin = mix(c_fin, palette(factor), glowParticle);\r
    c_fin += palette(factor) * glowParticle;\r
  }\r
\r
  gl_FragColor = vec4(c_fin, 1.);\r
}\r
`,c={class:"w-full h-full"},u=n({__name:"index",setup(i){return(f,s)=>(e(),o("div",c,[t(r,{fs:a(l)},null,8,["fs"])]))}});export{u as default};
