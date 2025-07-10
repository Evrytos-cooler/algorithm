// 一个01组成的项组成的序列，求最长子集满足：0和1的数量满足指定要求
// 想办法看作01背包，0的数量确定了其实1的数量就确定了
// 看作放满一个重量为0的数量的背包有多少种方式
// 价值就是每一个项0的数量，背包重量从0到n（要求0的数量）
// dp[i][j] i及以前的序列中，选中的项有j个0的最长子集长度

var oneAndZero = (strs, m, n) => {
	// 计算一个字符串中 0 的数量
	const count = s => {
		let zero = 0
		let one = 0
		for (let c of s) {
			c === '1' ? one++ : zero++
		}
		return [zero, one]
	}

	const zeroCount = []
	const oneCount = []
	for (let i = 0; i < strs.length; i++) {
		const res = count(strs[i])
		;[zeroCount[i], oneCount[i]] = res
	}

	// dp 定义 ， 初始化 ， 遍历
	// dp[i][j][k] 前 i 个str 的子序列的结果，其中 m 是 j (0), n 是 k(1) , 内容是子串的长度

	const dp = new Array(strs.length)
		.fill()
		.map(() => new Array(m + 1).fill().map(() => new Array(n + 1).fill(0)))

	// 只有一个元素 strs[0]
	for (let j = 0; j <= m; j++) {
		for (let k = 0; k <= n; k++) {
			if (zeroCount[0] <= j && oneCount[0] <= k) {
				dp[0][j][k] = 1
			}
		}
	}

	for (let i = 1; i < strs.length; i++) {
		for (let j = 0; j <= m; j++) {
			for (let k = 0; k <= n; k++) {
				// 判断一下是否能够用这个str
				if (zeroCount[i] <= j && oneCount[i] <= k) {
					dp[i][j][k] = Math.max(
						// 这里 i必须要往回访问，所以dp[0]必须先初始化
						dp[i - 1][j][k],
						// 这类 j 和 k 需要向前访问，i-1 是上一层的，所以这里无法推出需要初始化
						dp[i - 1][j - zeroCount[i]][k - oneCount[i]] + 1
					)
				} else {
					dp[i][j][k] = dp[i - 1][j][k]
				}
			}
		}
	}

	return dp[strs.length - 1][m][n]
}
console.log(oneAndZero(['10', '0001', '111001', '1', '0'], 5, 3))

// 压缩版，需要从右下到左上遍历
var findMaxForm = (strs, m, n) => {
	const count = s => {
		let zero = 0
		let one = 0
		for (let c of s) {
			c === '1' ? one++ : zero++
		}
		return [zero, one]
	}

	const zeroCount = []
	const oneCount = []
	for (let i = 0; i < strs.length; i++) {
		const res = count(strs[i])
		;[zeroCount[i], oneCount[i]] = res
	}

	const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0))

	if (zeroCount[0] <= m && oneCount[0] <= n) dp[m][n] = 1

	for (let i = 0; i < strs.length; i++) {
		for (let j = m; j >= 0; j--) {
			for (let k = n; k >= 0; k--) {
				if (zeroCount[i] <= j && oneCount[i] <= k) {
					dp[j][k] = Math.max(
						dp[j - zeroCount[i]][k - oneCount[i]] + 1,
						dp[j][k]
					)
				}
			}
		}
	}

	return dp[m][n]
}

console.log(findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3))
