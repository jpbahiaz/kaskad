export function mutate(prop: string, value: unknown) {
	return function mutator(entity: any) {
		entity[prop] = value
		return entity
	}
}