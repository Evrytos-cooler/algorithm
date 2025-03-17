// 加油站 给一个消费数组和一个加油数组，问能否走完一圈（环）
// 每一个加油站会有一个净收益，累加净收益，如果收益小于零说明只能从 i + 1 继续
// 为什么呢 ？将 0 - i 分为两个部分，其中假设有j，从j出发到此净收益不是负数
// 则有 0 - j - 1 , j - i ，这两个区间相加小于零，而 j - i 区间大于等于零，所以 0 - j-1 区间小于零，矛盾
const canCompleteCircuit = (gas, cost) => {
	const profix = gas.map((value, index) => {
		return value - cost[index]
	})

	let sum = 0
	let temp = 0
	let start = 0
	for (let i = 0; i < profix.length; i++) {
		temp += profix[i]
		sum += profix[i]
		if (temp < 0) {
			temp = 0
			start = i + 1
		}
	}
	if (sum < 0) return -1
	return start
}

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]))
