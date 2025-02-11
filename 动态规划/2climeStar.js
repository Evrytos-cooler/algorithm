// n节楼梯，每一节楼梯可以走一步或者两步
// 第n节楼梯的情况可以由 n-1 和 n-2 的情况得来
// dp 状态转移 初始化 遍历 打印
const climeStar = n => {
	const dp = [1, 1]
	for (let i = 2; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2]
	}
	return dp[n]
}
console.log(climeStar(3))
