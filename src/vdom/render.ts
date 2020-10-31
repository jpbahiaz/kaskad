import { TEXT_NODE } from "../common/constants"
import { patchProperty } from "./patch"
import { SVG_NS } from "../common/constants"
import { maybeVNode } from "./nodes"

export function createNode (vdom, listener, isSvg) {
  var props = vdom.props
  var node =
    vdom.tag === TEXT_NODE
      ? document.createTextNode(vdom.type)
      : (isSvg = isSvg || vdom.type === "svg")
      ? document.createElementNS(SVG_NS, vdom.type, { is: props.is })
      : document.createElement(vdom.type, { is: props.is })

  for (var k in props) {
    patchProperty(node, k, null, props[k], listener, isSvg)
  }

  for (var i = 0; i < vdom.children.length; i++) {
    node.appendChild(
      createNode(
        (vdom.children[i] = maybeVNode(vdom.children[i])),
        listener,
        isSvg
      )
    )
  }

  return (vdom.node = node)
}
