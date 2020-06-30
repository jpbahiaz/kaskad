function checkProps(current, old) {
	return true
}

function element(component, props, ...children) {
	let elementComponent = component
	let elementProps = props
	let elementChildren = children

	return [ 
		[elementComponent, elementProps, elementChildren],
		function render(currentComponent, currentProps, ...currentChildren){
			let willRender = false
			if (elementComponent !== currentComponent) elementComponent = currentComponent
			if (checkProps(elementProps, currentProps)) elementProps = currentProps

			if(!elementChildren.length && currentChildren.length) {
				elementChildren = currentChildren
				willRender = true
			}

			elementChildren.forEach((child, i) => {
				if(Array.isArray(child)){
					const [ args, renderChild ] = child

					if(Array.isArray(currentChildren[i])){
						const [ currentChildArgs, currentChildRender ] = currentChildren[i]

						if (Array.isArray(currentChildArgs)) return renderChild(...currentChildArgs)
					}
				} else {
					if(Array.isArray(currentChildren[i])){
						const [ currentChildArgs, currentChildRender ] = currentChildren[i]

						if (Array.isArray(currentChildArgs)) return currentChildRender(...currentChildArgs)
					}
				}
			})
		}
	]
}

let galba = 'birl'
let [args, renderEl] = element('div', { className: 'teste'}, element('p', undefined, galba), element('p'))

renderEl('div', { className: 'teste' }, element('p', undefined, galba))
console.log(args)
galba = 'yeah'
renderEl('nav', { className: 'galba' }, element('p', undefined, galba), element('i'))