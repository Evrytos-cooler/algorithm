// 合并区间
const merge = s => {
	if (s.length < 2) return s
	// 1. 排序
	const arr = s.sort((a, b) => a[0] - b[0])
	// 2. 遍历区间，修改结果
	const result = [arr[0]]
	for (let i = 1; i < arr.length; i++) {
		let end = result[result.length - 1][1]
		if (arr[i][0] <= end) {
			// 核心操作
			result[result.length - 1][1] = Math.max(end, arr[i][1])
		} else {
			result.push(arr[i])
		}
	}
	return result
}

// 用戳气球的思路去做
const mergeV2 = s => {
	if (s.length < 2) return s
	const arr = s.slice().sort((a, b) => a[0] - b[0])
	const result = []
	for (let i = 0; i < arr.length; i++) {
		let start = arr[i][0]
		let end = arr[i][1]
		while (i < arr.length - 1 && arr[i + 1][0] <= end) {
			end = Math.max(end, arr[i + 1][1])
			i++
		}
		result.push([start, end])
	}
	return result
}
console.log(
	JSON.stringify(
		merge([
			[1, 3],
			[2, 4],
		])
	)
)
console.log(
	JSON.stringify(
		mergeV2([
			[1, 3],
			[2, 4],
		])
	)
)
