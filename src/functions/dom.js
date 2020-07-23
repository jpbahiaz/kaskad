import { each, mutate } from '../common/utility'

//## Add listener to element  ##//
export function addListener(event, listener) {
	return function bindToElement(element) {
		element.addEventListener(event, listener)

		return element
	}
}

//## Remove listener from element  ##//
export function removeListener(event, listener) {
	return function bindToElement(element) {
		element.removeEventListener(event, listener)

		return element
	}
}

//## Append element to parent  ##//
export function appendTo(parent) {
	return function appender(element) {
		parent.append(element)

		return element
	}
}

export function appendAllTo(parent) {
	return function appender(elements) {
		each(appendTo(parent))(elements)
	}
}

export function createElement({ nodeName = 'div', listeners = [], ...props }) {
	const element = document.createElement(nodeName)
	each(prop => mutate(prop, props[prop])( element ))( Object.keys(props) )
	each(([event, listener]) => addListener(event, listener)( element ))( listeners )
	
	return element
}
