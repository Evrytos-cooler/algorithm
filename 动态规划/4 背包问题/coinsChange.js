// 完全背包问题，每一个物品能够拿多次
// 区别在于递推公式和初始化
// dp[i][j] 选当前项的时候： dp[i][j] = dp[i-1][j] + dp[i][j-value[i]] + value[i]
// dp数组保存的是方法数
const change = (amount, coins) => {
	const dp = new Array(amount + 1).fill(0)
	dp[0] = 1
	for (let i = 0; i < coins.length; i++) {
		for (let j = 1; j < amount; j++) {
			if (j >= coins[i]) dp[j] = dp[j - coins[i]]
		}
	}
	return dp[amount]
}
console.log(change(3, [2]))
