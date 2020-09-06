export function each(callbackfn: (value: never, index: number, array: never[]) => void) {
	return function iterator(arr: never[]) {
		arr.forEach(callbackfn)
	}
}