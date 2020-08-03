export function apply(fn) {
	return function applier(args) {
		let argsToApply = Array.isArray(args) ? args : [args]
		return fn(...argsToApply)
	}
}