export function removeListener(
	event: string,
	listener: EventListenerOrEventListenerObject
): (el: HTMLElement) => HTMLElement {
	return function unbindFromElement(element: HTMLElement) {
		element.removeEventListener(event, listener)

		return element
	}
}
