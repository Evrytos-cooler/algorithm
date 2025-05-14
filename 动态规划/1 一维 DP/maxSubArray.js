const maxSubArray = nums => {
	const dp = new Array(nums.length).fill(0)
	dp[0] = nums[0]
	let result = dp[0]
	for (let i = 1; i < nums.length; i++) {
		dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
		result = Math.max(result, dp[i])
	}
	// dp定义是以i为结尾的子序列，最大的和不一定以i为结尾，所以要取最大值
	return result
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
