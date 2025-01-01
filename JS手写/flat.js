const flat = arr => {
	const stack = [...arr]
	const result = []
	while (stack.length !== 0) {
		const target = stack.pop()
		if (Array.isArray(target)) {
			stack.push(...target)
		} else {
			result.push(target)
		}
	}
	return result.reverse()
}

const flatV2 = arr => {
	const stack = []
	const result = []
	stack.push(...arr)
	while (stack.length) {
		const target = stack.pop()
		if (Array.isArray(target)) {
			target.forEach(item => {
				stack.push(item)
			})
		} else {
			result.push(target)
		}
	}
	return result.reverse()
}
console.log(flatV2([1, 2, 3, [4, 5, 6, [7, 8, 9]]])) // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

const flatArray = arr => {
	const flat = arr => {
		const result = []
		for (let item of arr) {
			if (Array.isArray(item)) {
				result.push(...flat(item))
			} else {
				result.push(item)
			}
		}
		return result
	}
	return flat(arr)
}

console.log(flatArray([1, 2, 3, [4, 5, 6, [7, 8, 9]]])) // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
