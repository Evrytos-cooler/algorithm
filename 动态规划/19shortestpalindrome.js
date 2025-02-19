// 用动态规划解决最短回文子串问题
// 用dp求最长回文前缀
// dp[i][j]是i到j是否是回文
const shortestPalindrome = str => {
	if (str.split('').slice().reverse().join('') === str) return str
	str = str.split('')
	const dp = Array(str.length)
	for (let i = 0; i < str.length; i++) {
		dp[i] = []
	}
	dp[0][1] = str[0] === str[1]

	// 计算回文
	for (let i = str.length - 1; i >= 0; i--) {
		for (let j = i; j < str.length; j++) {
			if (str[i] === str[j]) {
				if (j - i <= 1) dp[i][j] = true
				else {
					dp[i][j] = dp[i + 1][j - 1]
				}
			}
		}
	}

	//计算最长回文前缀
	let max = 0
	for (let i = 1; i < str.length; i++) {
		if (dp[0][i]) {
			max = i
		}
	}

	const result = str
		.slice(max + 1)
		.reverse()
		.concat(str)
		.join('')
	return result
}

console.log(shortestPalindrome('a'))
