declare module 'threePatch' {
  import * as THREE from 'three'
  namespace threePatch {
    type Mat = THREE.Material & {
      color: THREE.Color,
      depthTest: boolean
      opacity: number
      transparent: boolean
    }
  }

  export = threePatch
}
