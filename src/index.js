function Component(parent) {
	this.parent = parent
	this.children = []
	this.middlewares = []
	this.mounted = false
	this.ref = {}

	Object.freeze(this)
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

function Root() {
	Component.call(this, null, 'root')
}
Root.prototype = Object.create(Component.prototype)

function kaskad() {
	return new Root(new Teste())
}

export default kaskad
