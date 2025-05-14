// 暴力方法就是直接遍历所有情况
// 用贪心的思路优化剪枝，对于必然变小的情况我们去避免
// 宽度换高度，同时一样的宽度尽量换更多的高度
const maxArea = function (height) {
	let left = 0
	let right = height.length - 1
	let area = Math.min(height[left], height[right]) * (right - left)

	while (left < right) {
		if (height[left] < height[right]) {
			left++
		} else {
			right--
		}
		area = Math.max(area, Math.min(height[left], height[right]) * (right - left))
	}
	return area
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))
