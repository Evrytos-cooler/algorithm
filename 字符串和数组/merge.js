const merge = function (intervals) {
	intervals.sort((a, b) => (a[0] > b[0] ? 1 : -1))
	let result = []
	let end = intervals[0][0]
	for (let [p1, p2] of intervals) {
		// 合并区间
		if (p1 <= end) {
			const node = result.pop() ?? [p1, p2]
			result.push([Math.min(node[0], p1), Math.max(node[1], p2)])
			end = Math.max(node[1], p2)
		} else {
			result.push([p1, p2])
			end = p2
		}
	}

	return result
}
merge([
	[2, 3],
	[4, 5],
	[6, 7],
	[8, 9],
	[1, 10],
])
