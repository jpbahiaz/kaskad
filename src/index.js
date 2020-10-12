function Component(parent, name) {
	this.parent = parent
	this.ref = { galba: 'veloso' }
	this.next = () => {}
	this.name = name

	Object.freeze(this)
}
Component.prototype.use = function (...args) {
	console.log('component.use', this.name, args)
	args.forEach(fn => {
		typeof fn === 'function' && fn({}, this, this.next)
	})
}
Component.prototype.append = function (...args) {
	console.log('component.append', this.name, args)
	args.forEach(fn => {
		const newComponent = new Component(this.ref)
		typeof fn === 'function' && fn({}, newComponent, newComponent.next)
	})
}

function Root() {
	Component.call(this, null, 'root')
}
Root.prototype = Object.create(Component.prototype)

function kaskad() {
	return new Root()
}

export default kaskad
