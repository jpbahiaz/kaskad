//## Element function utilities ##//

import { pipe, unless, always, isNil } from "ramda"
import { elementAddListener, mutate } from "../common/utility"
import { toInlineStyle } from "./styles"

export function baseElement(...fns){
	return function insertBaseFunctionality({ onClick, innerText, className, children, style, stylesheet }, element){
		return pipe(
			elementAddListener('click', onClick),
			mutate('innerText', innerText),
			unless(always(isNil(children)), children),
			unless(always(isNil(style)), mutate('style', toInlineStyle(style))),
			unless(always(isNil(className)), mutate('className', className)),
			...fns,
		)(element)
	}

}