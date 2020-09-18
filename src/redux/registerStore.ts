function subscriber<TState = any>(store: any) {
	return function subscribe(callback: (state: TState) => void, path?: string[]) {
		const unsubscribe = store.subscribe(() => {
			callback(store.getState())
		})

		return unsubscribe
	}
}

export function registerStore<TState = any>(store: any) {
	return { subscribe: subscriber<TState>(store), dispatch: store.dispatch }
}