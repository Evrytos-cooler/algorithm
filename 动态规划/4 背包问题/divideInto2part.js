//数组，不连续分割成两个内容
//实际上转换为 01 背包问题
const divideInto2part = arr => {
	let sum = arr.reduce((prev, cur) => prev + cur, 0)
	sum /= 2
	if (sum !== Math.floor(sum)) return false
	const dp = Array(arr.length)
	for (let i = 0; i < arr.length; i++) {
		dp[i] = []
	}
	for (let j = 0; j <= sum; j++) {
		if (j < arr[0]) {
			dp[0][j] = 0
		} else {
			dp[0][j] = arr[0]
		}
	}
	//dp 数组的含义：一维是物品列表，二维是背包大小，如果dp[arr.length-1][sum] === sum说明能放满，也就是能找到
	//dp 转换：背包大小肯定是要大于0，否则放不进去。物品有放和不放两种可能，需要放的最满的（贪心的思想）局部最优解
	for (let i = 1; i < arr.length; i++) {
		for (let j = 0; j <= sum; j++) {
			if (arr[i] < j) {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - arr[i]] + arr[i])
			} else {
				dp[i][j] = dp[i - 1][j]
			}
		}
	}
	return dp[arr.length - 1][sum] === sum
}
console.log(divideInto2part([1, 2, 3, 5]))
