precision mediump float;
#define PI 3.141592654
#define pix (1./iResolution.y)

uniform vec2 iResolution;
uniform float iTime;

float plotCircle(vec2 p, vec2 pos, float r, float blur) {
    float cir = length(p - pos) - r;
    return smoothstep(blur, 0., cir);
}

float Smile(in vec2 p, vec2 pos) {
    p -= pos;
    float face = plotCircle(p, vec2(0.), 0.5, 4. * pix);

    float eye_left = plotCircle(p, vec2(-0.2, 0.2), 0.1, 4. * pix);
    face -= eye_left;

    float eye_right = plotCircle(p, vec2(0.2, 0.2), 0.1, 4. * pix);
    face -= eye_right;

    float mouth = plotCircle(p, vec2(0., -.05), 0.3, 4. * pix) - plotCircle(p, vec2(0., .1), 0.3, 4. * pix);
    mouth = clamp(mouth, 0., 1.);
    face -= mouth;
    return face;
}

void main() {
    vec2 uv = (gl_FragCoord.xy * 2. - iResolution.xy) / iResolution.y;
    vec3 c_fin = vec3(0.);
    vec3 c_face = vec3(0.149, 0.9255, 0.9255);

    float smile = Smile(uv, vec2(0.));
    c_fin = mix(c_fin, c_face, smile);

    gl_FragColor = vec4(c_fin, 1.0);
}