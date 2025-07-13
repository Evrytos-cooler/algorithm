// https://leetcode.cn/problems/longest-increasing-subsequence/submissions/643526153/
var lengthOfLIS = arr => {
	// 特殊情况返回
	if (arr.length < 1) return 0
	// dp[i] 表示以 i 为结尾的递增序列的长度
	//初始化, 每一个子序列最短 为 1
	const dp = new Array(arr.length).fill(1)

	// 遍历，从状态转换方程的来的
	let max = 1
	for (let i = 1; i < dp.length; i++) {
		for (let j = 0; j < i; j++) {
			if (arr[i] > arr[j]) {
				dp[i] = Math.max(dp[i], dp[j] + 1)
			}
		}
		max = Math.max(max, dp[i])
	}
	return max
}
console.log(LIS([0, 1, 0, 3, 2, 3]))
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))
