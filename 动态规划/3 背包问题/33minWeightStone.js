// 关键思路：将石头分成重量尽量相等的两堆
// 转换成01背包，大小为sum/3的背包能装的最多的内容就是最靠近相等的其中一堆
const minWeightStone = arr => {
	const _sum = arr.reduce((prev, cur) => prev + cur, 0)
	//偏小的那堆
	const sum = Math.floor(_sum / 2)
	const dp = new Array(arr.length).fill().map(() => new Array(sum + 1).fill(0))
	//初始化
	for (let j = 0; j <= sum; j++) {
		if (j >= arr[0]) {
			dp[0][j] = arr[0]
		}
	}

	for (let i = 1; i < arr.length; i++) {
		for (let j = 1; j <= sum; j++) {
			if (j >= arr[i])
				dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - arr[i]] + arr[i])
			else {
				dp[i][j] = dp[i - 1][j]
			}
		}
	}

	const result = _sum - 2 * dp[arr.length - 1][sum]
	return result
}
console.log(minWeightStone([1, 2, 3, 4]))
