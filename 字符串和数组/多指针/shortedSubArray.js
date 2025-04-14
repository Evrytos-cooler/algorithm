function shortedSubArray(target, arr) {
	let i = 0
	let j = 1
	let shortedArray
	let sum = arr[i]
	while (1) {
		if (sum >= target) {
			if (!shortedArray || j - i < shortedArray.length)
				shortedArray = arr.slice(i, j)
			i++
			sum -= arr[i - 1]
		} else {
			sum += arr[j]
			j++
		}

		if (j > arr.length) {
			break
		}
	}

	return shortedArray
}

const arr_1 = shortedSubArray(7, [1, 2, 2, 4, 5])
console.log(arr_1)
