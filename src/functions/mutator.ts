export function mutator(
	entity: any,
	callback: (entity: any, prevEntity: any) => void = function(){}
) {
	return function mutate(prop: string, value: unknown) {
		let prevEntity = {}
		if(entity instanceof Node){
			prevEntity = entity.cloneNode(true)
		} else {
			prevEntity = { ...entity }
		}
		entity[prop] = value
		callback(entity, prevEntity)
		return entity
	}
}