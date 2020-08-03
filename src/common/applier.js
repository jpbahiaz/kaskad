export function applier(args) {
	return function apply(fn) {
		let argsToApply = Array.isArray(args) ? args : [args]
		return fn(...argsToApply)
	}
}