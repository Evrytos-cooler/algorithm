const nextBigger = (arr1, arr2) => {
	const stack = [arr2[0]]
	const map = new Map()
	const result = new Array(arr1.length).fill(-1)
	for (let i = 0; i < arr1.length; i++) {
		map.set(arr1[i], i)
	}

	for (let item of arr2) {
		const stackTop = stack[stack.length - 1]
		if (item <= stackTop) {
			stack.push(item)
		} else {
			while (stack.length && item > stack[stack.length - 1]) {
				const target = stack.pop()
				if (map.has(target)) {
					result[map.get(target)] = item
				}
			}
			stack.push(item)
		}
	}
	return result
}
console.log(nextBigger([2, 4], [1, 2, 3, 4]))
