// 使用递归，没有遇到 * 则每个递归之需要判断当前字符是否匹配，然后递归下一个字符即可，相当于dp的 i++ j++
// 如果遇到了 *，要分为两种情况，一种是 * 匹配了0个字符，一种是 * 匹配了一个或者多个字符
// 匹配0个字符则直接把p的？*去掉，递归下一个字符，匹配多个字符则递归下一个s的字符,保留当前s

// p 是字符规律
const isMatchV2 = function (s, p) {
	// 递归结束条件 当模式是空的时候，字符串必须是空，反之非也
	if (p.length === 0) return s.length === 0

	const canRepeat = p.length > 1 && p[1] === '*'
	// x*的匹配模式
	if (canRepeat) {
		// 可以选择匹配或者不匹配
		if (p[0] === s[0] || (p[0] === '.' && s.length > 0)) {
			return isMatchV2(s.slice(1), p) || isMatchV2(s, p.slice(2))
		}
		// 不匹配，只能跳过
		else {
			return isMatchV2(s, p.slice(2))
		}
	}
	// 无*的匹配模式
	else {
		if (s.length === 0) return false
		return (p[0] === s[0] || p[0] === '.') && isMatchV2(s.slice(1), p.slice(1))
	}
}

console.log(isMatchV2('aaabaaaababcbccbaab', 'c*c*.*c*a*..*c*'))

// 先做递归法有利于理解动规法

// 使用动态规划，动态规划的核心是将当前结果由上一个字问题推理
// 在这里 dp[i][j] 表示 s[0...i - 1] 是否匹配 p[0...j - 1] ,因为需要用dp[0][0] 表示两个空串
// p是待匹配串s是匹配串，
const isMatch = function (s, p) {
	const dp = new Array(s.length + 1)
		.fill()
		.map(() => new Array(p.length + 1).fill(false))

	// 初始化第一行和第一列，由于第一列的含义是s的长度是空，p不为空，必然是false直接跳过了
	dp[0][0] = true
	for (let i = 2; i < dp[0].length + 1; i++) {
		// s 是0，只有遇到 * 才能true
		if (p[i - 1] === '*') {
			dp[0][i] = dp[0][i - 2]
		}
	}

	for (let i = 1; i < dp.length; i++) {
		for (let j = 1; j < dp[0].length; j++) {
			// 普通匹配
			if (p[j - 1] === s[i - 1] || p[j - 1] === '.') {
				dp[i][j] = dp[i - 1][j - 1]
			}
			// * 匹配
			else if (p[j - 1] === '*') {
				dp[i][j] = dp[i][j - 2]
				if (!dp[i][j] && (p[j - 2] === '.' || p[j - 2] === s[i - 1])) {
					dp[i][j] = dp[i - 1][j]
				}
			}
		}
	}
	return dp[dp.length - 1][dp[0].length - 1]
}

console.log(isMatch('aaabaaaababcbccbaab', 'c*c*.*c*a*..*c*'))
