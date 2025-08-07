import TreeNode from '../generateTree.js'
// 转换二叉搜索树为累加树
// 累加树累加的是比自己大的所有节点
// 对二叉搜索树 右 中 左 的遍历得到一个降序序列
// 降序序列累加比自己大的所有节点其实就是前缀和，用一个全
const converBST = tree => {
	if (!tree) return tree
	let sum = 0
	const traversal = root => {
		if (!root) return
		// 右
		traversal(root.right)
		// 中
		sum += root.val
		root.val = sum
		// 左
		traversal(root.left)
	}
	traversal(tree)
	return tree
}

// 使用迭代的方式实现右 中 左 遍历
const converBSTTraversal = tree => {
	if (!tree) return tree
	const stack = [tree]
	let sum = 0
	while (stack.length) {
		const node = stack.pop()
		if (node) {
			//左中右的推入顺序
			node.left && stack.push(node.left)
			stack.push(node, null)
			node.right && stack.push(node.right)
		} else {
			const node = stack.pop()
			sum += node.val
			node.val = sum
		}
	}
	return tree
}

const root = new TreeNode(4)
root.left = new TreeNode(1)
root.right = new TreeNode(6)

root.left.left = new TreeNode(0)
root.left.right = new TreeNode(2)
root.left.right.right = new TreeNode(3)

root.right.left = new TreeNode(5)
root.right.right = new TreeNode(7)
root.right.right.right = new TreeNode(8)

// 二叉树的递归遍历和迭代遍历
// 递归遍历比较好理解
// 迭代遍历要注意用空节点标记访问的时机
const converBSTV2 = root => {
	if (!root) return root
	let sum = 0
	const traversal = node => {
		if (!node) return
		node.right && traversal(node.right)
		sum += node.val
		node.val = sum
		node.left && traversal(node.left)
	}
	return root
}

const converBSTV2Traversal = root => {
	const stack = [root]
	let sum = 0
	while (root) {
		const node = stack.pop()
		if (node) {
			// 后序遍历，反向入栈
			root.left && stack.push(root.left)
			stack.push(root, null)
			root.right && stack.push(root.right)
		} else {
			// 消费
			const node = stack.pop()
			sum += node.val
			node.val = sum
		}
	}
	return root
}
const ans1 = converBST(root)
