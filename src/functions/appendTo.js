//## Append element to parent  ##//
export function appendTo(parent) {
	return function appender(element) {
		parent.append(element)

		return element
	}
}
