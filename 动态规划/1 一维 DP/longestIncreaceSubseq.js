//最长子序列系列之：最长递增子序列
// dp是当前数为结尾的最长递增子序列长度
// 两层循环遍历: 因为不连续所以需要多一层来展开
const LIS = arr => {
	const dp = Array(arr.length).fill(1)
	let max = 0
	for (let i = 1; i < arr.length; i++) {
		for (let j = 0; j < i; j++) {
			if (arr[i] > arr[j]) {
				dp[i] = dp[j] + 1 > dp[i] ? dp[j] + 1 : dp[i]
			}
		}
		max = dp[i] > max ? dp[i] : max
	}
	return max
}

console.log(LIS([7, 7, 7, 7, 7, 7, 7]))
