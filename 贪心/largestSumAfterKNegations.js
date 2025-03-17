// 按绝对值排序
// 从大到小的将负数转化
// 如果还有，反复转化最小的正数
const largestSumAfterKNegations = (nums, k) => {
	let arr = nums.sort((a, b) => Math.abs(b) - Math.abs(a))
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0 && k > 0) {
			arr[i] = -arr[i]
			k--
		}
	}
	if (k > 0) {
		if (k % 2 === 1) {
			arr[arr.length - 1] = -arr[arr.length - 1]
		}
	}
	return nums.reduce((prev, cur) => prev + cur, 0)
}
console.log(largestSumAfterKNegations([4, 2, 3], 1))
