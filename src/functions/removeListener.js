//## Remove listener from element  ##//
export function removeListener(event, listener) {
	return function unbindFromElement(element) {
		element.removeEventListener(event, listener)

		return element
	}
}
