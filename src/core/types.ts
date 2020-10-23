import { TVnode } from "@/tree/types";

export type InnerComponent<TState = {}> = {
	instance: {
		middlewares: Middleware[];
		currentMiddleware: Middleware[];
		state: TState;
		stateChanges: Partial<TState>|null;
	};
	vnode: TVnode;
}

export interface Middleware {
	(component: TComponent|InnerComponent, app: unknown): void;
}

export interface INext {
	(arg: string): void;
}

export interface IPass {
	(arg: string): void;
}

export interface IAppend {
	(...args: (Middleware|string)[]): void;
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
