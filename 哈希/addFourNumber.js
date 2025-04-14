// 四数相加 （ 不是四数之和 ）
// 给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0。
// 为了使问题简单化，所有的 A, B, C, D 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -228 到 228 - 1 之间，最终结果不会超过 231 - 1 。
// 利用哈希表，可以将两数只和从 O(N^2) 降低到 O(N)。同理，可以将四数之和从 O(N^4) 降低到 O(N^2)。
const fourSumCount = (nums1, nums2, nums3, nums4) => {
    if(nums1.length === 0) return 0
	const map = new Map()
	let count = 0
	for (let i of nums1) {
		for (let j of nums2) {
			map.set(i + j, (map.get(i + j) || 0) + 1)
		}
	}

	for (let i of nums3) {
		for (let j of nums4) {
			if (map.has(-(i + j))) {
				count += map.get(-(i + j))
			}
		}
	}
	return count
}
const nums1 = [1, 2]
const nums2 = [-2, -1]
const nums3 = [-1, 2]
const nums4 = [0, 2]

console.log(fourSumCount(nums1, nums2, nums3, nums4))
