import { Middleware, TChild, TComponent } from "./types";

function makeUse(component: any) {
	return function use(...args: Middleware[]) {
		args.forEach(fn => {
			if(typeof fn === 'function') {
				component.middlewares.push(fn)
			}
		})
	}
}

function makeAppend(component: any) {
	return function append(...args: Middleware[]) {
		args.forEach(fn => {
			if(typeof fn === 'function') {
				component.children.push({ fn, component: Component(component) })
			}
		})
	}
}

function makeNext(component: any) {
	return function next(arg: string) {
		console.log(arg, component)	
		component.children.forEach((child: TChild) => {
			child.fn({}, child.component, child.component.next)
		})
	}
}



function Component<TState = {}>(parent: TComponent) {
		
	const _component: any = {
		parent: parent,
		children: [],
		middlewares: [],
		mounted: false,
		state: {} as TState,
		stateChanges: null,
	}

	return {
		..._component,
		use: makeUse(_component),
		append: makeAppend(_component),
		next: makeNext(_component),
	}
}

export default Component
