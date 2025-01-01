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

const quickSortT2 = arr => {
	const swap = (index1, index2) => {
		;[arr[index1], arr[index2]] = [arr[index2], arr[index1]]
	}
	const partition = (start, end) => {
		//递归结束的条件
		if (start >= end) return
		let left = start + 1
		let right = end
		while (left <= right) {
			//移动，直到遇到第一个不符合的
			while (arr[left] <= arr[start]) left++
			while (arr[right] > arr[start]) right--
			//注意判断
			if (left < right) {
				swap(left, right)
			}
		}
		//此时right在left左边
		swap(start, right)
		//不用对right再进行排序了
		partition(start, right - 1)
		partition(right + 1, end)
	}
	partition(0, arr.length - 1)
	return arr
}

console.log(quickSortT2([5, 4, 3, 1, 23, 5, 0, 67, 42, 24, 3, 456]))
