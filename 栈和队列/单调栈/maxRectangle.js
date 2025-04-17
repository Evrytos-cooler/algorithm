import largestRectangleArea from './largestRectangleArea.js'
// 记录height[i][j] 为每一个点为结尾的最大高度
// 优化过的暴力搜索
const maxRectangle = matrix => {
	if (!matrix.length || !matrix[0].length) return 0
	const heigth = new Array(matrix.length)
		.fill()
		.map(() => new Array(matrix[0].length).fill(0))
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] === '1') {
				if (i === 0) heigth[i][j] = 1
				else {
					heigth[i][j] = heigth[i - 1][j] + 1
				}
			}
		}
	}

	let area = 0
	// 遍历每一个节点，每一个节点向左遍历找到最大的矩形面积
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			let h = heigth[i][j]
			for (let k = j; k >= 0; k--) {
				const w = j - k + 1
				h = Math.min(heigth[i][k], h)
				area = Math.max(h * w, area)
			}
		}
	}
	return area
}
const maxRectangleV2 = matrix => {
	const height = new Array(matrix.length)
		.fill()
		.map(() => new Array(matrix[0].length).fill(0))
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] === '1') {
				if (i > 0) height[i][j] = height[i - 1][j] + 1
				else {
					height[i][j] = 1
				}
			}
		}
	}
	let max = 0
	for (let i = 0; i < matrix.length; i++) {
		const area = largestRectangleArea(height[i])
		max = Math.max(max, area)
	}
	return max
}
// 单调栈做法，将每一列视为一个柱状图，求柱状图形成的矩形的最大面积就行
console.log(
	maxRectangleV2([
		['1', '0', '1', '0', '0'],
		['1', '0', '1', '1', '1'],
		['1', '1', '1', '1', '1'],
		['1', '0', '0', '1', '0'],
	])
)
