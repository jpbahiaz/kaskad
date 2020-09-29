import { TRouterOptions } from "./types"

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

function callRoute(path: string, routeMatch: Function, options: TRouterOptions) {
	if(matchLocation(path)) {
		options.firstMismatch = true
		return routeMatch()
	} else {
		const mismatch = (options.firstMismatch || options.alwaysCallMismatch) && options.routeMismatch()
		options.firstMismatch = false
		return mismatch
	}
}

export function createRouter(options: TRouterOptions = {} as TRouterOptions) {
	const { subscribe, fire } = routerSubscriber()
	const defaultOptions: TRouterOptions = {
		routeMismatch: () => null,
		firstMismatch: true,
		alwaysCallMismatch: false,
	}
	const routerOptions = { ...defaultOptions, ...options }

	function route(
		path: string,
		routeMatch: () => any,
		options: TRouterOptions = {} as TRouterOptions
	): any
	{
		const routeOptions = { ...routerOptions, ...options }
		window.addEventListener('popstate', function(event: PopStateEvent) {
			setTimeout(() => callRoute(path, routeMatch, routeOptions))
		})
		subscribe(() => {
			setTimeout(() => callRoute(path, routeMatch, routeOptions))
		})
		
		return callRoute(path, routeMatch, routeOptions)
	}

	function push(path: string, state: any = null, title: string = document.title) {
		history.pushState(state, title, path)
		fire(state)
	}

	function replace(path: string, state: any = null, title: string = document.title) {
		history.replaceState(state, title, path)
		fire(state)
	}
	
	return {
		route,
		push,
		replace,
		back: () => history.back(),
		forward: () => history.forward()
	}
}
