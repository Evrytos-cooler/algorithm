// dp[i][0]表示当前持有 持有可能是当前买入或者前一天已经买入
// dp[i][1]表示当前不持有 不持有可能是当前卖出或者前一天已经卖出
const maxProfit = arr => {
	const dp = new Array(arr.length).fill(() => new Array(2).fill(0))
	dp[0][0] = -arr[0]
	dp[0][1] = 0

	for (let i = 1; i < arr.length; i++) {
		dp[i][0] = Math.max(dp[i - 1][0], -arr[i])
		dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + arr[i])
	}
	return dp[arr.length - 1][1]
}
// 贪心方法
// 遍历一次数组，记录最小值，同时记录result，由于只能先买后卖，同一个循环中就能够计算买入和卖出
// 拆开来看，其实每两天就能算出一个收益，对于能够买卖多次的情况，其实我们只需要吧所有正收益都加起来就行了
const greedy = arr => {
	let result = -Infinity
	let min = Infinity
	for (let i = 0; i < arr.length; i++) {
		min = Math.min(arr[i], min)
		result = Math.max(result, arr[i] - min)
	}
	return result
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(greedy([7, 1, 5, 3, 6, 4]))
