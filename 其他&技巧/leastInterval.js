// 基于桶的思路：能够获取到最终的排列顺序
// 对数组进行分类和排序(从多到少)
// 将同种任务的最小间隔作为桶的初始高度
// 数量最多的任务作为桶的数量
// 依次遍历剩下的任务，按序放到每一个桶中（每一个桶一个）
// 如果一个桶已经满了，就直接添加到后面
// 除了最后一个桶，没有满的桶则要补充idle直到桶高度为n

const leastInterval = (arr, n) => {
	// 处理arr
	const map = new Map()
	for (let num of arr) {
		if (map.has(num)) {
			map.set(num, [...map.get(num), num])
		} else {
			map.set(num, [num])
		}
	}

	const job = Array.from(map.values())
	job.sort((a, b) => b.length - a.length)
	const result = new Array(job[0].length).fill().map(() => [job[0].pop()])

	// 遍历任务
	// 尽量放满桶 > 尽量放多的桶
	let index = 0
	let fullIndex = -1
	// 遍历任务
	for (let i = 1; i < job.length; i++) {
		while (job[i].length) {
			result[index].push(job[i].pop())
			// 记录已经被放满的最后一个桶
			if (result[index].length > n) fullIndex = Math.max(index, fullIndex)
			index = (index + 1) % result.length
		}
		// 都没有满，就从头开始排
		if (fullIndex === -1) index = 0
		//如果已经有几个满了，就从没有满的开始放
		else {
			index = (fullIndex + 1) % result.length
		}
	}

	let ans = 0
	for (let i = 0; i < result.length; i++) {
		if (i === result.length - 1) {
			ans += result[i].length
		} else {
			ans += Math.max(result[i].length, n + 1)
		}
	}
	return ans
}

leastInterval(['B', 'C', 'D', 'A', 'A', 'A', 'A', 'G'], 1)

// 由于我们不需要知道具体的排列顺序，我们只需要考虑放满桶和超出桶的情况就行
const leastIntervalV2 = (arr, n) => {
	const map = new Map()
	for (let char of arr) {
		if (map.has(char)) map.set(char, map.get(char) + 1)
		else map.set(char, 1)
	}

	let maxLength = 0
	let maxCount = 1
	for (let values of Array.from(map.values())) {
		if (values > maxLength) {
			maxLength = values
			maxCount = 1
		} else if (values == maxLength) {
			maxCount++
		}
	}
	// 只有放满桶和超出桶两种情况
	return Math.max((n + 1) * (maxLength - 1) + maxCount, arr.length)
}

console.log(leastIntervalV2(['A', 'C', 'A', 'B', 'D', 'B'], 1))
