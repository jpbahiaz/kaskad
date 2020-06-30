import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger))

export const dispatch = store.dispatch
export const subscribe = store.subscribe
export const getState = store.getState