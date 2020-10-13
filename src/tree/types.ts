import Component from "./component";

export interface Middleware {
	(app: unknown, component: Component, next: () => void): void;
}
