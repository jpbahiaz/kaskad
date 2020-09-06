export function appendAllTo(parent) {
	return function appender(elements) {
		elements.forEach(element => parent.append(element))

		return parent
	}
}
