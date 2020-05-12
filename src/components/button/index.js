export function Button({ onClick, innerText }){
	return function renderer({ parent, sibling }){
		try {
			let customBtn = document.createElement('button')
			customBtn.addEventListener('click', onClick)
			customBtn.innerText = innerText
			if (sibling) {
				parent.inserBefore(customBtn, sibling)
			} else {
				parent.append(customBtn)
			}
		} finally {
			return { parent, sibling }
		}
	}
}