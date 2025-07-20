/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

// 编辑距离入门题目，只涉及删除不涉及新增
// https://leetcode.cn/problems/distinct-subsequences/
// s.lenght > t.length s 是备选字符串， t是目标字符串
var numDistinct = function (s, t) {
	// dp 初始化，dp[i][j] 为遍历到 s[i] t[j]时的组成方法数量,默认没有办法，也就是 0 种
	const dp = new Array(s.length).fill().map(() => new Array(t.length).fill(0))

	// 遍历中需要访问 i-1 , j-1 所以需要初始化第一列,第一行不用是因为 i < j 的时候，组成方法一定是 0 种
	if (s[0] === t[0]) dp[0][0] = 1
	for (let i = 1; i < s.length; i++) {
		if (s[i] === t[0]) dp[i][0] = dp[i - 1][0] + 1
		else {
			dp[i][0] = dp[i - 1][0]
		}
	}

	// 状态传递方程:  如果当前字符相等，我们可以选择用这个s[i],也可以不用这个 s[i] ,也就是删除这个 s[i]
	for (let i = 1; i < s.length; i++) {
		for (let j = 1; j < t.length; j++) {
			if (s[i] === t[j]) {
				// 选择用这个 + 不用这个 (删掉 s[i],用前面的)
				dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
			}
			// 如果当前遍历的不相等，我们必须覆盖所有t，只能不取他
			else {
				dp[i][j] = dp[i - 1][j]
			}
		}
	}

	return dp[s.length - 1][t.length - 1]
}
console.log(numDistinct('rabbbit', 'rabit'))
