import Component from "./component"
import { TChild, TComponent, TRoot } from "./types"

function makeListen(component: TComponent) {
	return function listen() {
		console.log('listen', component)
		component.instance.pass('Root Pass')
		component.instance.next('Root Next')
	}
}

function Root (): TRoot {
	const _component = Component(null)

	Object.assign(_component.instance, { listen: makeListen(_component) })
	return _component as TRoot
}

export default Root
