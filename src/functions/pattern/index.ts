import { makeFun } from "../makeFun"
import { arg } from "../../constants/arg"

export function p(pattern, body) {
  function executeBody(args) {
    const argsKeys = Object.keys(args)
    const keysMatch = argsKeys.reduce((prev, curr) => {
      return prev &&
        pattern[curr] !== undefined &&
        (pattern[curr] === args[curr] || pattern[curr] === arg)
    }, true)
    if (keysMatch) {
      return makeFun(pattern, body)(args)
    }
  }
  return executeBody
}
