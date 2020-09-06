export function toPairs(object) {
	const keys = Object.keys(object)
	return keys.map(function keyValue(key) {
		return [key, object[key]]
	})
}