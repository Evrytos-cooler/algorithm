const fibnaci = n => {
	//1.确定dp数组的含义
	//2.确定状态转移方程 / 递归方程
	//3.确定dp数组的初始化
	//4.确定遍历顺序
	//5.举例推导dp数组
	const dp = []
	dp[0] = 0
	dp[1] = 1
	for (let i = 2; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2]
	}
	return dp[n]
}

const fibnaciOmp = n => {
	let dp0 = 0
	let dp1 = 1
	let dpTarget
	for (let i = 2; i <= n; i++) {
		dpTarget = dp0 + dp1
		dp0 = dp1
		dp1 = dpTarget
	}
	return dpTarget
}
console.log(fibnaciOmp(10), fibnaci(10))
