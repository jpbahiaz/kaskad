
//## Add listener to element  ##//
export function addListener(event, listener) {
	return function bindToElement(element) {
		element.addEventListener(event, listener)

		return element
	}
}