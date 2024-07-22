const twoNumberSum = (arr, target) => {
	const map = new Map()
	const result = []
	//构建map
	for (let i of arr) {
		if (map.has(i)) {
			result.push([i, target - i])
		} else {
			map.set(target - i, 1)
		}
	}
	return result
}
console.log(twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10))
