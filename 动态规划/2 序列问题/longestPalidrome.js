// 使用动态规划，dp[i][j] 保存的是 i-j是否是回文子串
const longestPalindrome = function (s) {
	const result = s.split('')
	const dp = new Array(s.length).fill().map(() => new Array(s.length).fill(false))
	for (let i = 0; i < s.length; i++) {
		dp[i][i] = true
	}

	for (let i = s.length - 1; i >= 0; i--) {
		for (let j = i + 1; j < s.length; j++) {
			if (s[i] === s[j]) {
				if (j - i <= 1) {
					dp[i][j] = true
					result.push(s.slice(i, j + 1))
				} else {
					dp[i][j] = dp[i + 1][j - 1]
					dp[i][j] && result.push(s.slice(i, j + 1))
				}
			}
		}
	}
	const returnResult = result.reduce(
		(prev, cur) => (prev.length > cur.length ? prev : cur),
		''
	)

	return returnResult
}
console.log(longestPalindrome('aaaa'))
