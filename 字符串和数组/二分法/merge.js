// 额外返回
var merge = function (nums1, m, nums2, n) {
	let i = 0
	let j = 0
	const result = []
	while (i < m && j < n) {
		if (nums1[i] < nums2[j]) {
			result.push(nums1[i])
			i++
		} else {
			result.push(nums2[j])
			j++
		}
	}
	while (i < m) {
		result.push(nums1[i++])
	}
	while (j < n) {
		result.push(nums2[j++])
	}
	return result
}
console.log(merge([1], 1, [2], 1))
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))

// 存储在  nums1
const mergev2 = function (nums1, m, nums2, n) {
	if (m === 0) {
		for (let i = 0; i < nums1.length; i++) {
			nums1[i] = nums2[i]
		}
	}
	let tail = m + n - 1
	let p1 = m - 1
	let p2 = n - 1
	while (p1 >= 0 && p2 >= 0) {
		if (nums1[p1] < nums2[p2]) {
			nums1[tail--] = nums2[p2--]
		} else {
			nums1[tail--] = nums1[p1--]
		}
	}
	while (p2 >= 0) {
		nums1[tail--] = nums2[p2--]
	}
	return nums1
}

console.log(mergev2([2, 1], 1, [1], 1))
