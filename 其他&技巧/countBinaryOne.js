// 一的数量，也叫做汉明重量
// 方法一， 利用 & 1 和 >> 1 不断的计算最右边的一，直到整个n变成 0
// 时间复杂度：需要遍历 n 的二进制位，因此时间复杂度为 O(log2 n)。
const hammingWeight = function (n) {
	let count = 0
	while (n) {
		if (n & 1) count++
		n = n >> 1
	}
	return count
}

// 方法二，巧用 n & (n - 1)
// n - 1 会将最后一个 1 变成 0 ，而其右边的0都会变成 1
// & n 的左右是将新增的1小区，n & (n-1) 的结果就是将n的最后一个1变成0
// 时间复杂度：需要便利n的所有 1 的位数，最坏的情况是O(log2n)全1 ，通常是 O(M),M是一的个数
const hammingWeightV2 = function (n) {
	let hammingWeight = 0
	while (n) {
		hammingWeight++
		n &= n - 1
	}
	return hammingWeight
}
console.log(hammingWeight(2147483645))
console.log(hammingWeightV2(2147483645))
