// 维护一个单调递减栈，找到一个凹槽，以当前凹槽为底计算当前水平层的水量，累计即可
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

// 维护的是单调递减栈
const collectionRainV2 = arr => {
	const stack = [0]
	let rain = 0
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] <= arr[stack[stack.length - 1]]) {
			stack.push(i)
		} else {
			while (arr[i] > arr[stack[stack.length - 1]]) {
				const popOne = stack.pop()
				if (stack.length > 0) {
					const left = stack[stack.length - 1]
					const right = i
					const height = Math.min(arr[left], arr[right]) - arr[popOne]
					rain += (right - left - 1) * height
				}
			}
			stack.push(i)
		}
	}
	return rain
}
console.log(collectionRain([4, 2, 0, 3, 2, 5]))
console.log(collectionRainV2([4, 2, 0, 3, 2, 5]))
