import TreeNode from '../generateTree.js'
//跟据前序遍历和后序遍历序列构建树 : 不变量为左闭右开
const buildTreeV2 = function (preorder, inorder) {
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
		buildTreeV2(leftPreorder, leftInorder),
		buildTreeV2(rightPreorder, rightInorder)
	)
}

// 从后序和中序序列构建树，不变量左闭右开
const buildTree = function (inorder, postorder) {
	if (!inorder.length || !postorder.length) return null
	// 后序的最后一个就是跟节点 左右中
	const target = postorder.pop()
	// 中序通过后序找到的当前节点被分割为左右  左中右
	let i = 0
	for (i; i < inorder.length; i++) {
		if (inorder[i] === target) break
	}
	const inLeft = inorder.slice(0, i)
	const inRight = inorder.slice(i + 1)
	const postLeft = postorder.slice(0, i)
	const postRight = postorder.slice(i)

	return new TreeNode(
		target,
		buildTree(inLeft, postLeft),
		buildTree(inRight, postRight)
	)
}

const node3 = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
