// dp[i][j] 是以 i 和 j 为右下角的最大正方形边长
const maximalSquare = function (matrix) {
	const dp = new Array(matrix.length)
		.fill()
		.map(() => new Array(matrix[0].length).fill(0))
	let max = 0

	// 初始化：都是宽高为 1 的正方形
	for (let i = 0; i < matrix.length; i++) {
		dp[i][0] = Number(matrix[i][0])
		max = Math.max(max, dp[i][0])
	}
	for (let j = 0; j < matrix[0].length; j++) {
		dp[0][j] = Number(matrix[0][j])
		max = Math.max(max, dp[0][j])
	}

	// 遍历（从 [1，1] 开始）
	for (let i = 1; i < dp.length; i++) {
		for (let j = 1; j < dp[0].length; j++) {
			if (matrix[i][j] === '1') {
				// 直观的看，新的正方形同时受制于左边，上面，左上为右下角的正方向
				// 宽受制于左侧，高受制于上面，斜边受制于左上角（确认左上角有）
				dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
				max = Math.max(max, dp[i][j])
			}
		}
	}
	return Math.pow(max, 2)
}
console.log(
	maximalSquare([
		['0', '1'],
		['1', '0'],
	])
)
