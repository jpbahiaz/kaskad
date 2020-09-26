export function appendTo(parent: HTMLElement) {
	return function appender<T extends HTMLElement>(element: T|null|undefined): T|null|undefined {
		element && parent.append(element)

		return element
	}
}
