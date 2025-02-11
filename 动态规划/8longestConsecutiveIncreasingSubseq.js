const LCIS = arr => {
	const dp = Array(arr.length).fill(1)
	let result = 0
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > arr[i - 1]) {
			dp[i] = dp[i - 1] + 1
		}
		result = Math.max(result, dp[i])
	}
	return result
}

console.log(LCIS([2, 2, 2, 2, 2]))
