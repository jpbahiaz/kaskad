export function mutator(entity, callback = function(){}) {
	return function mutate(prop, value) {
		let prevEntity = {}
		if(entity instanceof Node){
			prevEntity = entity.cloneNode(true)
		} else {
			const prevEntity = { ...entity }
		}
		entity[prop] = value
		callback(entity, prevEntity)
		return entity
	}
}