import Root from "./core/root"
function kaskad() {
	return Root()
}

export {
	Middleware,
	TComponent,
	TRoot,
} from './core/types'
export default kaskad
