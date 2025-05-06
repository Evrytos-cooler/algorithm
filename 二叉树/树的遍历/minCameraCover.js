// 监控二叉树
// 用最少的监控覆盖整个二叉树
// 贪心: 所有的叶子节点都应该没有监控而被监控覆盖（ 叶子节点比根节点多 ）
// 特殊处理最后根节点没有的时候
// 二叉树：后续遍历，通过两个子节点的信息计算当前节点的信息
// 我们只需要计算监控数量就行， 所以我们可以返回状态，通过状态更改监控数量

import TreeNode from '../二叉树/generateTree.js'

const minCameraCover = root => {
	// 状态 0 表示有摄像机
	// 状态 1 表示没有被覆盖
	// 状态 2 表示被覆盖了
	// 为了让叶子的父节点有计算机，我们的null节点需要变成被覆盖状态
	let camera = 0
	const traversal = node => {
		// 结束条件
		if (!node) return 2
		// 后序遍历
		const left = traversal(node.left)
		const right = traversal(node.right)
		// 如果有任何一个没有被覆盖(注意顺序必须是这个先)-->需要摄像机
		if (left === 1 || right === 1) {
			camera++
			return 0
		}
		// 如果有任何一个有摄像机-->不需要摄像机而且已经被覆盖
		else if (left === 0 || right === 0) {
			return 2
		}
		// 否则就是两个都是被覆盖-->所以当前节点是未被覆盖
		else {
			return 1
		}
	}

	const result = traversal(root)
	// 如果root是未被覆盖的状态，本来是要等待上面节点覆盖的，但是此时没有上面了，所以添加一个
	return result === 1 ? camera + 1 : camera
}

const node = new TreeNode(1)
const node1 = new TreeNode(1)
const node2 = new TreeNode(1)
const node3 = new TreeNode(1)
const node4 = new TreeNode(1)

node.left = node1
node1.left = node2
node2.left = node3
node3.right = node4

console.log(minCameraCover(node))
