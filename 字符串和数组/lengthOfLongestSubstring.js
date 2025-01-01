//最长字串，不是子序列，他是连续的，所以我们能够使用滑动窗口
//维护一个map，保存当前窗口中的元素，出现重复的时候则清空map,head跳到重复元素的位置
//维护一个max，保存当前最大的长度
const lengthOfLongestSubstring = string => {
	if (string.length <= 1) return string.length
	let head = 0
	let tail = 0
	let max = 1
	let map = new Map()
	while (tail < string.length) {
		if (!map.has(string[tail])) {
			map.set(string[tail], tail)
			max = Math.max(max, tail - head + 1)
			tail++
		} else {
			head = Math.min(tail, map.get(string[tail]) + 1)
			tail = head
			map = new Map()
		}
	}
	return max
}

const v2 = string => {
	//特殊
	if (string.length <= 1) return string.length
	let max = 1
	let map = new Map()
	let head = 0
	let tail = 0
	while (tail < string.length) {
		//移动窗口tail
		if (!map.has(string[tail])) {
			map.set(string[tail], tail)
			max = Math.max(max, tail - head + 1)
			tail++
		}
		//重置head维护tail和map
		else {
			head = Math.min(tail, map.get(string[tail]) + 1)
			tail = head
			map = new Map()
		}
	}
	return max
}

console.log(v2('dvdf')) // => 3
