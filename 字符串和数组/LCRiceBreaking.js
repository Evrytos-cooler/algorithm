// 时间复杂度为 O(n^2)
const iceBreak = (num, target) => {
	const nums = Array.from({ length: num }, (_, index) => index)
	let i = 0
	while (nums.length > 1) {
		i = (i + target - 1) % nums.length
		nums.splice(i, 1)
	}
	return nums[0]
}
console.log(iceBreak(7, 4))

// 使用递归优化
// 分解为子问题，最小的子问题有固定解
const iceBreakV2 = (num, target) => {
	const traversal = (num, target) => {
		if (num === 1) return 0
		else {
			//分解为下一个子问题，同时下一个子问题的结果是这一个子问题向左偏移k得到的结果，所以 + target，由于可以视为一个环所以 % num
			return (traversal(num - 1, target) + target) % num
		}
	}
	return traversal(num, target)
}

console.log(iceBreakV2(7, 4))

// 迭代优化
const iceBreakV3 = (num, target) => {
	let i = 2
	let result = 0
	while (i <= num) {
		result = (result + target) % i++
	}
	return result
}

console.log(iceBreakV3(7, 4))
