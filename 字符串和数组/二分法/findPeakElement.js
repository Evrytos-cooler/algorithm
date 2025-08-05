// 题目说要 logn 的时间复杂度，所以可能是 二分法
// 如果左右边界值有大于中间的，则大于的区间内一定有一个极大值？？ 还真不是， 左右要严格小于当前值
// 暴力方法先实现一个
var findPeakElement = _arr => {
	if (_arr.length <= 1) return -1
	if (_arr.length <= 2) {
		return _arr[0] > _arr[1] ? 0 : 1
	}
	const arr = [-Infinity, ..._arr, -Infinity]
	// 记得索引结果减去一

	let p0 = 0
	let p1 = 1
	let p2 = 2
	while (p2 <= arr.length) {
		if (arr[p1] > arr[p2] && arr[p1] > arr[p0]) return p1 - 1
		p0++
		p1++
		p2++
	}
	return -1
}
console.log(findPeakElement([1, 8, 3, 4, 5, 6, 6, 6, 6, 6]))

// 二分法中，如果不是每次都移动，可能会有不收敛的情况，所以我们想办法用 mid + 1
var findPeakElement = function (nums) {
	let left = 0
	let right = nums.length - 1

	// 当left < right时继续搜索
	while (left < right) {
		const mid = Math.floor((left + right) / 2)

		// 如果中间元素小于右侧元素，说明峰值在右侧
		if (nums[mid] < nums[mid + 1]) {
			left = mid + 1 // 移动到mid右侧，缩小范围
		} else {
			// 否则峰值在左侧（包括mid本身）
			right = mid // 不移动到mid左侧，因为mid可能就是峰值
		}
	}

	// 当left === right时，找到峰值
	return left
}
console.log(findPeakElement([1, 8, 3, 4, 5, 6, 6, 6, 6, 6]))
