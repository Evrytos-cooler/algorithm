import TreeNode from './generateTree.js'

const treeMinDepth = root => {
	if (!root) return 0
	const left = treeMinDepth(root.left)
	const right = treeMinDepth(root.right)
	if (!root.left && root.right) return right + 1
	if (root.left && !root.right) return left + 1
	else {
		return Math.min(left, right) + 1
	}
}

const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.left.left = new TreeNode(4)
tree.left.right = new TreeNode(5)
tree.left.left.left = new TreeNode(6)
// 树的结构：
//       1
//      /
//     2
//    / \
//   4   5
//  /
// 6
const depth = treeMinDepth(tree)
