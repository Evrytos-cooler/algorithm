// https://leetcode.cn/problems/queue-reconstruction-by-height/description/
// 这题和分发糖果一样，需要同时满足两个条件，这种题需要选择一个条件先满足
// 通常情况下先对一个条件进行调整，剩下一个条件的调整不会影响原先已经调整好的条件
// 按照身高排序： 然后再调整前面前面比他高的个数（从后向前移动）。不可能向后移动，否则题目有问题
// 从后向前移动的时候，由于当前元素小，对于原本在前面的元素的（比自己高的元素的个数）没有影响
const reconstructQueue = people => {
	// 对身高从高到低排序
	people.sort((a, b) => {
		return a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]
	})
	const result = []

	// 对于不满足 k 条件的元素进行移动
	// 由于是向前移动，所以不影响后面的遍历过程（数组的长度也没有发生改变）
	for (let i = 0; i < people.length; i++) {
		// 将它插入到下标为people[i][1]的位置
		result.splice(people[i][1], 0, people[i])
	}
	return result
}

console.log(
	reconstructQueue([
		[7, 0],
		[4, 4],
		[7, 1],
		[5, 0],
		[6, 1],
		[5, 2],
	])
)

// 另一种理解方式，我们将数组按照 arr[1] 进行排序，你可以发现，他们的顺序正好是从大到小，以 arr[1] 插入数组后的结果
// 因为从大到小插入，比如 [7,0],[6,0] ,由于 6 比 7 小，所以插入 6 在 7 前面不影响 7 本身的属性，更慢调用 splice 的（同一个 index）会在更前面
const reconstructQueueV2 = people => {
	people.sort((a, b) => {
		return a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]
	})

	// 由于按身高插入
	const result = []
	for (let i = 0; i < people.length; i++) {
		result.splice(people[i][1], 0, people[i])
	}
	return result
}
