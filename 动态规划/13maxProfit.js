// 买卖股票的最佳时机
// dp[i][0] 当前持有股票的最低支出
// dp[i][1] 当前不持有股票的最大利润

const maxProfit = arr => {
	const dp = []
	for (let i = 0; i < arr.length; i++) {
		dp[i] = []
	}
	dp[0][0] = -arr[0]
	dp[0][1] = 0

	for (let i = 1; i < arr.length; i++) {
		// 最低购入价
		dp[i][0] = Math.max(dp[i - 1][0], -arr[i])
		// 最大利润
		dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + arr[i])
	}
	return dp[arr.length - 1][1]
}
// 贪心方法
// 遍历一次数组，记录最小值，同时记录result，由于只能先买后卖，同一个循环中就能够计算买入和卖出
const greedy = arr => {
	let result = -9999
	let min = 9999
	for (let i = 0; i < arr.length; i++) {
		min = Math.min(arr[i], min)
		result = Math.max(arr[i] - min, result)
	}
	return result
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(greedy([7, 1, 5, 3, 6, 4]))
