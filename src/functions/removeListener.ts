export function removeListener(
	event: string,
	listener: EventListenerOrEventListenerObject
){
	return function unbindFromElement<T extends HTMLElement>(element: T): T {
		element.removeEventListener(event, listener)

		return element
	}
}
