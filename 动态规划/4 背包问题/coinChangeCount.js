const countChangeCount = (coins, amount) => {
	const dp = new Array(amount + 1).fill(Infinity)
	dp[0] = 0

	// 遍历 coins & amount
	for (let i = 0; i < coins.length; i++) {
		for (let j = 1; j <= amount; j++) {
			// 可选
			if (j >= coins[i]) dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
		}
	}
	return dp[amount] !== Infinity ? dp[amount] : -1
}
console.log(countChangeCount([1, 5, 10], 15))
