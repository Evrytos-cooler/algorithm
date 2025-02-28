// 哈希法略过时间复杂度 O(n) 空间复杂度 O(n)

// 排序法 : O(nlogn) O(n)
const majorityElement = function (nums) {
	const arr = nums.slice().sort()
	return arr[Math.floor(arr.length / 2)]
}
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))

// Boyer-Moore 投票算法
// 原理：众数计为1，其他计为-1，sum > 0
const majorityElementV2 = function (nums) {
	let count = 0
	let majorityElement = null
	for (let i = 0; i < nums.length; i++) {
		if (count === 0) majorityElement = nums[i]
		if (nums[i] === majorityElement) count++
		else {
			count--
		}
	}
	return majorityElement
}

console.log(majorityElementV2([2, 2, 1, 1, 1, 2, 2]))
