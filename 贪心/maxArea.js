// 暴力方法就是直接遍历所有情况
// 用贪心的思路优化剪枝，对于必然变小的情况我们去避免
// 宽度换高度，同时一样的宽度尽量换更多的高度
// 所有 (left, right-1)、(left, right-2)、...、(left, left+1) 的组合的面积都不会比 (left, right) 更大，因为：
// 高度 ≤ height[left]（因为 height[left] 是较矮的）。
// 宽度 < (right - left)
const maxArea = function (height) {
	let left = 0
	let right = height.length - 1
	let area = Math.min(height[left], height[right]) * (right - left)

	while (left < right) {
		// 由于短板效应，我们必须移动短的那个板，才有可能变得更大
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
