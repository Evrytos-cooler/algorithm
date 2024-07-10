const trunZeroToTail = arr => {
	if (arr.length === 0) return arr
	let count = 0
	const result = []
	for (let i of arr) {
		if (i == '0') {
			count++
			continue
		} else {
			result.push(i)
		}
	}
	for (let i = 0; i < count; i++) {
		result.push(0)
	}
	return result
}

const doublePoiniVersion = arr => {
	if (arr.length === 0) return arr
	let p2 = arr.length - 1
	let p1 = 0
	while (p1 < p2) {
		while (arr[p1] !== 0) p1++
		while (arr[p2] == 0) p2--
		if (p1 < p2) {
			;[arr[p1], arr[p2]] = [arr[p2], arr[p1]]
		}
	}
	return arr
}

console.log(doublePoiniVersion([0, 1, 1, 0, 1, 0]))
