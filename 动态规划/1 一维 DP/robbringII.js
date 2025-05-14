// valuelist是首尾相连的
// 将换拆成线性数组，去头或者去尾分别计算
const robbring = value => {
	const dp = []
	dp[0] = value[0]
	dp[1] = Math.max(value[0], value[1])
	for (let i = 2; i < value.length; i++) {
		dp[i] = Math.max(dp[i - 1], dp[i - 2] + value[i])
	}
	return dp[value.length - 1]
}
const robbring2 = value => {
	const result = Math.max(
		robbring(value.slice(1)),
		robbring(value.slice(0, value.length - 1))
	)
	return result
}
console.log(robbring2([2, 3, 2]))
