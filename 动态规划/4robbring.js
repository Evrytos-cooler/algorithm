// 我是一个专业的小偷
// dp是偷到这家位置，偷的价值最大值
// 这家有偷和不偷两种做法
const robbring = value => {
	const dp = []
	dp[0] = value[0]
	dp[1] = Math.max(value[0], value[1])
	for (let i = 2; i < value.length; i++) {
		dp[i] = Math.max(dp[i - 1], dp[i - 2] + value[i])
	}
	return dp[value.length - 1]
}
console.log(robbring([2, 3, 2]))
export default robbring
