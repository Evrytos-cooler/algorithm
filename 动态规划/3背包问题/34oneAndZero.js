// 一个01组成的项组成的序列，求最长子集满足：0和1的数量满足指定要求
// 想办法看作01背包，0的数量确定了其实1的数量就确定了
// 看作放满一个重量为0的数量的背包有多少种方式
// 价值就是每一个项0的数量，背包重量从0到n（要求0的数量）
// dp[i][j] i及以前的序列中，选中的项有j个0的最长子集长度
const oneAndZero = (strs, m, n) => {
	const count = s => {
		let zero = 0
		let one = 0
		s.split('').forEach(i => {
			if (i === '0') zero++
			if (i === '1') one++
		})
		return [zero, one]
	}
	const zeroCount = []
	const oneCount = []
	for (let i = 0; i < strs.length; i++) {
		const [zero, one] = count(strs[i])
		zeroCount[i] = zero
		oneCount[i] = one
	}

	const dp = new Array(strs.length)
		.fill()
		.map(() => new Array(m + 1).fill().map(() => new Array(n + 1).fill(0)))

	//初始化
	// 只有第一个元素
	for (let j = 0; j <= m; j++) {
		for (let k = 0; k <= n; k++) {
			if (zeroCount[0] <= j && oneCount[0] <= k) {
				dp[0][j][k] = 1
			}
		}
	}

	//遍历
	for (let i = 1; i < strs.length; i++) {
		for (let j = 0; j <= m; j++) {
			for (let k = 0; k <= n; k++) {
				//能放
				if (zeroCount[i] <= j && oneCount[i] <= k) {
					dp[i][j][k] = Math.max(
						dp[i - 1][j][k],
						dp[i - 1][j - zeroCount[i]][k - oneCount[i]] + 1
					)
				}
				//不能放
				else {
					dp[i][j][k] = dp[i - 1][j][k]
				}
			}
		}
	}
	return dp[strs.length - 1][m][n]
}
console.log(oneAndZero(['10', '0001', '111001', '1', '0'], 4, 3))
