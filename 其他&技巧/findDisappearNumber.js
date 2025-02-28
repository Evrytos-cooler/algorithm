const findDisappearedNumbers = function (nums) {
	const result = []
	const n = nums.length
	for (let target of nums) {
		const num = Math.abs(target)
		if (num <= n) {
			//标记
			if (num - 1 < n) nums[num - 1] = -Math.abs(nums[num - 1])
		}
	}
	for (let i = 0; i < n; i++) {
		if (nums[i] > 0) {
			result.push(i + 1)
		}
	}
	return result
}
console.log(findDisappearedNumbers([1, 1]))
