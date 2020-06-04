import { register } from "./book"


export function createComponent(component = 'div', props, ...children){
	const element = document.createElement(component)

	const [ registrations, registrator ] = register(element, props)
	console.log(registrations)
	document.body.append(element)
	return element
}