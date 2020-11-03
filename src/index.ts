import  { EMPTY_ARR, isArray, IS_VNODE } from "./common/constants"
import { createVNode, recycleNode } from "./vdom/nodes"
import { patch } from "./vdom/patch"

export { text } from "./vdom/nodes"

export function k(type, props?, children?) {
	if (isArray(props)) {
		children = [ ...props, ...(children || []) ]
		props = null
	} else if (props && props.is_vnode === IS_VNODE && children === undefined) {
		children = props	
		props = null
	}

	return createVNode(
		type,
		props || {},
		isArray(children) ? children : children == null ? EMPTY_ARR : [children],
		null,
		props ? props.key || null : null,
		IS_VNODE
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
