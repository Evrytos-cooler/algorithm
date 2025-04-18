function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val
	this.left = left === undefined ? null : left
	this.right = right === undefined ? null : right
}

var invertTree = function (root) {
	const reverseTree = node => {
		const temp = node.left
		node.left = node.right
		node.right = temp
	}
	//遍历然后交换即可
	//使用递归
	const reverse = node => {
		if (!node) return
		reverseTree(node)
		reverse(node.left)
		reverse(node.right)
	}

	reverse(root)
	return root
}

const invertTreeV2 = tree => {
	if (!tree) return tree
	const reverseTree = node => {
		const temp = node.left
		node.left = node.right
		node.right = temp
	}
	//使用层序遍历
	const stack = []
	stack.push(tree)
	while (stack.length) {
		while (stack.length) {
			const node = stack.pop()
			reverseTree(node)
			node.left && stack.push(node.left)
			node.right && stack.push(node.right)
		}
	}
	return tree
}

const tree = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(4), new TreeNode(5)),
	new TreeNode(3, new TreeNode(6), new TreeNode(7))
)

invertTreeV2(tree)
