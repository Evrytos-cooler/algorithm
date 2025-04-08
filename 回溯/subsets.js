// 每一个nums视作一个节点，来构建遍历树
const subsets = nums => {
	nums.sort()
	const used = new Array(nums.length).fill(0)
	const result = []
	const temp = []
	const map = new Map()
	const traceBack = index => {
		// 收集结果
		if (index > nums.length) return
		if (!map.get(temp.join())) {
			map.set(temp.join(), 1)
			result.push(temp.slice())
		}
		// 处理当层逻辑（选/不选）
		temp.push(nums[index])
		used[index] = 1
		traceBack(index + 1)
		temp.pop()
		used[index] = 0

		traceBack(index + 1)
	}
	traceBack(0)
	return result
}
console.log(subsets([0]))

// 将完整的数组作为一个节点构建遍历树
const subsetsV2 = nums => {
	nums.sort()
	const temp = []
	const result = []
	const map = new Map()
	const traceBack = startIndex => {
		// 收集逻辑 & 退出逻辑
		if (startIndex > nums.length) return
		if (!map.get(temp.join())) {
			map.set(temp.join(), 1)
			result.push(temp.slice())
		}

		for (let i = startIndex; i < nums.length; i++) {
			temp.push(nums[i])
			traceBack(i + 1)
			temp.pop()
		}
	}
	traceBack(0)
	return result
}

console.log(subsetsV2([0, 1, 2, 3]))
