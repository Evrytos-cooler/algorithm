// 要用 0 和 1 表示长和宽
const maxRectangle = matrix => {
	const dp = new Array(matrix.length)
		.fill()
		.map(() => new Array(matrix[0].length).fill(0))
	dp[0][0] = matrix[0][0]
	for (let i = 1; i < matrix.length; i++) {
		if (matrix[i][0]) dp[i][0] = dp[i - 1][0] + 1
	}
	for (let i = 1; i < matrix[0].length; i++) {
		if (matrix[0][i]) dp[0][i] = dp[0][i - 1]
	}
	for (let i = 1; i < matrix.length; i++) {
		for (let j = 1; j < matrix[0].length; j++) {
			if (true) {
			}
		}
	}
}
