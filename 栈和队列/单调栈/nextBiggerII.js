const nextBigger = arr => {
	const result = new Array(arr.length).fill(-1)
	const stack = [0]
	for (let j = 1; j < arr.length * 2; j++) {
		const i = j % arr.length
		const target = arr[i]
		const stackTop = arr[stack[stack.length - 1]]
		if (target <= stackTop) {
			stack.push(i)
		} else {
			while (stack.length > 0 && target > arr[stack[stack.length - 1]]) {
				const popIndex = stack.pop()
				result[popIndex] = arr[i]
			}
			stack.push(i)
		}
	}
	return result
}
console.log(nextBigger([1, 2, 1]))
