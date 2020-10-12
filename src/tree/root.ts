import Component from "./component"

function Root() {
	Component.call(this, null)
}
Root.prototype = Object.create(Component.prototype)

export default Root
