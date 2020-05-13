//## File that keeps functional utilities ##//

//## Add listener to element  ##//
export function elementAddListener(event, listener){
	return function bindToElement(element) {
		element.addEventListener(event, listener)

		return element
	}
}

//## Remove listener from element  ##//
export function elementRemoveListener(event, listener){
	return function bindToElement(element) {
		element.removeEventListener(event, listener)

		return element
	}
}

//## Append element to parent  ##//
export function appendTo(parent){
	return function appender(element) {
		parent.append(element)

		return element
	}
}

export function consoleLog(value){
	console.trace(value)
	return value
}

//## Mutate given entity, used for dom elements ##//
export function mutate(prop, value){
	return function mutator(entity) {
		entity[prop] = value

		return entity
	}
}