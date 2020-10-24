import Root from "./core/root"
function kaskad() {
	return Root().instance
}

export {
	Middleware,
	ComponentInstance,
	RootInstance,
	TRoot,
} from './core/types'
export default kaskad
