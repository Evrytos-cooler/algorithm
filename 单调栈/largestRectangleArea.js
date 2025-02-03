const largestRectangleArea = _ => {
	const stack = [0] //推入的是下标
	const arr = [0, ..._, 0]
	let largestArea = 0
	for (let i = 1; i < arr.length; i++) {
		const target = arr[i]
		if (target >= arr[stack[stack.length - 1]]) {
			stack.push(i)
		} else {
			while (target < arr[stack[stack.length - 1]]) {
				//左i中popOne右stackTop
				const popOne = stack.pop()
				const stackTop = stack[stack.length - 1]
				const width = i - stackTop - 1
				const area = width * arr[popOne]
				largestArea = largestArea > area ? largestArea : area
			}
			stack.push(i)
		}
	}
	return largestArea
}
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
