declare module '@/utils/p5bezier' {
  namespace p5bezier {
    // type Point = [number, number]
    type CloseType = 'OPEN' | 'CLOSE'
    type bezierDimension = 2 | 3
    type vertexList = [number, number] | [number, number, number]
    type dash = [number, number] | number

    export function initBezier(canvas: p5.Renderer, strictMode?: boolean): void
    export function newBezier(
      pointList: Array<Point>,
      closeType?: CloseType,
      accuracy?: number
    ): void
    export function newBezierObj(
      pointList: Array<Point>,
      closeType: CloseType,
      accuracy: number
    ): BezierCurve
    // export function _helper_factorial(a: number): number
    // export function _helper_dist(a1: number,a2: number,a3: number,a4: number,a5: number,a6: number,): number
    // export function _helper_style(): void
    export function equalArrays(a: Array<any>, b: Array<any>): boolean

    export class BezierCurve {
      constructor(
        pL: Array<Point>,
        closeT: CloseType,
        tI: number,
        bD: bezierDimension,
        vL: null
      )
      // _buildVertexList(): vertexList
      // _addVertex(vArray: vertexList): void
      // _distVertex(vArray1, vArray2)
      draw(dash: undefined | dash): void | never
      update(newControlList: Array<number>): void
      move(
        x: number,
        y: number,
        z: number | null,
        toDraw: boolean,
        dash: dash
      ): void
      shortest(pX: number, pY: number, pZ: number): number
    }
  }

  export = p5bezier
}
