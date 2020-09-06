import { TListener } from "@/common/types"

export function addListeners(listeners: TListener[]): (el: HTMLElement) => HTMLElement {
	return function bindToElement(element: HTMLElement) {
		listeners.forEach(([event, listener]: TListener) => element.addEventListener(event, listener))

		return element
	}
}
