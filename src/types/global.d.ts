// 全局自动类型定义，不允许存在import/export，这样会自动将该文件声明为一个模块，就需要引入才能使用类型了
interface NavItem {
  title: string
  link: string
  bgPos?: Array<string>
  show?: boolean 
}

interface Position {
  x: number
  y: number
}

interface Vector {
  vx: number
  vy: number
}

type Point = [number, number]
