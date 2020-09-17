export function appendAllTo<T extends HTMLElement>(parent: T): (elements: HTMLElement[]) => T {
	return function appender(elements: HTMLElement[]) {
		elements.forEach((element: HTMLElement) => parent.append(element))

		return parent
	}
}
