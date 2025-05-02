const numSquares = n => {
	const dp = new Array(n + 1).fill(Infinity)
	dp[0] = 0

	for (let i = 0; i <= n; i++) {
		for (let j = 1; j <= n; j++) {
			if (j >= i * i) dp[j] = Math.min(dp[j], dp[j - i * i] + 1)
		}
	}

	return dp[n]
}

console.log(numSquares(12))
