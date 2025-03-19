// 将一个数字修改为不比他大的第一个递增序列
// 思考过程？ 如果一个数字本来就是递增的，那么他不需要修改
// 所以我们需要修改的是数字中递减的部分，比如 312  31 递减 ，12 递增
// 对于递减的我们需要将当前第一位取 n-1 其他的取最大，（因为第一位减小的整体一定更小）
// 比如 31 -> 29, 如果我们从前向后遍历，则会破坏前面的结果，而且我们应该尽量修改小权重的数字，这样才能令最大
const monotoneIncreasingDigits = n => {
	const arr = String(n)
		.split('')
		.map(i => Number(i))
	let flag = Infinity
	for (let i = arr.length - 2; i >= 0; i--) {
		if (arr[i] > arr[i + 1]) {
			arr[i] = arr[i] - 1
			// 后面的都是 9
			flag = i
		}
	}
	for (let i = flag + 1; i < arr.length; i++) {
		arr[i] = 9
	}
	n = Number(arr.join(''))
	return n
}

console.log(monotoneIncreasingDigits(10))
console.log(monotoneIncreasingDigits(312))
