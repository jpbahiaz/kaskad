export function makeFun(pattern, fn) {
  const patternKeys = Object.keys(pattern)
  return (function nexCurried (prevArgs) {
    const prevArgsKeys = Object.keys(prevArgs)
    return function curried(nextArgs){
      const args = prevArgsKeys.reduce((prev, key) => {
        prev[key] = prevArgs[key]
        return prev
      }, nextArgs)
      const nextArgsKeys = Object.keys(nextArgs)
      if (patternKeys.length === nextArgsKeys.length){
        return fn(args)
      }
      return nexCurried(args)
    }
  })({})
}

export const fun1 = makeFun
