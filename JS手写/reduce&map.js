Array.prototype.myReduce = function (callback, init) {
	let accumulator = init ?? this[0]
	for (let i = 0; i < this.length; i++) {
		accumulator = callback(accumulator, this[i], i, this)
	}
	return accumulator
}

Array.prototype.myMap = function (callback) {
	const result = []
	for (let i = 0; i < this.length; i++) {
		result.push(callback(this[i], i, this))
	}
	return result
}

const array = [1, 1, 3, 4, 5]
const result1 = array.myReduce((prev, curr) => {
	prev[String(curr)] = curr
	return prev
}, {})
const result2 = array.map((item, key) => {
	return `${item}-${key}`
})
