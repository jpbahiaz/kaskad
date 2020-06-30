import { combineReducers } from "redux"
import { viewReducer } from "./view/reducer"

const rootReducer = combineReducers({
	view: viewReducer
})

export default rootReducer
