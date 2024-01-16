const p5 = {
  path: '/p5',
  children: [
    {
      path: '/flowFieldLine2',
      meta: { name: '', show: true },
      component: () => import('@/views/p5/FlowFieldLine2.vue')
    },
    {
      path: '/maze',
      meta: { name: '', show: true },
      component: () => import('@/views/p5/Maze.vue')
    },
    {
      path: '/gradientLine',
      meta: { name: '', show: true },
      component: () => import('@/views/p5/GradientLine.vue')
    },
    {
      path: '/codeRain',
      meta: { name: '', show: true },
      component: () => import('@/views/p5/CodeRain.vue')
    },
    {
      path: '/cross',
      meta: { name: '', show: true },
      component: () => import('@/views/p5/Cross.vue')
    },
    {
      path: '/musicRect',
      meta: { name: '', show: true },
      component: () => import('@/views/p5/MusicRect.vue')
    },
    {
      path: '/musicCircle',
      meta: { name: '', show: true },
      component: () => import('@/views/p5/MusicCircle.vue')
    },
    {
      path: '/bore',
      meta: { name: '', show: true },
      component: () => import('@/views/p5/BoRe.vue')
    },

    {
      path: '/bloodBranch',
      meta: { name: '', show: true },
      component: () => import('@/views/p5/BloodBranch.vue')
    },
    {
      path: '/tangram',
      meta: { name: '', show: true },
      component: () => import('@/views/p5/Tangram.vue')
    },
    {
      path: '/terrain',
      meta: { name: '', show: true },
      component: () => import('@/views/p5/Terrain.vue')
    },
    {
      path: '/disperseParticle',
      meta: { name: '', show: true },
      component: () => import('@/views/p5/DisperseParticle.vue')
    },
    {
      path: '/disperseParticle2',
      meta: { name: '', show: true },
      component: () => import('@/views/p5/DisperseParticle2.vue')
    },
    {
      path: '/snake',
      meta: { name: '', show: true },
      component: () => import('@/views/p5/Snake.vue')
    },
    {
      path: '/crossLine',
      meta: { name: '', show: true },
      component: () => import('@/views/p5/CrossLine.vue')
    },
    {
      path: '/noisePixels',
      meta: { name: '', show: true },
      component: () => import('@/views/p5/NoisePixels.vue')
    },
    {
      path: '/lightBall',
      meta: { name: '', show: true },
      component: () => import('@/views/p5/LightBall.vue')
    },
    {
      path: '/flappyBird',
      meta: { name: '', show: true },
      component: () => import('@/views/p5/FlappyBird.vue')
    },
    {
      path: '/fireWork',
      meta: { name: '', show: true },
      component: () => import('@/views/p5/Firework.vue')
    },
    {
      path: '/pixelPicture',
      meta: { name: '', show: true },
      component: () => import('@/views/p5/PixelPicture.vue')
    },
  ]
}

export default p5