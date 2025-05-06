// 暴力解法
// 需要确认换的是哪两个
// 先确定最大的数的位置
// 如果最大的数不在开头，就换到开头
// 如果最大的数在开头，就对除了开头的执行上诉操作
const maximumSwap = num => {
	const arr = String(num).split('')
	const traversal = startIndex => {
		if (startIndex === arr.length - 1) return [0, 0]
		let max = startIndex
		for (let i = startIndex; i < arr.length; i++) {
			// 这里要挑最后一个max
			max = arr[i] >= arr[max] ? i : max
		}
		// 注意 max 不一定是 0
		if (arr[max] === arr[startIndex]) {
			return traversal(startIndex + 1)
		} else {
			return [startIndex, max]
		}
	}
	const [left, right] = traversal(0)
	;[arr[left], arr[right]] = [arr[right], arr[left]]
	return Number(arr.join(''))
}

console.log(maximumSwap(98368))

// 贪心思路，借鉴买卖股票的贪心做法
// 买卖股票： 找一个最低的入手，在次基础上计算当前的最大收益（ 从前向后遍历 ）
// 最大交换： 找一个最靠后的最大的数字，找一个比他小的在最前面的数字（ 从后向前遍历 ）
// 难点是处理边界情况： 如果找到了靠前的更大的，但是没有找到此更大的前面的更小的，则不能更新替换内容
const maximumSwapV2 = num => {
	const arr = String(num).split('')
	let max = arr.length - 1
	let small = -1
	let big = -1
	for (let i = arr.length - 1; i >= 0; i--) {
		// 找最大最后的, 注意这个是在后面的，所以不能到0
		if (arr[max] < arr[i]) max = i
		// 在此基础上找小的最前的
		if (arr[i] < arr[max]) {
			small = i
			big = max
		}
	}

	;[arr[big], arr[small]] = [arr[small], arr[big]]
	return Number(arr.join(''))
}

console.log(maximumSwapV2(9973))
