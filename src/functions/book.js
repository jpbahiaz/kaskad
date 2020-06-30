export const _registrations = {}

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

	return function registrator(element, transform) {
		window.BOOK.registrations[element] = { element, transform }
		_registrations[element] = { element, transform }

		return [ registrator ]
	}
})()
