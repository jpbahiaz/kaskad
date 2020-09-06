import { mutator } from "@/utility/mutator"

export function createElement({ nodeName = 'div', listeners = [], ...props }, mutatorCallback) {
	const element = document.createElement(nodeName)
	Object.keys(props).forEach(prop => { element[prop] = props[prop] })
	listeners.forEach(([event, listener]) => element.addEventListener(event, listener))
	
	if(mutatorCallback) {
		return [ element, mutator(element, mutatorCallback) ]
	} else {
		return element
	}
}
