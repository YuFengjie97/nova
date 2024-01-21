precision mediump float;

uniform vec2 iResolution;
uniform float iTime;
uniform sampler2D texture1;
uniform float size;

float PI = 3.1415926;
float random(vec2 uv) {
  // return fract(sin(dot(uv.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  return fract((sin(dot(uv.xy, vec2(12.9898, 78.233)))) * 43758.5453123);
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


vec2 getTexture(vec2 uv, float i) {
  uv = uv / 3.;
  float n = 1. / 3.;

  if(i == 0.)
    return uv;
  if(i == 1.)
    return vec2(uv.x + n, uv.y);
  if(i == 2.)
    return vec2(uv.x + n * 2., uv.y);
  if(i == 3.)
    return vec2(uv.x, uv.y + n);
  if(i == 4.)
    return vec2(uv.x + n, uv.y + n);
  if(i == 5.)
    return vec2(uv.x + n * 2., uv.y + n);
  if(i == 6.)
    return vec2(uv.x, uv.y + n * 2.);
  if(i == 7.)
    return vec2(uv.x + n, uv.y + n * 2.);
  if(i == 8.)
    return vec2(uv.x + n * 2., uv.y + n * 2.);
}

void main() {
  vec2 uv = gl_FragCoord.xy;

  vec2 xy = floor(uv / size);
  vec2 uv2 = fract(uv / size);

  vec2 uv_texture = getTexture(uv2, floor(noise(xy+iTime) * 9.));

  gl_FragColor = vec4(0.) + texture2D(texture1, uv_texture);
}