function heapSort(arr) {
	// 构造大根堆 n : 长度 i：当前节点
	function heapify(arr, n, i) {
		let largest = i
		const left = 2 * i + 1
		const right = 2 * i + 2

		if (left < n && arr[left] > arr[largest]) {
			largest = left
		}

		if (right < n && arr[right] > arr[largest]) {
			largest = right
		}

		if (largest !== i) {
			;[arr[i], arr[largest]] = [arr[largest], arr[i]]
			heapify(arr, n, largest)
		}
	}

	const n = arr.length

	// 构造初始大根堆
	for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
		heapify(arr, n, i)
	}

	// 依次将堆顶元素与末尾元素交换，重新调整堆
	for (let i = n - 1; i > 0; i--) {
		;[arr[0], arr[i]] = [arr[i], arr[0]]
		heapify(arr, i, 0)
	}
}

// 降序排列
function heapSortV2(arr) {
	const heapify = (arr, startIndex) => {
		const max = startIndex
		const left = startIndex * 2 + 1
		const right = startIndex * 2 + 2
		// 升序，所以是个大顶堆，随意 left < 父节点才执行
		if (left < arr.length && arr[left] > arr[max]) {
			max = left
		}
		if (right < arr.length && arr[right] > arr[max]) {
			max = right
		}

		if (max !== startIndex) {
			;[arr[startIndex], arr[max]] = [arr[max], arr[startIndex]]
			heapify(arr, max)
		}
	}

	//初始化
	for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
		heapify(arr, i)
	}

	// 排序过程
	for (let i = 1; i < arr.length; i++) {
		;[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]]
		heapify(arr, 0)
	}
	return arr
}
