import TreeNode from './generateTree.js'
//递归法
const symmetricTree = (left, right) => {
	//停止逻辑
	if (!left && !right) return true
	else if (!left && right) return false
	else if (left && !right) return false
	else if (left.val !== right.val) return false
	//当层遍历逻辑
	const outside = symmetricTree(left.left, right.right)
	const inside = symmetricTree(left.right, right.left)
	//返回值
	return inside && outside
}

//层序遍历法
const symmetricTreeV2 = root => {
	const queue = [root]
	while (queue.length) {
		const length = queue.length
		for (let i = 0; i < length; i++) {
			const node = queue.shift()
			node.left && queue.push(node.left)
			node.right && queue.push(node.right)
		}
		const list = queue.map(i => i?.val ?? '')
		if (!(list.reverse().join('') === list.join(''))) return false
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
root.right.right = new TreeNode(null)

console.log(symmetricTree(root.left, root.right))
console.log(symmetricTreeV2(root))
