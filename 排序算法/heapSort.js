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

const headSortV2 = arr => {
	//堆化
	const heapify = (arr, n, i) => {
		let max = i
		const left = i * 2 + 1
		const right = i * 2 + 2
		if (left < n && arr[left] > arr[max]) {
			max = left
		}
		if (right < n && arr[right] > arr[max]) {
			max = right
		}
		if (max !== i) {
			;[arr[max], arr[i]] = [arr[i], arr[max]]
			heapify(arr, n, max)
		}
	}
	//建堆
	const n = arr.length
	for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
		heapify(arr, n, i)
	}

	//排序
	for (let i = arr.length - 1; i > 0; i--) {
		;[arr[0], arr[i]] = [arr[i], arr[0]]
		heapify(arr, i, 0)
	}
}

// 示例
const unsortedArr = [19, 5, 7, 10, 11, 2, 14]
headSortV2(unsortedArr)
console.log('排序后的数组：', unsortedArr)
