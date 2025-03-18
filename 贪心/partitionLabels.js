// 给字符串划分区间，要求区间内的字母只在区间内出现
// 对于每一个字母都有一个最开始到最后一个的区间，得到这个其实就是一个区间合并问题
// 最后返回的是每一个区间的长度

const partitionLabels = s => {
	// 构建区间,区间的开始可以在遍历的地方确定
	const endMap = new Map()
	const result = []
	for (let i = 0; i < s.length; i++) {
		endMap.set(s[i], i)
	}

	let start = 0
	let end = 0
	for (let i = 0; i < s.length; i++) {
		end = Math.max(endMap.get(s[i]), end)
		if (end === i) {
			result.push(end - start + 1)
			start = i + 1
		}
	}
	return result
}
console.log(partitionLabels('caedcbdedda'))
