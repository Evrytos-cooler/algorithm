const uniquePaths = obstacle => {
	const m = obstacle.length
	const n = obstacle[0].length
	const dp = new Array(m).fill().map(() => new Array(n).fill(0))
	for (let i = 0; i < m && !obstacle[i][0]; i++) {
		dp[i][0] = 1
	}

	for (let j = 0; j < n && !obstacle[0][j]; j++) {
		dp[0][j] = 1
	}
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			if (!obstacle[i][j]) {
				dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
			}
		}
	}
	return dp[m - 1][n - 1]
}
console.log(uniquePaths([[0, 0]]))
