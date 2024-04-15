precision mediump float;
#define PI 3.141592654
#define pix (1./iResolution.y)

uniform vec2 iResolution;
uniform float iTime;
float Band(float p, float start, float end, float blur) {
    return smoothstep(start - blur, start + blur, p) - smoothstep(end - blur, end + blur, p);
}

float Rect(vec2 p, float l, float r, float t, float b, float blur) {
    float band1 = Band(p.x, l, r, blur);
    float band2 = Band(p.y, b, t, blur);
    return band1 * band2;
}

float remap01(float a, float b, float t) {
    return (t - a) / (b - a);
}
// t的变换在a-b范围内，现在映射为c-d范围的值
float remap(float a, float b, float c, float d, float t) {
    return remap01(a, b, t) * (d - c) + c;
}

void main() {
    vec2 uv = (gl_FragCoord.xy * 2. - iResolution.xy) / iResolution.y;
    vec3 c_fin = vec3(0.);

    float x = uv.x;
    float y = uv.y;

    y += sin(x * 8. + iTime) * 0.1;

    float l = -1.;
    float r = 1.;
    float blur = remap(l,r,10.*pix, 200.*pix, x);
    // blur *= blur;
    blur = pow(blur*4., 3.);

    float rect = Rect(vec2(x, y), l, r, 0.1, -0.1, blur);
    c_fin += rect;

    gl_FragColor = vec4(c_fin, 1.0);
}