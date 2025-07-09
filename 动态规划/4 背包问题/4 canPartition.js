// 判断一个数组能否被分为两等分
// 转换为容量为一半的背包能否放满
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
	const half =
		nums.reduce((prev, cur) => {
			return prev + cur
		}, 0) / 2

	if (Math.floor(half) !== half) return false
	const dp = new Array(half + 1).fill(0)

	for (let i = 0; i < nums.length; i++) {
		for (let j = half; j >= nums[i]; j--) {
			dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
			if (dp[j] === half) return true
		}
	}
	return dp[half] === half
}
