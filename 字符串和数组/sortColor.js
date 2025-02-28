const sortColors = function (nums) {
	let zero = 0
	let one = 0
	let two = 0
	for (let num of nums) {
		if (num === 0) zero++
		else if (num === 1) one++
		else if (num === 2) two++
	}
	for (let i = 0; i < nums.length; i++) {
		if (i < zero) nums[i] = 0
		else if (i >= zero && i < zero + one) nums[i] = 1
		else if (i >= zero + one && i < zero + one + two) nums[i] = 2
	}
	return nums
}
console.log(sortColors([0, 0, 1, 2, 0, 1, 2]))
