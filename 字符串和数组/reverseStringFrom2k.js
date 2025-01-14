//直接操作原数组
const reverse = (arr, start, end) => {
	let i = start,
		j = end - 1
	while (i < j) {
		const temp = arr[i]
		arr[i] = arr[j]
		arr[j] = temp
		i++
		j--
	}
	return arr
}
const reverseStrBy2K = (arr, k) => {
	const rest = arr.length % k
	let i = 0
	while (i + k <= arr.length) {
		reverse(arr, i, i + k)
		i += 2 * k
	}
	//两种情况
	if (rest > 0) {
		reverse(arr, i, arr.length)
	}
	return arr
}

const result = reverseStrBy2K(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 2)
