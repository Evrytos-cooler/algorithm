const collectionRain = arr => {
	const stack = [0]
	let sum = 0
	for (let i = 1; i < arr.length; i++) {
		const rightHeight = arr[i]
		const stackTop = arr[stack[stack.length - 1]]
		if (rightHeight <= stackTop) {
			stack.push(i)
		} else {
			while (stack.length > 0 && rightHeight > arr[stack[stack.length - 1]]) {
				const bottom = arr[stack.pop()]
				const left = stack[stack.length - 1]
				if (stack.length > 0) {
					const height = Math.min(rightHeight, arr[left]) - bottom
					const width = i - left - 1
					sum += height * width
				}
			}
			stack.push(i)
		}
	}
	return sum
}
console.log(collectionRain([4, 2, 0, 3, 2, 5]))
