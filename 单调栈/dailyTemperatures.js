// const dailyTemperatures = temperatures => {
// 	const stack = [] //保存的是下标
// 	const res = []
// 	stack.push(0)
// 	for (let i = 1; i < temperatures.length - 1; i++) {
// 		const top = stack[stack.length - 1]
// 		if (temperatures[i] <= temperatures[top]) {
// 			stack.push(i)
// 		} else {
// 			while (
// 				stack.length &&
// 				temperatures[i] > temperatures[stack[stack.length - 1]]
// 			) {
// 				const target = stack.pop()
// 				res[target] = i - target
// 			}
// 			stack.push(i)
// 		}
// 	}
// 	return res
// }
const dailyTemperatures = temperatures => {
	if (temperatures.length < 2) return []
	const stack = [0]
	const result = new Array(temperatures.length).fill(0)
	for (let i = 1; i < temperatures.length; i++) {
		while (temperatures[stack[stack.length - 1]] < temperatures[i]) {
			const index = stack.pop()
			result[index] = i - index
		}
		stack.push(i)
	}
	return result
}
console.log(dailyTemperatures([73, 74, 75, 71, 71, 72, 76, 73]))
