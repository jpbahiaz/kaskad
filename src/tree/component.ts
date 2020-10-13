import { Middleware } from "./types";

class Component {
	parent: object;
	children: unknown[];
	middlewares: unknown[];
	mounted: boolean;
	ref: object;
	
	constructor(parent: object) {
		this.parent = parent
		this.children = []
		this.middlewares = []
		this.mounted = false
		this.ref = {}
	}

	use(...args: Middleware[]) {
		// console.log('component.use', args)
		args.forEach(fn => {
			if(typeof fn === 'function') {
				this.middlewares.push(fn)
				fn({}, this, this.next)
			}
		})
	}

	append(...args: Middleware[]) {
		// console.log('component.append', args)
		args.forEach(fn => {
			if(typeof fn === 'function') {
				const newComponent = new Component(this.ref)
				this.children.push(fn)
				fn({}, newComponent, newComponent.next)
			}
		})
	}

	next() {}
}

export default Component
