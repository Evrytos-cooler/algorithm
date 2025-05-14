import TreeNode from '../生成和转换/generateTree.js'
// 二叉树的最小差值
// 暴力解法是直接中序遍历二叉树，然后获得一个有序序列，然后遍历序列获取最小差值
// 不过我们可以在遍历的过程中同时把这个最小的差值算出来，通过参数的方式传参
const getMinimumDifference = root => {
	if (!root) return 0
	let min = Infinity
	let prev = Infinity
	// 中序遍历
	// prev 是上一个节点的 *值*
	const traversal = node => {
		if (node.left) traversal(node.left)
		const delta = Math.abs(node.val - prev)
		min = Math.min(delta, min)
		prev = node.val
		if (node.right) traversal(node.right)
	}
	traversal(root)
	return min
}
// Test Case 1: Single node
// Expected: Infinity (no other nodes to compare)
const tree1 = new TreeNode(5)

// Test Case 2: Two nodes with minimal difference
// Expected: 1 (5-4=1)
const tree2 = new TreeNode(4, null, new TreeNode(5))

// Test Case 3: Balanced BST with multiple candidates
// Expected: 1 (difference between 9 and 10)
const tree3 = new TreeNode(
	10,
	new TreeNode(5, new TreeNode(3), new TreeNode(9)),
	new TreeNode(15, new TreeNode(13), new TreeNode(17))
)

// Test Case 4: Right-skewed tree
// Expected: 2 (15-13=2)
const tree4 = new TreeNode(
	10,
	null,
	new TreeNode(13, null, new TreeNode(15, null, new TreeNode(17)))
)

// Test Case 5: Multiple small differences
// Expected: 1 (multiple pairs with difference 1)
const tree5 = new TreeNode(
	7,
	new TreeNode(3, new TreeNode(1), new TreeNode(4)),
	new TreeNode(10, new TreeNode(9), new TreeNode(11))
)

console.log(getMinimumDifference(tree1))
console.log(getMinimumDifference(tree2))
console.log(getMinimumDifference(tree3))
console.log(getMinimumDifference(tree4))
console.log(getMinimumDifference(tree5))
