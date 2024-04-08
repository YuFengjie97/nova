#define resolution 30.
#define r_particle 0.1

float pix;

float plotCircle(vec2 p, vec2 c, float r) {
    float cir = length(p-c) - r;
    return smoothstep(pix*2., 0., cir);
}

void main()
{
    vec2 uv = gl_FragCoord.xy/iResolution.y * resolution;
    float ixy = iResolution.x / iResolution.y;
    pix = 1. / iResolution.y * resolution;
    vec3 c_fin = vec3(0.);

    vec2 uvi = floor(uv);
    vec2 uvf = fract(uv);
    
    float dist_max = resolution*2.;
    float off_max = 4.6;
    float range = ceil(off_max + r_particle);
    
    #if 0
        float b1 = smoothstep(2. * pix, 0., abs(uvf.x));
        float b2 = smoothstep(2. * pix, 0., abs(uvf.y));
        float b3 = smoothstep(2. * pix, 0., abs(uvf.x - 1.));
        float b4 = smoothstep(2. * pix, 0., abs(uvf.y - 1.));
        float b = b1 + b2 + b3 + b4;
        c_fin += b;
    #endif
    
    vec2 target = vec2((cos(iTime * 0.5) * 0.5 + 0.5) * resolution * ixy, (sin(iTime) * 0.5 + 0.5) * resolution);
    if(iMouse.x != 0.) {
        target = iMouse.xy / iResolution.y * resolution;
    }
    float cc = plotCircle(uv, target, 0.5);
    c_fin += cc;
    
    for(float x = -range; x <= range; x += 1.) {
        for(float y = -range; y <= range; y += 1.) {
            vec2 mc = uvi + vec2(x,y) + vec2(0.5) - target;
            vec2 mcn = normalize(mc);
            float dist = length(mc);
            float d = clamp(0., 1., dist / dist_max);
            vec2 off = mcn * (1. - d) * off_max;

            vec3 color = palette(d);
            float cir = plotCircle(uv, uvi + vec2(x,y) + vec2(0.5) + off, r_particle);
            c_fin = mix(c_fin, color, cir);
            //c_fin += cir * color;

        }
    }
    

    gl_FragColor = vec4(c_fin,1.0);
}