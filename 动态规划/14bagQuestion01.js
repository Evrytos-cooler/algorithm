function knapSack(values, weights, target) {
	// 创建一个二维数组来保存状态
	const dp = new Array(values.length).fill(0).map(() => new Array(target + 1).fill(0))
	const selectedItems = new Set() // 用于保存选中的物品编号

	for (let j = 0; j <= target; j++) {
		if (j < weights[0]) {
			dp[0][j] = 0
		} else {
			dp[0][j] = values[0]
		}
	}

	for (let i = 1; i < values.length; i++) {
		for (let w = 1; w <= target; w++) {
			if (weights[i] <= w) {
				// 如果当前物品可以放入背包 放和不放
				dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i]] + values[i])
			} else {
				// 当前物品太重，无法放入背包
				dp[i][w] = dp[i - 1][w]
			}
		}
	}

	//回溯求选择的背包
	let i = values.length - 1
	let j = target
	//看最大的背包里面装了什么，回溯最后一项的计算流程
	while (i >= 0 && j > 0) {
		if (dp[i][j] !== dp[i - 1][j]) {
			selectedItems.add(i)
			j -= weights[i]
		}
		i--
	}
	// 输出选中的物品编号
	console.log('选中的物品编号：', Array.from(selectedItems).join(', '))

	// 返回最大价值
	return dp[values.length - 1][target]
}

// 示例输入
const values = [1, 12, 2, 1, 4, 1, 1]
const weights = [10, 4, 2, 1, 10, 2, 10]
const target = 15

// 计算最大价值
console.log('最大价值：', knapSack(values, weights, target))
