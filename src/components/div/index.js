import { pipe, isNil, unless, always } from "ramda"
import { elementAddListener, mutate, appendTo } from '../../common/utility'

export function Div({ onClick, innerText, children }){
	return function renderer(parent){
		pipe(
			elementAddListener('click', onClick),
			mutate('innerText', innerText),
			unless(always(isNil(children)), children),
			appendTo(parent),
		)(document.createElement('div'))

		return parent
	}
}