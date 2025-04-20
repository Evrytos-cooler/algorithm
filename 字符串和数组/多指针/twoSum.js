// 两数之和，不过和哈希做法不同的是，这里的nums是有序的，而且对空间复杂度要求 O(1)
// 题目要求下标从1开始
var twoSum = function (numbers, target) {
	let i = 0
	let j = numbers.length - 1
	while (i < j) {
		const sum = numbers[i] + numbers[j]
		if (sum === target) {
			return [i + 1, j + 1]
		} else if (sum > target) j--
		else i++
	}
}
