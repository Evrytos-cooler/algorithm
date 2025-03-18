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
