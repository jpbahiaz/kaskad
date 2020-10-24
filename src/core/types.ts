import { TVnode } from "@/tree/types";

export interface Middleware {
	<TState = any>(component: ComponentInstance<TState>, app: unknown): void;
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

export interface IRender {
	(): void;
}

export type InnerRootFunctions = {
	listen: IListen;
}

export type ComponentInstance<TState = any> = {
	middlewares: Middleware[];
	currentMiddleware: Middleware[];
	state: TState;
	stateChanges: Partial<TState>|null;
	next: INext;
	append: IAppend;
	use: IUse;
	pass: IPass;
}

export type InnerComponent<TState = {}> = {
	instance: Omit<ComponentInstance<TState>, 'next'|'append'|'use'|'pass'|'render'>;
	vnode: TVnode;
}

export type TComponent<TState = any> = {
	instance: ComponentInstance<TState>;
	vnode: TVnode;
}

export type RootInstance<TState = any> = ComponentInstance<TState> & InnerRootFunctions;

export type TRoot<TState = any> = {
	instance: RootInstance<TState>;
	vnode: TVnode;
}

export type TChild = {
	fn: Middleware;
	component: TComponent;
}
