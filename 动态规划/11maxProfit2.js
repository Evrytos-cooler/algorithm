// 最佳买卖股票时机之可以买卖多次
// dp 数组的定义一样
// 和只能买卖一次的唯一区别是买卖多次的话 dp[i][0] 持有股票的情况是前一天就持有或者前一天卖出后今天买
// dp[i][0] = Math.max(dp[i-1][0],dp[i-1][1] + price[i])

const maxProfit = arr => {
	const dp = []
	for (let i = 0; i < arr.length; i++) {
		dp[i] = []
	}
	dp[0][0] = -arr[0]
	dp[0][1] = 0
	for (let i = 1; i < arr.length; i++) {
		dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - arr[i])
		dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + arr[i])
	}
	return dp[arr.length - 1][1]
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]))
