// 最长连续序列，这里的连续是指值连续，而位置不一定要连续
const longestConsecutive = nums => {
	const set = new Set(nums)
	let result = 0
	for (let num of set) {
		// 以target为头的最长连续序列
		let temp = 0
		let target = num
		if (!set.has(target - 1)) {
			while (set.has(target++)) {
				temp++
			}
			result = Math.max(result, temp)
		}
	}
	return result
}
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
