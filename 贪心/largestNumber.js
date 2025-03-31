// 使用贪心策略
// 贪在： 每一次排序都吧组合起来更大的内容返回： a,b 的排序方式是比较 ab 大还是 ba 大
const largestNumber = nums => {
	nums.sort((a, b) => {
		// 当 ab 比 ba 大的时候不需要调换位置
		return Number(String(b) + String(a)) - Number(String(a) + String(b))
	})
	const result = nums.join('').split('')
	let i = 0
	for (i; i < result.length; i++) {
		if (result[i] !== '0') return result.slice(i).join('')
	}
	return result.slice(i - 1).join('')
}
console.log(largestNumber([0, 0]))
