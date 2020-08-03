export function unary(fn) {
	return function oneArg(arg){
		return fn(arg)
	}
}