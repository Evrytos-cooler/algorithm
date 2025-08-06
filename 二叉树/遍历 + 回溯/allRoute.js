import TreeNode from '../生成和转换/generateTree.js'
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

// 使用递归（回溯遍历）
var pathTarget = function (root) {
	if (!root) return []
	const result = []
	const path = []
	const trackBack = root => {
		path.push(root.val)
		if (!root.left && !root.right) {
			const pathStr = path.reduce((prev, cur) => prev + '->' + cur)
			result.push(pathStr)
		}
		root.left && trackBack(root.left)
		root.right && trackBack(root.right)
		path.pop()
	}
	trackBack(root)
	return result
}
// 用迭代遍历所有 route 其实就是模拟递归
// stack 用来模拟调用站
// path 用来模拟入参
var binaryTreePaths = function (root) {
	if (!root) return []
	// 用来收集结果
	const result = []
	// 用来存储当前的遍历路径
	const path = [`${root.val}`]
	// 用来模拟递归
	const stack = [root]

	while (stack.length) {
		const node = stack.pop()
		const route = path.pop()
		// 收集结果
		if (!node.left && !node.right) {
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

const node1 = new TreeNode(4)
const node2 = new TreeNode(9)
const node3 = new TreeNode(0)
const node4 = new TreeNode(5)
const node5 = new TreeNode(1)
node1.left = node2
node1.right = node3
node2.left = node4
node2.right = node5
console.log(binaryTreePaths(node1))
console.log(pathTarget(node1))
