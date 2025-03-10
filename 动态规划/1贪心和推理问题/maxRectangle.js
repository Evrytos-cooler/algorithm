// 要用 0 和 1 表示长和宽
const maxRectangle = matrix => {
	const dp = new Array(matrix.length)
		.fill()
		.map(() => new Array(matrix[0].length).fill().map(() => [0, 0]))

	// col
	dp[0][0][0] = Number(matrix[0][0])
	// row
	dp[0][0][1] = Number(matrix[0][0])

	let max = 0

	for (let i = 1; i < matrix.length; i++) {
		if (matrix[i][0] === '1') {
			dp[i][0][0] = dp[i - 1][0][0] + 1
			dp[i][0][1] = 1
		}
		max = Math.max(max, dp[i][0][0] * dp[i][0][1])
	}
	for (let i = 1; i < matrix[0].length; i++) {
		if (matrix[0][i] === '1') {
			dp[0][i][1] = dp[0][i - 1][1] + 1
			dp[0][i][0] = 1
		}
		max = Math.max(max, dp[0][i][0] * dp[0][i][1])
	}

	// 表示以 ij 为右下角的最大矩形的长和宽
	for (let i = 1; i < matrix.length; i++) {
		for (let j = 1; j < matrix[0].length; j++) {
			// 只有当 ij 为 1 时才会有矩形
			if (matrix[i][j] === '1') {
				// 从左上角拓展
				if(matrix[i-1][j-1] === '1') {
				}
				else{

				}
				if (matrix[i][j - 1] === '1' && matrix[i - 1][j] === '1') {
					dp[i][j][0] = Math.min(dp[i - 1][j][0] + 1, dp[i][j - 1][0])
					dp[i][j][1] = Math.min(dp[i - 1][j][1], dp[i][j - 1][1] + 1)
				} else if (matrix[i][j - 1] === '1') {
					dp[i][j][1] = dp[i][j - 1][1] + 1
					dp[i][j][0] = 1
				} else if (matrix[i - 1][j] === '1') {
					dp[i][j][0] = dp[i - 1][j][0] + 1
					dp[i][j][1] = 1
				}
				max = Math.max(max, dp[i][j][0] * dp[i][j][1])
			}
		}
	}
	return max
}
console.log(
	maxRectangle([
		['1', '0', '1', '0', '0'],
		['1', '0', '1', '1', '1'],
		['1', '1', '1', '1', '1'],
		['1', '0', '0', '1', '0'],
	])
)
