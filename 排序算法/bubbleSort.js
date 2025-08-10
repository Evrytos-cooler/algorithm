var bubbleSort = arr => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 1; j < arr.length - i; j++) {
			if (arr[j] < arr[j - 1]) {
				const temp = arr[j]
				arr[j] = arr[j - 1]
				arr[j - 1] = temp
			}
		}
	}
	return arr
}
console.log(bubbleSort([2, 1, 3, 4, 1, 2, 5, 332, 0])) // [0, 1, 1, 2, 2, 3, 4, 5, 332]

// 升序排列
var bubbleSort = arr => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 1; j < arr.length - i; j++) {
			if (arr[j] < arr[j - 1]) {
				;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
			}
		}
	}
	return arr
}

console.log(bubbleSort([2, 1, 3, 4, 1, 2, 5, 332, 0]))
