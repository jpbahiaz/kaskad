import Component from "./component"
import { Middleware, TChild, TComponent, TRoot } from "./types"

function makeListen(component: TComponent) {
	return function listen() {
		this.middlewares.forEach((fn: Middleware) => {
			fn({}, component)
		})
		this.children.forEach((child: TChild) => {
			const newComponent = Component(component)
			child.fn({}, newComponent)
		})
	}
}

function Root (): TRoot {
	const _component = Component(null)

	return {
		..._component,
		listen: makeListen(_component),
	}
}

export default Root
