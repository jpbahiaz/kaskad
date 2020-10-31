import { EMPTY_ARR, EMPTY_OBJ, map, SSR_NODE, TEXT_NODE } from "../common/constants"
import { propsChanged } from "../common/utility"

export function createVNode(type, props, children, node, key, tag?) {
	return {
		type,
		props,
		children,
		node,
		key,
		tag
	}
}

export function text(value, node?) {
  return createVNode(value, EMPTY_OBJ, EMPTY_ARR, node, null, TEXT_NODE)
}

export function recycleNode(node) {
  return node.nodeType === TEXT_NODE
    ? text(node.nodeValue, node)
    : createVNode(
        node.nodeName.toLowerCase(),
        EMPTY_OBJ,
        map.call(node.childNodes, recycleNode),
        node,
        null,
        SSR_NODE
      )
}

export function maybeVNode(newVNode, oldVNode?) {
  return newVNode !== true && newVNode !== false && newVNode
    ? typeof newVNode.tag === "function"
      ? ((!oldVNode ||
          oldVNode.memo == null ||
          propsChanged(oldVNode.memo, newVNode.memo)) &&
          ((oldVNode = newVNode.tag(newVNode.memo)).memo = newVNode.memo),
        oldVNode)
      : newVNode
    : text("")
}
