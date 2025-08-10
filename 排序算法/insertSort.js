var insertSort = arr => {
	if (arr.length <= 1) return arr
	for (let i = 1; i < arr.length; i++) {
		let tail = i //有序区域的新尾部
		let index = tail - 1 //需要遍历的指针
		let target = arr[tail] //新元素
		//遍历有序区域
		while (index >= 0 && arr[index] > target) {
			arr[index + 1] = arr[index]
			index--
		}
		arr[index + 1] = target
	}
	return arr
}
console.log(insertSort([3, 2, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]))

// 插入排序：整理扑克牌
// 有序区域默认为 1
// 选择一个待插入元素，找到有序区域的合适位置
// 从后向前遍历有序区间， 大于当前待插入元素则后移动，否则插入到其后方

var insertSortV2 = arr => {
	for (let i = 1; i < arr.length; i++) {
		const target = arr[i]
		let j
		for (j = i - 1; j >= 0; j--) {
			if (arr[j] > target) {
				arr[j + 1] = arr[j]
			} else {
				break
			}
		}
		arr[j + 1] = target
	}
	return arr
}

console.log(insertSortV2([3, 2, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]))
