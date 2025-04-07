// 取巧的做法
// 如果一个字符串是重复组成的，比如 abcabcabc，那么他就一定能够分为前后两个一样的部分组成，比如 abcabc 和 abcabc
// 所以我们将原本的字符串拼接起来，中间一定会再次出现一个原字符串，比如 abcabcabcabcabc
const repeatedSubstringPattern = function (s) {
	const str = s + s
	// 要排除本身，所以从 1 开始，到 str.length - 1 结束
	return str.slice(1, str.length - 1).includes(s)
}

// 实际上，上面的做法可能也是基于KMP的，因为我们使用了 includes 方法，而 includes 方法底层也是基于 KMP 算法或者其变种的 O(M + N)
// KMP 做法: 一句话就是计算最长的公共前后缀的长度，剩下的内容就是重复串，如果重复串的长度能被原串整除，那么就说明原串是由重复串组成的

// KMP 实现
const repeatedSubstringPatternV2 = function (s) {
	if (s.length === 0) return false
	// 构建前缀表
	const getPrefix = partner => {
		const prefix = new Array(partner.length).fill(0)
		let i = 0 // 前缀的末尾 --> 这个就是 prefix 要收集的值
		let j = 1 // //后缀的末尾 --> 这个也表达当前串的长度
		// 遍历 partner 字符串
		for (j; j < partner.length; j++) {
			while (partner[i] !== partner[j] && i > 0) {
				i = prefix[i - 1]
			}
			if (partner[i] === partner[j]) {
				prefix[j] = ++i // 前缀表保存的是长度，所以相对于下标要+1
			} else {
				prefix[j] = 0
			}
		}
		return prefix
	}
	const next = getPrefix(s)

	// 判断重复条件
	const len = s.length
	return next[len - 1] !== 0 && len % (len - next[len - 1]) === 0
}
console.log(repeatedSubstringPatternV2('abaababaab'))
