class MyList {
	myList
	constructor() {
		this.myList = []
	}

	push(value) {
		while (this.myList.length && this.myList[this.myList.length - 1] < value) {
			this.myList.pop()
		}
		this.myList.push(value)
	}

	shift(value) {
		if (this.myList[0] === value) this.myList.shift()
	}
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
	const list = new MyList()
	const result = []
	for (let i = 0; i < k; i++) {
		list.push(nums[i])
	}
	result.push(list.myList[0])
	for (let i = k; i < nums.length; i++) {
		list.push(nums[i])
		list.shift(nums[i - k])
		result.push(list.myList[0])
	}
	return result
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
