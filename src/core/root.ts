import Component from "./component"
import { TChild, TComponent, TRoot } from "./types"

function makeListen(component: TComponent) {
	return function listen() {
		component.pass('Root Pass')
		component.children.forEach((child: TChild) => {
			const newComponent = Component(component)
			child.fn(newComponent, {})
		})
	}
}

function Root (): TRoot {
	const _component = Component(null)

	return Object.assign(_component, { listen: makeListen(_component) })
}

export default Root
