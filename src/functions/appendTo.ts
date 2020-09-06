export function appendTo(parent: HTMLElement) {
	return function appender<T extends HTMLElement>(element: T): T {
		parent.append(element)

		return element
	}
}
