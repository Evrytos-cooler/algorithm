// 无重叠区间，其实和射气球，合并区间是同一类题目
// 这题和射气球一样，重叠之后end的更新取最小值，因为题意中说删除重叠的，所以我们删掉覆盖范围大，能更少的删除区间
// 只是统计删除区间处有点不同
const eraseOverlapIntervals = function (intervals) {
	const arr = intervals.sort((a, b) => a[0] - b[0])
	let count = 0
	for (let i = 0; i < arr.length; i++) {
		let end = arr[i][1]
		// 这里相邻不算重叠
		while (i < arr.length - 1 && arr[i + 1][0] < end) {
			end = Math.min(end, arr[i + 1][1])
			i++
			count++
		}
	}
	return count
}
console.log(
	eraseOverlapIntervals([
		[1, 2],
		[1, 2],
		[1, 2],
	])
)

console.log(
	eraseOverlapIntervals([
		[1, 2],
		[2, 3],
	])
)
