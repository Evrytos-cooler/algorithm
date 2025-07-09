// 动规五部曲
// 1 转换方程 可以选或者不选 dp[i][j] = dp[i-1][j] , dp[i][j-weight[i]]
// 2 dp[i][j] 的定义 ,i 可用物品编号， j背包大小
// 3 初始化 物品为0号 和背包大小为 0
// 4 遍历顺序 i - 1 , j - weight[i] 需要向右下运动
// 5 输出

// target 背包大小， value 价值数组, weight 重量， n 物品数量
const dynamicProgramming = (target, value, weight, n) => {
	// 初始化
	const dp = new Array(n).fill(0).map(() => new Array(target + 1).fill(0))
	for (let j = 0; j <= target; j++) {
		if (j >= weight[0]) dp[0][j] = value[0]
	}

	// 遍历
	for (let i = 1; i < n; i++) {
		for (let j = 0; j <= target; j++) {
			if (j >= weight[i]) {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
			} else {
				dp[i][j] = dp[i - 1][j]
			}
		}
	}

	// 回溯求物品
	const item = new Set() // index
	let i = n - 1
	let j = target
	while (i > 0 && j > 0) {
		if (j >= weight[i] && dp[i][j] === dp[i - 1][j - weight[i]] + value[i]) {
			item.add(i)
			j -= weight[i]
		}
		i--
	}
	if (i === 0 && j >= weight[0] && dp[0][j] > 0) item.add(0)
	console.log(item)
	return dp[n - 1][target]
}
const values = [1, 12, 2, 1, 4, 1, 1]
const weights = [10, 4, 2, 1, 10, 2, 10]
const target = 15
console.log(dynamicProgramming(target, values, weights, 7))
