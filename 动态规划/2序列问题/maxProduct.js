const maxProduct = nums => {
	const dp = new Array(nums.length).fill().map(() => new Array(2).fill(0))
	// 0 0 表示 0 号元素为结尾的最大序列
	// 0 1 表示 0 号元素为结尾的最小值
	dp[0][0] = nums[0]
	dp[0][1] = nums[0]
	for (let i = 1; i < nums.length; i++) {
		dp[i][0] = Math.max(nums[i], nums[i] * dp[i - 1][0], nums[i] * dp[i - 1][1])
		dp[i][1] = Math.min(nums[i], nums[i] * dp[i - 1][0], nums[i] * dp[i - 1][1])
	}
	return Math.max(...dp.map(i => i[0]))
}
console.log(maxProduct([-2, -10, 0, -1]))
