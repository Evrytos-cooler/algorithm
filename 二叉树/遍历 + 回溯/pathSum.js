// 这实际上是找和为k的连续子数组的个数的升级版
// 将树拆为一个一个的链表，从头到子节点的遍历，加上一个回溯来传递map即可
const pathSum = function (root, targetSum) {
	let count = 0
	let perSum = 0
	let perSumMap = new Map()
	perSumMap.set(0, 1)

	// 用一个DFS遍历，将各个分支视为一个链表
	const traversal = (root, map) => {
		if (!root) return
		perSum += root.val
		if (map.has(perSum - targetSum)) {
			count += map.get(perSum - targetSum)
		}
		map.set(perSum, (map.get(perSum) || 0) + 1)
		traversal(root.left, map)
		traversal(root.right, map)
		map.set(perSum, map.get(perSum) - 1)
		perSum -= root.val
	}

	traversal(root, perSumMap)
	return count
}
