function Component(parent) {
		this.parent = parent
		this.children = []
		this.middlewares = []
		this.mounted = false
		this.ref = {}
}
Component.prototype.use = function (...args) {
	console.log('component.use', args)
	args.forEach(fn => {
		if(typeof fn === 'function') {
			this.middlewares.push(fn)
			fn({}, this, this.next)
		}
	})
}

Component.prototype.append = function (...args) {
	console.log('component.append', args)
	args.forEach(fn => {
		const newComponent = new Component(this.ref)
		this.children.push(newComponent)
		typeof fn === 'function' && fn({}, newComponent, newComponent.next)
	})
}
Component.prototype.next = function () {}

export default Component
