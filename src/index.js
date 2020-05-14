import { pipe, partial } from 'ramda'
import { createElement } from './functions/elements'

const Button = partial(createElement, ['button'])
const Div = partial(createElement, ['div'])

pipe(
	Div({
		onClick: () => console.log('teste 1'),
		innerText: 'Test1',
		children: Div({
			innerText: 'hi',
			className: 'container',
			style: { color: 'red' },
			children: pipe(
				createElement('button', { onClick: () => console.log('teste 2'), innerText: 'Test2', type: 'submit'}),
				Button({ onClick: () => console.log('teste 3'), innerText: 'Test3' })
			)
		}),
	}),
)(document.querySelector('.root'))

// export {
// 	Button,
// 	Div
// }

// /*css*/`
// .style {

// }
// `