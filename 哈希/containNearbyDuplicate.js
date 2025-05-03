// abs( j - i ) <= k  切 nums[i] === nums[j]
// 哈希表保存下标（只选最后的，采用贪心策略）
const containsNearbyDuplicate = function (nums, k) {
	const map = new Map()
	for (let i = 0; i < nums.length; i++) {
		if (map.has(nums[i]) && Math.abs(map.get(nums[i]) - i) <= k) return true
		map.set(nums[i], i)
	}
	return false
}
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))
