/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
	this.copy = nums.slice()
	this.nums = nums
}

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
	return this.copy
}

/**
 * @return {number[]}
 */
// Fisher Yates
Solution.prototype.shuffle = function () {
	const copy = this.nums.slice()
	for (let i = copy.length - 1; i >= 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[copy[i], copy[j]] = [copy[j], copy[i]]
	}
	return copy
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

const solution = new Solution([1, 2, 3])
console.log(solution.shuffle())
console.log('reset', solution.reset())
console.log(solution.shuffle())
console.log('reset', solution.reset())
console.log(solution.shuffle())
console.log(solution.shuffle())
console.log('reset', solution.reset())
