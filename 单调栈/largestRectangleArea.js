const largestRectangleArea = _ => {
	if (!_.length) return 0
	const arr = [0, ..._, 0]
	const stack = [0]
	let max = 0
	for (let i = 1; i < arr.length; i++) {
		// 栈底到栈顶是单调增的，找到左右都小的时候就是能够计算的时候
		if (arr[i] >= arr[stack[stack.length - 1]]) {
			stack.push(i)
		} else {
			// 计算结果
			while (arr[i] < arr[stack[stack.length - 1]]) {
				const popOne = stack.pop()
				const left = stack[stack.length - 1]
				const height = arr[popOne]
				max = Math.max(max, (i - left - 1) * height)
			}
			stack.push(i)
		}
	}
	return max
}
// console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]))
export default largestRectangleArea
