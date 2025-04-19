// 可以字符可以重复一次
// 通过 map 来拓展判断是否重复的链路
const removeDuplicates = function (nums) {
	if (nums.length <= 2) return nums
	const map = new Map()
	let i = 0,
		j = 1
	while (j < nums.length) {
		if (isSame(i, j)) {
			j++
		} else {
			nums[++i] = nums[j++]
		}
	}
	function isSame(a, b) {
		if (nums[a] !== nums[b]) return false
		const count = map.get(nums[a]) || 0
		// 重复过了，不能再重复了
		if (count === 1) return true
		map.set(nums[a], count + 1)
		return false
	}
	return nums
}
console.log(removeDuplicates([1, 1, 1, 2, 3, 3, 3, 4]))

// 其实可以不需要用到 map，用 map 空间复杂度是 >O(1) <O(n)
// 由于数组是有序的，所以我们大可以直接用count记录重复数

const removeDuplicatesV2 = function (nums) {
	if (nums.length <= 2) return nums.length
	const map = new Map()
	let i = 0,
		j = 1
	let count = 0
	while (j < nums.length) {
		// 跳过
		if (nums[i] === nums[j] && count === 1) {
			j++
		} else {
			// 不跳过
			if (nums[i] !== nums[j]) count = 0
			else count++

			nums[++i] = nums[j++]
		}
	}
	return i + 1
}

console.log(removeDuplicatesV2([1, 1, 1, 2, 2, 3]))
