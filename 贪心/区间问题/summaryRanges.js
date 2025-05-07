// https://leetcode.cn/problems/summary-ranges/description/?envType=study-plan-v2&envId=top-interview-150
// 这里的贪心贪的结尾，如果能连的上我们就继续更新结尾，否则另起一个
/**
 * @param {number[]} nums
 * @return {string[]}
 */

// 先确定一个开头，然后我们尝试移动结尾，一直盯着开头的下标
var summaryRanges = function (nums) {
	const result = []
	let start = 0
	let end = start
	while (start < nums.length) {
		let i = start
		while (nums[end + 1] === nums[i] + 1) {
			end++
			i++
		}
		if (nums[start] === nums[end]) {
			result.push(`${nums[start]}`)
		} else {
			result.push(`${nums[start]}->${nums[end]}`)
		}
		start = end + 1
		end = start
	}
	return result
}

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]))
