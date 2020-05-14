import { isNil, unless, always } from "ramda"
import { mutate, appendTo } from '../../common/utility'
import { baseElement } from "../../functions/elements"

export function Button(options){
	const { type } = options
	return function renderer(parent){
		baseElement(
			unless(always(isNil(type)), mutate('type', type)),
			appendTo(parent),
		)(options, document.createElement('button'))

		return parent
	}
}