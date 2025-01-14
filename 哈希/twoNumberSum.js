const twoNumberSum = (arr, target) => {
	const map = new Map()
	const result = []
	//构建map
	arr.forEach((value, index) => {
		if (map.has(value)) {
			result.push([index, map.get(value)])
		} else {
			map.set(target - value, index)
		}
	})
	return result
}
console.log(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10))
