export function addListeners(listeners) {
	return function bindToElement(element) {
		each(([event, listener]) => element.addEventListener(event, listener))( listeners )

		return element
	}
}