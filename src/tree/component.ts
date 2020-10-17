import { Middleware, TChild } from "./types";

class Component<TState = {}> {
	parent: Component;
	children: TChild[];
	middlewares: Middleware[];
	mounted: boolean;
	ref: object;
	state: TState;
	stateChanges: Partial<TState>|null;
	
	constructor(parent: Component) {
		this.parent = parent
		this.children = []
		this.middlewares = []
		this.mounted = false
		this.ref = {}
		this.state = {} as TState
		this.stateChanges = null
	}

	use(...args: Middleware[]) {
		args.forEach(fn => {
			if(typeof fn === 'function') {
				this.middlewares.push(fn)
			}
		})
	}

	append(...args: Middleware[]) {
		args.forEach(fn => {
			if(typeof fn === 'function') {
				this.children.push({ fn, component: new Component(this) })
			}
		})
	}

	next(arg: string) {
		console.log(arg, this)	
		this.children.forEach((child: TChild) => {
			child.fn({}, child.component)
		})
	}
}

export default Component
