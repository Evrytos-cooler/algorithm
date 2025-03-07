// 最短连续无序子序列，也就是找到一个最短的连续子序列，使得排序后整个序列是有序的
// 我们将数组氛围左中右两部分，左和右都是有序的，中间就是我们要找的部分（左和右长度可能为0）
// 对于中间的序列而言，左边界一定是大于左边的最大值的，右边界一定是小于右边的最小值的
// 也即：左边界就是从后向前遍历，最后一个比当前的最小值大的元素（如果小于最小值了，可能就触及左边的部分了，更新min，并继续遍历）
// 右边界就是从前向后遍历，最后一个比最大值小的元素
const findUnsortedSubarray = arr => {
	let max = -Infinity
	let min = Infinity
	let left = 0
	let right = 0
	// 找右边界
	for (let i = 0; i < arr.length; i++) {
		max = Math.max(max, arr[i])
		if (arr[i] < max) right = i
	}
	// 找左边界
	for (let i = arr.length - 1; i >= 0; i--) {
		min = Math.min(min, arr[i])
		if (arr[i] > min) left = i
	}
	if (left === right) return 0
	return right - left + 1
}
console.log(findUnsortedSubarray([2, 1]))
