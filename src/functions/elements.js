//## Element function utilities ##//

import { pipe, unless, always, isNil } from "ramda"
import { elementAddListener, mutate, appendTo, consoleLog } from "../common/utility"
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

function button({ type }){
	return pipe(
		unless(always(isNil(type)), mutate('type', type))
	)
}

function div({}){
	return pipe(
		consoleLog
	)
}

const elements = {
	button,
	div,
}

export function createElement(identifier, options) {
	return function renderer(parent){
		baseElement(
			elements[identifier](options),
			appendTo(parent),
		)(options, document.createElement(identifier))

		return parent
	}
}