/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	const result = []
	const temp = []
	const used = Array.from(nums).fill(false)
	//如何判断在树的不同层之间用过
	const traceBack = () => {
		if (temp.length === nums.length) {
			result.push(temp.slice())
			return
		}
		for (let i = 0; i < nums.length; i++) {
			if (used[i]) continue
			used[i] = true
			temp.push(nums[i])
			traceBack()
			used[i] = false
			temp.pop()
		}
	}
	traceBack()
	return result
}
permute([1, 2, 3])
