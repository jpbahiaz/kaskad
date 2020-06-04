export const register = (function(){
	if (!window.BOOK){
		window.BOOK = {}
	}

	return function registrator(element) {
		window.BOOK[element] = element

		return [ window.BOOK, registrator ]
	}
})()