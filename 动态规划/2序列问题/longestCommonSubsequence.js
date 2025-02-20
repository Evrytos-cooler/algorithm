// 为了方便初始化，这里dp[i][j] 的定义是 arra[i-1] 和 arrb[j-1] 为结尾的内容
const longestCommonSubsequence = (text1, text2) => {
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
