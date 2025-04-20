// 判断树从根到子节点的路径有无等于target的
import TreeNode from '../生成和转换/generateTree.js'

//DFS
const hasPathSum = function (root, targetSum) {
	if (!root) return false
	let sum = 0
	const traceBack = node => {
		// 判断结果
		sum += node.val
		if (!node.left && !node.right) {
			if (sum === targetSum) {
				sum -= node.val
				return true
			}
			sum -= node.val
			return false
		}
		let left = false,
			right = false
		if (node.left) left = traceBack(node.left)
		if (left) return true
		if (node.right) right = traceBack(node.right)
		sum -= node.val
		return right
	}
	return traceBack(root)
}
const node1 = new TreeNode(5)
node1.left = new TreeNode(4)
node1.right = new TreeNode(8)
node1.left.left = new TreeNode(11)
node1.left.left.left = new TreeNode(7)
node1.left.left.right = new TreeNode(2)
node1.right.left = new TreeNode(13)
node1.right.right = new TreeNode(4)
node1.right.right.right = new TreeNode(1)

console.log(hasPathSum(node1, 22))

// BFS
const hasPathSumV2 = function (root, targetSum) {
	if (!root) return false
	const stack = [root]
	const numberStack = [root.val]
	while (stack.length) {
		const length = stack.length
		for (let i = 0; i < length; i++) {
			const node = stack.pop()
			const num = numberStack.pop()
			if (!node.left && !node.right && num === targetSum) {
				return true
			}
			if (node.left) {
				stack.push(node.left)
				numberStack.push(num + node.left.val)
			}
			if (node.right) {
				stack.push(node.right)
				numberStack.push(num + node.right.val)
			}
		}
	}
	return false
}

console.log(hasPathSumV2(node1, 22))
