var subsetsWithDup = function (nums) {
	const result = []
	const temp = []
	const unused = Array.from(nums.length).fill(true)
	nums.sort((a, b) => a - b)
	const traceBack = startIndex => {
		result.push(temp.slice())
		if (startIndex === nums.length) return
		//保存结果
		for (let i = startIndex; i < nums.length; i++) {
			if (i > 0 && unused[i - 1] && nums[i] === nums[i - 1]) continue
			unused[i] = false
			const str = nums[i]
			temp.push(str)
			traceBack(i + 1)
			unused[i] = true
			temp.pop()
		}
	}
	traceBack(0)
	return result
}
subsetsWithDup([1, 2, 2]) // [[],[1],[1,2],[1,2,2],[2],[2,2]]
