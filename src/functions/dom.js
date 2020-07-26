import { each, mutate, mutator, apply, applier, pipe } from '../common/utility'

//## Add listener to element  ##//
export function addListener(event, listener) {
	return function bindToElement(element) {
		element.addEventListener(event, listener)

		return element
	}
}

export function addListeners(listeners) {
	return function bindToElement(element) {
		each(([event, listener]) => addListener(event, listener)( element ))( listeners )

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

		return parent
	}
}

export function createElement({ nodeName = 'div', listeners = [], ...props }, mutatorCallback) {
	const element = document.createElement(nodeName)
	each(prop => mutate(prop, props[prop])( element ))( Object.keys(props) )
	each(([event, listener]) => addListener(event, listener)( element ))( listeners )
	
	if(mutatorCallback) {
		return [ element, mutator(element, mutatorCallback) ]
	} else {
		return element
	}
}
