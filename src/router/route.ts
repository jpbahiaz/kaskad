export function route<
	TChildren extends HTMLElement,
	TParent extends HTMLElement
>(path: string, element: TChildren, parent: TParent) {
	console.log(path)
	return element
}

