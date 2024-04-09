import{_ as r}from"./Shader.vue_vue_type_script_setup_true_lang-CbdEkOVl.js";import{d as n,b as o,k as e,x as t,o as i}from"./index-B4Kd1SlF.js";import"./initThree-BTudTUM6.js";import"./OrbitControls-immaoKZ1.js";import"./initStats-C5VNgmNK.js";import"./_commonjsHelpers-BosuxZz1.js";const c=`#define resolution 30.\r
#define r_particle 0.1\r
\r
float pix;\r
\r
float plotCircle(vec2 p, vec2 c, float r) {\r
    float cir = length(p-c) - r;\r
    return smoothstep(pix*2., 0., cir);\r
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
}`,l={class:"w-full h-full"},d=n({__name:"index",setup(a){return(f,s)=>(i(),o("div",l,[e(r,{fs:t(c)},null,8,["fs"])]))}});export{d as default};
