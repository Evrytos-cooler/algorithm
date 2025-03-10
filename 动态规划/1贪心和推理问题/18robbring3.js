import treeGenerate from '../../二叉树/generateTree.js'
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
