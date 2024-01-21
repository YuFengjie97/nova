precision mediump float;

uniform vec2 iResolution;
uniform float iTime;
uniform sampler2D texture1;
uniform float size;

float PI = 3.1415926;
float random(vec2 uv) {
  // return fract(dot(sin(uv), vec2(1.)));
  return fract(sin(dot(uv.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}
float noise(vec2 uv) {
  vec2 i = floor(uv);
  vec2 f = fract(uv);

  float a = random(i);
  float b = random(i + vec2(size, 0));
  float c = random(i + vec2(0., size));
  float d = random(i + vec2(size));

  vec2 u = f * f * (3. - 2. * f);

  float v1 = mix(a, b, u.x);
  float v2 = mix(c, d, u.x);
  return mix(v1, v2, u.y);
}

float patternSize = 3.;
vec2 getTexture(vec2 uv, float i) {
  uv = uv / patternSize;
  float n = 1. / patternSize;

  float x = mod(i, patternSize);
  float y = floor(i / patternSize);
  return vec2(uv.x + n * x, uv.y + n * y);
}

void main() {
  vec2 uv = gl_FragCoord.xy;

  vec2 xy = floor(uv / size);
  vec2 uv2 = fract(uv / size);

  vec2 uv_texture = getTexture(uv2, floor(random(xy) * 9.0));

  gl_FragColor = vec4(0.) + texture2D(texture1, uv_texture);
}