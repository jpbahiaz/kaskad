export function each(fn) {
	return function iterator(arr) {
		arr.forEach(fn)
	}
}