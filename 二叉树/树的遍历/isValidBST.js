import TreeNode from '../generateTree.js'
// 中序遍历一下，判断是否是递增的就行
const isValidBST = function (root) {
	const list = []
	let flag = true
	if (!root) return true

	const traversal = node => {
		if (!node) return
		node.left && traversal(node.left)
		// 是否递增
		if (list.length > 0 && list[list.length - 1] >= node.val) {
			flag = false
			return
		}
		list.push(node.val)
		node.right && traversal(node.right)
	}
	traversal(root)
	return flag
}

const tree = new TreeNode(
	3,
	new TreeNode(2, new TreeNode(1)),
	new TreeNode(4, new TreeNode(7), new TreeNode(5))
)
console.log(isValidBST(tree))
