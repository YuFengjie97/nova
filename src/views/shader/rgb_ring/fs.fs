// thanks for those shader
// https://www.shadertoy.com/view/WdK3Dz
// https://www.shadertoy.com/view/3s3GDn

#define PI 3.141592654

uniform vec2 iResolution;
uniform float iTime;

float pix;

float plotCircle(vec2 uv, vec2 pos, float r, float borderWidth) {
    float cir = length(uv-pos)-r;
    //float w = borderWidth * 0.5;
    //return smoothstep(w+2.*pix, w-2.*pix, abs(cir));
    //return step(0., abs(cir)) - step(w, abs(cir));
    return cir;
}

float plotRing(vec2 uv, vec2 pos, float r, float borderWidth) {
    // sdf part, is this part sdf_ring?
    float w = borderWidth * 0.5;
    float cir1 = length(uv-pos) - (r+w);
    float cir2 = length(uv-pos) - (r-w);
    float v = cir1 * cir2;
    //return v;
    
    // just for glow，应该是为了环内部的负数值不要影响glow,发光部分针对的是图案外部像素
    return max(0., v);
}

//https://www.shadertoy.com/view/3s3GDn
float getGlow(float dist, float radius, float intensity){
    return pow(radius/dist, intensity);
}

void main()
{
    vec2 uv = (gl_FragCoord.xy - iResolution.xy * 0.5)/iResolution.y;
    float ixy = iResolution.x / iResolution.y;
    vec3 c_fin = vec3(0.);
    
    pix = 1. / iResolution.y;
    
    vec3 c_red   = vec3(1.,0.,0.);
    vec3 c_blue  = vec3(0.,1.,0.);
    vec3 c_green = vec3(0.,0.,1.);
    
    float r = 0.2;
    float bw = 30. * pix;
    
    float dFactor = 10.;
    float d1 = plotRing(uv, vec2(0.,r),  r,bw);
    float d2 = plotRing(uv, vec2(-r,0.), r,bw);
    float d3 = plotRing(uv, vec2(r,0.),  r,bw);
    
    float ring1 = smoothstep(0.2 * pix, 0., d1);
    float ring2 = smoothstep(0.2 * pix, 0., d2);
    float ring3 = smoothstep(0.2 * pix, 0., d3);
    
    //c_fin += ring1 + ring2 + ring3;
    c_fin += ring1*vec3(1.,0.25,0.25) 
           + ring2*vec3(0.25,1.,0.25) 
           + ring3*vec3(0.25,0.25,1.);

    float t = (sin(iTime) * 0.5 + 0.5);
    float glowRadius = 2. * pix + 6. * pix * t;
    float intensity = 0.4 + 1. * t;
    
    vec3 glow1 = getGlow(d1, glowRadius, intensity) * c_red;
    vec3 glow2 = getGlow(d2, glowRadius, intensity) * c_blue;
    vec3 glow3 = getGlow(d3, glowRadius, intensity) * c_green;
    
    c_fin += glow1;
    c_fin += glow2;
    c_fin += glow3;
    
    
    
    c_fin = 1. - exp(-c_fin);
    
    gl_FragColor = vec4(c_fin,1.0);
}