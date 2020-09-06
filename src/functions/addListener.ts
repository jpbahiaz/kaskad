export function addListener(
	event: string,
	listener: EventListenerOrEventListenerObject
): (el: HTMLElement) => HTMLElement {
	return function bindToElement(element: HTMLElement) {
		element.addEventListener(event, listener)

		return element
	}
}
