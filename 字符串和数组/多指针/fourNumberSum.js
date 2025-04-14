const fourNumberSum = (arr, target) => {
	if (!arr) return []
	if (arr.length < 4) return []
	const result = []
	arr = arr.sort((a, b) => a - b)
	let p1 = 0,
		p2 = arr.length - 1
	while (p2 - 1 > p1 + 1) {
		let p3 = p1 + 1
		let p4 = p2 - 1
		while (p3 < p4) {
			const sum = arr[p1] + arr[p2] + arr[p3] + arr[p4]
			if (sum < target) p3++
			if (sum > target) p4--
			if (sum === target) {
				result.push([arr[p1], arr[p2], arr[p3], arr[p4]])
				p3++
				p4--
				while (arr[p3 - 1] === arr[p3]) p3++
				while (arr[p4 + 1] === arr[p4]) p4++
			}
		}
		p1++
		p2--
		while (arr[p1 - 1] === arr[p1]) p1++
		while (arr[p2 + 1] === arr[p2]) p2--
	}
	return result
}

console.log(fourNumberSum([1, 0, -1, 0, -2, 2], 0))
