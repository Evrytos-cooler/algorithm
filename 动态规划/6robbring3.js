import treeGenerate from '../二叉树/generateTree.js'
import { deepCopy } from '../JS手写/copy.js'
const treeRobbring = tree => {
	let target = {}
	target = deepCopy(tree)

	const travesal = node => {
		if (!node.left && !node.rigth) {
			node.dpT = node.val
			node.dpF = 0
			return
		}
		node.left && travesal(node.left)
		node.right && travesal(node.right)
		node.dpT = node.left.dpF + node.right.dpF
		node.dpF =
			Math.max(node.left.dpF, node.left.dpT) +
			Math.max(node.right.dpF, node.right.dpT)
	}

	travesal(target)

	const result = Math.max(target.dpF, target.dpT)
	return result
}
const root = new treeGenerate(3)
root.left = new treeGenerate(4, new treeGenerate(1), new treeGenerate(3))
root.right = new treeGenerate(5, null, new treeGenerate(1))

treeRobbring(root)
