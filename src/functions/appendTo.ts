export function appendTo(parent: Element): (el: Element) => Element {
	return function appender(element: Element) {
		parent.append(element)

		return element
	}
}
