import { TVnode } from './types'

function Vnode(parent: TVnode, child: TVnode, sibling: TVnode, tag: any, domRef: any): TVnode {
	return { parent: parent, child: child, sibling: sibling, tag: tag, domRef: domRef }
}

export default Vnode
