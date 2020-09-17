export function registerStore(store: any) {
	return { subscribe: store.subscribe, dispatch: store.dispatch }
}