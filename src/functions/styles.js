//## Lib styles function utilities ##//

import { pipe, toPairs, map, converge, nth, tap, __ } from "ramda";
import { mutate } from "../common/utility";

export function setInlineStyles(styles) {
	return function applyStyles(element){
		pipe(
			toPairs,
			map(
				pipe(
					converge(mutate, [nth(0), nth(1)]),
					tap(__, element.style)
				)
			)	
		)(styles)

		return element
	}
}

// /*css*/`
// .style {

// }
// `