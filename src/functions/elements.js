//## Element function utilities ##//

import { pipe, unless, always, isNil, identity } from "ramda"
import { elementAddListener, mutate, appendTo, consoleLog } from "../common/utility"
import { setInlineStyles } from "./styles"

export function baseElement(...fns){
	return function insertBaseFunctionality({ onClick, innerText, className, children, style, stylesheet }, element){
		return pipe(
			unless(always(isNil(onClick)), elementAddListener('click', onClick)),
			unless(always(isNil(innerText)), mutate('innerText', innerText)),
			unless(always(isNil(children)), children),
			unless(always(isNil(style)), setInlineStyles(style)),
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

const elements = {
	button,
	div: () => identity,
	nav: () => identity,
	header: () => identity,
	canvas: () => identity,
	h1: () => identity,
	h2: () => identity,
	h3: () => identity,
	h4: () => identity,
	h5: () => identity,
	h6: () => identity,
	p: () => identity,
	a: () => identity,
	span: () => identity,
	form: () => identity,
	input: () => identity,
	textarea: () => identity,
	label: () => identity,
	section: () => identity,
	ul: () => identity,
	ol: () => identity,
	li: () => identity,
	pre: () => identity,
	strong: () => identity,
	b: () => identity,
	em: () => identity,
	i: () => identity,
	img: () => identity,
	video: () => identity,
	table: () => identity,
	th: () => identity,
	tr: () => identity,
	td: () => identity,
	tfoot: () => identity,
	tbody: () => identity,
	tbody: () => identity,
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