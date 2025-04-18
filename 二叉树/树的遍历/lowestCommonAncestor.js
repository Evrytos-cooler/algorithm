// 用后续遍历，如果左边和右边都找到了对应的节点的，root就是目标，否则就传递找到的那个节点
const lowestCommonAncestor = (root, p, q) => {
	if (!root || !p || !q) return null
	if (root === p || root === q) return root
	const left = lowestCommonAncestor(root.left, p, q)
	const right = lowestCommonAncestor(root.right, p, q)
	if (left && right) return root
	else {
		return left ? left : right
	}
}
