import { makeFun } from "../makeFun"
import { otherwise } from "../../constants/otherwise"

export function g(guard, body) {
  return function executeBody(args) {
    if (guard === otherwise || guard(args)) {
      return makeFun(args, body)(args)
    }
  }
}
