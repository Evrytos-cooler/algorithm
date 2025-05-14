// 输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
// 输出：[[1,5],[6,9]]

// 这题放在贪心可能不太准确，他只是个区间问题，说贪心可能有点歧义
// 按照 start 找第一个大的
// 如果没有第一个大的，则直接插入最后面
// 找到第一个大的，则开始判断合并区间
// -- -- -- --   --     -- -- ---
//  |     |         | |
// 先按照 start 的位置找到插入点，然后合并区间
var insert = function (intervals, newInterval) {
	if (!intervals.length > 0) return [newInterval]
	for (let i = 0; i <= intervals.length; i++) {
		if (i === intervals.length) {
			intervals.push(newInterval)
			break
		}
		const target = newInterval[0]
		if (target < intervals[i][0]) {
			intervals.splice(i, 0, newInterval)
			break
		}
	}
	const result = [intervals[0]]
	for (let i = 1; i < intervals.length; i++) {
		const tail = result[result.length - 1]
		const target = intervals[i]
		if (tail[1] >= target[0]) {
			tail[1] = Math.max(intervals[i][1], tail[1])
		} else result.push(intervals[i])
	}
	return result
}
// console.log(
// 	JSON.stringify(
// 		insert(
// 			[
// 				[1, 3],
// 				[6, 9],
// 			],
// 			[4, 5]
// 		)
// 	)
// )
// console.log(
// 	JSON.stringify(
// 		insert(
// 			[
// 				[1, 2],
// 				[3, 5],
// 				[6, 7],
// 				[8, 10],
// 				[12, 16],
// 			],
// 			[4, 8]
// 		)
// 	)
// )
console.log(JSON.stringify(insert([[1, 5]], [2, 7])))
