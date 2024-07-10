//实现diff算法中同层多个节点的比较算法 实现第二个循环，也即有节点位置变化的情况

const diff = (before, after) => {
	const result = before.slice()
	let maxIndex = 0
	for (let i = 0; i < before.length; i++) {
		const oldIndex = before.findIndex(value => value === after[i])
		maxIndex = Math.max(maxIndex, oldIndex)
		if (maxIndex > oldIndex) {
			;[result[maxIndex], result[oldIndex]] = [result[oldIndex], result[maxIndex]]
		}
	}
	return result
}

console.log(diff([1, 2, 3, 4], [1, 4, 2, 3]))
