export function addListeners(listeners) {
	return function bindToElement(element) {
		listeners.forEach(([event, listener]) => element.addEventListener(event, listener))

		return element
	}
}
