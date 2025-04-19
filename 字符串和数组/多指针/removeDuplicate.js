var removeDuplicates = function (nums) {
	if (nums.length <= 1) return nums
	let i = 0,
		j = 1
	while (j < nums.length) {
		while (nums[j] === nums[i]) {
			j++
		}
		if (j < nums.length) nums[++i] = nums[j++]
	}
	return i + 1
}
console.log(removeDuplicates([1, 1, 2, 2, 2, 4, 5, 6]))
