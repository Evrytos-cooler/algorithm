// 用后续遍历，如果左边和右边都找到了对应的节点的，root就是目标，否则就传递找到的那个节点
var lowestCommonAncestor = (root, p, q) => {
	if (!root || !p || !q) return null
	if (root === p || root === q) return root
	const left = lowestCommonAncestor(root.left, p, q)
	const right = lowestCommonAncestor(root.right, p, q)
	if (left && right) return root
	else {
		return left ? left : right
	}
}
// 这道题压缩的有点厉害，其实是迭代遍历树，然后看当前节点是不是公共祖先

var lowestCommonAncestor = (root, p, q) => {
	if (!root) return false
	if (root === p || root === q) return root // 说明已经找到了一边
	// 然后开始一边一边的找
	const left = lowestCommonAncestor(root.left, p, q)
	const right = lowestCommonAncestor(root.right, p, q)
	// 如果两边都有说明找到 left 和 right
	if (left && right) return root
	return left ? left : right
}
