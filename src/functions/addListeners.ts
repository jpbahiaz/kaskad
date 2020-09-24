import { TListener } from "../common/types"

export function addListeners(listeners: TListener[]) {
	return function bindToElement<T extends HTMLElement>(element: T): T {
		listeners.forEach(([event, listener]: TListener) => element.addEventListener(event, listener))

		return element
	}
}
