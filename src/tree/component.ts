import { IAppend, INext, InnerComponent, InnerComponentFunctions, IPass, IUse, Middleware, TChild, TComponent } from "./types";

function makeUse(component: InnerComponent): IUse {
	return function use(...args: Middleware[]) {
		args.forEach(fn => {
			if(typeof fn === 'function') {
				component.middlewares.push(fn)
			}
		})
	}
}

function makeAppend(component: InnerComponent): IAppend {
	return function append(...args: Middleware[]) {
		args.forEach(fn => {
			if(typeof fn === 'function') {
				component.children.push({ fn, component: Component(component) })
			}
		})
	}
}

function makeNext(component: InnerComponent): INext {
	return function next(arg: string) {
		console.log(arg, component)
		component.children.forEach((child: TChild) => {
			child.fn({}, child.component)
		})
	}
}

function makePass(component: InnerComponent): IPass {
	return function pass(arg: string) {
		console.log(arg, component)
		component.middlewares.forEach((md: Middleware) => {
			md({}, component as TComponent)
		})
	}
}

function Component<TState = {}>(parent: TComponent|InnerComponent): TComponent {
		
	const _innerComponent: InnerComponent = {
		parent: parent,
		children: [],
		middlewares: [],
		mounted: false,
		state: {} as TState,
		stateChanges: null,
	}

	const _innerFunctions: InnerComponentFunctions = {
		use: makeUse(_innerComponent),
		append: makeAppend(_innerComponent),
		next: makeNext(_innerComponent),
		pass: makePass(_innerComponent),
	}

	return Object.assign(_innerComponent, _innerFunctions)
}

export default Component
