function path (obj: any, slicePath: string[]) {
	return slicePath.reduce((previous: any, current: string) => previous[current], obj)
}

function subscriber(store: any) {
	return function subscribe<TSlice = any>(callback: (slice: TSlice) => void, slicePath?: string[]) {
		let unsubscribe
		if (slicePath) {
			let prevPathState = path(store.getState(), slicePath)
			unsubscribe = store.subscribe(() => {
				const currentPathState = path(store.getState(), slicePath)
				if (!Object.is(prevPathState, currentPathState)) {
					callback(currentPathState)
					prevPathState = currentPathState
				}
			})
		} else {
			unsubscribe = store.subscribe(() => {
				callback(store.getState())
			})
		}
		return unsubscribe
	}
}

export function registerStore(store: any) {
	return { subscribe: subscriber(store), dispatch: store.dispatch }
}