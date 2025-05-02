// dp数组保存的是方法
const combinationSum4 = (nums, target) => {
	const dp = new Array(target + 1).fill(0)
	dp[0] = 1
	for (let j = 0; j <= target; j++) {
		//先选物品的话是组合问题，因为物品不可能逆序放入
		//先选背包的话是排列问题，因为内循环会被执行多次，有一个回溯的过程
		for (let i = 0; i < nums.length; i++) {
			if (nums[i] <= j) {
				dp[j] += dp[j - nums[i]]
			}
		}
	}
	return dp[target]
}
console.log(combinationSum4([3], 9))
