// 从 coins 中凑成 amount 的最小个数

const coinChange = (coins, amount) => {
	const dp = new Array(amount + 1).fill(Infinity)
	dp[0] = 0

	for (let i = 0; i < coins.length; i++) {
		for (let j = 1; j <= amount; j++) {
			if (j >= coins[i]) dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
		}
	}

	return dp[amount] === Infinity ? -1 : dp[amount]
}
console.log(coinChange([2], 3))
