enum VnodeTypeEnum {
	TEXT = 'TEXT',
	ELEMENT = 'ELEMENT',
	FUNCTION = 'FUNCTION',
}

export type TVnode = {
	type: VnodeTypeEnum;
	domRef: HTMLElement;
	parent: TVnode;
	sibling: TVnode;
}
