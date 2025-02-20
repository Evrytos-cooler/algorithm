// s 长度小于 t
// 用双指针和最长公共子序列也能做
// 这里用编辑距离的思路来为编辑距离做铺垫
// 这里还是用 dp[i][j] 表示 s[i-1] t[j-1] 为结尾的子串的相同子序列长度
const isSubsequence = (s, t) => {
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
				dp[i][j] = Math.max(dp[i][j - 1])
			}
		}
	}
	return dp[arra.length][arrb.length] === arra.length
}
console.log(isSubsequence('abc', 'ahbgdsdfad'))
