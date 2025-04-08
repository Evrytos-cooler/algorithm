import TreeNode from './generateTree.js'
// 递归法
const judgeBalance = root => {
	const judge = root => {
		//退出条件
		if (!root) return 0
		//当前循环
		const leftHeight = judge(root.left)
		if (leftHeight === -1) return -1
		const rightHeight = judge(root.right)
		if (rightHeight === -1) return -1
		//判断是否平衡
		if (Math.abs(leftHeight - rightHeight) > 1) return -1
		else return Math.max(leftHeight, rightHeight) + 1
	}
	return judge(root) !== -1
}

//迭代法
const judgeBalanceV2 = root => {
	const traversal = root => {
		if (!root) return true
		const stack = [root]
		while (stack.length !== 0) {
			const node = stack.pop()
			if (Math.abs(getHeight(node.left) - getHeight(node.right)) > 1) {
				return false
			}
			node.right && stack.push(node.right)
			node.left && stack.push(node.left)
		}
		return true
	}

	const getHeight = root => {
		if (!root) return 0
		let height = 0
		const stack = [root]
		while (stack.length !== 0) {
			const length = stack.length
			height++
			for (let i = 0; i < length; i++) {
				const node = stack.pop()
				node?.left && stack.push(node.left)
				node?.right && stack.push(node.right)
			}
		}
		return height
	}

	return traversal(root)
}
// 平衡二叉树
const balancedTree = new TreeNode(1)
// balancedTree.left = new TreeNode(null)
balancedTree.right = new TreeNode(2)
// balancedTree.left.left = new TreeNode(null)
// balancedTree.left.right = new TreeNode(3)
// balancedTree.right.left = new TreeNode(6)
balancedTree.right.right = new TreeNode(7)
// 树的结构：
//       1
//      / \
//     2   3
//    / \ / \
//   4  5 6  7

console.log(judgeBalance(balancedTree))
console.log(judgeBalanceV2(balancedTree))
// 非平衡二叉树
const unbalancedTree = new TreeNode(1)
unbalancedTree.left = new TreeNode(2)
unbalancedTree.left.left = new TreeNode(3)
unbalancedTree.left.left.left = new TreeNode(4)
unbalancedTree.left.left.left.left = new TreeNode(5)
// 树的结构：
//       1
//      /
//     2
//    /
//   3
//  /
// 4
// /
//5
