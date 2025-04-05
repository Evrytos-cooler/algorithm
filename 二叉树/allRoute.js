/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */

// 这里只是要求从根节点到叶子节点，如果是任意路径就难得多
var pathTarget = function (root, target) {
	const result = []
	const temp = []
	let sum = 0
	const traceBack = root => {
		if (!root) return
		sum += root.val
		temp.push(root.val)
		if (sum === target && !root.left && !root.right) {
			// 注意，对函数的所有路径都要执行回溯的操作
			result.push(temp.slice())
			sum -= root.val
			temp.pop()
			return
		}
		traceBack(root.right)
		traceBack(root.left)
		sum -= root.val
		temp.pop()
	}
	traceBack(root)
	return result
}

// 使用迭代实现递归, xuyao tongshi weihu yige lujing
var binaryTreePaths = function (root) {
	// 用一个栈保存遍历的节点
	if (!root) return []
	// sync result & path
	const result = []
	const path = [`${root.val}`]
	const stack = [root]
	while (stack.length) {
		const node = stack.pop()
		const route = path.pop()
		if (!node.left && !node.right) {
			// collection ans
			result.push(route)
		}
		if (node.left) {
			stack.push(node.left)
			path.push(route + '->' + node.left.val)
		}
		if (node.right) {
			stack.push(node.right)
			path.push(route + '->' + node.right.val)
		}
	}
	return result
}
