export function map(fn) {
	return function mapper(arr) {
		return arr.map(fn)
	}
}
