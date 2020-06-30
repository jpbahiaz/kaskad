// import { register } from "./book"
import { each, appendTo } from "../common/utility"

export function transform(fns) {
	return function transformer(transformations){
		transformations.forEach(([tName, ...args]) => {
			fns[tName](...args)
		})
	}
}

export function createElement(component = 'div', props, ...children){
	let element
	// console.log(children)

	if (typeof component === 'string'){
		element = document.createElement(component)
		if (props) Object.assign(element, props)
		
	} else if (typeof component === 'function'){
		element = component({ ...props, children })
	}

	each(appendTo(element))(children)

	return element
}

const BASE_ELEMENT = {
	// renderFn: function(){},
	// parent: {} || function(){},
	props: {},
	children: [],
	// exports: ['']
}

// let transformations = [
// 	['render'],
// 	['setItem', { id: 3, class: 'current' }]
// ]