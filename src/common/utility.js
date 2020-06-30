//## File that keeps functional utilities ##//

export function pipe(...fns){
	return function piper(arg){
		return fns.reduce((prev, fn) => fn(prev), arg)
	}
}

export function unary(fn){
	return function oneArg(arg){
		return fn(arg)
	}
}

export function map(fn) {
	return function mapper(arr) {
		return arr.map(fn)
	}
}

export function each(fn){
	return function iterator(arr){
		arr.forEach(fn)
	}
}

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
	console.log(value)
	return value
}

//## Mutate given entity, used for dom elements ##//
export function mutate(prop, value){
	return function mutator(entity) {
		entity[prop] = value
		return entity
	}
}

export function toPairs(object) {
	const keys = Object.keys(object)
	return map(function keyValue(key){
		return [key, object[key]]
	})(keys)
}

export function apply(fn){
	return function applier(args){
		let argsToApply = Array.isArray(args) ? args : [args]
		return fn(...argsToApply)
	}
}