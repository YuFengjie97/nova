import{_ as r}from"./Shader.vue_vue_type_script_setup_true_lang-swmbkErG.js";import{d as n,e as t,q as a,y as o,o as l}from"./index-CqfaNC88.js";const e=`precision mediump float;\r
#define PI 3.141592654\r
#define pix (1./iResolution.y)\r
\r
uniform vec2 iResolution;\r
uniform float iTime;\r
float Band(float p, float start, float end, float blur) {\r
    return smoothstep(start - blur, start + blur, p) - smoothstep(end - blur, end + blur, p);\r
}\r
\r
float Rect(vec2 p, float l, float r, float t, float b, float blur) {\r
    float band1 = Band(p.x, l, r, blur);\r
    float band2 = Band(p.y, b, t, blur);\r
    return band1 * band2;\r
}\r
\r
float remap01(float a, float b, float t) {\r
    return (t - a) / (b - a);\r
}\r
// t的变换在a-b范围内，现在映射为c-d范围的值\r
float remap(float a, float b, float c, float d, float t) {\r
    return remap01(a, b, t) * (d - c) + c;\r
}\r
\r
void main() {\r
    vec2 uv = (gl_FragCoord.xy * 2. - iResolution.xy) / iResolution.y;\r
    vec3 c_fin = vec3(0.);\r
\r
    float x = uv.x;\r
    float y = uv.y;\r
\r
    y += sin(x * 8. + iTime) * 0.1;\r
\r
    float l = -1.;\r
    float r = 1.;\r
    float blur = remap(l,r,10.*pix, 200.*pix, x);\r
    // blur *= blur;\r
    blur = pow(blur*4., 3.);\r
\r
    float rect = Rect(vec2(x, y), l, r, 0.1, -0.1, blur);\r
    c_fin += rect;\r
\r
    gl_FragColor = vec4(c_fin, 1.0);\r
}`,f={class:"w-full h-full"},b=n({__name:"index",setup(i){return(u,s)=>(l(),t("div",f,[a(r,{fs:o(e)},null,8,["fs"])]))}});export{b as default};
