function kaskad() {
	let useCall = 0
	
	function next() {}
	
	function use (...args) {
		console.log('use call', useCall++, args)
		args.forEach(fn => {
			typeof fn === 'function' && fn({}, { use }, next)
			// typeof fn === 'string' && console.log(fn)
		})
	}
	
	return {
		use
	}
}

export default kaskad
