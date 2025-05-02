import treeGenerate from '../../二叉树/generateTree.js'
// 自底向上 ，因为小偷不止走一条路径，自顶向下不利于收集结果
// 从叶子节点开始，最终将结果收敛到根节点
// 严格来说这样应该是一个二维 dp，不过这里为了打家劫舍系列不被分割，就放一起讨论了
const treeRobbring = tree => {
	const traversal = node => {
		if (!node) return
		if (!node.left && !node.right) {
			node.T = node.val
			node.F = 0
			return
		}
		traversal(node.left)
		traversal(node.right)
		//左右子树都已经挂载了T和F
		const leftT = node.left?.T || 0
		const leftF = node.left?.F || 0
		const rightT = node.right?.T || 0
		const rightF = node.right?.F || 0
		node.T = leftF + rightF + node.val
		node.F = Math.max(leftF, leftT) + Math.max(rightF, rightT)
	}
	traversal(tree)
	return Math.max(tree.T, tree.F)
}
const root = new treeGenerate(3)
root.left = new treeGenerate(4, new treeGenerate(1), new treeGenerate(3))
root.right = new treeGenerate(5, null, new treeGenerate(1))

console.log(treeRobbring(root))
