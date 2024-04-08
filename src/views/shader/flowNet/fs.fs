#define PI 3.1415926
#define lineWidth 0.02
#define resolution 10.

uniform float iTime;
uniform vec2 iResolution;

float plotLine(in vec2 uv,in vec2 start,in vec2 end) {
  float l = sdSegment(uv, start, end) - lineWidth;
  return smoothstep(lineWidth * 1.5, lineWidth, abs(l));
}

float plotPoint(vec2 uv, vec2 pos, float r) {
    float point = distance(uv, pos) - r;
    return smoothstep(0.01, 0., point);
}

vec3 getColor(vec2 uv, vec2 p1, vec2 p2) {
    vec3 col_start = palette(noise(p1));
    vec3 col_end = palette(noise(p2));
    float factor = distance(uv, p1) / distance(p2, p1);
    vec3 color = mix(col_start, col_end, factor);
    return color;
}

vec2 getPos(vec2 uvi){
    float n = noise(uvi/resolution+iTime);
    float angle = n * PI * 2.;
    float len = 0.4;
    vec2 pos = vec2(cos(angle)*len, sin(angle)*len) + uvi + vec2(0.5);
    return pos;
}

void main(  ) {
  vec2 uv = gl_FragCoord.xy / iResolution.y * resolution; 

  vec2 uvi = floor(uv);
  vec2 uvf = fract(uv);
  vec3 fin_c = vec3(0.);

  float range = 1.;
  
  bool showBorder = false;
  if(showBorder) {
      float b1 = smoothstep(0.05,0.,abs(uv.x - uvi.x));
      float b2 = smoothstep(0.05,0.,abs(uv.x - uvi.x - 1.));
      float b3 = smoothstep(0.05,0.,abs(uv.y - uvi.y));
      float b4 = smoothstep(0.05,0.,abs(uv.y - uvi.y - 1.));
      float b = b1 + b2 + b3 + b4;
      fin_c = b * vec3(1.,0.,0.);
  }
  
  
  vec2 p1 = getPos(uvi);
  for(float x = -range; x <= range; x += 1.) {
      for(float y = -range; y <= range; y += 1.) {
        if(x==0. || y==0.) continue;
        vec2 p2 = getPos(uvi - vec2(x,y));
        
        vec3 color = getColor(uv,p1,p2);
        
        float line = plotLine(uv, p1, p2);
        //fin_c += line * color;
        fin_c = mix(fin_c, color, line);
        
      }
  }
  for(float x = -range; x <= range; x += 2.) {
      for(float y = -range; y <= range; y += 2.) {
        vec2 p1 = getPos(uvi - vec2(0.,x));
        vec2 p2 = getPos(uvi - vec2(y,0.));
        
        vec3 color = getColor(uv, p1, p2);
        
        float line = plotLine(uv, p1, p2);
        fin_c += line * color;
      }
  }
  
  
  gl_FragColor = vec4(fin_c, 1.);
}

