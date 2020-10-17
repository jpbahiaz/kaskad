import Component from "./component"
import { TChild } from "./types"

class Root extends Component {
	constructor() {
		super(null)
	}

	listen() {
		this.middlewares.forEach(fn => {
			fn({}, this)
		})
		this.children.forEach((child: TChild) => {
			const newComponent = new Component(this)
			child.fn({}, newComponent)
		})
	}
}

export default Root
