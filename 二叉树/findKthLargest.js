// 使用一个小顶堆记录K最大的
// 重点就在于维护这个堆
const findKthLargest = (arr, k) => {
	// 小顶堆
	const heap = arr.slice(0, k)
	// 堆化，是自上而下的
	const heapify = (heap, targetIndex) => {
		// 和左右子节点做比较
		let max = targetIndex
		let left = targetIndex * 2 + 1
		let right = targetIndex * 2 + 2
		if (left < heap.length && heap[left] < heap[max]) {
			max = left
		}
		if (right < heap.length && heap[right] < heap[max]) {
			max = right
		}
		// 如果发生了对换就递归执行堆化操作
		if (max !== targetIndex) {
			;[heap[max], heap[targetIndex]] = [heap[targetIndex], heap[max]]
			heapify(heap, max)
		}
	}
	// 初始化堆，自下而上的堆化所有非叶子节点·
	for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
		heapify(heap, i)
	}

	for (let i = k; i < arr.length; i++) {
		if (arr[i] >= heap[0]) {
			heap[0] = arr[i]
			heapify(heap, 0)
		}
	}
	return heap[0]
}

console.log(findKthLargest([1, 2, 3, 4], 4))
console.log(findKthLargest([1, 2, 3, 4], 3))
console.log(findKthLargest([1, 2, 3, 4], 2))
console.log(findKthLargest([1, 2, 3, 4], 1))
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
