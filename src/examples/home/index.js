import { partial, pipe } from "ramda"
import { createElement } from "../../functions/elements"

const Button = partial(createElement, ['button'])
const Div = partial(createElement, ['div'])
const Span = partial(createElement, ['span'])

function Home() {
	return Div({ onClick: () => console.log('teste 1'), innerText: 'Test1',
		children: Div({
			innerText: 'hi',
			className: 'container',
			style: { color: 'red' },
			children: pipe(
				Span({ onClick: () => console.log('teste 2'), innerText: 'Test2' }),
				Button({ onClick: () => console.log('teste 3'), innerText: 'Test3' })
			)
		}),
	})
}

export default Home
