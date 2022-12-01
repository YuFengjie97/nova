export function typeOf(obj: object){
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}