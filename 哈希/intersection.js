// 其实这里应当用 set 更加准确， 因为 set 不关心值和键的映射关系
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

const intersectionV2 = (arr1, arr2) => {
	const set = new Set()
	const result = []
	for (let i of arr1) {
		set.add(i)
	}
	for (let i of arr2) {
		if (set.has(i)) {
			result.push(i)
		}
	}
	return result
}

console.log(intersectionV2([1, 2, 3, 4], [1, 2, 4]))
