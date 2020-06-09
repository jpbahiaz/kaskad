import { register } from "./book"

export function transform(fns) {
	return function transformer(transformations) {
		transformations.forEach(([tName, ...args]) => {
			fns[tName](...args)
		})
	}
}

export function createElement(component = 'div', props, ...children){
	let element

	if(typeof component === 'string'){
		element = document.createElement(component)
		register(element, transform({}))
	} else {
		const [ componentRendering, transformations ] = component({ ...props, children })
		element = componentRendering
		register(element, transform(transformations))
	}

	element.append(children)

	console.log(props)
	return element
}

const BASE_ELEMENT = {
	renderFn: function(){},
	parent: {} || function(){},
	props: {},
	children: [],
	exports: ['']
}

// let transformations = [
// 	['render'],
// 	['setItem', { id: 3, class: 'current' }]
// ]