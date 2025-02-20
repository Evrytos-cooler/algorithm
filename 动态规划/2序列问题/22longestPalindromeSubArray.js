// 最长回文子序列 （回文子串和回文子序列是不一样的）
const LPSA = s => {
	const arr = s.split('')
	const dp = new Array(arr.length).fill().map(() => new Array(arr.length).fill(0))
	for (let i = 0; i < arr.length; i++) {
		dp[i][i] = 1
	}

	for (let i = arr.length - 1; i >= 0; i--) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				dp[i][j] = dp[i + 1][j - 1] + 2
			} else {
				dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
			}
		}
	}

	return dp[0][arr.length - 1]
}
console.log(LPSA('cbbd'))
