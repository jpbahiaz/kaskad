export function addListener(
	event: string,
	listener: EventListenerOrEventListenerObject
) {
	return function bindToElement<T extends HTMLElement>(element: T): T {
		element.addEventListener(event, listener)

		return element
	}
}
