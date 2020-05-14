//## Lib function utilities ##//

import { pipe, toPairs, map, join, concat } from "ramda";

export function toInlineStyle(styles){
	// Creio que precise de validar esse objeto que está chegando

	return pipe(
		toPairs,
		map(join(':')),
		join(';'),
		concat(';')
	)(styles)
}
