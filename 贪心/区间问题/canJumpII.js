// 贪心，贪的是当前步可选的*下一步*的可达范围
const canJump = function (nums) {
	if (nums.length <= 1) return 0
	let range = nums[0]
	if (range >= nums.length - 1) return 1
	let nextIndex = 0
	let count = 1
	for (let i = 1; i < nums.length && i <= range; i++) {
		let scope = range
		for (let j = i; j <= scope; j++) {
			if (nums[j] + j > range) {
				range = nums[j] + j
				nextIndex = j
			}
		}
		i = nextIndex
		count++
		if (range >= nums.length - 1) return count
	}
	return -1
}

console.log(canJump([2, 3, 0, 1, 4]))
