// 为了方便初始化，这里dp[i][j] 的定义是 arra[i-1] 和 arrb[j-1] 为结尾的内容
var longestCommonSubsequence = (text1, text2) => {
	const arra = text1.split('')
	const arrb = text2.split('')
	const dp = new Array(arra.length + 1)
		.fill()
		.map(() => new Array(arrb.length + 1).fill(0))

	for (let i = 1; i <= arra.length; i++) {
		for (let j = 1; j <= arrb.length; j++) {
			if (arra[i - 1] === arrb[j - 1]) {
				//如果相同的情况
				dp[i][j] = dp[i - 1][j - 1] + 1
			}
			//如果字符串不相同
			else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
			}
		}
	}
	return dp[arra.length][arrb.length]
}
console.log(longestCommonSubsequence('abcde', 'ace'))

var longestCommonSubsequence = (text1, text2) => {
	// dp[i][j] 是遍历到 text1[i] 和 text2[j] 的时候的最长公共子序列
	// 递推公式是 dp[i][j] = dp[i-1][j-1] + 1 表示 i,j 刚好相同
	// 不相同则有 dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]) 表示删除 i 或者删除 j
	// 有递推公式知道遍历方向和初始化内容
	const dp = new Array(text1.length).fill().map(() => new Array(text2.length).fill(0))

	// 初始化第一行：dp[i][0] 表示 text1[0...i] 和 text2[0] 的最长公共子序列
	dp[0][0] = text1[0] === text2[0] ? 1 : 0
	for (let i = 1; i < text1.length; i++) {
		if (text1[i] === text2[0]) {
			dp[i][0] = 1
		} else {
			dp[i][0] = dp[i - 1][0] // 继承前面的值
		}
	}

	// 初始化第一列：dp[0][j] 表示 text1[0] 和 text2[0...j] 的最长公共子序列
	for (let j = 1; j < text2.length; j++) {
		if (text1[0] === text2[j]) {
			dp[0][j] = 1
		} else {
			dp[0][j] = dp[0][j - 1] // 继承前面的值
		}
	}

	for (let i = 1; i < text1.length; i++) {
		for (let j = 1; j < text2.length; j++) {
			if (text1[i] === text2[j]) {
				dp[i][j] = dp[i - 1][j - 1] + 1
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
			}
		}
	}
	return dp[text1.length - 1][text2.length - 1]
}

console.log(longestCommonSubsequence('abcde', 'ace'))
