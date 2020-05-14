import { appendTo } from '../../common/utility'
import { baseElement } from "../../functions/elements"

export function Div(options){
	return function renderer(parent){
		baseElement(
			appendTo(parent),
		)(options, document.createElement('div'))

		return parent
	}
}