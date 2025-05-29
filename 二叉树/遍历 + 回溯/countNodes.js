function TreeNode(val, left, right) {
	this.val = val === undefined ? 0 : val
	this.left = left === undefined ? null : left
	this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 直接遍历当然简单，但是对于完全二叉树，其实我们只需要找到最后缺的内容就知道一共多少个节点了
// 把二叉树看成链表，我们从最右侧开始找，如果找到一个链表短于上一个，其实就已经统计完成了所有缺的节点
// 但是其实这种情况，在极端情况下也会退化到接近（O(N))
var countNodes = function (root) {
	if (!root) return 0
	if (!root.left && !root.right) return 1
	let leakCount = 0
	let breakFlag = false
	let maxLevel = 0

	// 后序遍历
	const traversal = (node, _) => {
		// 到达底部，可以收集结果
		if (breakFlag) return
		if (!node) {
			if (maxLevel !== 0 && _ > maxLevel) {
				breakFlag = true
				maxLevel = Math.max(maxLevel, _)
				return
			} else {
				maxLevel = Math.max(maxLevel, _)
				leakCount++
			}
			return
		}
		traversal(node.right, _ + 1)
		traversal(node.left, _ + 1)
	}
	traversal(root, 0)
	// 2 层 - 3 个 ， 3 层 - 7 个 ， 4 层 - 15个
	leakCount = breakFlag ? leakCount : 0
	const result = Math.pow(2, maxLevel) - 1 - leakCount
	return result
}
// Test case 1: 空树
const tree1 = null
console.log(countNodes(tree1)) // Expected: 0

// Test case 2: 只有根节点
const tree2 = new TreeNode(1)
console.log(countNodes(tree2)) // Expected: 1

// Test case 3: 2层完全二叉树
const tree3 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
console.log(countNodes(tree3)) // Expected: 3

// Test case 4: 3层完全二叉树
const tree4 = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(4), new TreeNode(5)),
	new TreeNode(3, new TreeNode(6), new TreeNode(7))
)
console.log(countNodes(tree4)) // Expected: 7

// Test case 5: 非完全二叉树
const tree5 = new TreeNode(1, new TreeNode(2, new TreeNode(4), null), new TreeNode(3))
console.log(countNodes(tree5)) // Expected: 4 (但当前算法会返回3，说明有问题)
