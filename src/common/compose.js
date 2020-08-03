export function compose(...fns) {
	return function composer(arg){
		return fns.reduceRight((prev, fn) => fn(prev), arg)
	}
}