const EMPTY_ARR = []
const isArray = Array.isArray

function createVnode(type, props, children, node, key, tag?) {
	return {
		type,
		props,
		children,
		node,
		key,
		tag
	}
}


export function k(type, props?, children?) {
	return createVnode(
		type,
		props || null,
		isArray(children) ? children : children == null ? EMPTY_ARR : [children],
		null,
		props ? props.key || null : null,
	)	
}

export function app (options) {
	return options
}
