import { TVnode } from './types'

function Vnode(node: any): TVnode {
	return { type: node.type, domRef: node.domRef, parent: node.parent, sibling: node.sibling }
}

export default Vnode
