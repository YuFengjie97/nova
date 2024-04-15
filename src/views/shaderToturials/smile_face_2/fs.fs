precision mediump float;
#define PI 3.141592654
#define pix (2./iResolution.y)
#define S(a,b,t) smoothstep(a,b,t)
#define sat(t) clamp(t, 0., 1.);

uniform vec2 iResolution;
uniform float iTime;

float plotCircle(vec2 p, vec2 pos, float r, float blur) {
    float cir = length(p - pos) - r;
    return smoothstep(blur, 0., cir);
}
float remap01(float a, float b, float t) {
    return sat((t - a) / (b - a));
}
float remap(float a, float b, float c, float d, float t) {
    return remap01(a, b, t) * (d - c) + c;
}

// 把uv坐标限制在rect（x-l,y-b,z-r,w-t）中
// 相当于任意rect位置的uv坐标被归一化
// 因为没有clamp所以超过rect的uv坐标同样被归一化了
vec2 within(vec2 uv, vec4 rect) {
    return (uv.xy - rect.xy) / (rect.zw - rect.xy);
}

vec4 Eye(in vec2 uv) {
    uv -= 0.5; // uv中心点
    float d = length(uv);

    // 虹膜
    vec4 iris_color = vec4(0.4, 0.67, 0.99, 1.0);
    float iris_range = S(0.1, 0.5, d);
    float iris_color_soft = 0.5;
    vec4 color = mix(vec4(1.), iris_color, iris_range * iris_color_soft);

    color *= 1. - S(0.45, 0.5, d) * 0.5 * sat(-uv.y - uv.x);//边缘按照虹膜颜色高亮,sat(-uv.y-uv.x)斜向渐变

    // 以下内容简写了，不再细分变量名字，也不再使用pix去控制范围
    color.rgb = mix(color.rgb, vec3(0.), S(0.31, 0.3, d));
    iris_color *= 1. + S(0.3, 0., d); // 瞳孔高亮
    color.rgb = mix(color.rgb, iris_color.rgb, S(0.27, 0.26, d)); // 瞳孔按照虹膜颜色高亮
    color.rgb = mix(color.rgb, vec3(0.), S(0.13, 0.12, d)); // 瞳孔黑色

    float hightlight = S(0.1, 0.09, length(uv - vec2(-0.1, 0.15))); // S的前两个参数确定范围，第三个参数length的计算确定位置
    hightlight += S(0.06, 0.05, length(uv - vec2(0.1, -0.05)));
    color.rgb = mix(color.rgb, vec3(1.), hightlight);

    float eye = S(.5, .5 - 0.01, d);
    color.a = eye;

    return color;
}

vec4 Head(in vec2 uv) {
    vec4 color = vec4(0.89, 0.52, 0.03, 1.0);
    float d = length(uv - vec2(0.));

    color.a = S(2. * pix, 0., d - 1.);

    // 绘制流程
    // 确定图案位置，通过uv（&length()）
    // 确定范围，通过smoothstep
    // 使用范围值当作rgba的a对不同颜色进行mix

    // 脸部底色有个渐变
    float edgeShade = remap01(0.7, 1., d);
    edgeShade *= edgeShade;
    color.rgb *= 1. - edgeShade * 0.5;

    // 脸周围的border
    float borderWidth = 10. * pix;
    float border = S(1. - borderWidth - 2. * pix, 1. - borderWidth, d); // border位置 & 大小
    color.rgb = mix(color.rgb, vec3(0.6863, 0.2235, 0.0235), border);

    // 脸内部高光
    float hl_start = 0.8;
    float hightlight = S(hl_start + 2. * pix, hl_start, d); // 高光位置 & 高光大小
    hightlight *= remap(hl_start, 0., 0.75, 0., uv.y); // 高光渐变
    color.rgb = mix(color.rgb, vec3(1.), hightlight);

    float d_cheek = length(uv - vec2(0.5, -0.4));
    float cheek_range = 0.4;
    float cheek_smooth_end = 0.2;
    float cheek = S(cheek_range, cheek_smooth_end, d_cheek); // .2-cheek_range控制了渐变范围

    float cheek_clip_start = cheek_range - 10. * pix; // 对cheek边缘进行裁剪
    cheek *= S(cheek_clip_start, cheek_clip_start - 2. * pix, d_cheek);

    cheek *= 0.3; // 让cheek的颜色柔和（淡）一些
    color.rgb = mix(color.rgb, vec3(1., .1, .1), cheek);

    return color;
}

vec4 Mouth(in vec2 uv) {
    uv -= 0.5;
    // 通过弯曲坐标系，形成笑脸嘴
    uv.y *= 1.5;
    uv.y += uv.x * uv.x * 2.; // 为什么我的这里是+？？？

    vec4 color = vec4(0.47, 0.27, 0.03, 1.0);
    float d = length(uv);

    float teeth = length(uv - vec2(0., -.5));
    vec3 teeth_color = vec3(1.) * S(0.6, 0.34, d); // 牙齿颜色，也是根据d来计算
    color.rgb = mix(color.rgb, teeth_color, S(0.41, 0.4, teeth));

    float tongue = length(uv-vec2(0.,.5));
    vec3 tongue_color = vec3(0.9569, 0.3333, 0.3333);
    color.rgb = mix(color.rgb, tongue_color, S(.51,.3,tongue));

    color.a = S(0.51, 0.5, d);
    return color;
}

vec4 Smiley(in vec2 uv) {
    vec4 color = vec4(0.);
    vec4 head = Head(uv);
    color = mix(color, head, head.a);

    float uv_eye_range = 0.6;
    float uv_eye_x_start = 0.1;
    float uv_eye_y_start = -0.1;
    float uv_eye_x_end = uv_eye_x_start + uv_eye_range;
    float uv_eye_y_end = uv_eye_y_start + uv_eye_range;
    // 归一化的eye uv坐标，[0,1],为了保证不被扭曲，start-end的距离x&y要一致
    vec2 uv_eye = within(uv, vec4(uv_eye_x_start, uv_eye_y_start, uv_eye_x_end, uv_eye_y_end));
    vec4 eye = Eye(uv_eye);
    color = mix(color, eye, eye.a);

    vec4 mouth = Mouth(within(uv, vec4(-0.6, -0.2, 0.6, -0.8)));
    color = mix(color, mouth, mouth.a);

    return color;
}

void main() {
    // uv [-1,1]
    vec2 uv = (gl_FragCoord.xy * 2. - iResolution.xy) / iResolution.y;

    // 镜像对称
    uv.x = abs(uv.x);

    vec4 c_fin = vec4(0., 0., 0., 1.);
    vec4 smile = Smiley(uv);

    c_fin = mix(c_fin, smile, smile.a);

    gl_FragColor = vec4(c_fin);
}