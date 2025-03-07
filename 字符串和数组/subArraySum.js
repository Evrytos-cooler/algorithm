// 这题最直观的做法是回溯，但是实际上，回溯可以解决无序的（子序列而非子数组）问题
// 所以这里用回溯有点小题大做了
// 这是一个前缀和问题，两数之和等问题的做法
// 这个算法的时间复杂度是O(n)会超时
const subArraySum = (arr, k) => {
	// 计算前缀和 前缀和是比arr要长一个的
	const sumArray = arr.reduce(
		(prev, cur) => [...prev, prev[prev.length - 1] + cur],
		[0]
	)
	let count = 0
	for (let i = 0; i < sumArray.length; i++) {
		for (let j = i + 1; j < sumArray.length; j++) {
			if (sumArray[j] - sumArray[i] === k) count++
		}
	}
	return count
}
console.log(subArraySum([1, 1, 1], 2))

// 我们其实不需要知道下标是什么，我们可以用map保存前缀和
// 找当前元素前面的前缀和做计算，由 per1 - per0 = k , 那么元素就是per0->per1的下标的元素，一定是连续的
// 在两数只和中，我们保存的是各个元素的值，而不是前缀和，没有连续的计算过程，所以得到的两个结果是离散的
// 我们只需要用到前面的前缀和，所以我们可以边算前缀和边计算结果
const subArraySumV2 = (arr, k) => {
	// map 的 key 是前缀和，map(0) = 1
	const map = new Map()
	let count = 0
	map.set(0, 1) // 没有元素的时候，前缀和为0，有一种
	let perfixSum = 0
	for (let num of arr) {
		perfixSum += num
		if (map.has(perfixSum - k)) {
			count += map.get(perfixSum - k)
		}
		map.set(perfixSum, (map.get(perfixSum) || 0) + 1)
	}
	return count
}

console.log(subArraySumV2([1, -1, 0], 2))
