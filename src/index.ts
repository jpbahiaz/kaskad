import Root from "./tree/root"
function kaskad() {
	return Root()
}

export {
	Middleware,
	TComponent,
	TRoot,
} from './tree/types'
export default kaskad
