import TreeNode from './generateTree.js'
// 计算直径，需要用左右子树的最大深度，所以要用到后续遍历
const treeDiameter = node => {
	const traversal = node => {
		if (!node) return 0
		let left = traversal(node.left)
		let right = traversal(node.right)
		return Math.max(left, right) + 1
	}
	const getDiameter = node => {
		if (!node) return 0
		let left = traversal(node.left)
		let right = traversal(node.right)
		return left + right + 1
	}
	return getDiameter(node)
}

const bst2 = new TreeNode(
	4,
	new TreeNode(2, new TreeNode(1), new TreeNode(3)),
	new TreeNode(6, null, new TreeNode(7))
) // 结构：
//     4
//   /   \
//  2     6
// / \     \
//1   3     7
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
