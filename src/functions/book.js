
function propChange(newProps, currentElement){
	console.log(newProps)
	const { element, props } = this.registrations[currentElement]



}

export const register = (function(){
	if (!window.BOOK){
		window.BOOK = {
			registrations: {},
			propChange
		}
	}

	return function registrator(element, props) {
		window.BOOK.registrations[element] = { element, props }

		return [ window.BOOK, registrator ]
	}
})()


const BASE_ELEMENT = {
	renderFn: function(){},
	parent: {} || function(){},
	props: {},
	children: []
}