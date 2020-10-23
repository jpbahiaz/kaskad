import { TVnode } from "../tree/types"
import Vnode from "@/tree/vnode"
import { IAppend, INext, InnerComponent, InnerComponentFunctions, IPass, IUse, TChild } from "./types"

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
			child.fn(child.component, {})
		})
	}
}

function makePass(component: InnerComponent): IPass {
	return function pass(arg: string) {
		console.log(arg, component)
		const midd = component.currentMiddleware.shift()
		if(midd) midd(component, {})
	}
}

function makeRender() {

}

function Component<TState = {}>(parent: TVnode) {

	const _innerComponent: InnerComponent = {
		instance: {
			middlewares: [],
			currentMiddleware: [],
			state: {} as TState,
			stateChanges: null,
		},
		vnode: Vnode(parent, () => {}, {}, {} as TVnode),
	}

	const _innerFunctions: InnerComponentFunctions = {
		use: makeUse(_innerComponent),
		append: makeAppend(_innerComponent),
		next: makeNext(_innerComponent),
		pass: makePass(_innerComponent),
	}

	Object.assign(_innerComponent.instance, _innerFunctions)
	return _innerComponent
}

export default Component
