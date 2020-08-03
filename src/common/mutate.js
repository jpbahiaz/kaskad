//## Mutate given entity, used for dom elements ##//
export function mutate(prop, value) {
	return function mutator(entity) {
		entity[prop] = value
		return entity
	}
}