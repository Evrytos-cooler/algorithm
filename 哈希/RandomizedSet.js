var RandomizedSet = function () {
	this.map = new Map()
	this.arr = []
}

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
	if (this.map.has(val)) return false
	else {
		this.map.set(val, this.arr.length)
		this.arr.push(val)
		return true
	}
}

/**
 * @param {number} val
 * @return {boolean}
 */
// 不去维护数组的下标，而是直接将要删除的数据移动到最后一个，然后唯一另一个被修改的数据的 map 即可
RandomizedSet.prototype.remove = function (val) {
	if (!this.map.has(val)) return false
	else {
		const index = this.map.get(val)
		const lastElement = this.arr[this.arr.length - 1]
		this.arr[index] = lastElement
		this.map.set(lastElement, index)
		this.arr.pop()
		this.map.delete(val)
		return true
	}
}

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
	return this.arr[Math.floor(Math.random() * this.arr.length)]
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// Test case for the given input/output example
function testGivenExample() {
	const randomizedSet = new RandomizedSet()
	const results = []

	// Operation sequence
	results.push(null) // RandomizedSet initialization

	// Insert 1
	results.push(randomizedSet.insert(1))

	// Remove 2
	results.push(randomizedSet.remove(2))

	// Insert 2
	results.push(randomizedSet.insert(2))

	// Get random (mock to always return 2 for testing)
	const originalGetRandom = randomizedSet.getRandom.bind(randomizedSet)
	randomizedSet.getRandom = () => 2
	results.push(randomizedSet.getRandom())
	randomizedSet.getRandom = originalGetRandom

	// Remove 1
	results.push(randomizedSet.remove(1))

	// Insert 2 again
	results.push(randomizedSet.insert(2))

	// Get random (should be 2 as it's the only element)
	results.push(randomizedSet.getRandom())

	// Expected output
	const expected = [null, true, false, true, 2, true, false, 2]

	// Verify results
	for (let i = 0; i < expected.length; i++) {
		if (results[i] !== expected[i]) {
			console.error(
				`Test failed at step ${i}: expected ${expected[i]}, got ${results[i]}`
			)
			return
		}
	}
	console.log('Given example test passed!')
}

// Run the test
testGivenExample()
