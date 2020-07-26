//## File that keeps functional utilities ##//

export function compose(...fns) {
	return function composer(arg){
		return fns.reduceRight((prev, fn) => fn(prev), arg)
	}
}

export function pipe(...fns) {
	return function piper(arg){
		return fns.reduce((prev, fn) => fn(prev), arg)
	}
}

export function unary(fn) {
	return function oneArg(arg){
		return fn(arg)
	}
}

export function map(fn) {
	return function mapper(arr) {
		return arr.map(fn)
	}
}

export function each(fn) {
	return function iterator(arr) {
		arr.forEach(fn)
	}
}

export function consoleLog(value) {
	console.log(value)
	return value
}

//## Mutate given entity, used for dom elements ##//
export function mutate(prop, value) {
	return function mutator(entity) {
		entity[prop] = value
		return entity
	}
}

export function mutator(entity, callback = function(){}) {
	return function mutate(prop, value) {
		let prevEntity = {}
		if(entity instanceof Node){
			prevEntity = entity.cloneNode(true)
		} else {
			const prevEntity = { ...entity }
		}
		entity[prop] = value
		callback(entity, prevEntity)
		return entity
	}
}

export function toPairs(object) {
	const keys = Object.keys(object)
	return map(function keyValue(key) {
		return [key, object[key]]
	})(keys)
}

export function apply(fn) {
	return function applier(args) {
		let argsToApply = Array.isArray(args) ? args : [args]
		return fn(...argsToApply)
	}
}

export function applier(args) {
	return function apply(fn) {
		let argsToApply = Array.isArray(args) ? args : [args]
		return fn(...argsToApply)
	}
}

function mapReducer(mapperFn){
	return function combiner(combinerFn) {
		return function reducer(list,v) {
				return combinerFn( list, mapperFn( v ) )
		}
	}
}

export function filterReducer(predicateFn) {
	return function combiner(combinerFn) {
		return function reducer(list,v) {
				if (predicateFn( v )) return combinerFn( list, v )
				return list;
		}
	}
}

export function transduce(transducer, combinerFn, initialValue, list) {
	var reducer = transducer( combinerFn )
	return list.reduce( reducer, initialValue )
}
