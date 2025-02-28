function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val
	this.left = left === undefined ? null : left
	this.right = right === undefined ? null : right
}

const mergeTrees = function (root1, root2) {
	// 同步深度递归遍历root1和root2，处理root1和root2的内容
	if (!root1 && !root2) return null
	const traversal = (rootA, rootB) => {
		if (!rootA && !rootB) return null
		return new TreeNode(
			(rootA?.val ?? 0) + (rootB?.val ?? 0),
			traversal(rootA?.left, rootB.left),
			traversal(rootA?.right, rootB.right)
		)
	}
	const result = traversal(root1, root2)
	return result
}

const bst3 = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)))
// 结构：
// 1
//  \
//   2
//    \
//     3
const bst4 = new TreeNode(
	10,
	new TreeNode(5, new TreeNode(3), new TreeNode(7, new TreeNode(6), null)),
	new TreeNode(15, null, new TreeNode(18))
)
// 结构：
//       10
//     /    \
//    5     15
//   / \     \
//  3   7     18
//     /
//    6
console.log(mergeTrees(bst3, bst4))
