#define resolution 10.
#define angleGap (PI / 6.)
#define distGap 2.
#define gap vec2(angleGap, distGap)
#define PI 3.141592654

precision mediump float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec2 iMouse;

float angleGapMax = PI * 2. / angleGap;
float distGapMax = resolution * 2. / distGap;


float plotCircle(vec2 uv, vec2 c, float r) {
    float cir = length(uv-c)-r;
    return smoothstep(0.01, 0., cir);
}

vec2 getPos(vec2 uvi){
    float x = sin(uvi.x) * 0.5 + 0.5;
    float y = noise( (fract(iTime / 10.) > 0.5 ? uvi.x : uvi.y) + iTime);
    return vec2(mod(y,2.)==0.?x:-x,y);
}

float dist_polar(vec2 a, vec2 b) {
    return sqrt(a.y*a.y+b.y*b.y-2.*a.y*b.y*cos(a.x-b.x));
}

void main()
{
    vec2 uv = (gl_FragCoord.xy*2.-iResolution.xy)/iResolution.y * resolution;
    vec3 c_fin = vec3(1.);
    
    vec2 uv2 = vec2(atan(uv.y,uv.x) + PI, length(uv));// atan求得角度是正负各半，需要+PI来连续化
    vec2 uv3 = uv2 / gap; // 使用gap来归一化（0-1-2-3的形式）uv3

    float pix = resolution / iResolution.y;
    
    #if 0
        vec3 color = vec3(1.);
        float xi = floor(uv3.x);
        if(xi==0.) { color = vec3(1.,0.,0.); }
        if(xi==1.) { color = vec3(0.,1.,0.); }
        if(xi==2.) { color = vec3(0.,0.,1.); }
        if(xi==3.) { color = vec3(1.,1.,0.); }
        if(xi==4.) { color = vec3(1.,0.,1.); }
        if(xi==5.) { color = vec3(0.,1.,1.); }
        if(xi==6.) { color = vec3(.5,.5,1.); }
        if(xi==7.) { color = vec3(.5,1.,.5); }

        
        float g1 = fract(uv3.x);
        float b1 = smoothstep(0.1, 0., g1) + smoothstep(0.9, 1., g1);
        
        float g2 = fract(uv3.y);
        float b2 = smoothstep(0.05, 0., g2) + smoothstep(0.95, 1., g2);
        
        float b = b1 + b2;
        c_fin = mix(c_fin, color,b);
        
        float circle = plotCircle(uv2, (floor(uv3)+0.5)*gap, 0.1);
        c_fin = mix(c_fin, color, circle);
    #endif
    
    
    float dist_min = resolution; // 可以把dist_min理解成当前格子（“线程”）的绘制变量
    
    
    vec2 range = vec2(angleGapMax, distGapMax); // x=1代表1 * angelGap,y=1代表 1 * distGap

    
    vec2 cur = uv3;

    // 当x==0 & y==0时，是计算了当前格子像素位置到当前格子特征点坐标的距离
    for(float x=-range.x/2.;x<=range.x/2.;x+=1.) {
        for(float y=0.;y<=range.y;y+=1.) {
        
            vec2 nei = cur + vec2(x,y); // 邻居像素坐标
            vec2 nei_coor = floor(nei); 
            nei_coor = mod(nei_coor, range);// 越界
            //if(nei_coor.x < 0.) { nei_coor.x = angleGapMax - nei_coor.x; }

                
            vec2 nei_point = getPos(nei_coor) * range; // 邻居格子特征点位置
            float dist = dist_polar(cur*gap, nei_point*gap); // 在计算距离时，要用原始极坐标系!!!!
            dist_min = min(dist_min, dist); // 当前格子像素针对邻居特征点确定距离
            
            
            // 邻居格子越界,所以需要在当前格子判断邻居格子的像素到邻居特征点距离
            //float dist2 = dist_polar(nei, nei_point);
            //dist_min = min(dist_min, dist2);
            
        }
    }
    
    vec2 cur_coor = floor(cur);

    float dist_min_normal = dist_min / (resolution);
    vec3 color = vec3(0.);
    c_fin = mix(c_fin, color, dist_min_normal);
    

    gl_FragColor = vec4(c_fin,1.0);
}