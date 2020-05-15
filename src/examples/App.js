import { createElement } from "../functions/elements"
import Home from "./home"

export const App = () => {
	createElement('div', {
		children: Home()
	})(document.querySelector('.root'))
}