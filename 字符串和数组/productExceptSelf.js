// 不使用除法的情况下，计算除了自己之外的乘积
// 维护前缀累乘数组和后缀累乘数组，当前位置的答案就是前缀累乘数组和后缀累乘数组的乘积
const productExceptSelf = function (nums) {
	let leftFix = [nums[0]]
	let rightFix = []
	rightFix[nums.length - 1] = nums[nums.length - 1]
	for (let i = 1; i < nums.length; i++) {
		leftFix[i] = leftFix[i - 1] * nums[i]
	}
	for (let i = nums.length - 2; i >= 0; i--) {
		rightFix[i] = rightFix[i + 1] * nums[i]
	}

	const result = []
	for (let i = 0; i < nums.length; i++) {
		const left = i - 1 >= 0 ? leftFix[i - 1] : 1
		const right = i < nums.length - 1 ? rightFix[i + 1] : 1
		if (left * right === -0) result[i] = 0
		else result[i] = left * right
	}
	return result
}
console.log(productExceptSelf([-1, 1, 0, -3, 3]))

// 由于便利的顺序和right的顺序一样，我们可以讲right和result公用一个数据
const perfProductExceptSelf = function (nums) {
	let leftFix = [nums[0]]
	let rightFix = []
	rightFix[nums.length - 1] = nums[nums.length - 1]
	for (let i = 1; i < nums.length; i++) {
		leftFix[i] = leftFix[i - 1] * nums[i]
	}
	for (let i = nums.length - 2; i >= 0; i--) {
		rightFix[i] = rightFix[i + 1] * nums[i]
	}

	for (let i = 0; i < nums.length; i++) {
		const left = i - 1 >= 0 ? leftFix[i - 1] : 1
		const right = i < nums.length - 1 ? rightFix[i + 1] : 1
		if (left * right === -0) rightFix[i] = 0
		else rightFix[i] = left * right
	}
	return rightFix
}

console.log(perfProductExceptSelf([-1, 1, 0, -3, 3]))
