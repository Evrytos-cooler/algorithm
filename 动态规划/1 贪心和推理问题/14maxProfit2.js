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

// 贪心做法，核心是盈利是可以分割的，比如第一天买入第三天卖出，盈利可以分为第一天买第二天卖 + 第二天卖第三天卖。
// 所以我们计算出每天的盈利，然后只需要取全部正值就行了,盈利是从第二天开始计算的

const maxProfitV2 = arr => {
	const profitArray = []
	for (let i = 1; i < arr.length; i++) {
		profitArray.push(arr[i] - arr[i - 1])
	}
	const maxProfit = profitArray.reduce((prev, cur) => {
		if (cur > 0) prev += cur
		return prev
	}, 0)
	return maxProfit
}

console.log(maxProfitV2([7, 1, 5, 3, 6, 4]))
