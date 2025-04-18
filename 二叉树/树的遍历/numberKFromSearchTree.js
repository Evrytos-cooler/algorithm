import TreeNode from '../generateTree.js'

//平衡树
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

const findNumberKFromTree = (node, k) => {
	//用一个变形的中序遍历来将搜索树变成倒序的序列
	let result = null
	let count = 0
	const traversal = node => {
		if (!node) return
		node.right && traversal(node.right)
		count++
		if (count === k) {
			result = node.val
			return
		}
		node.left && traversal(node.left)
	}
	traversal(node)
	return result
}
console.log(findNumberKFromTree(bst2, 5))
console.log(findNumberKFromTree(bst3, 3))
console.log(findNumberKFromTree(bst4, 4))
