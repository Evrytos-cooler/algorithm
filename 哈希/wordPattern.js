var wordPattern = function (pattern, s) {
	const map = new Map()
	const arr = s.split(' ')
	if (pattern.length !== arr.length) return false
	for (let i = 0; i < pattern.length; i++) {
		if (map.has(pattern[i]) && map.get(pattern[i]) !== arr[i]) {
			return false
		} else if (!map.has(pattern[i]) && [...map.values()].includes(arr[i]))
			return false
		map.set(pattern[i], arr[i])
	}
	return true
}
console.log(wordPattern('abba', 'dog cat cat dog'))
