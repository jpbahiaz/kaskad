import { Div } from './components/div'
import { Button } from './components/button/index'
import { pipe } from 'ramda'

pipe(
	Div({
		onClick: () => console.log('teste 1'),
		innerText: 'Test1',
		children: Div({
			innerText: 'hi',
			style: { color: 'red', background: 'currentcolor' },
			children: pipe(
				Button({ onClick: () => console.log('teste 2'), innerText: 'Test2'}),
				Button({ onClick: () => console.log('teste 3'), innerText: 'Test3' })
			)
		}),
	}),
)(document.querySelector('.root'))

export {
	Button,
	Div
}

// /*css*/`
// .style {

// }
// `