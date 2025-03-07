const rotate = function (nums, k) {
	const stack = nums.slice(0, k)
	for (let i = k; i < nums.length + k; i++) {
		const index = i % nums.length
		stack.push(nums[index])
		nums[index] = stack.shift()
	}
	return nums
}

console.log(rotate([1, 2, 3], 2))

const rotateV2 = function (nums, k) {
	return nums.slice(nums.length - k, nums.length).concat(nums.slice(0, nums.length - k))
}

console.log(rotateV2([1, 2, 3], 2))
