export type InnerComponent<TState = {}> = {
	parent: TComponent|InnerComponent;
	children: TChild[];
	middlewares: MiddlewareList;
	currentMiddleware: TNextMiddleware;
	mounted: boolean;
	state: TState;
	stateChanges: Partial<TState>|null;
}

export interface Middleware {
	(app: unknown, component: TComponent): void;
}

type TNextMiddleware = {
	current: Middleware;
	next: TNextMiddleware|null;
}

export type MiddlewareList = {
	current: Middleware;
	next: TNextMiddleware;
}

export interface INext {
	(arg: string): void;
}

export interface IPass {
	(arg: string): void;
}

export interface IAppend {
	(...args: Middleware[]): void;
}

export interface IUse {
	(...args: Middleware[]): void;
}

export interface IListen {
	(...args: Middleware[]): void;
}

export type InnerComponentFunctions = {
	next: INext,
	append: IAppend,
	use: IUse,
	pass: IPass,
}

export type InnerRootFunctions = {
	listen: IListen;
}

export type TComponent = InnerComponent & InnerComponentFunctions;
export type TRoot = TComponent & InnerRootFunctions;

export type TChild = {
	fn: Middleware;
	component: TComponent;
}
