// 子数组问题，连续的，不需要两层
// https://leetcode.cn/problems/longest-continuous-increasing-subsequence/description/
var LCIS = arr => {
	const dp = Array(arr.length).fill(1)
	let result = 0
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > arr[i - 1]) {
			dp[i] = dp[i - 1] + 1
		}
		result = Math.max(result, dp[i])
	}
	return result
}

var findLengthOfLCIS = arr => {
	// 和 LIS 查不多，只需要一个循环对比上一个就行
	const dp = new Array(arr.length).fill(1)
	let max = 1
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > arr[i - 1]) {
			dp[i] = Math.max(dp[i], dp[i - 1] + 1)
		}
		max = Math.max(dp[i], max)
	}
	return max
}
console.log(LCIS([2, 2, 2, 2, 2]))
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]))
