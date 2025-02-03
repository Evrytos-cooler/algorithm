const dailyTemperatures = temperatures => {
	const stack = [] //保存的是下标
	const res = []
	stack.push(0)
	for (let i = 1; i < temperatures.length - 1; i++) {
		const top = stack[stack.length - 1]
		if (temperatures[i] <= temperatures[top]) {
			stack.push(i)
		} else {
			while (
				stack.length &&
				temperatures[i] > temperatures[stack[stack.length - 1]]
			) {
				const target = stack.pop()
				res[target] = i - target
			}
			stack.push(i)
		}
	}
	return res
}
console.log(dailyTemperatures([73, 74, 75, 71, 71, 72, 76, 73]))
