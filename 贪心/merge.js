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
			result[result.length - 1][1] = Math.max(end, arr[i][1])
		} else {
			result.push(arr[i])
		}
	}
	return result
}
console.log(
	merge([
		[1, 3],
		[2, 4],
	])
)
