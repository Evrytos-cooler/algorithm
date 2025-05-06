// 贪心，贪的是可达范围
const canJump = function (nums) {
	if (nums.length === 1) return true
	let range = nums[0]
	for (let i = 1; i <= range && i < nums.length; i++) {
		range = Math.max(range, nums[i] + i)
	}
	if (range >= nums.length - 1) return true
	return false
}

console.log(canJump([2, 0, 0]))
