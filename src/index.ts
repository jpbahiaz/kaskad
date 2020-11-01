import  { EMPTY_ARR, isArray } from "./common/constants"
import { createVNode, recycleNode } from "./vdom/nodes"
import { patch } from "./vdom/patch"

export { text } from "./vdom/nodes"

export function k(type, props?, children?) {
	return createVNode(
		type,
		props || {},
		isArray(children) ? children : children == null ? EMPTY_ARR : [children],
		null,
		props ? props.key || null : null,
	)	
}

export function app (options) {
	let view = options.view
	let node = options.node
	let vdom = node && recycleNode(node)
	let doing

	function listener (event) {
    console.log(this.tag[event.type], this, event)
  }

  function render () {
    return node = patch(
      node.parentNode,
      node,
      vdom,
      (vdom = view()),
      listener,
      (doing = false)
    )
	}

	return render
}
