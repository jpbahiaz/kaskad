export function appendAllTo<T extends HTMLElement>(parent: T): (els: HTMLElement[]) => T {
	return function appender(elements: HTMLElement[]) {
		elements.forEach((element: HTMLElement) => parent.append(element))

		return parent
	}
}
