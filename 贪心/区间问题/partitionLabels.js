// 给字符串划分区间，要求区间内的字母只在区间内出现
// 对于每一个字母都有一个最开始到最后一个的区间，得到这个其实就是一个区间合并问题
// 最后返回的是每一个区间的长度

const partitionLabels = s => {
	// 构建区间,区间的开始可以在遍历的地方确定
	const endMap = new Map()
	const result = []
	// 收集了最后一次出现的位置
	for (let i = 0; i < s.length; i++) {
		endMap.set(s[i], i)
	}

	let start = 0
	let end = 0
	for (let i = 0; i < s.length; i++) {
		// 保持 end 是当前区间内所有字母最后出现的位置
		end = Math.max(endMap.get(s[i]), end)
		// 这个判断条件已经包括了区间内的所有元素
		if (end === i) {
			result.push(end - start + 1)
			start = i + 1
		}
	}
	return result
}

// 采用区间合并的方式
// 找到每一个字母的最前和最后出现的位置作为区间
// 区间排序并合并，然后返回每一个区间的长度
const partitionLabelsV2 = s => {
	const startMap = new Map()
	const endMap = new Map()
	let i = 0,
		j = s.length - 1
	while (i < s.length) {
		startMap.set(s[j], j) // 保存最前出现的位置
		endMap.set(s[i], i) // 保存最后出现的位置
		i++
		j--
	}

	const arr = []
	for (let [key, value] of startMap) {
		arr.push([value, endMap.get(key)])
	}

	const result = []
	arr.sort((a, b) => a[0] - b[0])
	for (let i = 0; i < arr.length; i++) {
		let start = arr[i][0]
		let end = arr[i][1]
		while (i < arr.length - 1 && arr[i + 1][0] <= end) {
			end = Math.max(end, arr[i + 1][1])
			i++
		}

		result.push(end - start + 1)
	}
	return result
}

console.log(partitionLabels('caedcbdedda'))
console.log(partitionLabelsV2('caedcbdedda'))
