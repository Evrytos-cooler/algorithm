// 双指针：坚持左闭右开
// 注意 length 的初始化和无结果的时候的返回特殊处理
function minSubArrayLen(target, nums) {
	if (nums.length === 0) return 0
	let i = 0
	let j = 1
	let sum = nums[i]
	let length = Infinity
	while (j <= nums.length && i < j) {
		if (sum >= target) {
			length = Math.min(length, j - i)
			sum -= nums[i++]
		} else {
			sum += nums[j++]
		}
	}
	return length === Infinity ? 0 : length
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
console.log(minSubArrayLen(4, [1, 4, 4]))
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]))
