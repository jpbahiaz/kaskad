export function makeFun(pattern, fn) {
  const patternKeys = Object.keys(pattern)
  return (function nexCurried (prevArgs) {
    const prevArgsKeys = Object.keys(prevArgs)
    return function curried(nextArgs){
      const currentAppliedArgs = prevArgsKeys.reduce((prev, key) => {
        prev[key] = prevArgs[key]
        return prev
      }, nextArgs)
      const currentAppliedArgsKeys = Object.keys(currentAppliedArgs)
      if (patternKeys.length === currentAppliedArgsKeys.length){
        return fn(currentAppliedArgs)
      }
      return nexCurried(currentAppliedArgs)
    }
  })({})
}

export const fun1 = makeFun
