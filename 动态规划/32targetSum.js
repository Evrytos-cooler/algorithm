// 给一个数组添加正负号，另他们的和为target
// 抽象：将数组分为left和right：满足 left - right = target --> left - (sum - left ) = target
// 也即 left = (sum + target)/2
// 转换为有多少种子集的和是left (子集问题用回溯解决会更好想)
// 再转换为填满大小为target的背包的方式有多少种
// dp[i][j] 背包大小为j，arr便利到i的时候能填满背包的方式
let targetSum = (arr, target) => {
	const sum = arr.reduce((prev, cur) => prev + cur, 0)
	const left = (sum + target) / 2
	if (left !== Math.floor(left)) return 0

	const dp = new Array(arr.length).fill().map(() => new Array(left + 1).fill(0))

	//这里需要对0做特殊处理
	let zeroCount = 0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) zeroCount++
		dp[i][0] = Math.pow(2, zeroCount)
	}

	for (let j = 0; j <= left; j++) {
		let temp = 1
		if (arr[0] === 0) temp = 2
		dp[0][j] = temp // 只选第一个，背包再大也只有选上这一种方法
	}

	for (let i = 1; i < arr.length; i++) {
		for (let j = 1; j <= left; j++) {
			//当前数不大于背包大小的时候能放
			if (arr[i] <= j) {
				dp[i][j] = dp[i - 1][j - arr[i]] + dp[i - 1][j] //可取可不取
			} else {
				dp[i][j] = dp[i - 1][j] //必须不取
			}
		}
	}
	return dp[arr.length - 1][left]
}
console.log(targetSum([1, 1, 1, 1, 1], 1))
