import { GUI } from 'dat.gui'

export function initGUI(container: HTMLElement) {
  const gui = new GUI({
    autoPlace: false,
  })
  container.append(gui.domElement)
  gui.domElement.style.cssText = 'position: fixed; top: 0; right: 0;'

  return {
    gui,
  }
}
