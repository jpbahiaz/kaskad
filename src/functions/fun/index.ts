export function fun(...patterns) {
  return function resultFun(args) {
    return patterns.reduce((prev, pattern) => {
      const res = pattern(args)
      return res !== undefined && prev === undefined ? res : prev
    }, undefined)
  }
}
