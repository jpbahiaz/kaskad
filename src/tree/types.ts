import Component from "./component";

export interface Middleware {
		(app: unknown, component: Component): void;
}

export type TChild = {
	fn: Middleware;
	component: Component;
}
