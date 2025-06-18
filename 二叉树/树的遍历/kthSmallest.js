import TreeNode from '../生成和转换/generateTree.js'
// 二叉搜索树的第 k 小的元素
// 利用二叉搜索树常见中序遍历是一个递增序列的性质
// 需要遍历 K 次，时间复杂度是 O(k)
const kthSmallest = function (root, k) {
	if (!root) return null
	if (!root.left && !root.right) {
		return root.val
	}
	let n = k
	let result
	const trace = node => {
		if (n <= 0) return
		// 左中右
		if (node.left) {
			trace(node.left)
		}

		n--
		if (n === 0) {
			result = node.val
			return
		}

		if (node.right) {
			trace(node.right)
		}
	}

	trace(root)
	return result
}

// 测试用例
const root = new TreeNode(5)
root.left = new TreeNode(3)
root.right = new TreeNode(6)
root.left.left = new TreeNode(2)
root.left.right = new TreeNode(4)
root.left.left.left = new TreeNode(1)

console.log('第1小的元素:', kthSmallest(root, 1)) // 预期输出: 1
console.log('第3小的元素:', kthSmallest(root, 3)) // 预期输出: 3
console.log('第5小的元素:', kthSmallest(root, 5)) // 预期输出: 5
