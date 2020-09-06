export function appendAllTo(parent: HTMLElement): (els: HTMLElement[]) => HTMLElement {
	return function appender(elements: HTMLElement[]) {
		elements.forEach((element: HTMLElement) => parent.append(element))

		return parent
	}
}
