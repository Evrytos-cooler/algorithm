const flatArray = arr => {
	const result = []
	// 以下两种方法其实一样的
	// foreach
	const forEachFlat = arr => {
		const res = []
		arr.forEach(item => {
			if (Array.isArray(item)) {
				res.push(...forEachFlat(item))
			} else {
				res.push(item)
			}
		})
		return res
	}
	result.push(forEachFlat(arr))

	//traversal
	const traversalFlat = arr => {
		const res = []
		for (let i = 0; i < arr.length; i++) {
			if (Array.isArray(arr[i])) {
				res.push(...traversalFlat(arr[i]))
			} else {
				res.push(arr[i])
			}
		}
		return res
	}
	result.push(traversalFlat(arr))
	return result
}

const flagByReduce = arr => {
	//reduce
	const reduceFlat = arr => {
		return arr.reduce((prev, cur) => {
			return prev.concat(Array.isArray(cur) ? reduceFlat(cur) : cur)
		}, [])
	}
	result.push(reduceFlat(arr))
}

const flagByReg = arr => {
	const result = []
	//Regular Express
	const Reflat = arr => {
		const str = JSON.stringify(arr)
		const target = '[' + str.replace(/\[|\]/, '') + ']'
		return JSON.parse(target)
	}
	result.push(Reflat(arr))
	return result
}

console.log(flatArray([1, 2, 3, [4, 5, 6, [7, 8, 9]]])) // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
