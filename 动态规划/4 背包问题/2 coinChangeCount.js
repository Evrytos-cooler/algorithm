const countChangeCount = (coins, amount) => {
	const dp = new Array(amount + 1).fill(Infinity)
	dp[0] = 0

	// 遍历 coins & amount
	for (let i = 0; i < coins.length; i++) {
		// 使用滚动数组压缩内容，从后往前遍历，保证 dp[j-coins[i]] 不会访问到已经用过 i 的内容
		for (let j = amount + 1; j > 0; j--) {
			// 可选
			if (j >= coins[i]) dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
		}
	}
	return dp[amount] !== Infinity ? dp[amount] : -1
}
console.log(countChangeCount([1, 15, 1], 15))
