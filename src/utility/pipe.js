export function pipe(...fns) {
	return function piper(arg){
		return fns.reduce((prev, fn) => fn(prev), arg)
	}
}