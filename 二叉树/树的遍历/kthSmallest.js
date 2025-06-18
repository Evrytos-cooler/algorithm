import TreeNode from '../生成和转换/generateTree.js'
// 二叉搜索树的第 k 小的元素
// 利用二叉搜索树常见中序遍历是一个递增序列的性质
// 需要遍历 K 次，时间复杂度是 O(k)

// 如果需要频繁修改，还有以下几种方式优化
// 1. 使用平衡二叉树 （比较复杂，需要维护平衡因子）
// 2. 使用节点计数，标记当前节点为根节点的节点数量，可以剪枝,获取复杂度 O(log n)，但是增删需要更新组件节点内容
// 3. 缓存，直接缓存有序数据，获取复杂度为 O(1)，但是插入删除需要 O(n)
// 4. 分块处理，每个块维护自己的统计详细
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
