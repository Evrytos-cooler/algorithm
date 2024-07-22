const insertSort = arr => {
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
