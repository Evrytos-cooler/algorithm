// 单调队列
class MyList {
	myList
	constructor() {
		this.myList = []
	}

	push(value) {
		// 注意重复元素一定要保留，所以这里是 < 而非 <=
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
		// 通过 push 和 shift 保证当前list窗口内最多有3个元素，而且第一个是最大的
		list.push(nums[i])
		list.shift(nums[i - k])
		result.push(list.myList[0])
	}
	return result
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
