export function map(callbackfn: (value: never, index: number, array: never[]) => unknown) {
	return function mapper(arr: never[]): unknown[] {
		return arr.map(callbackfn)
	}
}
