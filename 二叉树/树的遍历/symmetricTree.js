import TreeNode from '../generateTree.js'
//递归法
const isSymmetricTree = root => {
	const traversal = (left, right) => {
		if (!left && !right) return true
		if (!left && right) return false
		if (left && !right) return false
		if (left.val !== right.val) return false
		const leftTree = traversal(left.left, right.right)
		const rightTree = traversal(left.right, right.left)
		return leftTree && rightTree
	}
	if (!root) return true
	return traversal(root.left, root.right)
}

//层序遍历法
const isSymmetricTreeV2 = root => {
	const isSymmetric = arr => {
		let i = 0,
			j = arr.length - 1
		while (i <= j) {
			if (arr[i] !== arr[j]) return false
			i++
			j--
		}
		return true
	}

	if (!root) return true
	const stack = [root]
	while (stack.length) {
		let length = stack.length
		for (let i = 0; i < length; i++) {
			const node = stack.shift()
			if (node.val === 'null') continue
			if (node.left) stack.push(node.left)
			else stack.push(new TreeNode('null', null, null))
			if (node.right) stack.push(node.right)
			else stack.push(new TreeNode('null', null, null))
		}
		if (!isSymmetric(stack.map(item => item?.val))) return false
	}

	return true
}

// 生成对称二叉树的函数
const root = new TreeNode(1)

root.left = new TreeNode(2)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)
// 创建右子树
root.right = new TreeNode(2)
root.right.left = new TreeNode(4)
root.right.right = new TreeNode(3)

console.log(isSymmetricTree(root))
console.log(isSymmetricTreeV2(root))
