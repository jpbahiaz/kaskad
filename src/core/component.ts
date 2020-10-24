import { TVnode } from "../tree/types"
import Vnode from "@/tree/vnode"
import { IAppend, INext, InnerComponent, IPass, IUse, Middleware, TChild, TComponent } from "./types"

function makeUse(component: InnerComponent): IUse {
	return function use(...args) {
		args.forEach(fn => {
			if(typeof fn === 'function') {
				component.instance.middlewares.push(fn)
				component.instance.currentMiddleware.push(fn)
			}
		})
	}
}

function makeAppend(component: InnerComponent): IAppend {
	return function append(...args) {
		component.vnode.child = args.reduceRight((prev: TVnode|null, current: Middleware) => {
			const newComponent = Component(component.vnode, prev, current)
			return newComponent.vnode
		}, null)
	}
}

function makeNext(component: InnerComponent): INext {
	return function next(arg: string) {
		console.log(arg, component)
		if (component.vnode.child) component.vnode.child.render()
	}
}

function makePass(component: InnerComponent): IPass {
	return function pass(arg: string) {
		console.log(arg, component)
	}
}

function makeRender(component: InnerComponent) {
	return function render() {
		if (typeof component.vnode.tag === 'function') component.vnode.tag(component.instance)
		if (component.vnode.sibling) component.vnode.sibling.render()	
	}
}

function Component<TState = {}>(parent: TVnode = null, sibling: TVnode = null, tag: string|Function = null): TComponent {
	const _innerComponent: InnerComponent = {
		instance: {
			middlewares: [],
			currentMiddleware: [],
			state: {} as TState,
			stateChanges: null,
		},
		vnode: Vnode(parent, null, sibling, tag, null),
	}

	const _innerFunctions = {
		use: makeUse(_innerComponent),
		append: makeAppend(_innerComponent),
		next: makeNext(_innerComponent),
		pass: makePass(_innerComponent),
	}

	_innerComponent.vnode.render = makeRender(_innerComponent)
	Object.assign(_innerComponent.instance, _innerFunctions)
	return _innerComponent as TComponent
}

export default Component
