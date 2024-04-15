import{_ as r}from"./Shader.vue_vue_type_script_setup_true_lang-CbWeuFZB.js";import{d as n,e,q as o,A as t,o as i}from"./index-C5HxIGZc.js";const c=`#define resolution 30.\r
#define r_particle 0.1\r
#define PI 3.141592654\r
\r
precision mediump float;\r
uniform vec2 iResolution;\r
uniform float iTime;\r
uniform vec2 iMouse;\r
\r
float pix;\r
\r
float plotCircle(vec2 p, vec2 c, float r) {\r
    float cir = length(p-c) - r;\r
    return smoothstep(pix*2., 0., cir);\r
}\r
\r
vec3 palette(float t) {\r
  vec3 a = vec3(0.731, 1.098, 0.192);\r
  vec3 b = vec3(0.358, 1.090, 0.657);\r
  vec3 c = vec3(1.077, 0.360, 0.328);\r
  vec3 d = vec3(0.965, 2.265, 0.837);\r
  return a + b * cos(6.28318 * (c * t + d));\r
}\r
\r
void main()\r
{\r
    vec2 uv = gl_FragCoord.xy/iResolution.y * resolution;\r
    float ixy = iResolution.x / iResolution.y;\r
    pix = 1. / iResolution.y * resolution;\r
    vec3 c_fin = vec3(0.);\r
\r
    vec2 uvi = floor(uv);\r
    vec2 uvf = fract(uv);\r
    \r
    float dist_max = resolution*2.;\r
    float off_max = 4.6;\r
    float range = ceil(off_max + r_particle);\r
    \r
    #if 0\r
        float b1 = smoothstep(2. * pix, 0., abs(uvf.x));\r
        float b2 = smoothstep(2. * pix, 0., abs(uvf.y));\r
        float b3 = smoothstep(2. * pix, 0., abs(uvf.x - 1.));\r
        float b4 = smoothstep(2. * pix, 0., abs(uvf.y - 1.));\r
        float b = b1 + b2 + b3 + b4;\r
        c_fin += b;\r
    #endif\r
    \r
    vec2 target = vec2((cos(iTime * 0.5) * 0.5 + 0.5) * resolution * ixy, (sin(iTime) * 0.5 + 0.5) * resolution);\r
    if(iMouse.x != 0.) {\r
        target = iMouse.xy / iResolution.y * resolution;\r
    }\r
    float cc = plotCircle(uv, target, 0.5);\r
    c_fin += cc;\r
    \r
    for(float x = -range; x <= range; x += 1.) {\r
        for(float y = -range; y <= range; y += 1.) {\r
            vec2 mc = uvi + vec2(x,y) + vec2(0.5) - target;\r
            vec2 mcn = normalize(mc);\r
            float dist = length(mc);\r
            float d = clamp(0., 1., dist / dist_max);\r
            vec2 off = mcn * (1. - d) * off_max;\r
\r
            vec3 color = palette(d);\r
            float cir = plotCircle(uv, uvi + vec2(x,y) + vec2(0.5) + off, r_particle);\r
            c_fin = mix(c_fin, color, cir);\r
            //c_fin += cir * color;\r
\r
        }\r
    }\r
    \r
\r
    gl_FragColor = vec4(c_fin,1.0);\r
}`,f={class:"w-full h-full"},m=n({__name:"index",setup(l){return(a,s)=>(i(),e("div",f,[o(r,{fs:t(c)},null,8,["fs"])]))}});export{m as default};
