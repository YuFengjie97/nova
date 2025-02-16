import{_ as r}from"./Shader.vue_vue_type_script_setup_true_lang-BtEn2PT7.js";import{d as e,e as n,q as o,A as t,o as c}from"./index-CXaHQ9wk.js";const l=`precision mediump float;\r
#define PI 3.141592654\r
#define pix (2./iResolution.y)\r
#define S(a,b,t) smoothstep(a,b,t)\r
#define sat(t) clamp(t, 0., 1.)\r
\r
uniform vec2 iResolution;\r
uniform float iTime;\r
\r
float plotCircle(vec2 p, vec2 pos, float r, float blur) {\r
    float cir = length(p - pos) - r;\r
    return smoothstep(blur, 0., cir);\r
}\r
float remap01(float a, float b, float t) {\r
    return sat((t - a) / (b - a));\r
}\r
float remap(float a, float b, float c, float d, float t) {\r
    return remap01(a, b, t) * (d - c) + c;\r
}\r
\r
// 把uv坐标限制在rect（x-l,y-b,z-r,w-t）中\r
// 相当于任意rect位置的uv坐标被归一化\r
// 因为没有clamp所以超过rect的uv坐标同样被归一化了\r
vec2 within(vec2 uv, vec4 rect) {\r
    return (uv.xy - rect.xy) / (rect.zw - rect.xy);\r
}\r
float sdBox(in vec2 p, in vec2 b) {\r
  vec2 d = abs(p) - b;\r
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);\r
}\r
float get_widthin(vec2 uv) {\r
    // float w = 2.*pix;\r
    // vec2 tl = 1.-smoothstep(vec2(0.),vec2(w),abs(uv));\r
    // vec2 br = 1.-smoothstep(vec2(0.),vec2(w),abs(uv-1.));\r
    // return tl.x + tl.y + br.x + br.y;\r
    float border = sdBox(uv-0.5, vec2(.5));\r
    float box = 1. - smoothstep(0.,3. * pix,abs(border));\r
    return box;\r
}\r
\r
vec4 Brow(in vec2 uv) {\r
    vec4 color = vec4(0.);\r
    vec3 c_brow = vec3(0.3255, 0.2235, 0.0118);\r
    vec3 c_brow_hl = vec3(1.);\r
    vec3 c_brow_shadow = vec3(0.);\r
\r
    uv -= 0.5;\r
    float y = uv.y; // y备份，用来制作眉毛高光\r
    uv.y += uv.x * .8;\r
\r
    // 眉毛是两个圆形经过裁剪得到的，在这里是减法\r
    float blur = 0.1;\r
    vec2 brow_pos_1 = vec2(0.1, 0.);\r
    vec2 brow_pos_2 = vec2(0.15, -0.1);\r
    float brow_r_1 = 0.4;\r
    float brow_r_2 = 0.45;\r
    float brow_shape = S(blur, 0., length(uv - brow_pos_1) - brow_r_1) -\r
     S(blur, 0.0, length(uv - (brow_pos_2)) - brow_r_2);\r
    brow_shape = sat(brow_shape); //去掉负数部分\r
    float edge_d = length(brow_pos_1-brow_pos_2);\r
    float brow_shape_clean_blur = S(0.1,0.2, brow_shape);\r
    color.rgb = mix(color.rgb, c_brow, brow_shape_clean_blur);\r
    color.a += brow_shape_clean_blur ;\r
    \r
    // 眉毛上的高光\r
    float highlight_shape = remap01(0.3, 0.45, y) * S(0.,1.6,brow_shape);\r
    color.rgb = mix(color.rgb, c_brow_hl, highlight_shape);\r
\r
    // 眉毛阴影\r
    vec2 brow_shadow_pos_1 = vec2(0.1, -0.1);\r
    vec2 brow_shadow_pos_2 = vec2(0.15, -0.2);\r
    float brow_shadow_shape = S(blur, 0., length(uv - brow_shadow_pos_1) - 0.4)\r
     - S(blur, 0.0, length(uv - (brow_shadow_pos_2)) - 0.45);\r
    brow_shadow_shape = sat(brow_shadow_shape); // 去掉shape中负值部分\r
    color.rgb = mix(color.rgb, vec3(0.1686, 0.1686, 0.1686), brow_shadow_shape);\r
    color.a += brow_shadow_shape;\r
\r
\r
    return color;\r
}\r
\r
vec4 Eye(in vec2 uv) {\r
    uv -= 0.5; // uv中心点\r
    float d = length(uv);\r
\r
    // 虹膜\r
    vec4 iris_color = vec4(0.4, 0.67, 0.99, 1.0);\r
    float iris_range = S(0.1, 0.5, d);\r
    float iris_color_soft = 0.5;\r
    vec4 color = mix(vec4(1.), iris_color, iris_range * iris_color_soft);\r
\r
    color *= 1. - S(0.45, 0.5, d) * 0.5 * sat(-uv.y - uv.x);//边缘按照虹膜颜色高亮,sat(-uv.y-uv.x)斜向渐变\r
\r
    // 以下内容简写了，不再细分变量名字，也不再使用pix去控制范围\r
    color.rgb = mix(color.rgb, vec3(0.), S(0.31, 0.3, d));\r
    iris_color *= 1. + S(0.3, 0., d); // 瞳孔高亮\r
    color.rgb = mix(color.rgb, iris_color.rgb, S(0.27, 0.26, d)); // 瞳孔按照虹膜颜色高亮\r
    color.rgb = mix(color.rgb, vec3(0.), S(0.13, 0.12, d)); // 瞳孔黑色\r
\r
    float hightlight = S(0.1, 0.09, length(uv - vec2(-0.1, 0.15))); // S的前两个参数确定范围，第三个参数length的计算确定位置\r
    hightlight += S(0.06, 0.05, length(uv - vec2(0.1, -0.05)));\r
    color.rgb = mix(color.rgb, vec3(1.), hightlight);\r
\r
    float eye = S(.5, .5 - 0.01, d);\r
    color.a = eye;\r
\r
    return color;\r
}\r
\r
vec4 Head(in vec2 uv) {\r
    vec4 color = vec4(0.89, 0.52, 0.03, 1.0);\r
    float d = length(uv - vec2(0.));\r
\r
    color.a = S(2. * pix, 0., d - 1.);\r
\r
    // 绘制流程\r
    // 确定图案位置，通过uv（&length()）\r
    // 确定范围，通过smoothstep\r
    // 使用范围值当作rgba的a对不同颜色进行mix\r
\r
    // 脸部底色有个渐变\r
    float edgeShade = remap01(0.7, 1., d);\r
    edgeShade *= edgeShade;\r
    color.rgb *= 1. - edgeShade * 0.5;\r
\r
    // 脸周围的border\r
    float borderWidth = 10. * pix;\r
    float border = S(1. - borderWidth - 2. * pix, 1. - borderWidth, d); // border位置 & 大小\r
    color.rgb = mix(color.rgb, vec3(0.6863, 0.2235, 0.0235), border);\r
\r
    // 脸内部高光\r
    float hl_start = 0.8;\r
    float hightlight = S(hl_start + 2. * pix, hl_start, d); // 高光位置 & 高光大小\r
    hightlight *= remap(hl_start, 0., 0.75, 0., uv.y); // 高光渐变\r
    // 把脸部高光中的眼部周围部分挖出去\r
    // length(uv - vec2(0.41, 0.2)),确定挖出去部分的位置，要根据眼睛位置确定\r
    // S(0.32, 0.33,x),挖出去部分的范围\r
    // *= 挖出去，01取与操作\r
    // hightlight *= S(0.32, 0.33, length(uv - vec2(0.41, 0.2))); // 大杂烩写法\r
    hightlight *= S(0., 0.01, length(uv - vec2(0.41, 0.2)) - 0.32); // 我觉得这种写法比较好\r
    color.rgb = mix(color.rgb, vec3(1.), hightlight);\r
\r
    float d_cheek = length(uv - vec2(0.5, -0.4));\r
    float cheek_range = 0.4;\r
    float cheek_smooth_end = 0.2;\r
    float cheek = S(cheek_range, cheek_smooth_end, d_cheek); // .2-cheek_range控制了渐变范围\r
\r
    float cheek_clip_start = cheek_range - 10. * pix; // 对cheek边缘进行裁剪\r
    cheek *= S(cheek_clip_start, cheek_clip_start - 2. * pix, d_cheek);\r
\r
    cheek *= 0.3; // 让cheek的颜色柔和（淡）一些\r
    color.rgb = mix(color.rgb, vec3(1., .1, .1), cheek);\r
\r
    return color;\r
}\r
\r
vec4 Mouth(in vec2 uv) {\r
    uv -= 0.5;\r
    // 通过弯曲坐标系，形成笑脸嘴\r
    uv.y *= 1.5;\r
    uv.y += uv.x * uv.x * 2.; // 为什么我的这里是+？？？\r
\r
    vec4 color = vec4(0.47, 0.27, 0.03, 1.0);\r
    float d = length(uv);\r
\r
    float teeth = length(uv - vec2(0., -.5));\r
    vec3 teeth_color = vec3(1.) * S(0.6, 0.34, d); // 牙齿颜色，也是根据d来计算\r
    color.rgb = mix(color.rgb, teeth_color, S(0.41, 0.4, teeth));\r
\r
    float tongue = length(uv - vec2(0., .5));\r
    vec3 tongue_color = vec3(0.9569, 0.3333, 0.3333);\r
    color.rgb = mix(color.rgb, tongue_color, S(.51, .3, tongue));\r
\r
    color.a = S(0.51, 0.5, d);\r
    return color;\r
}\r
\r
vec4 Smiley(in vec2 uv) {\r
    vec4 color = vec4(0.);\r
    vec4 head = Head(uv);\r
    color = mix(color, head, head.a);\r
\r
    float uv_eye_range = 0.6;\r
    float uv_eye_x_start = 0.1;\r
    float uv_eye_y_start = -0.1;\r
    float uv_eye_x_end = uv_eye_x_start + uv_eye_range;\r
    float uv_eye_y_end = uv_eye_y_start + uv_eye_range;\r
    // 归一化的eye uv坐标，[0,1],为了保证不被扭曲，start-end的距离x&y要一致\r
    vec2 uv_eye = within(uv, vec4(uv_eye_x_start, uv_eye_y_start, uv_eye_x_end, uv_eye_y_end));\r
    vec4 eye = Eye(uv_eye);\r
    color = mix(color, eye, eye.a);\r
\r
    vec4 mouth = Mouth(within(uv, vec4(-0.6, -0.2, 0.6, -0.8)));\r
    color = mix(color, mouth, mouth.a);\r
\r
    vec2 brow_uv = within(uv, vec4(0.05, 0.4, 0.7, 0.8));\r
    float brow_uv_l = get_widthin(brow_uv);\r
    color.rgb = mix(color.rgb, vec3(1.,0.,0.), brow_uv_l);\r
\r
    vec4 brow = Brow(brow_uv);\r
    color = mix(color, brow, brow.a);\r
\r
    return color;\r
}\r
\r
void main() {\r
    // uv [-1,1]\r
    vec2 uv = (gl_FragCoord.xy * 2. - iResolution.xy) / iResolution.y;\r
\r
    // 镜像对称\r
    uv.x = abs(uv.x);\r
\r
    vec4 c_fin = vec4(0., 0., 0., 1.);\r
    vec4 smile = Smiley(uv);\r
\r
    c_fin = mix(c_fin, smile, smile.a);\r
\r
    gl_FragColor = vec4(c_fin);\r
}`,a={class:"w-full h-full"},s=e({__name:"index",setup(_){return(v,h)=>(c(),n("div",a,[o(r,{fs:t(l)},null,8,["fs"])]))}});export{s as default};
