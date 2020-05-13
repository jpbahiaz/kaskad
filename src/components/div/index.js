import { pipe, isNil, unless, always } from "ramda"
import { elementAddListener, mutate, appendTo } from '../../common/utility'
import { toInlineStyle } from "../../functions"

export function Div({ onClick, innerText, children, style }){
	return function renderer(parent){
		pipe(
			elementAddListener('click', onClick),
			mutate('innerText', innerText),
			unless(always(isNil(children)), children),
			unless(always(isNil(style)), mutate('style', toInlineStyle(style))),
			appendTo(parent),
		)(document.createElement('div'))

		return parent
	}
}