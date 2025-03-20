Array.prototype.snail = function (rows, cols) {
	// 实现代码
	const result = new Array(cols).fill().map(() => new Array(rows).fill())
	// 左闭右开
	let rowStart = 0
	let rowEnd = rows - 1
	let colStart = 0
	let colEnd = cols - 1
	let index = 0

	while (rowStart < rowEnd && colStart < colEnd) {
		// 上
		for (let i = rowStart; i < rowEnd; i++) {
			result[colStart][i] = this[i]
			index++
		}
		// 右
		for (let i = colStart; i < colEnd; i++) {
			result[i][rowEnd] = this[i]
			index++
		}
		// 下
		for (let i = rowEnd; i > rowStart; i--) {
			result[colEnd][i] = this[i]
			index++
		}
		// 左
		for (let i = colEnd; i > colStart; i--) {
			result[i][rowStart] = this[i]
			index++
		}
		rowStart++
		colStart++
		rowEnd--
		colEnd--
	}

	// 只要有一条边是偶数，就能够填满
	if (rows % 2 === 1 && cols % 2 === 1) {
		// 奇数是长
		if (rowEnd - rowStart === 0) {
			for (let i = colStart; i <= colEnd; i++) {
				result[i][rowEnd] = this[index++]
			}
		}
		// 奇数是宽
		else {
			for (let i = rowStart; i <= rowEnd; i++) {
				result[colEnd][i] = this[index++]
			}
		}
	}
}

// 示例用法
const arr = [
	19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15, 1, 2, 3, 4, 5,
]
console.log(arr.snail(3, 5)) // 输出蜗牛排序的二维数组
