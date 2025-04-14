const reverseStrV2 = (arr, start, end) => {
	if (!arr) return null
	let i = start
	let j = end
	const swap = (arr, a, b) => {
		const temp = arr[a]
		arr[a] = arr[b]
		arr[b] = temp
	}
	while (i < j) {
		swap(arr, i, j)
		i++
		j--
	}
	return arr
}

const num = reverseStrV2(['h', 'e', 'l', 'l', 'o', 'a', 'b', 'c'], 0, 7)
