// 将一个整数拆分成多个数的和，求其相乘结果最大值。
// dp数组含义：首先考虑其结果值,下标考虑参数传入的数能否生成序列
// 遍历：从问题的本质出发，拆分一个数可以有很多种拆法，这里就是一个遍历
const integerBreak = function (n) {
	const dp = new Array(n + 1).fill(0)
	dp[0] = 0
	dp[1] = 0
	dp[2] = 1
	for (let i = 3; i <= n; i++) {
		for (let j = i - 1; j > 0; j--) {
			// 兜底 | 拆成j和i-j | i-j再拆
			dp[i] = Math.max(dp[i], dp[i - j] * j, j * (i - j))
		}
	}
	return dp[n]
}
console.log(integerBreak(10))
