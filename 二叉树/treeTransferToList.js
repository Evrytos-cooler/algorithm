import TreeNode from './generateTree.js'
const flatten = function (root) {
	let head = new TreeNode(null)
	let virtual = head
	const traversal = root => {
		// 前序遍历 中左右
		if (!root) return
		const node = new TreeNode(root.val)
		head.right = node
		head = node
		root.left && traversal(root.left)
		root.right && traversal(root.right)
		virtual = virtual
	}
	traversal(root)
	return virtual.right
}

// 原地 把node推入queue中然后同意处理链接
const flattenV2 = function (root) {
	const stack = []
	const traversal = root => {
		// 前序遍历 中左右
		if (!root) return
		stack.push(root)
		root.left && traversal(root.left)
		root.right && traversal(root.right)
	}

	traversal(root)
	for (let i = 0; i < stack.length - 1; i++) {
		stack[i].left = null
		stack[i].right = stack[i + 1]
	}
	return root
}

const root = new TreeNode(1)
// 创建左子树
root.left = new TreeNode(2)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)
// 创建右子树
root.right = new TreeNode(2)
root.right.left = new TreeNode(4)
root.right.right = new TreeNode(3)

console.log(flatten(root))
console.log(flattenV2(root))
