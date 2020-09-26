function routerSubscriber() {
	const subscriptions: {(): void}[]  = []
	return {
		subscribe(callback: () => void) {
			subscriptions.push(callback)
		},
		fire() {
			subscriptions.forEach((sub: () => void) => sub())
		}
	}
}

export function createRouter() {
	const { subscribe, fire } = routerSubscriber()	

	function route<
		T extends HTMLElement
	>(path: string, routeMacth: () => T|null|undefined): T|null {
		window.addEventListener('popstate', function(event: PopStateEvent) {
			document.location.href.match(path) && routeMacth()
			// console.log(`location: ${document.location}, state: `, event.state)
		})
		subscribe(() => {
			document.location.href.match(path) && routeMacth()
		})
		
		return document.location.href.match(path) ? routeMacth() : null
	}

	function push(path: string, state: any = null, title: string = document.title) {
		history.pushState(state, title, path)
		fire()
	}

	return { route, push }
}
