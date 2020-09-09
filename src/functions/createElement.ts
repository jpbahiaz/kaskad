import { mutator } from "@/functions/mutator"
import { TListener } from "@/common/types"

type TArgs = {
	[index: string]: unknown;
	nodeName: string;
	listeners: TListener[]
}

export function createElement(
	{ nodeName = 'div', listeners = [], ...props }: TArgs,
	mutatorCallback: () => void
) {
	const element: any = document.createElement(nodeName)
	Object.keys(props).forEach((prop: string) => { element[prop] = props[prop] })
	listeners.forEach(([event, listener]) => element.addEventListener(event, listener))
	
	if(mutatorCallback) {
		return [ element, mutator(element, mutatorCallback) ]
	} else {
		return element
	}
}
