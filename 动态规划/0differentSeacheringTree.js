// 最原始的dp方式
// dp: n个节点的二叉搜索树的排列方式
const differentSerachingTree = n => {
	const dp = new Array(n + 1).fill(0)
	dp[0] = 1
	dp[1] = 1
	dp[2] = 2
	if (n < 3) return dp[n]

	// 从前向后遍历
	for (let i = 3; i <= n; i++) {
		// 以此当根节点
		for (let j = 1; j <= i; j++) {
			//左边的排列方式乘以右边的排列方式
			dp[i] += dp[j - 1] * dp[i - j]
		}
	}
	return dp[n]
}
console.log(differentSerachingTree(3))
