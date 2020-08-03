//## Remove listener from element  ##//
export function removeListener(event, listener) {
	return function bindToElement(element) {
		element.removeEventListener(event, listener)

		return element
	}
}
