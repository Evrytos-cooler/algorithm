const intersection = (arr1, arr2) => {
	const map = new Map()
	const result = []
	for (let i of arr1) {
		map.set(i, 1)
	}
	for (let i of arr2) {
		if (map.get(i)) {
			result.push(i)
		}
	}
	return result
}

const result = intersection([1, 2, 3, 4], [1, 2, 4])
