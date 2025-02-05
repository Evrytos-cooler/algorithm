import TreeNode from './generateTree.js'
const treeDepth = root => {
	//结束条件
	if (!root) return 0
	//当层遍历
	const left = treeDepth(root.left)
	const rigth = treeDepth(root.right)

	//返回
	return Math.max(left, rigth) + 1
}

// 借用层序遍历的方法来计算层数
const treeDepthV2 = root => {
	const stack = [root]
	let count = 0
	while (stack.length) {
		const size = stack.length
		count++
		for (let i = size; i > 0; i--) {
			const node = stack.pop()
			node?.left && stack.push(node.left)
			node?.right && stack.push(node.rigth)
		}
	}
	return count
}
const tree = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(4), new TreeNode(5)),
	new TreeNode(3, new TreeNode(6), new TreeNode(7))
)

console.log(treeDepth(tree))
console.log(treeDepthV2(tree))
