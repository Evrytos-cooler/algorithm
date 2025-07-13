// https://leetcode.cn/problems/maximum-length-of-repeated-subarray/submissions/643529588/
const findLength = (nums1, nums2) => {
	if (nums1.length < 1) return 0
	// dp[i][j] ：以 nums1[i] 和 nums2[j] 为结尾的最长重复子串长度
	const dp = new Array(nums1.length).fill().map(() => new Array(nums2.length).fill(0))
	// 转换方程  dp[i][j] = dp[i-1][j-1] + 1 , dp[i][j]
	// 所以得知遍历顺序和初始化内容

	// 这 nums1,nums2 必须一样长
	let max = 0
	for (let i = 0; i < nums1.length; i++) {
		if (nums1[i] === nums2[0]) {
			dp[i][0] = 1
			max = 1
		}
		if (nums1[0] === nums2[i]) {
			dp[0][i] = 1
			max = 1
		}
	}

	for (let i = 1; i < nums1.length; i++) {
		for (let j = 1; j < nums2.length; j++) {
			if (nums1[i] === nums2[j]) {
				dp[i][j] = dp[i - 1][j - 1] + 1
				max = Math.max(dp[i][j], max)
			}
		}
	}
	return max
}

console.log(findLength([1, 2, 3, 2, 8], [5, 6, 1, 2, 4, 7]))
