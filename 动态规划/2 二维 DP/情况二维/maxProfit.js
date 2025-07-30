// 1. 贪心做法，因为我知道整个内容，所以我可以找到最高和最低最低，一减就行
// 2. 但是这个最低一定在最高的前面，需要先买再卖
var maxProfit = arr => {
	let profit = -Infinity
	let checkIn = Infinity
	for (let p of arr) {
		checkIn = Math.min(checkIn, p)
		profit = Math.max(profit, p - checkIn)
	}
	return profit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))

// 1. dp 做法，需要分别保存当天持有和当天不持有的最大利润
// 2. dp 含义 dp[i][0] 为当前持有， dp[i][1] 为当前不持有
// 3. 递推公式-持有 (可能是今天买的，也可能是以前买的，选最大的一个) dp[i][0] = Math.max(dp[i-1][0],-arr[i])
// 4. 递推公式-不持有 (可能是今天卖的，也可能是以前卖的) dp[i][1] = Math.max(dp[i-1][1],arr[i] + dp[i-1][0])
// 5. 由递推公式我们知道，要先初始化 dp[0],从前向后遍历
var maxProfit = arr => {
	const dp = new Array(arr.length).fill().map(() => new Array(2).fill(0))
	dp[0][0] = -arr[0]
	for (let i = 1; i < arr.length; i++) {
		dp[i][0] = Math.max(dp[i - 1][0], -arr[i])
		dp[i][1] = Math.max(dp[i - 1][1], arr[i] + dp[i - 1][0])
	}
	// 最后一定要卖掉
	return dp[arr.length - 1][1]
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
