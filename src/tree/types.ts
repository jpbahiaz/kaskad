export type TVnode = {
	tag: string|Function;
	domRef: Element;
	parent: TVnode;
	child: TVnode;
	sibling: TVnode;
}
