import { pipe, isNil, unless, always } from "ramda"
import { elementAddListener, mutate, appendTo } from '../../common/utility'
import { toInlineStyle } from "../../functions"

export function Div({ onClick, innerText, className, children, style }){
	console.log(className)
	return function renderer(parent){
		pipe(
			elementAddListener('click', onClick),
			mutate('innerText', innerText),
			unless(always(isNil(children)), children),
			unless(always(isNil(style)), mutate('style', toInlineStyle(style))),
			unless(always(isNil(className)), mutate('className', className)),
			appendTo(parent),
		)(document.createElement('div'))

		return parent
	}
}