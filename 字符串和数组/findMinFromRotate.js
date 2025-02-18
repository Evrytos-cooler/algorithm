const findMinFromRotate = arr => {
	//使用一个变形的二分查找
	let left = 0
	let right = arr.length - 1
	while (left < right) {
		const mid = Math.floor((left + right) / 2)
		if (arr[mid] > arr[right]) {
			left = mid + 1
		} else {
			right = mid
		}
	}
	return arr[left]
}

console.log(findMinFromRotate([6, 7, 8, 9, 10, 11, 0, 1]))
