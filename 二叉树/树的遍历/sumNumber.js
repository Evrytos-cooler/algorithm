import TreeNode from '../generateTree.js'
// 使用回溯很方便的解决 DFS
const sumNumbers = function (root) {
	if (!root) return 0
	const result = []
	let temp = []
	const traceBack = node => {
		// 处理收集
		if (!node) return
		temp.push(String(node.val))
		if (!node.left && !node.right) {
			result.push(Number(temp.reduce((prev, cur) => prev + cur)))
		}
		traceBack(node.left)
		traceBack(node.right)
		temp.pop()
	}
	traceBack(root)
	const num = result.reduce((prev, cur) => prev + cur)
	return num
}

// 使用 BFS , 类回溯的题目使用 BFS 最重要的就是要同时维护结果stack和遍历stac
const sumNumbersV2 = function (root) {
	// 注意这里的result要单独收集，否则会导致 stack 和 resultStack 不同步
	if (!root) return 0
	const result = []
	const stack = [root]
	const resultStack = [String(root.val)]
	while (stack.length) {
		const node = stack.pop()
		const value = resultStack.pop()
		// 如果没有node，说明该收集结果了
		if (!node.left && !node.right) {
			result.push(value)
		}
		if (node.left) {
			stack.push(node.left)
			resultStack.push(value + String(node.left.val))
		}
		if (node.right) {
			stack.push(node.right)
			resultStack.push(value + String(node.right.val))
		}
	}
	const num = result.reduce((prev, cur) => Number(prev) + Number(cur), 0) // 注意这里需要特殊处理 cur = undefined 的情况，否则返回String 0 + '' = '0'
	return num
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

console.log(sumNumbers(node1))
console.log(sumNumbersV2(new TreeNode(0)))
