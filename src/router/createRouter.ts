import {TRouterOptions} from "./types"

function routerSubscriber() {
	const subscriptions: {(): void}[]  = []
	return {
		subscribe(callback: () => void) {
			subscriptions.push(callback)
		},
		fire(state: any) {
			subscriptions.forEach((sub: (historyState: any) => void) => sub(state))
		}
	}
}

function matchLocation(path: string): boolean {
	return Boolean(document.location.href.match(path))
}

export function createRouter(options: TRouterOptions = {} as TRouterOptions) {
	const { subscribe, fire } = routerSubscriber()
	const defaultOptions: TRouterOptions = {
		routeMismatch: () => null,
		firstMismatch: true
	}
	const routerOptions = { ...defaultOptions, ...options }
	function route(
		path: string,
		routeMatch: () => any,
		options: TRouterOptions = {} as TRouterOptions
	): any {
		const routeOptions = { ...routerOptions }
		window.addEventListener('popstate', function(event: PopStateEvent) {
			matchLocation(path) ? routeMatch() : routeOptions.firstMismatch && options.routeMismatch()
		})
		subscribe(() => {
			matchLocation(path) ? routeMatch() : routeOptions.firstMismatch && options.routeMismatch()
		})
		
		return matchLocation(path) ? routeMatch() : routeOptions.firstMismatch && options.routeMismatch()
	}

	function push(path: string, state: any = null, title: string = document.title) {
		history.pushState(state, title, path)
		fire(state)
	}

	return { route, push }
}
