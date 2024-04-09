import{_ as n}from"./Shader.vue_vue_type_script_setup_true_lang-DJQv3AdB.js";import{d as r,b as e,k as o,x as t,o as l}from"./index-BkxFcAok.js";import"./initThree-B6vcArw4.js";import"./OrbitControls-DAtR5M-x.js";import"./initStats-C5VNgmNK.js";import"./_commonjsHelpers-BosuxZz1.js";const i=`#define lineWidth 0.02\r
#define resolution 10.\r
\r
\r
float plotLine(in vec2 uv,in vec2 start,in vec2 end) {\r
  float l = sdSegment(uv, start, end) - lineWidth;\r
  return smoothstep(lineWidth * 1.5, lineWidth, abs(l));\r
}\r
\r
float plotPoint(vec2 uv, vec2 pos, float r) {\r
    float point = distance(uv, pos) - r;\r
    return smoothstep(0.01, 0., point);\r
}\r
\r
vec3 getColor(vec2 uv, vec2 p1, vec2 p2) {\r
    vec3 col_start = palette(noise(p1));\r
    vec3 col_end = palette(noise(p2));\r
    float factor = distance(uv, p1) / distance(p2, p1);\r
    vec3 color = mix(col_start, col_end, factor);\r
    return color;\r
}\r
\r
vec2 getPos(vec2 uvi){\r
    float n = noise(uvi/resolution+iTime);\r
    float angle = n * PI * 2.;\r
    float len = 0.4;\r
    vec2 pos = vec2(cos(angle)*len, sin(angle)*len) + uvi + vec2(0.5);\r
    return pos;\r
}\r
\r
void main(  ) {\r
  vec2 uv = gl_FragCoord.xy / iResolution.y * resolution; \r
\r
  vec2 uvi = floor(uv);\r
  vec2 uvf = fract(uv);\r
  vec3 fin_c = vec3(0.);\r
\r
  float range = 1.;\r
  \r
  bool showBorder = false;\r
  if(showBorder) {\r
      float b1 = smoothstep(0.05,0.,abs(uv.x - uvi.x));\r
      float b2 = smoothstep(0.05,0.,abs(uv.x - uvi.x - 1.));\r
      float b3 = smoothstep(0.05,0.,abs(uv.y - uvi.y));\r
      float b4 = smoothstep(0.05,0.,abs(uv.y - uvi.y - 1.));\r
      float b = b1 + b2 + b3 + b4;\r
      fin_c = b * vec3(1.,0.,0.);\r
  }\r
  \r
  \r
  vec2 p1 = getPos(uvi);\r
  for(float x = -range; x <= range; x += 1.) {\r
      for(float y = -range; y <= range; y += 1.) {\r
        if(x==0. || y==0.) continue;\r
        vec2 p2 = getPos(uvi - vec2(x,y));\r
        \r
        vec3 color = getColor(uv,p1,p2);\r
        \r
        float line = plotLine(uv, p1, p2);\r
        //fin_c += line * color;\r
        fin_c = mix(fin_c, color, line);\r
        \r
      }\r
  }\r
  for(float x = -range; x <= range; x += 2.) {\r
      for(float y = -range; y <= range; y += 2.) {\r
        vec2 p1 = getPos(uvi - vec2(0.,x));\r
        vec2 p2 = getPos(uvi - vec2(y,0.));\r
        \r
        vec3 color = getColor(uv, p1, p2);\r
        \r
        float line = plotLine(uv, p1, p2);\r
        fin_c += line * color;\r
      }\r
  }\r
  \r
  \r
  gl_FragColor = vec4(fin_c, 1.);\r
}\r
\r
`,c={class:"w-full h-full"},m=r({__name:"index",setup(a){return(s,v)=>(l(),e("div",c,[o(n,{fs:t(i)},null,8,["fs"])]))}});export{m as default};
