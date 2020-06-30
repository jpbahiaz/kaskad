import { subscribe, getState, dispatch } from "./redux/store"
import { setView } from "./redux/view/actions"

const unsubscribe = subscribe(() => console.log(getState()))

dispatch(setView({ component: 'div' }))
dispatch(setView({ component: 'table' }))

unsubscribe()
dispatch(setView({ component: 'galba' }))

export default {
	teste() {
		console.log('Yeeeeah redux based')
	}
}
