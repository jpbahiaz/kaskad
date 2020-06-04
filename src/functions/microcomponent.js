import { register } from "./book"


export function createComponent(component = 'div', props, ...children){
	const div = document.createElement(component)

	const [ registrations, registrator ] = register(div)
	console.log(registrations)
	console.log(registrator)
	document.body.append(div)
	return div
}