import TreeNode from './generateTree.js'
//跟据前序遍历和后序遍历序列构建树 : 不变量为左闭右开
const buildTree = function (preorder, inorder) {
	if (!preorder.length) return null
	//分割数组
	const target = preorder.shift()
	let index = 0
	for (index; index < inorder.length; index++) {
		if (inorder[index] === target) break
	}
	const leftInorder = inorder.slice(0, index)
	const leftPreorder = preorder.slice(0, index) // 长度和上面一样
	const rightInorder = inorder.slice(index + 1, inorder.length)
	const rightPreorder = preorder.slice(index, preorder.length)
	return new TreeNode(
		target,
		buildTree(leftPreorder, leftInorder),
		buildTree(rightPreorder, rightInorder)
	)
}

const node3 = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
