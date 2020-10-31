import { isArray } from "./constants"

export function getKey(vdom) { return vdom == null ? vdom : vdom.key }

export function propsChanged(a, b) {
  for (var k in a) if (a[k] !== b[k]) return true
  for (var k in b) if (a[k] !== b[k]) return true
}

export function createClass(obj) {
  var out = ""

  if (typeof obj === "string") return obj

  if (isArray(obj)) {
    for (var k = 0, tmp; k < obj.length; k++) {
      if ((tmp = createClass(obj[k]))) {
        out += (out && " ") + tmp
      }
    }
  } else {
    for (var key in obj) {
      if (obj[key]) out += (out && " ") + key
    }
  }

  return out
}
