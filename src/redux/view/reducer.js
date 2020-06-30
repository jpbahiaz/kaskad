import { SET_VIEW } from "./actions";

export function viewReducer(state = {}, action) {
	switch (action.type) {
		case SET_VIEW:
			return {
				...action.view
			}
	
		default:
			return state
	}
}