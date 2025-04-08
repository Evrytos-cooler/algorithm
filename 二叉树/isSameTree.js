import TreeNode from './generateTree.js'
// 递归法，同步的遍历两个二叉树
const isSameTree = function (p, q) {
	if (p === null && q === null) return true
	if (p === null || q === null) return false
	if (p.val !== q.val) return false
	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
const node1 = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)
const node4 = new TreeNode(4)
const node5 = new TreeNode(6)
node1.left = node2
node1.right = node3
node3.left = node4
node3.left = node5
const _node1 = new TreeNode(1)
const _node2 = new TreeNode(2)
const _node3 = new TreeNode(3)
const _node4 = new TreeNode(4)
const _node5 = new TreeNode(6)
_node1.left = _node2
_node1.right = _node3
_node3.left = _node4
_node3.left = _node5

// console.log(isSameTree(node1, _node1))

// 迭代法，（层序遍历，通过 stringify 判断是否相同）
const isSameTreeV2 = function (p, q) {
	if (p === null && q === null) return true
	if (p === null || q === null) return false
	let stackQ = [q]
	let stackP = [p]
	while (stackQ.length !== 0 && stackP !== 0) {
		// 判断当前层内容
		if (
			JSON.stringify(stackP.map(i => (i ? i.val : 'null'))) !==
			JSON.stringify(stackQ.map(i => (i ? i.val : 'null')))
		)
			return false

		const QTemp = []
		const PTemp = []
		while (stackQ.length) {
			const Q = stackQ.pop()
			if (Q === null) continue
			QTemp.push(Q.left)
			QTemp.push(Q.right)
		}
		stackQ = QTemp.slice()
		while (stackP.length) {
			const P = stackP.pop()
			if (P === null) continue
			PTemp.push(P.left)
			PTemp.push(P.right)
		}
		stackP = PTemp.slice()
	}
	if (stackP.length !== 0 || stackQ.length !== 0) return false
	return true
}

console.log(isSameTreeV2(node1, _node1))
