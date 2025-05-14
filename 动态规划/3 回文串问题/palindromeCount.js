const palindromeCount = s => {
	// 计算一个字符串中的回文子串的长度
	// 双指针法：遍历一个中点，向两边扩散查找(分为一个中心和两个中心的情况)
	// 动态规划法
	const arr = s.split('')
	const dp = new Array(s.length).fill().map(() => new Array(s.length).fill(false))
	for (let i = 0; i < s.length; i++) {
		dp[i][i] = true
	}
	dp[0][1] = arr[0] === arr[1]

	let count = arr.length
	for (let i = s.length - 1; i >= 0; i--) {
		for (let j = i + 1; j < s.length; j++) {
			if (arr[i] === arr[j]) {
				if (j - i <= 1) {
					dp[i][j] = true
					count++
				} else {
					if (dp[i + 1][j - 1]) {
						dp[i][j] = true
						count++
					}
				}
			}
		}
	}
	return count
}
console.log(palindromeCount('fdsklf'))
