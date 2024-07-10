const quickSort = arr => {
	const swap = (a, b) => {
		;[arr[a], arr[b]] = [arr[b], arr[a]]
	}
	const partition = (start, end) => {
		if (start >= end) return
		const target = start
		let left = start + 1
		let right = end
		while (left <= right) {
			while (arr[left] <= arr[target]) left++
			while (arr[right] > arr[target]) right--
			if (left < right) {
				swap(left, right)
			}
		}
		swap(right, target)
		partition(start, right - 1)
		partition(right + 1, end)
	}

	partition(0, arr.length - 1)
	return arr
}
console.log(quickSort([5, 4, 3, 1, 23, 5, 0, 67, 42, 24, 3, 456]))
