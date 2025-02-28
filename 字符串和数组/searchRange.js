const searchRange = (nums, target) => {
	let start = -1,
		end = -1
	let left = 0,
		right = nums.length - 1
	// 找左边界
	while (left <= right) {
		const mid = Math.floor((left + right) / 2)
		if (nums[mid] < target) {
			// mid在range外 在左
			left = mid + 1
		}
		if (nums[mid] > target) {
			// mid 在range外，在右
			right = mid - 1
		}
		if (nums[mid] === target) {
			// mid在range上，可能是边界，但是继续向左边探
			start = mid
			right = mid - 1
		}
	}
	// 找右边界
	;(left = 0), (right = nums.length - 1)
	while (left <= right) {
		const mid = Math.floor((left + right) / 2)
		if (nums[mid] < target) {
			// mid在range外 在左
			left = mid + 1
		}
		if (nums[mid] > target) {
			// mid 在range外，在右
			right = mid - 1
		}
		if (nums[mid] === target) {
			// mid在range上，可能是边界，但是继续向右边探
			end = mid
			left = mid + 1
		}
	}

	return [start, end]
}
console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
