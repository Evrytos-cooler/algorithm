// 我们需要找到最长的字串长度，让其是摆动的,数组长度小于3的数组一定是摆动的
// 贪心做法： 从前到后遍历，如果出现单调或者平的情况，则说明这里不能加入摆动队列中。
// 维护一个 prev 和一个 cur，表示前一组差和当前差，判断这个差是否是符号相反的来判定是否需要增加长度
// 注意，当遇到单调的时候，我们的前差应该保持不动
const wiggleMaxLength = nums => {
	if (nums.length < 2) return nums.length
	let count = 1
	let prevDiff = 0
	let curDiff = null
	for (let i = 1; i < nums.length; i++) {
		curDiff = nums[i] - nums[i - 1]
		// 为什么这里的 prevDiff 可以等于 0 : 因为开始时prevDiff初始化为正负数都不好
		if ((prevDiff >= 0 && curDiff < 0) || (prevDiff <= 0 && curDiff > 0)) {
			count++
			prevDiff = curDiff
		}
	}
	return count
}
console.log(wiggleMaxLength([1, 7, 4, 9, 2, 5]))

// 这道题其实还有动归的解法 (贪心的效率更高)
// dp[i][0] 指以 i 为结尾字串的最长摆动子序列长度 , 0 , 1 分别指以当前元素为峰谷还是峰顶
// dp 状态转换方程是 dp[i] = 与前面的 diff 不同 , 0 小于上一个，1 则是大于
// 由于这里的子序列是不连续的，所以需要两个循环
const wiggleMaxLengthV2 = nums => {
	if (nums.length < 2) return nums.length
	// 初始化为 1
	const dp = new Array(nums.length).fill().map(() => new Array(2).fill(1))
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			// 作为峰谷
			if (nums[i] < nums[j]) {
				// 这里为什么取最值 ？ 因为 dp[i][0/1] 在不同的j下会尝试更新多次，要选择最长的
				dp[i][0] = Math.max(dp[j][1] + 1, dp[i][0])
			}
			// 作为峰顶
			if (nums[j] < nums[i]) {
				dp[i][1] = Math.max(dp[j][0] + 1, dp[i][1])
			}
		}
	}
	return Math.max(dp[dp.length - 1][0], dp[dp.length - 1][1])
}
