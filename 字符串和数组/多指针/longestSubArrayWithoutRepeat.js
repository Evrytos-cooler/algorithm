const lengthOfLongestSubstring = s => {
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
	count
}

lengthOfLongestSubstring('pwwkew')
