import TreeNode from './generateTree.js'
const treeDiameter = root => {
	let result = 0
	const traversal = node => {
		if (!node) return 0
		const left = traversal(node.left)
		const right = traversal(node.right)
		result = Math.max(result, left + right + 1)
		return Math.max(left, right) + 1
	}
	traversal(root)
	if (!root) return 0
	// 注意是以节点为1还是以边为1
	return result - 1
}

const bst2 = new TreeNode(
	4,
	new TreeNode(2, new TreeNode(1), new TreeNode(3)),
	new TreeNode(6, null)
) // 结构：
//     4
//   /   \
//  2     6
// / \
//1   3
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

console.log(treeDiameter(bst2))
console.log(treeDiameter(bst3))
console.log(treeDiameter(bst4))
