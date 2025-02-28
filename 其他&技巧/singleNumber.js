const singleNumber = function (nums) {
	return nums.reduce((prev, cur) => prev ^ cur, 0)
}
console.log(singleNumber([1, 1, 2, 2, 4, 4, 3]))

const singleNumberV2 = function (nums) {
	const set = new Set(nums)
	return (
		2 * Array.from(set).reduce((prev, cur) => prev + cur, 0) -
		nums.reduce((prev, cur) => prev + cur, 0)
	)
}
console.log(singleNumberV2([1, 1, 2, 2, 4, 4, 3]))
