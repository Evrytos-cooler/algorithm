// 其实就是去找重叠的区间，我们之需要记录弓箭数，不需要真的去模拟射爆气球的过程
// 遍历有序的二维数组（按照开始升序）。

const findMinArrowShots = function (points) {
	let count = 0
	if (points.length < 2) return points.length
	const arr = points.sort((a, b) => a[0] - b[0])

	// 遍历每一个气球,但是每一轮是一个弓箭
	for (let i = 0; i < arr.length; i++) {
		let end = arr[i][1]
		// 尝试找能够连接起来的气球
		while (i < arr.length - 1 && arr[i + 1][0] <= end) {
			end = Math.min(end, arr[i + 1][1])
			i++
		}
		count++
	}
	return count
}
console.log(
	findMinArrowShots([
		[1, 2],
		[2, 3],
		[3, 4],
		[4, 5],
	])
)

// 按照区间的开始排序
// 合并区间的过程，其实是看当前区间的结尾和下一个区间的开始，哪个大
// 维护当前合并区间的最前的合并区的结尾
// 直到下一个区间的开头没有进入合并区 arr[i+1][0] > end
const findMinArrowShotsV2 = function (points) {
	let count = 0
	if (points.length < 2) return points.length
	// 递增排序
	points.sort((a, b) => a[0] - b[0])

	// 遍历每一个区间
	for (let i = 0; i < points.length; i++) {
		// 合并的逻辑
		let end = points[i][0]
		while (i < points.length - 1 && points[i + 1][0] <= end) {
			end = Math.min(end, points[i + 1][0])
			i++
		}
		// 合并完的内容可以一个箭头全射完
		count++
	}
	return count
}
