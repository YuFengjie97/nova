import{_ as e}from"./Shader.vue_vue_type_script_setup_true_lang-CbWeuFZB.js";import{d as r,e as n,q as o,A as c,o as i}from"./index-C5HxIGZc.js";const l=`precision mediump float;\r
#define PI 3.141592654\r
#define pix (1./iResolution.y)\r
\r
uniform vec2 iResolution;\r
uniform float iTime;\r
\r
float plotCircle(vec2 p, vec2 pos, float r, float blur) {\r
    float cir = length(p - pos) - r;\r
    return smoothstep(blur, 0., cir);\r
}\r
\r
float Smile(in vec2 p, vec2 pos) {\r
    p -= pos;\r
    float face = plotCircle(p, vec2(0.), 0.5, 4. * pix);\r
\r
    float eye_left = plotCircle(p, vec2(-0.2, 0.2), 0.1, 4. * pix);\r
    face -= eye_left;\r
\r
    float eye_right = plotCircle(p, vec2(0.2, 0.2), 0.1, 4. * pix);\r
    face -= eye_right;\r
\r
    float mouth = plotCircle(p, vec2(0., -.05), 0.3, 4. * pix) - plotCircle(p, vec2(0., .1), 0.3, 4. * pix);\r
    mouth = clamp(mouth, 0., 1.);\r
    face -= mouth;\r
    return face;\r
}\r
\r
void main() {\r
    vec2 uv = (gl_FragCoord.xy * 2. - iResolution.xy) / iResolution.y;\r
    vec3 c_fin = vec3(0.);\r
    vec3 c_face = vec3(0.149, 0.9255, 0.9255);\r
\r
    float smile = Smile(uv, vec2(0.));\r
    c_fin = mix(c_fin, c_face, smile);\r
\r
    gl_FragColor = vec4(c_fin, 1.0);\r
}`,t={class:"w-full h-full"},u=r({__name:"index",setup(f){return(a,p)=>(i(),n("div",t,[o(e,{fs:c(l)},null,8,["fs"])]))}});export{u as default};
