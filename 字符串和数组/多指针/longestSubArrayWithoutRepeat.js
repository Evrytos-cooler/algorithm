var lengthOfLongestSubstring = s => {
	if (s.length == 1) return 1
	let start = 0
	let end = 0
	let map = new Map()
	let count = 0
	while (end < s.length) {
		while (map.has(s[end]) && end < s.length) {
			map.delete(s[start])
			start++
		}
		while (!map.has(s[end]) && end < s.length) {
			map.set(s[end], 1)
			end++
			count = Math.max(count, end - start)
		}
	}
	return count
}

console.log(lengthOfLongestSubstring('abcdefaghjk'))

// 也是双指针思路，但是我用 map 直接保存他的下标，然后跳过一些循环
var lengthOfLongestSubstring = s => {
	if (s.length < 2) return s.length
	let start = 0
	let end = 1
	// 左闭右开
	let max = 1
	const set = new Set()
	set.add(s[0])
	while (end < s.length) {
		while (end < s.length && !set.has(s[end])) {
			set.add(s[end])
			end++
		}
		max = Math.max(max, end - start)
		while (start < end && start < s.length) {
			set.delete(s[start])
			if (s[start++] === s[end]) break
		}
	}
	return max
}

console.log(lengthOfLongestSubstring('abcdefgabc'))
