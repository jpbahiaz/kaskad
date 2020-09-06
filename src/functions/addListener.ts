export function addListener(
	event: string,
	listener: EventListenerOrEventListenerObject
): (el: Node) => Node {
	return function bindToElement(element: Node) {
		element.addEventListener(event, listener)

		return element
	}
}
