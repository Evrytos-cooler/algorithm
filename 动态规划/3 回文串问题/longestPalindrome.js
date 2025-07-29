// 因为最长的回文串肯定可以从次长的回文串中得到， 所以可以使用 dp 拆解子问题
// dp[i][j] 定义为 slice(i,j-1) 是不是回文的
// dp[i][j] = dp[i+1][j-1], i <= j , 看递推公式，我们知道 I 需要从后向前，J 需要从前向后
var longestPalindrome = s => {
	if (s.length < 1) return s
	let res = []
	const dp = new Array(s.length).fill().map(() => new Array(s.length).fill(false))
	// 单个字符一定是回文的
	for (let i = 0; i < s.length; i++) {
		dp[i][i] = true
		res.push(s[i])
	}
	for (let i = s.length - 1; i >= 0; i--) {
		for (let j = i + 1; j < s.length; j++) {
			if (s[i] === s[j]) {
				if (j - i <= 1) {
					// 特殊处理，这是初始化的一部分
					dp[i][j] = true
					res.push(s.slice(i, j + 1))
				} else {
					dp[i][j] = dp[i + 1][j - 1]
					dp[i + 1][j - 1] && res.push(s.slice(i, j + 1))
				}
			}
		}
	}
	return res.reduce((prev, cur) => {
		return prev.length > cur.length ? prev : cur
	}, '')
}
console.log(longestPalindrome('1'))

// 也可以用双指针方法
// 双指针思路是遍历所有开始的节点，每一个开始的位置都可以找到以他为中心的回文串，返回最长的一个
// 注意回文串可以从一个字符开始也可以从两个字符开始
var longestPalindrome = s => {
	const getPalindrome = (s, i, j) => {
		while (i >= 0 && j < s.length && s[i] === s[j]) {
			i--
			j++
		}
		// 这里是停留在不对的位置的
		i++
		j--
		return s.slice(i, j + 1)
	}

	let str = ''
	for (let i = 0; i < s.length; i++) {
		// 偶数长度的回文串
		let str1 = getPalindrome(s, i, i + 1)
		// 奇数长度的回文串
		let str2 = getPalindrome(s, i, i)
		let temp = str1.length > str2.length ? str1 : str2
		str = temp.length > str.length ? temp : str
	}
	return str
}

console.log(longestPalindrome('1'))
console.log(longestPalindrome('aaaa'))
console.log(longestPalindrome('abccbaabc'))
