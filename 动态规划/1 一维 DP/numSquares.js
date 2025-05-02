// 完全平方数
const numSquares = n => {
	const dp = new Array(n + 1).fill(Infinity)
	dp[0] = 0

	for (let i = 0; i <= n; i++) {
		for (let j = 1; j <= n; j++) {
			// dp[j - i * i ] 在背包问题里面出现过，这一步就要求他一定是对齐的
			if (j >= i * i) dp[j] = Math.min(dp[j], dp[j - i * i] + 1)
		}
	}

	return dp[n]
}

console.log(numSquares(12))
