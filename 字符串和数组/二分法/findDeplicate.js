// 这里利用二分法找重复元素，分的是用于判断的mid元素，而不是数组的长度，所以其实每一次都是循环整个数组
const findDeplicate = arr => {
	//利用抽屉原理
	let left = 1 // 这里的left和right不是表示下标，而是表示值
	let right = arr.length - 1
	while (left < right) {
		const mid = Math.floor((left + right) / 2)
		let count = 0
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] <= mid) count++
		}
		if (count > mid) right = mid // 说明重复数 <= mid
		else left = mid + 1 // 说明重复数 > mid
	}
	return left
}

//链表法 next为当前值,值也为当前值
const findDeplicateV2 = nums => {
	//判断是否成环
	let fast = 0
	let slow = 0
	do {
		slow = nums[slow]
		fast = nums[nums[fast]]
	} while (slow !== fast)
	//寻找环的入口
	slow = 0
	while (slow !== fast) {
		slow = nums[slow]
		fast = nums[fast]
	}

	return slow
}

console.log(findDeplicateV2([1, 2, 3, 4, 5, 6, 1, 7, 9]))
