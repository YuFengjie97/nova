import{u as r}from"./utils-BS_MM7Ms.js";import{_ as o}from"./Shader.vue_vue_type_script_setup_true_lang-BtEn2PT7.js";import{d as i,e,q as t,A as n,o as c}from"./index-CXaHQ9wk.js";const a=`#define resolution 10.\r
#define angleGap (PI / 6.)\r
#define distGap 2.\r
#define gap vec2(angleGap, distGap)\r
#define PI 3.141592654\r
\r
precision mediump float;\r
uniform vec2 iResolution;\r
uniform float iTime;\r
uniform vec2 iMouse;\r
\r
float angleGapMax = PI * 2. / angleGap;\r
float distGapMax = resolution * 2. / distGap;\r
\r
\r
float plotCircle(vec2 uv, vec2 c, float r) {\r
    float cir = length(uv-c)-r;\r
    return smoothstep(0.01, 0., cir);\r
}\r
\r
vec2 getPos(vec2 uvi){\r
    float x = sin(uvi.x) * 0.5 + 0.5;\r
    float y = noise( (fract(iTime / 10.) > 0.5 ? uvi.x : uvi.y) + iTime);\r
    return vec2(mod(y,2.)==0.?x:-x,y);\r
}\r
\r
float dist_polar(vec2 a, vec2 b) {\r
    return sqrt(a.y*a.y+b.y*b.y-2.*a.y*b.y*cos(a.x-b.x));\r
}\r
\r
void main()\r
{\r
    vec2 uv = (gl_FragCoord.xy*2.-iResolution.xy)/iResolution.y * resolution;\r
    vec3 c_fin = vec3(1.);\r
    \r
    vec2 uv2 = vec2(atan(uv.y,uv.x) + PI, length(uv));// atan求得角度是正负各半，需要+PI来连续化\r
    vec2 uv3 = uv2 / gap; // 使用gap来归一化（0-1-2-3的形式）uv3\r
\r
    float pix = resolution / iResolution.y;\r
    \r
    #if 0\r
        vec3 color = vec3(1.);\r
        float xi = floor(uv3.x);\r
        if(xi==0.) { color = vec3(1.,0.,0.); }\r
        if(xi==1.) { color = vec3(0.,1.,0.); }\r
        if(xi==2.) { color = vec3(0.,0.,1.); }\r
        if(xi==3.) { color = vec3(1.,1.,0.); }\r
        if(xi==4.) { color = vec3(1.,0.,1.); }\r
        if(xi==5.) { color = vec3(0.,1.,1.); }\r
        if(xi==6.) { color = vec3(.5,.5,1.); }\r
        if(xi==7.) { color = vec3(.5,1.,.5); }\r
\r
        \r
        float g1 = fract(uv3.x);\r
        float b1 = smoothstep(0.1, 0., g1) + smoothstep(0.9, 1., g1);\r
        \r
        float g2 = fract(uv3.y);\r
        float b2 = smoothstep(0.05, 0., g2) + smoothstep(0.95, 1., g2);\r
        \r
        float b = b1 + b2;\r
        c_fin = mix(c_fin, color,b);\r
        \r
        float circle = plotCircle(uv2, (floor(uv3)+0.5)*gap, 0.1);\r
        c_fin = mix(c_fin, color, circle);\r
    #endif\r
    \r
    \r
    float dist_min = resolution; // 可以把dist_min理解成当前格子（“线程”）的绘制变量\r
    \r
    \r
    vec2 range = vec2(angleGapMax, distGapMax); // x=1代表1 * angelGap,y=1代表 1 * distGap\r
\r
    \r
    vec2 cur = uv3;\r
\r
    // 当x==0 & y==0时，是计算了当前格子像素位置到当前格子特征点坐标的距离\r
    for(float x=-range.x/2.;x<=range.x/2.;x+=1.) {\r
        for(float y=0.;y<=range.y;y+=1.) {\r
        \r
            vec2 nei = cur + vec2(x,y); // 邻居像素坐标\r
            vec2 nei_coor = floor(nei); \r
            nei_coor = mod(nei_coor, range);// 越界\r
            //if(nei_coor.x < 0.) { nei_coor.x = angleGapMax - nei_coor.x; }\r
\r
                \r
            vec2 nei_point = getPos(nei_coor) * range; // 邻居格子特征点位置\r
            float dist = dist_polar(cur*gap, nei_point*gap); // 在计算距离时，要用原始极坐标系!!!!\r
            dist_min = min(dist_min, dist); // 当前格子像素针对邻居特征点确定距离\r
            \r
            \r
            // 邻居格子越界,所以需要在当前格子判断邻居格子的像素到邻居特征点距离\r
            //float dist2 = dist_polar(nei, nei_point);\r
            //dist_min = min(dist_min, dist2);\r
            \r
        }\r
    }\r
    \r
    vec2 cur_coor = floor(cur);\r
\r
    float dist_min_normal = dist_min / (resolution);\r
    vec3 color = vec3(0.);\r
    c_fin = mix(c_fin, color, dist_min_normal);\r
    \r
\r
    gl_FragColor = vec4(c_fin,1.0);\r
}`,l={class:"w-full h-full"},x=i({__name:"index",setup(s){return(f,v)=>(c(),e("div",l,[t(o,{utils:n(r),fs:n(a)},null,8,["utils","fs"])]))}});export{x as default};
