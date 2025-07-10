// 给一个数组添加正负号，另他们的和为target
// 抽象：将数组分为left和right：满足 left - right = target --> left - (sum - left ) = target
// 也即 left = (sum + target)/2
// 转换为有多少种子集的和是left (子集问题用回溯解决会更好想)
// 再转换为填满大小为target的背包的方式有多少种
// dp[i][j] 背包大小为j，arr便利到i的时候能填满背包的方式,不能填满就是0种方式
var targetSum = (arr, target) => {
	const sum = arr.reduce((prev, cur) => prev + cur, 0)
	const left = (sum + target) / 2
	if (left !== Math.floor(left) || left < 0) return 0

	const dp = new Array(arr.length).fill().map(() => new Array(left + 1).fill(0))

	//这里需要对0做特殊处理
	let zeroCount = 0
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) zeroCount++
		dp[i][0] = Math.pow(2, zeroCount)
	}

	for (let j = 1; j <= left; j++) {
		//能放
		if (j === arr[0]) {
			dp[0][j] = 1
		}
	}

	for (let i = 1; i < arr.length; i++) {
		for (let j = 1; j <= left; j++) {
			//当前数不大于背包大小的时候能放
			if (arr[i] <= j) {
				dp[i][j] = dp[i - 1][j - arr[i]] + dp[i - 1][j] //放进去才满或者本来就满
			} else {
				dp[i][j] = dp[i - 1][j] //只能是本来就满的
			}
		}
	}
	return dp[arr.length - 1][left]
}
console.log(targetSum([1, 1, 1, 1, 1], 3))

var findTargetSumWays = (arr, target) => {
	// 计算背包大小
	const sum = arr.reduce((prev, cur) => prev + cur)
	const left = (sum + target) / 2
	// half 必须为整数jk
	if (Math.floor(left) !== left || left < 0) return 0

	const dp = new Array(left + 1).fill(0) // 默认有 0 种方法,后面可能需要覆盖

	// 初始化 -- 不需要第一个作为开始，也不能要，因为先做这一步，从后往前访问的时候就会重复使用某些内容
	// half = 0 的时候原本有一种方法（不选） ，但 arr 中有 0 时需要额外计算
	// let zeroCount = 0
	// for (let i of arr) {
	// 	if (i === 0) zeroCount++
	// }
	// dp[0] = Math.pow(2, zeroCount)
	dp[0] = 1

	// 遍历 物品 + 背包大小 (由于需要压缩，所有需要和从后往前遍历)
	for (let i = 0; i < arr.length; i++) {
		// 从后往前,j = 0 的情况已经计算过了
		for (let j = left; j >= 0; j--) {
			if (arr[i] <= j) {
				// 这一轮的 dp[j] = 上一轮的数量(i-1)(本来就满的，没选当前i) + 选当前i则刚好(而且以前没选过 i，所以也是上一轮的) 这里体现了状态压缩
				// 如果是从前向后，则 dp[j-arr[i]] 已经是当前 i 计算过的结果，相当于用过一次数字 i 了，这个模型还 01 背包所以需要从后向前选
				dp[j] = dp[j] + dp[j - arr[i]]
			}
		}
	}
	return dp[left]
}

console.log(findTargetSumWays([1, 0], 1))
