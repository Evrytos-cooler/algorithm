// 找最大的路径，路径不一定是一颗子树上的，可以通过根节点转折
// 需要通过一个后序遍历，拿到子节点的结果
// 节点的返回结果是一个贪心，是以节点为开头的路径的最大值

import TreeNode from '../generateTree.js'

// 通过一个全局变量维护最大路径（我们不需要知道具体路径是什么）
const maxPathSum = tree => {
	let max = -Infinity
	let traceBack = node => {
		if (!node) return 0
		const left = traceBack(node.left)
		const right = traceBack(node.right)
		max = Math.max(
			max,
			node.val,
			left + node.val,
			right + node.val,
			left + right + node.val
		)
		return node.val + Math.max(left, right, 0) // 取左取右或者不取
	}
	traceBack(tree)
	return max
}

const root = new TreeNode(2)
root.left = new TreeNode(-1)
root.right = new TreeNode(-2)

console.log(maxPathSum(root))
