// 尽量不要浪费饼干
var findContentChildren = function (g, s) {
	// 从小到大先遍历饼干，如果当前饼干不能满足最小的孩子，则用下一个大点的饼干
	const children = g.sort((a, b) => a - b)
	const cookies = s.sort((a, b) => a - b)
	let childrenIndex = 0
	let count = 0
	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i]
		const child = children[childrenIndex]
		if (child <= cookie) {
			// 使用饼干投喂小孩
			childrenIndex++
			count++
		}
	}
	return count
}

const findContentChildrenV2 = function (g, s) {
	// 从大到小遍历孩子，如果当前孩子不能吃饱，则跳过这个孩子选择胃口更小的孩子
	const children = g.sort((a, b) => a - b)
	const cookies = s.sort((a, b) => a - b)
	let cookiesIndex = cookies.length - 1
	let count = 0
	for (let i = children.length - 1; i >= 0; i--) {
		const child = children[i]
		const cookie = cookies[cookiesIndex]
		if (cookie >= child) {
			cookiesIndex--
			count++
		}
	}
	return count
}

console.log(findContentChildren([1, 2], [1, 2, 3]))
console.log(findContentChildrenV2([1, 2], [1, 2, 3]))
