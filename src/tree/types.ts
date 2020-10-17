export type TComponent<TState = {}> = {
	parent: TComponent;
	children: TChild[];
	middlewares: Middleware[];
	mounted: boolean;
	state: TState;
	stateChanges: Partial<TState>|null;
	next: (arg: string) => void;
}

export interface Middleware {
	(app: unknown, component: TComponent, next: (arg: string) => void): void;
}


export type TChild = {
	fn: Middleware;
	component: TComponent;
}
