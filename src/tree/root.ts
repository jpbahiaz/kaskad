import Component from "./component"
import { TChild } from "./types"

function makeListen(component: any) {
	return function listen() {
		this.middlewares.forEach(fn => {
			fn({}, component)
		})
		this.children.forEach((child: TChild) => {
			const newComponent = Component(component)
			child.fn({}, newComponent, component.next)
		})
	}
}

function Root () {
	const _component = Component(null)

	return {
		..._component,
		listen: makeListen(_component),
	}
}

export default Root
