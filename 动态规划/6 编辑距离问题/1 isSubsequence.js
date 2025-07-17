// https://leetcode.cn/problems/is-subsequence/
// s 长度小于 t
// 用双指针和最长公共子序列也能做
// 这里用编辑距离的思路来为编辑距离做铺垫

// 编辑距离思路
var isSubsequence = (s, t) => {
	// 处理空串
	if (s.length === 0) return true
	// dp 定义 ， dp 递推 dp[i][j] = dp[i-1]dp[j-1] + 1  || Math.max(dp[i][j-1] ,dp[i-1][j])
	const dp = new Array(s.length).fill().map(() => new Array(t.length).fill(0))
	if (s[0] === t[0]) dp[0][0] = 1
	for (let i = 1; i < s.length; i++) {
		if (s[i] === t[0]) {
			dp[i][0] = 1
		} else {
			dp[i][0] = dp[i - 1][0]
		}
	}

	for (let j = 1; j < t.length; j++) {
		if (s[0] === t[j]) {
			dp[0][j] = 1
		} else {
			dp[0][j] = dp[0][j - 1]
		}
	}

	for (let i = 1; i < s.length; i++) {
		for (let j = 1; j < t.length; j++) {
			if (s[i] === t[j]) {
				dp[i][j] = dp[i - 1][j - 1] + 1
			} else {
				// dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
				// 这里需要着重理解，用最长公共子序列的思路来做好理解， 但是如何用编辑距离的思路来看呢？
				// dp[i][j-1] 表示选择 s[i] 但是不选择 t[j] (也就是跳过\删除 t[j])
				// dp[i-1][j] 表示选择 t[j] 但是不选择 s[i] (也就是跳过\删除 s[i])
				// 由于 s 是必须全部覆盖的，所以我们可以省略删除 s[i] 的情况（一定不会删除）
				// dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]) -> dp[i][j] = dp[i][j-1]
				dp[i][j] = dp[i][j - 1]
			}
		}
	}
	return dp[s.length - 1][t.length - 1] === s.length
}
console.log(isSubsequence('abc', 'ahbgdc'))

// dp 含义错误以覆盖空串
// 最长公共子序列思路
var isSubsequence = (s, t) => {
	const arra = s.split('')
	const arrb = t.split('')
	const dp = new Array(arra.length + 1)
		.fill()
		.map(() => new Array(arrb.length + 1).fill(0))
	for (let i = 1; i <= arra.length; i++) {
		for (let j = 1; j <= arrb.length; j++) {
			if (arra[i - 1] === arrb[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1] + 1
			} else {
				dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j])
			}
		}
	}
	return dp[arra.length][arrb.length] === arra.length
}
console.log(isSubsequence('abc', 'ahbgdc'))

// 双指针思路
var isSubsequence = (s, t) => {
	let i = 0
	let j = 0
	while (j < t.length) {
		if (s[i] === t[j]) {
			i++
			j++
		} else {
			j++
		}
	}
	return s.length === i
}

console.log(isSubsequence('abc', 'ahbgdc'))
