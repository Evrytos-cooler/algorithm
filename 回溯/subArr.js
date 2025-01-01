var subsets = function (nums) {
	const result = []
	const temp = []
	//arr,startIndex
	const traceBack = (arr, startIndex) => {
		result.push(temp.slice())

		for (let i = startIndex; i < arr.length; i++) {
			temp.push(arr[i])
			traceBack(arr, 1 + i)
			temp.pop()
		}
	}
	traceBack(nums, 0)
	return result
}

subsets([1, 2, 3]) // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
