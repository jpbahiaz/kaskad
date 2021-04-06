import { makeFun } from "../makeFun"
import { Arg } from "../../constants/arg"

export function p(pattern, body) {
  return function executeBody(args) {
    const argsKeys = Object.keys(args)
    const keysMatch = argsKeys.reduce((prev, curr) => {
      return prev &&
        pattern[curr] !== undefined &&
        (pattern[curr] === args[curr] || pattern[curr] === Arg())
    }, true)
    if (keysMatch) {
      return makeFun(pattern, body)(args)
    }
  }
}
