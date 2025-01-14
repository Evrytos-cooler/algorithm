const anagram = (string1, string2) => {
	const map = new Map()
	for (let i of string1) {
		map.set(i, (map.get(i) || 0) + 1)
	}
	for (let i of string2) {
		if (!(map.get(i) || 0 > 0)) return false
		map.set(i, map.get(i) - 1)
	}
	return true
}
const result = anagram('strging', 'sgrtingg')
