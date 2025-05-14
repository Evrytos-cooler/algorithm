// 子数组是连续的
// dp数组的定义：dp[i][j] 是以arra[i]和arrb[j]为结尾的子数组的最大值，如果arra[i]!==arrb[j]则为0
// 初始化dp[0][j] 和 dp[i][0] 需要遍历和对比是否相同
// dp 状态转换方程 dp[i][j] = dp[i-1][j-1] + 1 所以自左向右，自上向下遍历
// 最终返回的是 dp 某一行或者某一列中的最大值
const LRSA = (arra, arrb) => {
	const dp = new Array(arra.length).fill().map(() => new Array(arrb.length).fill(0))
	let result = 0
	for (let i = 0; i < arra.length; i++) {
		if (arra[0] === arrb[i]) {
			dp[0][i] = 1
			result = 1
		}
		if (arra[i] === arrb[0]) {
			dp[i][0] = 1
			result = 1
		}
	}
	// 需要两个循环分别确认两个序列的结尾
	for (let i = 1; i < arra.length; i++) {
		for (let j = 1; j < arrb.length; j++) {
			if (arra[i] === arrb[j]) {
				dp[i][j] = dp[i - 1][j - 1] + 1
				result = Math.max(result, dp[i][j])
			}
		}
	}
	return result
}
console.log(LRSA([1, 2, 3, 2, 8], [5, 6, 1, 2, 4, 7]))
