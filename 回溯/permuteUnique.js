/**
 * @description 全排列 II 1,nums有重复，主要工作量是去重
 * @description 2.在同一层上不能选择相同的，在不同层，树枝上可以选择相同的
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
	const result = []
	const temp = []
	const used = new Set()
	nums.sort((a, b) => a - b)

	const traceBack = () => {
		if (temp.length === nums.length) {
			result.push(temp.slice())
			return
		}
		for (let i = 0; i < nums.length; i++) {
			if (i > 0 && nums[i] === nums[i - 1] && !used.has(i - 1)) continue
			if (used.has(i)) continue
			used.add(i)
			temp.push(nums[i])
			traceBack()
			used.delete(i)
			temp.pop()
		}
	}
	traceBack()
	return result
}

permuteUnique([1, 1, 2])
