// 其核心思想就是通过 prefix 公共前缀表，或者叫做next数组来回到上一个匹配的内容
// 1. 利用 partner 计算前缀表
// 2. 利用前缀表判断str是否有 partner
// 其实在计算前缀表的时候就用到了其本身
// 前缀不能包含最后一个，后缀不能包含第一个
// 返回开始的下表，没有返回-1
const KMP = (str, partner) => {
	if (partner.length === 0) return 0

	const getPrefix = partner => {
		const prefix = [0]
		let i = 0 // 前缀的末尾 --> 这个就是 prefix 要收集的值
		let j = 1 // //后缀的末尾 --> 这个也表达当前串的长度
		// 遍历 partner 字符串
		for (j; j < partner.length; j++) {
			while (partner[i] !== partner[j] && i > 0) {
				i = partner[i - 1]
			}
			if (partner[i] === partner[j]) {
				prefix[j] = ++i // 前缀表保存的是长度，所以相对于下标要+1
			} else {
				prefix[j] = 0 // 这里也可以初始化为 0
			}
		}
		return prefix
	}

	const prefix = getPrefix(partner)
	let i = 0,
		j = 0
	while (i < str.length) {
		while (str[i] !== partner[j] && j > 0) {
			j = prefix[j - 1]
		}
		if (str[i] === partner[j]) {
			i++
			j++
			if (j === partner.length) {
				return i - j
			}
		} else {
			i++ // 这里如果没有找到相同的，而且j不能回退了，需要i++，不然会卡死
		}
	}
	return -1
}
console.log(KMP('ABABABC', 'ABAB')) // 返回0（正确匹配）
console.log(KMP('ABCDABCE', 'ABCE')) // 返回4（修复后的前缀表正确生成）
console.log(KMP('BBC', 'ABC')) // 返回-1（修复主循环卡死问题）
