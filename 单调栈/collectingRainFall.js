const collectingRainFall = arr => {
	if (arr.length < 3) return 0
	//单调栈
	const stack = []
	let railFall = 0
	for (let i = 0; i < arr.length; i++) {
		//否则开始计算雨水量
		while (stack.length !== 0 && arr[i] > arr[stack[stack.length - 1]]) {
			const bottom = arr[stack.pop()]
			if (stack.length === 0) break
			const right = i
			const left = stack[stack.length - 1]
			const waterLevel = Math.min(arr[right], arr[left])
			railFall += (waterLevel - bottom) * (right - left - 1)
		}
		stack.push(i)
	}
	return railFall
}
console.log(collectingRainFall([4, 2, 0, 3, 2, 5]))
