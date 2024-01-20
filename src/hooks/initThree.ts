import { AmbientLight, AxesHelper, Color, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from 'three'
import { onMounted, onUnmounted } from 'vue'
import { initStats } from './initStats'

export function initThree(con: HTMLElement, needAxes: boolean = false, needAmbientLight: boolean = false) {
  const { width, height } = con.getBoundingClientRect()

  const canvas = document.createElement('canvas')
  con.append(canvas)
  const scene = new Scene()
  scene.background = new Color(0x000000)
  const camera = new PerspectiveCamera(75, width / height, 0.1, 1000)
  camera.position.set(0, 0, 10)
  const renderer = new WebGLRenderer({
    canvas,
    antialias: true,
  })
  // renderer.setPixelRatio(window.devicePixelRatio) // 不推荐

  initSize()

  function initSize() {
    const { width, height } = con.getBoundingClientRect()
    canvas.style.cssText = `display: block; width: ${width}px;height: ${height}px`
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
  }

  window.addEventListener('resize', initSize)

  // 坐标轴
  needAxes && scene.add(new AxesHelper(1000))
  // 环境光
  needAmbientLight && scene.add(new AmbientLight(0x404040))
  // 帧率状态
  const { stats } = initStats(con)

  function renderWrap(animate: () => void) {
    let animateId = 0
    function render() {
      animateId = requestAnimationFrame(render)
      stats.update()
      animate()
      renderer.render(scene, camera)
    }
    onMounted(() => {
      render()
    })
    onUnmounted(() => {
      cancelAnimationFrame(animateId)
    })
    return render
  }

  return { scene, camera, renderer, stats, renderWrap }

  // 轨道控制器
  // let orbitControls
  // if (needControl) {
  //   orbitControls = new OrbitControls(camera, renderer.domElement)
  //   orbitControls.target = new Vector3(120, 60, 0)
  //   orbitControls.object.position.set(120, 60, 100)
  //   orbitControls.update()
  // }
}
