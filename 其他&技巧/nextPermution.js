const nextPermutation = function (nums) {
	//找到替换位置
	let i = nums.length - 1
	while (i > 0) {
		if (nums[i] > nums[i - 1]) break
		i--
	}
	if (i === 0) return nums.reverse()
	let splitIndex = i - 1
	i = nums.length - 1
	//找到替换数
	while (i > splitIndex) {
		if (nums[i] > nums[splitIndex]) {
			;[nums[i], nums[splitIndex]] = [nums[splitIndex], nums[i]]
			break
		}
		i--
	}
	//将后面的序列逆序
	let start = splitIndex + 1
	let end = nums.length - 1
	while (start < end) {
		;[nums[start], nums[end]] = [nums[end], nums[start]]
		start++
		end--
	}

	return nums
}
console.log(nextPermutation([1, 3, 2]))
