import{_ as r}from"./Shader.vue_vue_type_script_setup_true_lang-CbWeuFZB.js";import{d as n,e as t,q as o,A as e,o as i}from"./index-C5HxIGZc.js";const l=`// thanks for those shader\r
// https://www.shadertoy.com/view/WdK3Dz\r
// https://www.shadertoy.com/view/3s3GDn\r
\r
#define PI 3.141592654\r
\r
uniform vec2 iResolution;\r
uniform float iTime;\r
\r
float pix;\r
\r
float plotCircle(vec2 uv, vec2 pos, float r, float borderWidth) {\r
    float cir = length(uv-pos)-r;\r
    //float w = borderWidth * 0.5;\r
    //return smoothstep(w+2.*pix, w-2.*pix, abs(cir));\r
    //return step(0., abs(cir)) - step(w, abs(cir));\r
    return cir;\r
}\r
\r
float plotRing(vec2 uv, vec2 pos, float r, float borderWidth) {\r
    // sdf part, is this part sdf_ring?\r
    float w = borderWidth * 0.5;\r
    float cir1 = length(uv-pos) - (r+w);\r
    float cir2 = length(uv-pos) - (r-w);\r
    float v = cir1 * cir2;\r
    //return v;\r
    \r
    // just for glow，应该是为了环内部的负数值不要影响glow,发光部分针对的是图案外部像素\r
    return max(0., v);\r
}\r
\r
//https://www.shadertoy.com/view/3s3GDn\r
float getGlow(float dist, float radius, float intensity){\r
    return pow(radius/dist, intensity);\r
}\r
\r
void main()\r
{\r
    vec2 uv = (gl_FragCoord.xy - iResolution.xy * 0.5)/iResolution.y;\r
    float ixy = iResolution.x / iResolution.y;\r
    vec3 c_fin = vec3(0.);\r
    \r
    pix = 1. / iResolution.y;\r
    \r
    vec3 c_red   = vec3(1.,0.,0.);\r
    vec3 c_blue  = vec3(0.,1.,0.);\r
    vec3 c_green = vec3(0.,0.,1.);\r
    \r
    float r = 0.2;\r
    float bw = 30. * pix;\r
    \r
    float dFactor = 10.;\r
    float d1 = plotRing(uv, vec2(0.,r),  r,bw);\r
    float d2 = plotRing(uv, vec2(-r,0.), r,bw);\r
    float d3 = plotRing(uv, vec2(r,0.),  r,bw);\r
    \r
    float ring1 = smoothstep(0.2 * pix, 0., d1);\r
    float ring2 = smoothstep(0.2 * pix, 0., d2);\r
    float ring3 = smoothstep(0.2 * pix, 0., d3);\r
    \r
    //c_fin += ring1 + ring2 + ring3;\r
    c_fin += ring1*vec3(1.,0.25,0.25) \r
           + ring2*vec3(0.25,1.,0.25) \r
           + ring3*vec3(0.25,0.25,1.);\r
\r
    float t = (sin(iTime) * 0.5 + 0.5);\r
    float glowRadius = 2. * pix + 6. * pix * t;\r
    float intensity = 0.4 + 1. * t;\r
    \r
    vec3 glow1 = getGlow(d1, glowRadius, intensity) * c_red;\r
    vec3 glow2 = getGlow(d2, glowRadius, intensity) * c_blue;\r
    vec3 glow3 = getGlow(d3, glowRadius, intensity) * c_green;\r
    \r
    c_fin += glow1;\r
    c_fin += glow2;\r
    c_fin += glow3;\r
    \r
    \r
    \r
    c_fin = 1. - exp(-c_fin);\r
    \r
    gl_FragColor = vec4(c_fin,1.0);\r
}`,s={class:"w-full h-full"},v=n({__name:"index",setup(a){return(c,f)=>(i(),t("div",s,[o(r,{fs:e(l)},null,8,["fs"])]))}});export{v as default};
