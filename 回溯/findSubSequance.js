/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
	const result = []
	const temp = []
	const tarceBack = startIndex => {
		if (temp.length > 1) result.push(temp.slice())
		if (startIndex === nums.length) return
		const used = new Set()
		for (let i = startIndex; i < nums.length; i++) {
			//因为并非是有序的所以不能使用 i 和 i - 1
			if (used.has(nums[i]) || nums[i] < temp[temp.length - 1]) continue
			used.add(nums[i])
			temp.push(nums[i])
			tarceBack(i + 1)
			temp.pop()
		}
	}
	tarceBack(0)
	return result
}
findSubsequences([4, 6, 7, 7])
