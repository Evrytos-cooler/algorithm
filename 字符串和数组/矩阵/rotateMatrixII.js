/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
	let rowStart = 0
	let colStart = 0
	let rowEnd = matrix[0].length - 1
	let colEnd = matrix.length - 1
	const result = []

	while (colEnd - colStart > 0 && rowEnd - rowStart > 0) {
		// 上
		for (let i = rowStart; i < rowEnd; i++) {
			result.push(matrix[colStart][i])
		}
		// 右
		for (let i = colStart; i < colEnd; i++) {
			result.push(matrix[i][rowEnd])
		}
		// 下
		for (let i = rowEnd; i > rowStart; i--) {
			result.push(matrix[colEnd][i])
		}
		// 左
		for (let i = colEnd; i > colStart; i--) {
			result.push(matrix[i][rowStart])
		}
		colStart++
		colEnd--
		rowStart++
		rowEnd--
	}
	// 只有两个边都是奇数的情况下不能一次填满
	if (colEnd - colStart === 0) {
		for (let i = rowStart; i <= rowEnd; i++) {
			result.push(matrix[colStart][i])
		}
	} else if (rowEnd - rowStart === 0) {
		for (let i = colStart; i <= colEnd; i++) {
			result.push(matrix[i][rowStart])
		}
	}

	return result
}

console.log(
	spiralOrder([
		[1, 2, 3, 4, 0],
		[5, 6, 7, 8, 0],
		[9, 10, 11, 12, 0],
		[13, 14, 15, 16, 0],
		[17, 18, 19, 20, 0],
	])
)
